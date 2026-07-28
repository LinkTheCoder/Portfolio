"use client"

import React, { useState } from "react";
import Folder from '../../../public/img/Folder.png';
import ProfileIcon from '../../../public/img/Profile.webp';
import Image from 'next/image';

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ul>
      {/* ABOUT ME */}
      <li>
        <>
          <button onClick={() => setShowModal(true)} className="text-white rounded hover:bg-white/20">
            <Image className="h-auto max-w-full" src={Folder} alt="image description" />
            <p>About Me</p>
          </button>
          {showModal ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="rounded-lg border border-gray-600 relative w-auto max-w-3xl mx-auto my-6">
                  {/*content*/}
                  <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    {/*header*/}
                    <div className="rounded-t-lg flex items-start justify-between p-5 border-b border-solid bg-slate-800 border-slate-400">
                      <button
                        className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="block w-6 h-6 text-2xl bg-transparent outline-none text-slate-400 focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/* body */}
                          
                    <div className="rounded-b-lg relative flex-auto p-6 bg-slate-800">
                    <div className="flex flex-col items-start">
                    <Image
                            className="inline object-cover h-28 w-28 rounded-full mb-4"
                            src={ProfileIcon}
                            alt="ProfileIcon"
                          />
                          </div>
                      <div className="flex items-center">
                        <div className="flex-1 my-4 space-y-2 text-lg leading-relaxed text-left text-slate-400">
                          <h1 className="text-xl font-bold text-slate-300">✦LINK✦</h1>
                          <p className="text-sm text-slate-300">linkthecoder • he/him</p>
                          <ul>
                            <li>🌍 | Swede
                               <br></br>🎂 | 30s
                               <br></br>👨‍💻 | Developer
                               <br></br>✍️ | Hobbies: Art, Coding, VR, Mystery Novels etc.
                            </li>
                          </ul>
                        </div>
</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
            </>
          ) : null}
        </>
      </li>
    </ul>
  );
};
