import React from 'react';
import { FaRegSquare } from 'react-icons/fa';
import { BsArrowsFullscreen } from 'react-icons/bs';
import AppsMobile from './AppsMobile';

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

export default function NavMobileBottom() {
  return (
    <nav className="left-0 right-0 bg-transparent">
      <div className="container flex justify-center mx-auto">
        <ul className="flex flex-row list-none space-x-10">
          <li className="nav-item">
            <AppsMobile />
          </li>

          <li className="nav-item">
            <FaRegSquare color="#FFFFFF" size="2em" />
          </li>

          <li className="nav-item">
            <button onClick={FullscreenFunction}>
              <BsArrowsFullscreen color="#FFFFFF" size="2em" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
