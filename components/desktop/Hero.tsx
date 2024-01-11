// Hero.tsx
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
      <div className="relative w-full h-full">
        {selectedWallpaper ? (
          <Image
            className='object-cover w-full h-full'
            src={selectedWallpaper}
            alt="Wallpaper"
            onLoad={handleImageLoad}
          />
        ) : (
          <Image
            className='object-cover w-full h-full'
            src={defaultWallpaper}
            alt="Default Wallpaper"
            onLoad={handleImageLoad}
          />
        )}
        {imageLoaded && <div className='absolute top-0 left-0 w-full h-full bg-black/10'></div>}
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
