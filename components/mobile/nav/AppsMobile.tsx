import React, { useState, useEffect, useRef } from "react";
import Chrome from '../../../public/img/Chrome.png';
import GitCatIcon from '../../../public/img/GitCatIcon.png';
import GooglePlay from '../../../public/img/GooglePlayIcon.png';
import Gmail from '../../../public/img/Gmail.png';
import { CgMenuGridO } from 'react-icons/cg';
import Image from 'next/image';

export default function TrashModal() {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const [noticeBox, setNoticeBox] = useState({ visible: false, message: '' });

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
            {/* Apps */}
           <div>
           <>
           <CgMenuGridO onClick={handleButtonClick} color="#FFFFFF" size="2em"/>
        {showModal ? (
          <>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            >
              <div ref={modalRef} className="relative w-auto max-w-3xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full rounded-lg outline-none focus:outline-none">

                  {/*body*/}
                  <div className="grid grid-cols-2 gap-4 p-10 space-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">

    <div className="ml-4 overflow-hidden rounded">
    <a href="https://www.google.com/"><button className="px-1 py-1 bg-white rounded-2xl">
    <Image className="inline w-12 h-12 rounded-sm object" src={Chrome} alt="Chrome"/>
    </button></a>
      <div className="py-2">
        <p className="text-base text-white">
        Chrome
        </p>
      </div>
    </div>

    <div className="ml-4 overflow-hidden rounded">
    <a href="mailto:linkhaggman@gmail.com"><button className="px-1 py-1 bg-white rounded-2xl">
    <Image className="inline w-12 h-12 rounded-sm object" src={Gmail} alt="Gmail"/>
    </button></a>
      <div className="py-2">
        <p className="text-base text-white">
        Gmail
        </p>
      </div>
    </div>

    <div className="overflow-hidden rounded">
    <a href="https://github.com/LinkTheCoder"><button className="px-1 py-1 rounded-2xl bg-slate-600">
    <Image className="inline w-12 h-12 rounded-sm object" src={GitCatIcon} alt="Github"/>
    </button></a>
      <div className="py-2">
        <p className="text-base text-white">
        Github
        </p>
      </div>
      </div>

    <div className="overflow-hidden rounded">
    <a href="https://play.google.com/store/apps/dev?id=7112699078675054520"><button className="px-1 py-1 bg-white rounded-2xl">
    <Image className="inline w-12 h-12 rounded-sm object" src={GooglePlay} alt="Google Play"/>
    </button></a>
      <div className="py-2">
        <p className="text-base text-white">
        Google Play
        </p>
      </div>
    </div>

  </div>
  </div>
  </div>
  </div> 
            <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/50"></div>
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
           </div>
        </div>
    );
  };