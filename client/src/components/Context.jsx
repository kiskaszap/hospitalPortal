import React, {useState} from "react";
const context = React.createContext();


function AppContext({ children }) {

 const [data,setData]=useState('')
 const [isLoggedIn,setIsloggedIn]=useState(false)
 
  
  return (
    <context.Provider value={{data,setData,isLoggedIn,setIsloggedIn}}>{children}</context.Provider>
  );
}

export { context, AppContext };