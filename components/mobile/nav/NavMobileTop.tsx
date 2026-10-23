import React from 'react'
import AboutMeMobile from './AboutMeMobile';
import SKillsMobile from './SkillsMobile';
import PortfolioMobile from './PortfolioMobile';
import Image from 'next/image';
import ArtfolioIcon from '../../../public/img/Shortcut_Icon_Mobile.png';


export default function NavMobileTop({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
     <nav className="left-0 right-0 bg-transparent">
      <div className="container flex justify-center mx-auto">
            <ul className="flex flex-row space-x-5 list-none md:space-x-7">
              <li className="nav-item">
            <AboutMeMobile/>
              </li>

              <li className="nav-item">
              <PortfolioMobile/>
              </li>

              <li className="nav-item">
                <a
                  href="https://artfolio.linkthecoder.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white"
                >
                  <span className="flex h-[52px] w-[52px] items-center justify-center">
                    <Image className="h-14 w-18" src={ArtfolioIcon} alt="Artfolio" />
                  </span>
                  <p className="mt-1">Artfolio</p>
                </a>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
}
