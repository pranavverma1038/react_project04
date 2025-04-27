import { createContext, useState } from "react";
import generateResponse from "../config/gemini";  // Correct import

export const Context = createContext();

const ContextProvider = (props) => {
  
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPreviousPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");




  const onSent = async (prompt) => {
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    const response = await generateResponse(input); 
    setResultData(response)
    setLoading(false)
    setInput("")

       
  };

  // Test call
  

  const contextValue = {
     prevPrompts,
     setPreviousPrompts,
     onSent,
     setRecentPrompt,
     recentPrompt,
     showResult,
     loading,
     resultData,
     input,
     setInput,
  }

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
