
import {useContext, createContext, useState} from "react";

const AppContext =createContext();

export const AppProvider = ({children }) =>{
    
    const [role, setRole] =useState(null);
    const [restaurant, setRestaurant] =useState(null);

    return <AppContext.Provider value={{ setRole, role, setRestaurant, restaurant }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}