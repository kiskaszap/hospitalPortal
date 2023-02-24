import React, {useState} from "react";
const context = React.createContext();


function AppContext({ children }) {

 const [data,setData]=useState('')
 
  
  return (
    <context.Provider value={{data,setData}}>{children}</context.Provider>
  );
}

export { context, AppContext };