import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [isExtended, setExtended] = useState(false)


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
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react...</p>
            </div>
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
