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
    setIsAndroid(
      userAgent.includes('android') ||
      userAgent.includes('iphone') ||
      userAgent.includes('ipad')
    );
  }, []);

  const defaultWallpaper = isAndroid ? SamsungWallpaper : Wallpaper;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Initial black background */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          imageLoaded ? 'opacity-0' : 'opacity-100'
        } bg-black`}
      ></div>

      {/* Wallpaper image */}
      <div className="relative w-full h-full">
        <Image
          className='object-cover w-full h-full'
          src={selectedWallpaper || defaultWallpaper}
          alt="Wallpaper"
          onLoad={handleImageLoad}
          priority={true} // Ensures the image loads as soon as possible
        />
      </div>

      {/* Overlay content */}
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
