import React from 'react';
import Portfolio from './Portfolio';
import TrashModal from './Trash';
import AboutMe from './AboutMe';
import Skills from './Skills';

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

          {/* RESUME */}
          <li>
     <Skills/>
         </li>
      </ul>
   </div>
</aside>
  );
};

export default Bar;
