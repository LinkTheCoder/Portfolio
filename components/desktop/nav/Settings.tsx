"use client"

import React from "react";
import Wallpaper from '../../../public/img/Wallpaper.jpg';
import Wallpaper2 from '../../../public/img/Wallpaper2.jpg';
import Wallpaper3 from '../../../public/img/Wallpaper3.png';
import Wallpaper4 from '../../../public/img/Wallpaper4.png';
import SettingsIcon from '../../../public/img/Settings.png';
import Image from 'next/image';

export default function Settings() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div>  
            {/* PORTFOLIO */}
           <div>
           <>
           <button onClick={() => setShowModal(true)} className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-2 rounded">
           <Image className="max-w-full h-auto" src={SettingsIcon} alt="image description">
            </Image>
            </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="bg-slate-800 flex items-start justify-between p-5 border-b border-solid border-slate-400 rounded-t">
                    <h3 className="text-3xl text-slate-400 font-semibold">
                   SETTINGS
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-slate-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="bg-slate-800 relative p-6 flex-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
                  <div className="mb-2 max-w-sm rounded overflow-hidden">
  <div className="px-6 py-2">
  <button className="hover:opacity-50 duration-150">
  <Image className="w-3/4 mx-auto rounded-md mb-2 mt-2" src={Wallpaper} alt="image description" />
  </button>
  </div>
</div>

<div className="mb-2 max-w-sm rounded overflow-hidden">
  <div className="px-6 py-2">
  <button className="hover:opacity-50 duration-150">
  <Image className="w-3/4 mx-auto rounded-md mb-2 mt-2" src={Wallpaper2} alt="image description" />
  </button>
  </div>
</div>

<div className="mb-2 max-w-sm rounded overflow-hidden">
<div className="px-6 py-2">
<button className="hover:opacity-50 duration-150">
  <Image className="w-3/4 mx-auto rounded-md mb-2 mt-2" src={Wallpaper3} alt="image description" />
  </button>
</div>
</div>

<div className="mb-2 max-w-sm rounded overflow-hidden">
<div className="px-6 py-2">
<button className="hover:opacity-50 duration-150">
  <Image className="w-3/4 mx-auto rounded-md mb-2 mt-2" src={Wallpaper4} alt="image description" />
  </button>
</div>
</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
           </div>
        </div>
    );
  };