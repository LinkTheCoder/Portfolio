"use client"

import React, { useState } from 'react';
import Bar from '../sidebar/Sidebar'
import Clock from './Clock'
import Chrome from '../../../public/img/Chrome.png';
import Github from '../../../public/img/Github.png';
import Fullscreen from '../../../public/img/Fullscreen.png';
import Steam from '../../../public/img/Steam.png';
import Discord from '../../../public/img/Discord.png';
import Apps from './Apps'
import Terminal from './Terminal'
import Settings from './Settings'
import Image from 'next/image';

function FullscreenFunction() {
  var element = document.documentElement;
  
    if (!document.fullscreenElement) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else {
        console.error('Fullscreen is not supported in this browser');
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else {
        console.error('Exiting fullscreen is not supported in this browser');
      }
    }
  }

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [noticeBox, setNoticeBox] = useState({ visible: false, message: '' });

  const copyDiscordUsername = () => {
    const discordUsername = 'linkthedev';
    navigator.clipboard.writeText(discordUsername)
      .then(() => {
        setNoticeBox({ visible: true, message: 'Username copied to clipboard' });
        setTimeout(() => {
          setNoticeBox({ visible: false, message: '' });
        }, 1000);
      })
  };
  
  return (
    <>
      <Bar />
      <nav className="border-t-[1px] border-gray-600 py-2 relative flex flex-wrap items-center justify-between bg-slate-800">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Apps />
            <button
              className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={"lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col space-x-2 list-none lg:flex-row lg:ml-auto">

              <li className="nav-item">
                  <button title="Chrome" onClick={() => window.location.href = 'https://www.google.com'} className="px-2 py-2 font-bold text-white rounded bg-slate-800 hover:bg-slate-700">
                    <Image className="h-auto max-w-full" src={Chrome} alt="image description" />
                  </button>
              </li>

              <li className="nav-item">
                  <button title="Github" onClick={() => window.location.href = 'https://github.com/LinkTheCoder'} className="px-2 py-2 font-bold text-white rounded bg-slate-800 hover:bg-slate-700">
                    <Image className="h-auto max-w-full" src={Github} alt="image description" />
                  </button>
              </li>

              {/*<li className="nav-item">
                  <button title="Steam" onClick={() => window.location.href = 'https://store.steampowered.com/developer/Link_The_Dev'} className="px-2 py-2 font-bold text-white rounded bg-slate-800 hover:bg-slate-700">
                    <Image className="h-auto max-w-full" src={Steam} alt="image description" />
                  </button>
              </li>*/}

            {/*<li className="nav-item">
                  <button title="Discord" onClick={copyDiscordUsername} 
                    className="px-2 py-2 font-bold text-white rounded bg-slate-800 hover:bg-slate-700"
                  >
                    <Image className="h-auto max-w-full" src={Discord} alt="image description" />
                  </button>
              </li>*/}

              <li title="Settings" className="nav-item">
                <Settings />
              </li>

              <Terminal />
            
              <li title="Fullscreen" className="nav-item">
                <button onClick={FullscreenFunction} className="px-2 py-2 font-bold text-white rounded bg-slate-800 hover:bg-slate-700">
                  <Image className="h-auto max-w-full" src={Fullscreen} alt="image description" />
                </button>
              </li>

              <li className="ml-auto text-right nav-item">
                <Clock />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {noticeBox.visible && (
        <div
          className="fixed z-50 p-2 text-white transform -translate-x-1/2 -translate-y-1/2 rounded shadow-md bg-black/70 top-1/2 left-1/2"
        >
          {noticeBox.message}
        </div>
      )}
    </>
  );
}






