"use client"

import Image from 'next/image';
import React, { useState, useEffect, useRef } from "react";
import SkillsIcon from '../../../public/img/SkillsIcon.png';

export default function SKillsMobile() {
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

          {/* ABOUT ME */}
         <div>
         <>
         <button onClick={handleButtonClick} className="px-2 py-2 bg-blue-400 rounded-2xl">
  <Image className="w-9 h-9 md:w-10 md:h-10" src={SkillsIcon} alt="folder" />
  </button>
            <p className="mt-1 ml-2 text-white">Skills</p>
      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
     <div ref={modalRef} className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none focus:outline-none">
               {/*body*/}
               <div className="relative flex-auto p-6 bg-slate-800/90">
                  <ul className="mt-4 mb-2 space-y-6 text-lg leading-relaxed text-left text-slate-400">

<li><details><summary>🖥️ Code Languages</summary>HTML, CSS, JS, TS, NODE, PYTHON</details></li>
<li><details><summary>⚙️ Frameworks</summary>REACT, NEXT, REACT NATIVE, EXPRESS</details></li>
<li><details><summary>📱 Databases</summary>FIREBASE, POSTGRESQL, REDIS</details></li>
<li><details><summary>📦 DevOps</summary>GIT, VSCODE, DOCKER</details></li>
            </ul>
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