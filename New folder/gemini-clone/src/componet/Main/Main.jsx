import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main =()=>{

  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)


  return (
    <div className='main'>
      
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="user" />
        </div>
        <div className="main-container">

        <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can I help you</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="compass" />
          </div>

          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="bulb" />
          </div>

          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="message" />
          </div>

          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="code" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input  onChange={(e)=>setInput(e.target.value)} value={input}  type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="send" />
            </div>
          </div>
          <p className="bottom-info">Gemini may display</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
