import React from 'react'
import AboutMeMobile from './AboutMeMobile';
import SKillsMobile from './SkillsMobile';
import PortfolioMobile from './PortfolioMobile';


export default function NavMobileTop({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
     <nav className="left-0 right-0 bg-transparent">
      <div className="container flex justify-center mx-auto">
            <ul className="flex flex-row space-x-1 list-none md:space-x-7">
              <li className="nav-item">
            <AboutMeMobile/>
              </li>

              <li className="nav-item">
              <SKillsMobile/>
              </li>

              <li className="nav-item">
              <PortfolioMobile/>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
}
