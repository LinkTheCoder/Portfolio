import React from 'react';
import Portfolio from './Portfolio';
import TrashModal from './Trash';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Image from 'next/image';
import ShortcutIcon from '../../../public/img/Shortcut_Icon.png';

const Bar = () => {
    const [showModal, setShowModal] = React.useState(false);
  return (
<aside className="w-64" aria-label="Sidebar">
   <div className="px-9 py-20 overflow-y-auto rounded bg-transparent">
      <ul className='space-y-10'>
         {/* TRASH */}
         <li>
         <TrashModal/>
          </li>

{/* ABOUT ME*/}
      <li>
      <AboutMe/>
         </li>

         {/* PORTFOLIO */}
         <li>
     <Portfolio/>
         </li>

         {/* ARTFOLIO SHORTCUT */}
         <li>
         <a href="https://artfolio.linkthecoder.net/" target="_blank" rel="noopener noreferrer" className="inline-block text-white rounded hover:bg-white/20">
            <Image className="w-16 h-auto max-w-full" src={ShortcutIcon} alt="Artfolio shortcut" />
            <p>Artfolio</p>
         </a>
         </li>

      </ul>
   </div>
</aside>
  );
};

export default Bar;
