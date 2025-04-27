import React from 'react'
import { assets } from '../../assets/assets'
import  './Main.css'

function Main() {
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className='main-container'>
            <div className='greet'>
                <p><span>Hello, Dev</span></p>
                <p>How Can I Help You Today</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <p>Suggest beautiful places to see on Upcoming trips</p>
                    <img src={assets.compass_icon} alt=""/>
                </div>
                <div className='card'>
                    <p>Briefly summarise this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt=""/>
                </div>
                <div className='card'>
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt=""/>
                </div>
                <div className='card'>
                    <p>Improve thr reliability of the following code</p>
                    <img src={assets.code_icon} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main