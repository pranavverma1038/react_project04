import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [isExtended, setExtended] = useState(false)
  const {onSent,prevPrompts,setRecentPrompt} = useContext(Context)
  const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
          <img onClick={() =>
            setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
          <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {isExtended ? <p>New Chat</p> : null}
          </div>
          {isExtended ? <div className="recent">
            <p className="recent-file">Recent</p>
            {prevPrompts.map((item,index)=>{
               return(
                <div onClick = {()=>
                  loadPrompt(item)
                }className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}...</p>
                </div>
               )
            })}
            
          </div> : null}
          
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt=""/>
                {isExtended ? <p>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt=""/>
                {isExtended ? <p>Activity</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt=""/>
                {isExtended ? <p>Setting</p> : null}
            </div>
        </div>
     
    </div>
  );
};

export default Sidebar;
