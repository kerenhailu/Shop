import { createContext, useState } from 'react';
export const ClothingContext = createContext();

export const ClothingContextProvider = ({ children }) => {
    const [clothing, setClothing] = useState([]);
    return (
        <ClothingContext.Provider value={{clothing, setClothing} }>
            {children}
        </ClothingContext.Provider>
    )
};