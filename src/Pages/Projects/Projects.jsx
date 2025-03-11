import React, { useEffect, useState } from 'react';
import ProjectCard from '../../components/projectCard/ProjectCard'; 
const ProjectsPage = () => {

  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   const fetchProject = async () => {
  //     try{
  //       const response = await fetch('https://api.github.com/users/devmit29/repos');
  //       const data = await response.json();
  //       console.log(data);
  //       const projectsData = data.map(repo => ({
  //         title: repo.name,
  //         description: repo.description,
  //         imageUrl: repo.owner.avatar_url,
  //         tags: repo.topics || [],
  //         link: repo.html_url,
  //       }));
  //       setProjects(projectsData);
  //     }
  //     catch (error) {
  //       console.error("error in fetching:", error);
  //     }
  //   }
  //   fetchProject();
  // }, []);

  // const projects = [
  //   {
  //     title: 'Project Management Tool',
  //     description: 'Developed an end-to-end project and Task management tool for improving team collaboration and productivity.',
  //     imageUrl: '/Project_Management.webp',
  //     tags: ['Next.js', 'Hono', 'Appwrite', 'TailwindCSS', 'OAuth'],
  //     link: 'https://jira-clone-virid-five.vercel.app',
  //     linkTitle: 'Website Link',
  //   },
  //   {
  //     title: 'Song Recommender',
  //     description: 'Recommends you songs based on weather predictions of your travel location.',
  //     imageUrl: '/songrecommender.webp',
  //     tags: ['Next.js', 'WeatherStackAPI', 'GooglePlacesAPI', 'YoutubeDataAPI'],
  //     link: 'https://song-recommender-one.vercel.app/',
  //     linkTitle: 'Website Link',
  //   },
  //   {
  //     title: 'E-commerce (Food)',
  //     description: 'I was the Project Manager in developing end-to-end Full-Stack website for capmus Parlor for seamless delivery system.',
  //     imageUrl: '/Amul-min.webp',
  //     tags: ['ReactJS', 'NodeJS', 'Express', 'MongoDB'],
  //     link: 'https://ecom-frontend-4x7f.onrender.com',
  //     linkTitle: 'Website Link',
  //   },
  //   {
  //     title: 'Food App (Frontend Only)',
  //     description: 'Developed a frontend Food delivery website.',
  //     imageUrl: '/front-end.webp',
  //     tags: ['HTML', 'CSS', 'Javascript'],
  //     link: 'https://github.com/devmit29/food-app-frontend',
  //     linkTitle: 'Github Link',
  //   },
  //   {
  //     title: 'Currency Convertor',
  //     description: 'A simple project which fetches currency conversion rate and country flag using API calls',
  //     imageUrl: '/proj2.png',
  //     tags: ['Javescript', 'HTML', 'CSS'],
  //     link: 'https://github.com/devmit29/JsSmallProjects/tree/main/Curruency%20Convertor',
  //     linkTitle: 'GitHub Link',
  //   },
  //   {
  //     title: 'To-Do App',
  //     description: 'A Basic To-Do app which stores Tasks in LocalStorage of the Browser',
  //     imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  //     tags: ['ReactJS', 'ContextAPI', 'Javescript'],
  //     link: 'https://github.com/devmit29/to-do-app',
  //     linkTitle: 'GitHub Link',
  //   },
  //   {
  //     title: 'Rock Paper Scissors',
  //     description: 'A Basic JS game of Rock Paper Scissors',
  //     imageUrl: '/RPS.png',
  //     tags: ['HTML', 'CSS', 'Javescript'],
  //     link: 'https://github.com/devmit29/JsSmallProjects/tree/main/RockPaperScissors',
  //     linkTitle: 'GitHub Link',
  //   },
    
  // ];

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
    <div id='projects' className="container max-w-[1440px] mx-auto px-4 animate-appear pt-10 pb-28">
        <h1 className="text-3xl rounded-3xl border-[#F7F7FF] font-sans border-2 font-bold text-center w-fit mx-auto px-4 py-4 my-8">Projects</h1>
      {/* <div className="grid grid-cols-1 mx-auto px-auto md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2"> */}
      {loading && (
        <div className='min-h-screen'>
          <p className='text-4xl p-4 text-center'>Loading...
          </p>
          </div>
      )}
      {!loading && projects.length === 0 ? (
        <div className='min-h-screen'>
          <p className='text-4xl p-4 text-center'>No projects to show</p>
        </div>
      ): (<div className="flex flex-wrap justify-around gap-x-1 gap-y-8 mx-auto pt-2">  
      {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>)}
    </div>
  );
};

export default ProjectsPage;
