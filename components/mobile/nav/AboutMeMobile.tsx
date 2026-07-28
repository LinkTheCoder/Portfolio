"use client"

import React, { useState, useEffect, useRef } from "react";
import AvatarIcon from '../../../public/img/AvatarIcon.png';
import ProfileIcon from '../../../public/img/Profile.webp';
import Image from 'next/image';

export default function AboutMeMobile() {
    const [showModal, setShowModal] = useState(false);

    const modalRef = useRef(null);

    const handleButtonClick = (event) => {
        event.stopPropagation();
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
                    <button onClick={handleButtonClick} className="px-2 py-2 bg-orange-500 rounded-2xl">
                        <Image className="w-9 h-9 md:w-10 md:h-10" src={AvatarIcon} alt="image description" />
                    </button>
                    <p className="mt-1 text-white">Profile</p>
                </>

                {showModal ? (
                    <>
                        <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/50"></div>
                        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none modal focus:outline-none">
                            <div ref={modalRef} className="relative w-auto max-w-3xl mx-auto my-6">
                                {/*content*/}
                                <div className="relative flex flex-col w-full border-0 shadow-lg outline-none focus:outline-none">
                                    {/*body*/}
                                    <div className="relative flex-auto p-6 bg-slate-800/90">
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
                    </>
                ) : null}
            </div>
        </div>
    );
}
