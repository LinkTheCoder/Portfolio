import React from "react";
import Folder from '../../../public/img/Folder.png';
import Image from 'next/image';

export default function Portfolio() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <ul>  

          {/* ABOUT ME */}
         <li>
         <>
         <button  onClick={() => setShowModal(true)} className="text-white rounded hover:bg-white/20">
            <Image className="h-auto max-w-full" src={Folder} alt="folder">
            </Image>
            <p>Skills</p>
          </button>
      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="rounded-lg border border-gray-600 relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="rounded-t-lg flex items-start justify-between p-5 border-b border-solid bg-slate-800 border-slate-400">
                  <h3 className="text-3xl font-semibold uppercase text-slate-400">
                    Skills
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
                {/*body*/}
                <div className="rounded-b-lg relative flex-auto p-6 bg-slate-800">    
                  <ul className="my-4 space-y-6 text-lg leading-relaxed text-left text-slate-400">
                <li>🖥️  <span className="font-medium ">Languages:</span> HTML, CSS, JS, JSX, TS, TSX, NANI, MARKDOWN</li>
                <li>⚙️ <span className="font-medium ">Frameworks:</span> REACT, NEXT, REACT NATIVE, TAILWIND CSS</li>
                <li>📱 <span className="font-medium ">Apps:</span> PWA, TWA, WINDOWS</li>
                <li>📦 <span className="font-medium ">Testing:</span> JEST, RTL, PLAYWRIGHT</li>
                <li>🛠️ <span className="font-medium ">Softwares:</span> UNITY, FIGMA, CLIP STUDIO PAINT, VSCODE</li>
            </ul>
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