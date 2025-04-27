import { createContext } from "react";
import generateResponse from "../config/gemini";  // Correct import

export const Context = createContext();

const ContextProvider = (props) => {
  
  const onSent = async (prompt) => {
    const response = await generateResponse(prompt); 
    console.log(response);   
  };

  // Test call
  onSent("what is react js");

  const contextValue = {
    
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
