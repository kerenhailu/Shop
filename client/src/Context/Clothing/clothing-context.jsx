import { createContext, useState } from 'react';
export const ScheduleContext = createContext();

export const ClothingContext = ({ children }) => {
    const [clothing, setClothing] = useState({});
    return (
        <ClothingContext.Provider value={{clothing, setClothing} }>
            {children}
        </ClothingContext.Provider>
    )
};