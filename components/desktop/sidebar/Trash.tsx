import React from "react";
import Trash from '../../../public/img/Trash.png';
import Box from '../../../public/img/Box.jpg';
import VsCodeIcon from '../../../public/img/VsCodeIcon.png';
import JSXIcon from '../../../public/img/JSXIcon.png';
import Image from 'next/image';

export default function TrashModal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <ul>  
            
            {/* PORTFOLIO */}
           <li>
           <>
           <button  onClick={() => setShowModal(true)} className="hover:bg-white/20 text-white rounded">
              <Image className="max-w-full h-auto" src={Trash} alt="image description">
              </Image>
              <p>Trash</p>
            </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="rounded-lg border border-gray-600 relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="bg-slate-800 rounded-t-lg flex items-start justify-between p-5 border-b border-solid border-slate-400">
                    <h3 className="uppercase text-3xl text-slate-400 font-semibold">
                   Trash
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
                  <div className="rounded-b-lg bg-slate-800 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

    <div className="rounded overflow-hidden">
    <Image className="inline object w-20 h-20 rounded-sm" src={Box} alt="Profile image"/>
      <div className="px-6 py-2">
        <p className="text-slate-400 text-base">
        ???
        </p>
      </div>
    </div>
 
    <div className="rounded overflow-hidden">
    <Image className="inline object w-15 h-20 rounded-sm" src={VsCodeIcon} alt="Profile image"/>
      <div className="px-1 py-2">
        <p className="text-slate-400 text-base">
        NotFinal
        </p>
      </div>
    </div>

    <div className="rounded overflow-hidden">
    <Image className="inline object w-20 h-20 rounded-sm ml-4" src={JSXIcon} alt="Profile image"/>
      <div className="px-2 py-2">
        <p className="text-slate-400 text-base">
        NoFunction
        </p>
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
           </li>
        </ul>
    );
  };