import React from 'react'

function About() {
  return (
    <div className="container mx-auto min-h-fit px-auto pt-10 pb-4">
      <h1 className="text-3xl rounded-3xl border-[#F7F7FF] font-sans border-2 font-bold text-center w-fit mx-auto px-4 py-4 my-8">
        About Me 
      </h1>
      <div className="flex p-4 md:h-72 flex-grow rounded-2xl flex-col items-center md:flex-row md:items-stretch gap-4 ">
        <div className='w-1/4 rounded-xl  p-1'>
          <img
            src="/dev2.JPG" 
            alt="Dev Mittal"
            className="sm:h-60 sm:w-96 rounded-xl"
          />
        </div>
        <div className="sm:w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-4">Who Am I</h2>
          <p className="text-white text-lg">
            I am a student currently pursuing my Final year from The LNM institute of information Technology, Jaipur. I did my Schooling from St. Anselm's School, Ajmer.
          </p>
        </div>
      </div>
      <div className="flex p-4 md:h-72 flex-grow rounded-2xl flex-col items-center md:flex-row-reverse md:items-stretch gap-4">
        <div className='w-1/4 rounded-xl  p-1'>
          <img
            src="/dev1.png"
            alt="Coding"
            className="sm:h-64 sm:w-96 rounded-xl object-cover mb-4 md:mb-0"
          />
        </div>
        <div className="sm:w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white md:text-right mb-4">My Vision</h2>
          <p className="text-white">
            Over the years, I've honed my skills in various web technologies and frameworks. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="flex p-4 md:h-72 flex-grow rounded-2xl flex-col items-center md:flex-row md:items-stretch gap-4 ">
        <div className='w-1/4 rounded-xl  p-1'>
          <img
            src="/image.png"
            alt="Hobbies"
            className="sm:h-64 sm:w-96 rounded-xl object-cover mb-4 lg:mb-0 lg:mr-8"
            />
          </div>
          <div className="sm:w-3/4 p-2 pt-0 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-4">Hobbies</h2>
        <p className="text-white">
            In my free time, I enjoy exploring new places, reading tech blogs, and working on side projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );

};

export default About