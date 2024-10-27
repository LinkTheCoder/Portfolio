"use client"

import React, { useState, useEffect, useRef } from "react";
import AvatarIcon from '../../../public/img/AvatarIcon.png';
import ProfileIcon from '../../../public/img/Profile3.jpg';
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
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none modal focus:outline-none">
                        <div ref={modalRef} className="relative w-auto max-w-3xl mx-auto my-6">
                            {/*content*/}
                            <div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative flex-auto p-6 bg-slate-800">
                                <Image
                            className="inline object-cover h-28 w-28 rounded-full mb-4"
                            src={ProfileIcon}
                            alt="ProfileIcon"
                          />
                                    <div className="flex">
                                        <ul className="mb-2 flex-auto space-y-4 text-lg leading-relaxed text-left text-slate-400">
                                            <li><details><summary>👋 About</summary>Hi, My name is <span className="font-medium">Link</span>! A Front-End Developer. <br></br> I like to code and design <a className='text-blue-400 no-underline hover:underline' href='https://github.com/LinkTheCoder'>websites, apps & bots</a>. <br></br>I enjoy as well to create <a className='text-blue-400 no-underline hover:underline' href='https://store.steampowered.com/developer/LinkTheDev'>PC games</a></details></li>
                                            <li><details><summary>📑 Resume</summary><a className='text-blue-400 no-underline hover:underline' href="https://www.linkedin.com/in/linkthedev/">LinkedIn</a></details></li>
                                            <li><details><summary>📧 Contact</summary><a className='text-blue-400 no-underline hover:underline' href='https://www.linkedin.com/in/linkthedev/'>LinkedIn</a>, Discord(@linkthedev), <a className='text-blue-400 no-underline hover:underline' href='https://vrchat.com/home/user/usr_af1795ea-1e3f-4f24-9337-51676e6a8474'>VRChat</a></details></li>
                                            <li><details><summary>🔖 Hobbies</summary>Mystery novels, Drawing etc</details></li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/50"></div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
