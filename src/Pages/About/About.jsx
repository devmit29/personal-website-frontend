import React from 'react'

function About() {
  return (
    <div className="container mx-auto min-h-fit px-auto mb-auto pt-10 pb-4">
      <h1 className="text-3xl rounded-3xl border-[#F7F7FF] font-sans border-2 font-bold text-center w-fit mx-auto px-4 py-4 my-8">
        About Me
      </h1>


      <div className="flex p-2 lg:'h-80 mt-14 mb-10' flex-grow rounded-2xl flex-col items-center md:flex-row md:items-stretch gap-4 ">
        <div className='w-1/2 max-sm:w-full max-md:3/4 rounded-xl  p-1'>
          <img
            src="/SIRI2077-min.JPG" 
            alt="Dev Mittal"
            className="sm:h-80 lg:h-full sm:w-full object-cover rounded-xl"
          />
        </div>
        <div className="sm:w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-3xl font-serif font-semibold text-white mb-4">Who Am I & My Vision</h2>
          <p className="text-[#F7F7FF]/85 pt-2 text-xl">
            I am a student currently pursuing my Final year at <strong className='text-[#279AF1]'>The LNM institute of information Technology, Jaipur.</strong> I did my Schooling from St. Anselm's Sr. Sec. School, Ajmer.<br />
            The most important quality which I have inherited from my <em>Parents</em> is <em className='text-[#279AF1]'><i>Be Honest to yourself.</i></em> No matter how successful you become your attitude and your values will always drive you to the path of success.
            <br/>Mr. Dependable - Mahi, is my greatest inspiration! His passion for the nation inspires me to make a significant contribution to my own. You don't need to be an IAS officer, politician, etc. to make a difference for your country. Whatever job you choose to pursue, you can make a positive impact on your nation.
            
          </p>
        </div>
      </div>


      <div className="flex p-4 lg:'h-80 mt-14 mb-10' flex-grow rounded-2xl flex-col items-center md:flex-row-reverse md:items-stretch gap-4">
        <div className='w-1/2 max-sm:w-full max-md:3/4 rounded-xl p-1'>
          <img
            src="/image-min.jpg"
            alt="Coding"
            className="sm:h-80 lg:h-96 sm:w-full object-fill rounded-xl"
          />
        </div>
        <div className="w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-3xl font-serif font-semibold text-white md:text-right mb-4">My Achievements</h2>
          <ul className='text-[#F7F7FF]/85 text-left mx-auto pt-2 gap-1 list-disc text-xl'>
            <li className='my-1'>Headed Events and PR team of our college's annual Cultural Fest - Vivacity.</li>
            <li className='my-1'>Achieved distinction in Trinity College London's Grade 3 in "Electronic Keyboard" category.  </li>
            <li className='my-1'>Got 100% scolarship for Certification Course by OEMs like Adobe, Apple, WhiteHat etc. through RCAT Quizzathon-4 in Jaipur.</li>
            <li className='my-1'>Cleared Exam Conducted by Adboe and got Certificate of - " Adbode Certified Professional in Web Authoring through DreamWeaver.</li>
            <li className='my-1'>Captain of School Cricket Team.</li>
            
          </ul>
        </div>
      </div>


      <div className="flex p-4 lg:'h-80 mt-14 mb-10' flex-grow rounded-2xl flex-col items-center md:flex-row md:items-stretch gap-4 ">
        <div className='w-1/2 max-sm:w-full max-md:3/4 rounded-xl  p-1'>
          <img
            src="/Piano-min.jpg"
            alt="Hobbies"
            className="sm:h-80 lg:h-full sm:w-full object-cover rounded-xl"
            />
        </div>
        <div className="sm:w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-3xl font-serif font-semibold text-white mb-4">Hobbies</h2>
          <p className="text-[#F7F7FF]/85 pt-2 text-xl">
            Right from my Childhood I am fond of Music especially Piano. I loved playing Keyborad in School assembly, School Choir, and also uploading Youtube Videos.
            I am a techie who loves to read about new Technologies and new Products. I also like playing Mobile and PC games.
            <br />In my free time, I enjoy exploring new places (<i className='text-[#279AF1]'> I love Road Trips </i>) ,reading books, and working on side projects.
            
          </p>
        </div>
      </div>
    </div>
  );

};

export default About

