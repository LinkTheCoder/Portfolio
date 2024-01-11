// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext({
  selectedWallpaper: null,
  changeWallpaper: (wallpaper: any) => {}, // Update the function signature to accept an argument of type 'any'
});

export const ThemeProvider = ({ children }) => {
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);

  const changeWallpaper = (wallpaper: any) => { // Update the function signature to accept an argument of type 'any'
    setSelectedWallpaper(wallpaper);
  };

  return (
    <ThemeContext.Provider value={{ selectedWallpaper, changeWallpaper }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
