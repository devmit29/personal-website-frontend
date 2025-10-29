import React, { useEffect, useState } from 'react';
import ProjectCard from '../../components/projectCard/ProjectCard'; 

// Skeleton loader component for project cards
const ProjectCardSkeleton = () => (
  <div className="w-[324px] xl:w-[372px] rounded-xl bg-slate-50 dark:bg-gray-800/50 border border-[#F7F7FF]/20 dark:border-gray-700/50 z-50 justify-center mx-auto overflow-hidden animate-pulse">
    <div className="h-[200px] bg-gray-200 dark:bg-gray-700 m-2 rounded-2xl skeleton" />
    <div className="p-4 space-y-3">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded skeleton w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded skeleton" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded skeleton w-5/6" />
      </div>
      <div className="flex gap-2 pt-2">
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full skeleton" />
        <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full skeleton" />
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full skeleton" />
      </div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-xl skeleton mt-4" />
    </div>
  </div>
);

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('https://website-backend-aokp.onrender.com/api/projects');
        const data = await response.json();
        const projectsData = data.map(project => ({
          title: project.title,
          description: project.description,
          imageUrl: project.imageUrl,
          tags: project.tags || [],
          link: project.link,
          linkTitle: project.linkTitle,
        }));
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects();
  }, [])

  return (
    <div id='projects' className="container max-w-[1440px] mx-auto px-4 animate-fadeIn pt-10 pb-28">
      <h1 className="text-3xl rounded-3xl border-[#F7F7FF] dark:border-gray-700 font-sans border-2 font-bold text-center w-fit mx-auto px-6 py-4 my-8 text-black dark:text-white transition-all duration-300 hover:shadow-lg">
        Projects
      </h1>
      
      {loading ? (
        <div className='min-h-screen'>
          <div className="flex flex-wrap justify-around gap-x-1 gap-y-8 mx-auto pt-2">
            {[...Array(6)].map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          </div>
        </div>
      ) : projects.length === 0 ? (
        <div className='min-h-screen flex items-center justify-center'>
          <div className="text-center ">
            <p className='text-4xl p-4 font-bold text-gray-600 dark:text-gray-400'>No projects to show</p>
            <p className="text-lg text-gray-500 dark:text-gray-500">Check back later for updates!</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-around gap-x-1 gap-y-8 mx-auto pt-2">  
          {projects.map((project, index) => (
            <div 
              key={index} 
              className=""
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
