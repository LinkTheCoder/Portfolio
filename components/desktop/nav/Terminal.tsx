import React, { useState } from 'react';
import Image from 'next/image';
import Terminal from '../../../public/img/Terminal.png';


export default function TerminalModal() {
    const [showModal, setShowModal] = React.useState(false);
    const [noticeBox, setNoticeBox] = useState({ visible: false, message: '' });

    return (
        <ul>   
            {/* Terminal */}
           <li>
           <>
           <button  onClick={() => setShowModal(true)} className="px-2 py-2 font-bold text-white rounded bg-slate-800 hover:bg-slate-700">
              <Image className="h-auto max-w-full" src={Terminal} alt="image description">
              </Image>

            </button>
        {showModal ? (
          <>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            >
              <div className="rounded-lg border border-gray-600 relative w-auto max-w-4xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="rounded-t-lg flex items-start justify-between p-1 border-b border-solid bg-black border-slate-600">
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
                  <div className="rounded-b-lg bg-black overflow-hidden">
  <iframe src="https://terminal-linkthecoder.vercel.app/" className="w-screen h-[66vh] border-none"></iframe>
</div>
  
  </div>
  </div>
  </div> 
  <div className="fixed inset-0 z-40 bg-black opacity-25"></div>

              {noticeBox.visible && (
                <div
                  className="fixed z-50 p-2 text-white transform -translate-x-1/2 -translate-y-1/2 rounded shadow-md top-1/2 left-1/2 bg-black/70"
                >
                  {noticeBox.message}
                </div>
              )}
            </>
          ) : null}
        </>
      </li>
    </ul>
  );
};