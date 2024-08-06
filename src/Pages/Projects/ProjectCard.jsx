import React from 'react';

const ProjectCard = ({ imageUrl, title, description, tags, link }) => {
  return (
    <div className="w-[324px] xl:w-[372px] hover:opacity-90 hover:-translate-y-2 rounded-xl bg-slate-50 bg-blend-difference border-[#F7F7FF] z-50 justify-center mx-auto">
      <img
        src={imageUrl}
        alt={title}
        className="h-[200px] p-1 rounded-2xl w-full object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text- text-black font-semibold">
          {title}{' '}
        </h1>
        <p className="mt-3 min-h-[70px] text-sm text-gray-800">{description}</p>
        <div className="mt-4 min-h-[70px]">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="mb-2 mr-2 inline-block rounded-full bg-[#EA526F]/70 px-3 py-1 text-[12px] font-semibold text-gray-950"
            >
              #{tag}
            </span>
          ))}
        </div>
        <button
          className="mt-4 w-full rounded-xl bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          <a
            href={link} 
            target='_blank'
        >
          GitHub Link
        </a>
          </button>
      </div>
    </div>
  );
};

export default ProjectCard;
