import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '../../context/ThemeContext'; // Adjust the path based on your project structure
import Wallpaper from '../../public/img/Wallpaper.jpg';
import SamsungWallpaper from '../../public/img/SamsungWallpaper.png';
import Nav from './nav/Nav';
import NavMobile from '../mobile/nav/NavMobile';

const Hero = () => {
  const [isAndroid, setIsAndroid] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { selectedWallpaper } = useTheme();

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsAndroid(userAgent.includes('android') || userAgent.includes('iphone') || userAgent.includes('ipad'));
  }, []);

  const defaultWallpaper = isAndroid ? SamsungWallpaper : Wallpaper;

  const handleImageLoad = () => {
    if (!imageLoaded) {
      setImageLoaded(true);
    }
  };

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div className="absolute w-full h-full bg-black"></div> {/* Initial black background */}
      <div className="relative w-full h-full">
        {!imageLoaded && (
          <div className='absolute w-full h-full bg-black'></div> // Black background before image loads
        )}
        <Image
          className='object-cover w-full h-full transition-opacity duration-500'
          src={selectedWallpaper || defaultWallpaper}
          alt="Wallpaper"
          onLoad={handleImageLoad}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
      </div>
      <div className='absolute bottom-0 z-10 w-full'>
        {isAndroid ? (
          imageLoaded && <NavMobile fixed={undefined} />
        ) : (
          imageLoaded && <Nav fixed={undefined} />
        )}
      </div>
    </div>
  );
};

export default Hero;
