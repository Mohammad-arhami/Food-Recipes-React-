import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useThem = () => {
    
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error("useThem() must be used Inside a ThemProvider");
    }

    return context

}