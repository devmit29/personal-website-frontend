import React, { useState } from 'react';

const ProjectCard = ({ imageUrl, title, description, tags, link, linkTitle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group w-[324px] xl:w-[372px] rounded-xl bg-slate-50 dark:bg-gray-800/50 backdrop-blur-sm border border-[#F7F7FF]/20 dark:border-gray-700/50 z-50 justify-center mx-auto ease-out hover:shadow-2xl hover:scale-[1.01] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-[200px] p-2 rounded-2xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg text-black dark:text-white font-semibold transition-colors duration-300 group-hover:text-[#EA526F]">
          {title}
        </h1>
        <p className="mt-3 min-h-[70px] max-h-[70px] font-normal text-sm text-gray-800 dark:text-gray-300 line-clamp-3">
          {description}
        </p>
        <div className="mt-4 min-h-[30px] flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block rounded-full bg-[#EA526F]/70 dark:bg-[#EA526F]/50 px-3 py-1 text-[12px] font-semibold text-gray-950 dark:text-white hover:bg-[#EA526F] hover:scale-[1.01]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              #{tag}
            </span>
          ))}
        </div>
        <button
          className="mt-4 w-full rounded-xl bg-black dark:bg-gray-700 px-2 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-black/80 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA526F]">
          <a
            href={link} 
            target='_blank'
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            {linkTitle}
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
