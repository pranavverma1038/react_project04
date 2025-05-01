import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useTheme } from '../ThemeContext'

const Sidebar = () => {
  const {isDarkTheme} = useTheme()
  const [isExtended, setExtended] = useState(false)
  const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)
  const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className={`sidebar ${isDarkTheme? 'dark' : 'light'}`}>
      <div className="top">
          <img 
          style={{width:30 , backgroundColor:'white'}}
          onClick={() =>
            setExtended(prev=>!prev)} className='menu' src='/menu.svg' alt="" />
          <div onClick={()=>newChat()}
          className="new-chat">
            <img style={{backgroundColor: isDarkTheme ? '#e6eaf1' : '#e6eaf1'}}
            className="plus-icon"
            src={assets.plus_icon} alt="" />
            {isExtended ? <p>New Chat</p> : null}
          </div>
          {isExtended ? <div className="recent">
            <p className="recent-file"
            style={{color: isDarkTheme ? 'white' : 'black'}}
            >Recent</p>
            {prevPrompts.map((item,index)=>{
               return(
                <div onClick = {()=>
                  loadPrompt(item)
                }className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p
                  style={{color: isDarkTheme ? 'white' : 'black'}}
                  >{item.slice(0,18)}...</p>
                </div>
               )
            })}
            
          </div> : null}
          
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src='/question.svg' alt=""/>
                {isExtended ? <p
                style={{color: isDarkTheme ? 'white' : 'black'}}
                >Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src='/clock.svg' alt=""/>
                {isExtended ? <p
                style={{color: isDarkTheme ? 'white' : 'black'}}
                >Activity</p> : null}
            </div>
            <div 
            className="bottom-item recent-entry">
                <img src="/setting.svg" alt=""/>
                {isExtended ? <p
                style={{color: isDarkTheme ? 'white' : 'black'}}
                >Setting</p> : null}
            </div>
        </div>
     
    </div>
  );
};

export default Sidebar;
