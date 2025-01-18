import React, { useState } from 'react';
import Chrome from '../../../public/img/Chrome.png';
import Gmail from '../../../public/img/Gmail.png';
import GooglePlay from '../../../public/img/GooglePlayIcon.png';
import GitCatIcon from '../../../public/img/GitCatIcon.png';
import NavMobileTop from './NavMobileTop';
import NavMobileBottom from './NavMobileBottom';
import Image from 'next/image';

export default function NavMobile({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [noticeBox, setNoticeBox] = useState({ visible: false, message: '' });

  return (
    <div className="fixed bottom-0 w-full">
      <NavMobileTop fixed={undefined} />
      <nav className="mb-4 mt-4 left-0 right-0 bg-transparent">
        <div className="container flex justify-center mx-auto">
          <ul className="flex flex-row space-x-3 list-none md:space-x-7">
            <li className="nav-item">
              <a href="https://www.google.com/">
                <button className='px-1 py-1 bg-white rounded-2xl'>
                  <Image className="w-13 h-13 md:w-14 md:h-14" src={Chrome} alt="Chrome" />
                </button>
              </a>
            </li>

            <li className="nav-item">
              <a href="mailto:linkhaggman@gmail.com">
                <button className='px-1 py-1 bg-white rounded-2xl'>
                  <Image className="w-13 h-13 md:w-14 md:h-14" src={Gmail} alt="Gmail" />
                </button>
              </a>
            </li>

            <li className="nav-item">
              <a href="https://play.google.com/store/apps/dev?id=7112699078675054520">
                <button className='px-1 py-1 bg-white rounded-2xl'>
                  <Image className="w-13 h-13 md:w-14 md:h-14" src={GooglePlay} alt="Google Play" />
                </button>
              </a>
            </li>

            <li className="nav-item">
              <a href="https://github.com/LinkTheCoder">
                <button className="px-1 py-1 rounded-2xl bg-slate-600">
                  <Image className="w-13 h-13 md:w-14 md:h-14" src={GitCatIcon} alt="Github" />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <NavMobileBottom />
      {noticeBox.visible && (
        <div
          className="fixed z-50 p-2 text-white transform -translate-x-1/2 -translate-y-1/2 rounded shadow-md top-1/2 left-1/2 bg-black/70"
        >
          {noticeBox.message}
        </div>
      )}
    </div>
  );
}
