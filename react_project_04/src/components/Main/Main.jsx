import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import  './Main.css'
import { Context } from '../../context/Context'
import { ThemeToggleButton,useTheme } from '../ThemeContext'
import VoiceInput from '../VoiceChat'


function Main() {
    const {onSent, recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
    const { isDarkTheme } = useTheme();
  return (
    <div className={`main ${isDarkTheme ? 'dark' : 'light'}`}>
       <div className='nav'
       style={{backgroundColor: isDarkTheme ? 'black' :'white'}}
       >
            <div style={{ display: 'flex',  alignItems: 'center', gap: '10px' }}>
            <p style=
            {{color: isDarkTheme ? 'white' : 'black'}}
            >Gemini</p>
            <img className='gemini-icon' src={assets.gemini_icon} alt="" />
            <ThemeToggleButton />
            </div>
            <img className='user-icon' src={assets.user_icon} alt="" />
        </div>
        <div className='main-container'>


        {!showResult ? <>
            <div className='greet'>
                <p><span>Hello, Dev</span></p>
                <p>How Can I Help You Today</p>
            </div>
            <div className='cards'>
                <div
                    onClick={()=>{
                        const prompt = "Suggest beautiful places to see on Upcoming trips";
                        setInput(prompt);   
                        setTimeout(()=>
                            onSent(prompt),1000
                        )
                    }}       
                    className='card'>
                    <p>Suggest beautiful places to see on Upcoming trips</p>
                    <img src={assets.compass_icon} alt=""/>
                </div>
                <div
                     onClick={()=>{
                        const prompt = "Briefly summarise this concept: urban planning";
                        setInput(prompt);   
                        setTimeout(()=>
                            onSent(prompt),1000
                        )
                    }}   
                    className='card'>
                    <p>Briefly summarise this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt=""/>
                </div>
                <div 
                    onClick={()=>{
                        const prompt = "Brainstorm team bonding activities for our work retreat";
                        setInput(prompt);   
                        setTimeout(()=>
                            onSent(prompt),1000
                        )
                    }}
                    className='card'>
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt=""/>
                </div>
                <div 
                    onClick={()=>{
                        const prompt = "Improve thr reliability of the following code";
                        setInput(prompt);   
                        setTimeout(()=>
                            onSent(prompt),1000
                        )
                    }}
                    className='card'>
                    <p>Improve thr reliability of the following code</p>
                    <img src={assets.code_icon} alt=""/>
                </div>
            </div>
        </> : 
        <div className='result'>
            <div className='result-title'>
                <img src={assets.user_icon} alt=""/>
                <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
                <img src={assets.gemini_icon} alt=""/>
                {loading ? <div className='loader'>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>
                </div> : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                
            </div>
        </div>
        }
            
            <div className='main-bottom'>
                <div className='search-box'>
                    <input 
                    onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here'
                     onKeyDown={(e)=>{
                        if(e.key==='Enter'){
                            onSent();
                        }
                     }}   
                    />
                    <div>
                        <img src={assets.gallery_icon} alt=""/>
                        <VoiceInput setInput={setInput} onSent={onSent} />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt=""/>
                    </div>
                </div>
                <p className='bottom-info'>
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main