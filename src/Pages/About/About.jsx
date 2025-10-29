import React, { useEffect, useRef, useState } from 'react'

function About() {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.1 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <>
    <div className="container mx-auto min-h-fit px-auto mb-auto animate-fadeIn pt-10 pb-4">
      <h1 className="text-3xl rounded-3xl border-[#F7F7FF] dark:border-gray-700 font-sans border-2 font-bold text-center w-fit mx-auto px-6 py-4 my-8 text-black dark:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 animate-scaleIn">
        About Me
      </h1>
    </div>

    <div className="container max-w-[1440px] flex flex-col items-center justify-center mx-auto px-auto pb-4">
      <div 
        ref={el => sectionRefs.current[0] = el}
        className={`flex p-2 flex-grow flex-col items-center md:flex-row md:justify-center md:items-start gap-4 transition-all duration-700 ${
          visibleSections.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="sm:w-1/2 max-sm:w-full max-md:w-3/4 rounded-xl p-1 group">
          <img
            src="/about-me/img1.webp" 
            alt="Dev Mittal"
            className="max-h-96 w-full object-cover rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105"
          />
        </div>
        <div className="sm:w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-4xl capitalize font-Rubik font-semibold mb-4 text-black dark:text-white">Who Am I & My Vision</h2>
          <p className="font-sans pt-2 text-left text-xl text-gray-800 dark:text-gray-300">
            I am currently pursuing my Final year at <strong className="dark:text-[#279AF1] text-slate-100">The LNM Institute of Information Technology, Jaipur.</strong> I did my schooling from St. Anselm's Sr. Sec. School, Ajmer.<br />
            The most important quality which I have inherited from my <em>Parents</em> is <em className="dark:text-[#279AF1] text-slate-100">Be honest to yourself.</em> Your attitude and values will always be the driving force behind your success. I am a <strong>highly-motivated</strong> and <strong>hardworking</strong> individual who is always ready to learn new things and take on new challenges.<br />
            <br/>Mr. Dependable - Mahi is my greatest inspiration! His passion for the nation motivates me to make a meaningful contribution to my own. You don't have to be an IAS officer, politician, or similar to make a difference for your country. Whatever career path you choose, you can create a positive impact on the nation.
          </p>
        </div>
      </div>

      <div 
        ref={el => sectionRefs.current[1] = el}
        className={`flex p-4 lg:'h-80 mt-14 mb-10' flex-grow rounded-2xl flex-col items-center md:flex-row-reverse md:items-stretch gap-4 transition-all duration-700 ${
          visibleSections.includes(1) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        <div className="sm:w-1/2 max-sm:w-full max-md:w-3/4 rounded-xl p-1 group">
          <img
            src="/about-me/img2.webp"
            alt="Coding"
            className="max-h-96 w-full object-cover rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105"
          />
        </div>
        <div className="sm:w-3/4 p-2 pt-0 text-center md:text-center">
          <h2 className="text-4xl capitalize font-Rubik font-semibold md:text-right mb-4 text-black dark:text-white">My Achievements</h2>
          <ul className="text-left ml-4 sm:ml-0 font-sans pt-2 gap-1 list-disc text-xl text-gray-800 dark:text-gray-300">
            <li className="my-1">Headed Events and PR team of our college's annual cultural fest - Vivacity.</li>
            <li className="my-1">Achieved distinction in Trinity College London's Grade 3 exam in the "Electronic Keyboard" category.</li>
            <li className="my-1">Received a 100% scholarship for the certification course by OEMs like Adobe, Apple, WhiteHat, etc. through RCAT Quizzathon-4 in Jaipur.</li>
            <li className="my-1">Cleared the exam conducted by Adobe and received the Certificate of "Adobe Certified Professional in Web Authoring".</li>
            <li className="my-1">Captain of the school cricket team.</li>
          </ul>
        </div>
      </div>

      <div 
        ref={el => sectionRefs.current[2] = el}
        className={`flex p-4 lg:'h-80 mt-14 mb-10' flex-grow rounded-2xl flex-col items-center md:flex-row md:items-stretch gap-4 transition-all duration-700 ${
          visibleSections.includes(2) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        <div className="sm:w-1/2 max-sm:w-full max-md:w-3/4 rounded-xl p-1 group">
          <img
            src="/about-me/img3.webp"
            alt="Hobbies"
            className="max-h-96 w-full object-cover rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105"
          />
        </div>
        <div className="sm:w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-4xl capitalize font-Rubik font-semibold mb-4 text-black dark:text-white">Hobbies</h2>
          <p className="font-sans text-left pt-2 text-xl text-gray-800 dark:text-gray-300">
            Music has been a passion of mine since childhood, especially the piano. I loved playing the keyboard during school assemblies and being part of the school choir. Along with my love for music, I'm deeply interested in exploring new technologies and products.<br />
            Gaming, both on mobile and PC, is another passion of mine as it sparks creativity and problem-solving.<br/>
            In my free time, I enjoy exploring new places, (<em className="dark:text-[#279AF1] text-slate-100"> I love road trips </em>), staying updated on political news, and refining my skills through certifications and courses.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About

