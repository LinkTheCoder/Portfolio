import React from 'react';
import Image from 'next/image';

const Projects = (props) => {
  return (
    <div className="max-w-sm mb-2 overflow-hidden border rounded border-slate-400">
      <div className="flex flex-col items-center px-6 py-2">
        <Image unoptimized className="hidden w-3/4 mx-auto mt-2 mb-2 rounded-md md:block" src={props.src} alt="image description" />
        <a className='text-lg font-bold text-center text-blue-400 no-underline uppercase hover:underline' href={props.href}>{props.title}</a>
        <p className="text-base text-slate-400">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Projects;
