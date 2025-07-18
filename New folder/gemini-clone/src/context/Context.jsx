import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] =useState("");
  const[recentPrompt, setRecentPrompt] = useState("");
  const[prevPrompt, setPrevPrompt]=useState([]);
  const [showResult, setShowResult]=useState(false);
  const[loading, setloading]=useState(false);
  const[resultData, setResultData]=useState("");



  const onSent = async (prompt) => {
    setResultData(" ")
    setloading(true);
    setShowResult(true)
    const response = await runChat(input)
    setResultData(response)
    setloading(false)
    setInput("")
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
