import React from 'react';
import ProjectCard from './ProjectCard'; 
const ProjectsPage = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
      imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      tags: ['Macbook', 'Apple', 'Laptop'],
      link: '',
    },
    {
      title: 'Password Generator',
      description: 'A simple project which fetches currency conversion rate and country flag using API calls',
      imageUrl: '/proj2.png',
      tags: ['Javescript', 'HTML', 'CSS'],
      link: 'https://github.com/devmit29/Password-Generator',
    },
    {
      title: 'Project 3',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://https://www.google.com/url?sa=i&url=https%3A%2F%2Fcolorlib.com%2Fwp%2Fbest-ecommerce-website-builder%2F&psig=AOvVaw3Mv6rAsiRZRyBn9HB4ZjrQ&ust=1720171601334000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCIyN2IjYcDFQAAAAAdAAAAABAc.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Ftopics%2Fecommerce-website%3Fl%3Dhtml&psig=AOvVaw3Mv6rAsiRZRyBn9HB4ZjrQ&ust=1720171601334000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCIyN2IjYcDFQAAAAAdAAAAABAJ',
      tags: ['Tag1', 'Tag2', 'Tag3'],
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-10 pb-28">
        <h1 className="text-3xl rounded-3xl border-[#F7F7FF] font-sans border-2 font-bold text-center w-fit mx-auto px-4 py-4 my-8">Projects</h1>
      <div className="grid grid-cols-1 mx-auto px-auto sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
