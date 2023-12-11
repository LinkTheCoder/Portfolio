import React from "react";
import Folder from '../../../public/img/Folder.png';
import Matador from '../../../public/img/MatadorThumbnail.png';
import BeastCrimes from '../../../public/img/BCThumbnail.png';
import SpaceOutCat from '../../../public/img/SPCThumbnail.png';
import PortfolioThumbnail from '../../../public/img/PortfolioThumbnail.png';
import Projects from '../props/Projects';
import Image from 'next/image';

export default function Portfolio() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <ul>  
            
            {/* PORTFOLIO */}
           <li>
           <>
           <button  onClick={() => setShowModal(true)} className="text-white rounded hover:bg-white/20">
              <Image className="h-auto max-w-full" src={Folder} alt="image description">
              </Image>
              <p>Portfolio</p>
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
                    <h3 className="text-3xl font-semibold text-slate-400">
                   PORTFOLIO
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
                  <div className="relative grid flex-auto grid-cols-1 gap-3 p-6 bg-slate-800 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"> 
                  <Projects href="https://github.com/LinkTheCoder/SpaceOutCat" src={SpaceOutCat} title="Space Out Cat" description="A self-care app"/>  
                  <Projects href="https://github.com/LinkTheCoder/BeastCrimes" src={BeastCrimes} title="Beast Crimes" description="Website of my game Beast Crimes"/> 
                  <Projects href="https://github.com/LinkTheCoder/Matador" src={Matador} title="Matador" description="A re-design of a pizza restaurant"/>
                  <Projects href="https://github.com/LinkTheCoder/Portfolio" src={PortfolioThumbnail} title="Portfolio" description="My windows themed portfolio"/>  

  </div>
  <div className="rounded-b-lg relative grid flex-auto grid-cols-1 pb-6 pl-6 pr-6 bg-slate-800 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
  <div className="mx-auto overflow-hidden border rounded border-slate-400">
    <div className="px-6 py-2 text-center">
      <a
        href="https://github.com/LinkTheCoder?tab=repositories"
        className="inline-block px-2 py-1 text-sm font-bold rounded-md text-slate-400 hover:text-slate-300 hover:underline"
      >
        More Projects
      </a>
    </div>
  </div>
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