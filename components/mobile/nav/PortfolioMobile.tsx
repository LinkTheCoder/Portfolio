"use client"

import React, { useState, useEffect, useRef } from "react";
import BeastCrimes from '../../../public/img/BCThumbnail.png';
import SpaceOutCat from '../../../public/img/SPCThumbnail.png';
import PortfolioIcon from '../../../public/img/PortfolioIcon.png';
import PortfolioThumbnail from '../../../public/img/PortfolioThumbnail.png';
import ProjectsMobile from '../props/ProjectsMobile';
import Image from 'next/image';

export default function PortfolioMobile() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleButtonClick = (event) => {
      event.stopPropagation(); // Prevent click event from propagating to the document
      setShowModal(true);
  };

  const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
          setShowModal(false);
      }
  };

  useEffect(() => {
      if (showModal) {
          document.addEventListener("click", handleClickOutside);
      } else {
          document.removeEventListener("click", handleClickOutside);
      }

      return () => {
          document.removeEventListener("click", handleClickOutside);
      };
  }, [showModal]);

    return (
        <div>  
            
            {/* PORTFOLIO */}
           <div>
           <>
           <button onClick={handleButtonClick}  className="px-2 py-2 bg-green-500 rounded-2xl">
              <Image className="w-9 h-9 md:w-10 md:h-10" src={PortfolioIcon} alt="image description">
              </Image>
            </button>
            <p className="mt-1 text-white">Portfolio</p>
        {showModal ? (
          <>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            >
        <div ref={modalRef} className="relative w-auto max-w-3xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*body*/}
                  <div className="relative grid flex-auto grid-cols-1 gap-3 p-6 bg-slate-800/90 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <ProjectsMobile href="https://github.com/LinkTheCoder/SpaceOutCat" src={SpaceOutCat} title="Space Out Cat" description="A self-care app"/>
                  <ProjectsMobile href="https://github.com/LinkTheCoder/BeastCrimes" src={BeastCrimes} title="Beast Crimes" description="Website of my game Beast Crimes"/> 
                  <ProjectsMobile href="https://github.com/LinkTheCoder/Portfolio" src={PortfolioThumbnail} title="Portfolio" description="My windows/android themed portfolio"/>

                  </div>
  <div className="relative grid flex-auto grid-cols-1 pb-6 pl-6 pr-6 bg-slate-800/90 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
  <div className="mx-auto overflow-hidden border rounded border-slate-400">
    <div className="px-6 py-2 text-center">
      <a
        href="https://github.com/LinkTheCoder?tab=repositories"
        className="inline-block px-2 py-1 text-sm font-bold rounded-md text-slate-400 hover:text-slate-300 hover:underline"
      >
        More Projects
      </a>
    </div>
  </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/50"></div>
          </>
        ) : null}
      </>
           </div>
        </div>
    );
  };