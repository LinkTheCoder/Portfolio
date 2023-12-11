"use client"
//
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Wallpaper from '../../public/img/Wallpaper.jpg';
import SamsungWallpaper from '../../public/img/SamsungWallpaper.png';
import Nav from './nav/Nav';
import NavMobile from '../mobile/nav/NavMobile';

const Hero = () => {
  const [isAndroid, setIsAndroid] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android') || userAgent.includes('iphone') || userAgent.includes('ipad')) {
      setIsAndroid(true);
    }
  }, []);
  
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div className="relative w-full h-full">
        <Image
          className='object-cover w-full h-full'
          src={isAndroid ? SamsungWallpaper : Wallpaper}
          alt="Wallpaper"
          onLoad={() => setImageLoaded(true)}
        />
        {imageLoaded && <div className='absolute top-0 left-0 w-full h-full bg-black/10'></div>}
      </div>
      <div className='absolute bottom-0 z-10 w-full'>
       {isAndroid ? (
          <NavMobile fixed={undefined}/>
        ) : (
          <Nav fixed={undefined}/>
        )}
      </div>
    </div>
  );
};

export default Hero;
