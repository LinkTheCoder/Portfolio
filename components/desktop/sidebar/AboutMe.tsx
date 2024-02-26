"use client"

import React, { useState } from "react";
import Folder from '../../../public/img/Folder.png';
import Profile from '../../../public/img/Profile2.png';
import Fursona from '../../../public/img/Fursona.png';
import Image from 'next/image';

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState(Profile); // Initialize with the default profile image

  const changeProfileImage = () => {
    setProfileImage(null);
    setTimeout(() => {
      if (profileImage === Profile) {
        setProfileImage(Fursona);
      } else {
        setProfileImage(Profile);
      }
    }, 200);
  };
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
                      <h3 className="text-3xl font-semibold uppercase text-slate-400">
                        About Me
                      </h3>
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
                      <div className="flex items-center">
                        <ul className="flex-1 my-4 space-y-6 text-lg leading-relaxed text-left text-slate-400">
                          <li>👋 Hi, My name is <span className="font-medium">Link</span>! A Front-End Developer. I like to code and design <a className='text-blue-400 no-underline hover:underline' href='https://github.com/LinkTheCoder'>websites, apps & bots</a>. I enjoy as well to create <a className='text-blue-400 no-underline hover:underline' href='https://store.steampowered.com/developer/LinkTheDev'>PC games</a>.</li>
                          <li>📑 <span className="font-medium">Resume:</span> <a className='text-blue-400 no-underline hover:underline' href="https://www.linkedin.com/in/linkthedev/">LinkedIn</a></li>
                          <li>📧 <span className="font-medium">Contact:</span> <a className='text-blue-400 no-underline hover:underline' href='mailto:linkhaggman@gmail.com'>Email</a>, Discord(@linkthedev)</li>
                          <li>🌍 <span className="font-medium">Languages:</span> Svenska (Native), English (Fluent), 한국어 (TOPIK-I)</li>
                          <li>🔖 <span className="font-medium">Hobbies:</span> Mystery novels, Korean Survival & Variety Shows etc.</li>
                        </ul>
                        <div className="flex flex-col items-center">
                              {profileImage !== null ? (
                        <Image
                  className="inline object-cover h-full ml-2 rounded w-48"
                  src={profileImage}
                  alt={profileImage === Fursona ? "Fursona" : "Profile"}
                />
                         ) : null}
                {/*<button onClick={changeProfileImage} className="px-2 py-1 mt-4 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-700">
                  {profileImage === Profile ? "FURSONA 🐧" : "HUMAN 🧑🏻"}
                </button>*/}
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
