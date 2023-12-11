import React, { useState } from 'react';
import Image from 'next/image';
import Chrome from '../../../public/img/Chrome.png';
import Gmail from '../../../public/img/Gmail.png';
import Steam from '../../../public/img/Steam.png';
import Windows from '../../../public/img/Windows.png';
import Github from '../../../public/img/Github.png';
import Discord from '../../../public/img/Discord.png';
import Linkedin from '../../../public/img/Linkedin.png';
import Nintendo from '../../../public/img/Nintendo.png';

export default function TrashModal() {
    const [showModal, setShowModal] = React.useState(false);
    const [noticeBox, setNoticeBox] = useState({ visible: false, message: '' });

    const copyNintendoUsername = () => {
      const nintendoUsername = 'SW-0107-3340-5734';
      navigator.clipboard.writeText(nintendoUsername)
        .then(() => {
          setNoticeBox({ visible: true, message: 'Friend Code copied to clipboard' });
          setTimeout(() => {
            setNoticeBox({ visible: false, message: '' });
          }, 1000);
        })
    };

    return (
        <ul>  
            
            {/* Apps */}
           <li>
           <>
           <button  onClick={() => setShowModal(true)} className="px-2 py-2 font-bold text-white rounded bg-slate-800 hover:bg-slate-700">
              <Image className="h-auto max-w-full" src={Windows} alt="image description">
              </Image>

            </button>
        {showModal ? (
          <>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            >
              <div className="rounded-lg border border-gray-600  relative w-auto max-w-3xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="rounded-t-lg flex items-start justify-between p-5 border-b border-solid bg-slate-800 border-slate-400">
                    <h3 className="text-3xl font-semibold text-slate-400">
                   Apps
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
                  <div className="rounded-b-lg grid grid-cols-2 gap-4 p-10 bg-slate-800 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">

    <div className="overflow-hidden rounded">
    <a href="https://www.google.com/"><button className="px-2 py-2 text-white rounded bg-slate-800 hover:bg-slate-700">
    <Image className="inline w-12 h-12 rounded-sm object" src={Chrome} alt="Chrome"/>
      <div className="px-2 py-2">
        <p className="text-base text-slate-400">
        Chrome
        </p>
      </div>
      </button></a>
    </div>
 
    <div className="overflow-hidden rounded">
    <a href="mailto:linkhaggman@gmail.com"><button className="px-2 py-2 text-white rounded bg-slate-800 hover:bg-slate-700">
    <Image className="inline w-12 h-12 rounded-sm object" src={Gmail} alt="Gmail"/>
      <div className="px-6 py-2">
        <p className="text-base text-slate-400">
        Gmail
        </p>
      </div>
      </button></a>
    </div>

    <div className="overflow-hidden rounded">
    <a href="https://github.com/LinkTheCoder"><button className="px-2 py-2 text-white rounded bg-slate-800 hover:bg-slate-700">
    <Image className="inline w-12 h-12 rounded-sm object" src={Github} alt="Github"/>
      <div className="px-6 py-2">
        <p className="text-base text-slate-400">
        Github
        </p>
      </div>
      </button></a>
      </div>

    <div className="overflow-hidden rounded">
    <a href="https://store.steampowered.com/developer/LinkTheDev"><button className="px-2 py-2 text-white rounded bg-slate-800 hover:bg-slate-700">
    <Image className="inline w-12 h-12 rounded-sm object" src={Steam} alt="Steam"/>
      <div className="px-6 py-2">
        <p className="text-base text-slate-400">
        Steam
        </p>
      </div>
      </button></a>
    </div>

    <div className="overflow-hidden rounded">
    <a href="https://discord.gg/YqRJbuc5AZ"><button className="px-2 py-2 text-white rounded bg-slate-800 hover:bg-slate-700">
    <Image className="inline w-12 h-12 rounded-sm object" src={Discord} alt="Discord"/>
      <div className="px-6 py-2">
        <p className="text-base text-slate-400">
        Discord
        </p>
      </div>
      </button></a>
    </div>

    <div className="overflow-hidden rounded">
    <a href="https://www.linkedin.com/in/linkthedev/"><button className="px-2 py-2 text-white rounded bg-slate-800 hover:bg-slate-700">
    <Image className="inline w-12 h-12 rounded-sm object" src={Linkedin} alt="LinkedIn"/>
      <div className="px-6 py-2">
        <p className="text-base text-slate-400">
        LinkedIn
        </p>
      </div>
      </button></a>
    </div>

    <div className="overflow-hidden rounded">
<button onClick={copyNintendoUsername} className="px-2 py-2 text-white rounded bg-slate-800 hover:bg-slate-700">
    <Image className=" inline w-12 h-12 rounded-sm object" src={Nintendo} alt="Nintendo"/>
      <div className="px-2 py-2">
        <p className="text-base text-slate-400">
        Nintendo
        </p>
      </div>
      </button>
    </div>

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