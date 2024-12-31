import React from 'react'

function About() {
  return (
    <>
    <div className="container  mx-auto min-h-fit px-auto mb-auto animate-appear pt-10 pb-4">
      <h1 className="text-3xl rounded-3xl border-[#F7F7FF] font-sans border-2 font-bold text-center w-fit mx-auto px-4 py-4 my-8">
        About Me
      </h1>
    </div>

    <div className='container max-w-[1440px] flex flex-col items-center justify-center mx-auto px-auto animate-appear pb-4'>
      <div className="flex p-2 animate-my flex-grow flex-col items-center md:flex-row md:justify-center md:items-start gap-4 ">
        <div className='w-1/2 max-sm:w-full max-md:3/4 rounded-xl p-1'>
          <img
            src="/about-me/img1.webp" 
            alt="Dev Mittal"
            className="sm:h-80 sm:w-full object-cover rounded-xl"
          />
        </div>
        <div className="sm:w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-4xl font-Rubik font-semibold text-white mb-4">Who Am I & My Vision</h2>
          <p className="text-[#F7F7FF]/85 font-sans pt-2 text-xl">
            I am a student currently pursuing my Final year at <strong className='text-[#279AF1]'>The LNM Institute of Information Technology, Jaipur.</strong> I did my Schooling from St. Anselm's Sr. Sec. School, Ajmer.<br />
            The most important quality which I have inherited from my <em>Parents</em> is <em className='text-[#279AF1]'><i>Be Honest to yourself.</i></em> No matter how successful you become your attitude and your values will always drive you to the path of success.
            <br/>Mr. Dependable—Mahi—is my greatest inspiration! His passion for the nation motivates me to make a meaningful contribution to my own. You don't have to be an IAS officer, politician, or similar to make a difference for your country. Whatever career path you choose, you can create a positive impact on the nation.
            
          </p>
        </div>
      </div>


      <div className="flex p-4 lg:'h-80 mt-14 mb-10' flex-grow rounded-2xl flex-col items-center md:flex-row-reverse md:items-stretch gap-4">
        <div className='w-1/2 max-sm:w-full max-md:3/4 rounded-xl p-1'>
          <img
            src="/about-me/img2.webp"
            alt="Coding"
            className="sm:h-80 sm:w-full object-cover rounded-xl"
          />
        </div>
        <div className="w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-4xl font-Rubik font-semibold text-white md:text-right mb-4">My Achievements</h2>
          <ul className='text-[#F7F7FF]/85 text-left font-sans pt-2 gap-1 list-disc text-xl'>
            <li className='my-1'>Headed Events and PR team of our college's annual Cultural Fest - Vivacity.</li>
            <li className='my-1'>Achieved distinction in Trinity College London's Grade 3 in "Electronic Keyboard" category.  </li>
            <li className='my-1'>Got 100% scolarship for Certification Course by OEMs like Adobe, Apple, WhiteHat etc. through RCAT Quizzathon-4 in Jaipur.</li>
            <li className='my-1'>Cleared Exam Conducted by Adboe and got Certificate of - "Adbode Certified Professional in Web Authoring through DreamWeaver".</li>
            <li className='my-1'>Captain of School Cricket Team.</li>
          </ul>
        </div>
      </div>


      <div className="flex p-4 lg:'h-80 mt-14 mb-10' flex-grow rounded-2xl flex-col items-center md:flex-row md:items-stretch gap-4 ">
        <div className='w-1/2 max-sm:w-full max-md:3/4 rounded-xl  p-1'>
          <img
            src="/about-me/img3.webp"
            alt="Hobbies"
            className="sm:h-80 sm:w-full object-cover rounded-xl"
            />
        </div>
        <div className="sm:w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-4xl font-Rubik font-semibold text-white mb-4">Hobbies</h2>
            <p className="text-[#F7F7FF]/85 font-sans pt-2 text-xl">
              Right from my childhood, I have been fond of music, especially the piano. I loved playing the keyboard in school assemblies, the school choir, and also enjoyed uploading YouTube videos. I am a techie who loves reading about new technologies and products. Additionally, I enjoy playing mobile and PC games.<br/>
              In my free time, I like exploring new places (<i className='text-[#279AF1]'> I love road trips</i> ), reading books, and working on side projects.
            
          </p>
        </div>
      </div>
      </div>
      </>
  );

};

export default About

