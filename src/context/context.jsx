
import {useContext, createContext, useState} from "react";

const AppContext =createContext();

export const AppProvider = ({children}) =>{
    
    const [role, setRole] =useState(null);
 
    return <AppContext.Provider value={{ role, setRole }}>
    {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}