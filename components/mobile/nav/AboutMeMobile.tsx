"use client"

import React, { useState, useEffect, useRef } from "react";
import AvatarIcon from '../../../public/img/AvatarIcon.png';
import ProfileIcon from '../../../public/img/Profile3.jpg';
import Profile from '../../../public/img/Profile2.png';
import Fursona from '../../../public/img/Fursona.png';
import Image from 'next/image';

export default function AboutMeMobile() {
    const [showModal, setShowModal] = useState(false);
    const [profileImage, setProfileImage] = useState(Profile);

    const changeProfileImage = (event) => {
        event.stopPropagation();
        setProfileImage(null);
        setTimeout(() => {
            if (profileImage === Profile) {
                setProfileImage(Fursona);
            } else {
                setProfileImage(Profile);
            }
        }, 200);
    };

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
                                            <li><details><summary>📧 Contact</summary><a className='text-blue-400 no-underline hover:underline' href='mailto:linkhaggman@gmail.com'>Email</a>, Discord(@linkthedev)</details></li>
                                            <li><details><summary>🌍 Languages</summary>Svenska (Native), English (Fluent), <br></br>한국어 (TOPIK-I)</details></li>
                                            <li><details><summary>🔖 Hobbies</summary><a className='text-blue-400 no-underline hover:underline' href='https://www.goodreads.com/linkthedev'>Mystery novels</a>, <a className='text-blue-400 no-underline hover:underline' href='https://mydramalist.com/profile/LinkTheDev'>Korean Shows</a> etc</details></li>
                                        </ul>
                                        </div>
                                        
                                        {profileImage !== null && (
    <div className="flex flex-col items-center ml-4">
        {/*<Image
            className="object-cover rounded"
            src={profileImage}
            alt={profileImage === Fursona ? "Fursona" : "Profile"}
            style={profileImage === Fursona ? { width: "150px" } : { width: "150px" }}
        />
        
        <button onClick={changeProfileImage} className="px-2 py-1 mt-4 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-700">
            {profileImage === Profile ? "FURSONA 🐧" : "HUMAN 🧑🏻"}
        </button>*/}
    </div>
  )}
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
