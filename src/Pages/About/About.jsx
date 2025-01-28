import React from 'react'
import img1 from '../../assets//about-me/img1.webp'
import img2 from '../../assets//about-me/img2.webp'
import img3 from '../../assets//about-me/img3.webp'

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
        <div className='sm:w-1/2 max-sm:w-full max-md:w-3/4 rounded-xl p-1'>
          <img
            src={img1}
            alt="Dev Mittal"
            className="max-h-96 w-full object-cover rounded-xl"
          />
        </div>
        <div className="sm:w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-4xl capitalize font-Rubik font-semibold text-white mb-4">Who Am I & My Vision</h2>
          <p className="text-[#F7F7FF]/85 font-sans pt-2 text-left text-xl">
            I am currently pursuing my Final year at <strong className='text-[#279AF1]'>The LNM Institute of Information Technology, Jaipur.</strong> I did my schooling from St. Anselm's Sr. Sec. School, Ajmer.<br />
            The most important quality which I have inherited from my <em>Parents</em> is <em className='text-[#279AF1]'><i>Be honest to yourself.</i></em> Your attitude and values will always be the driving force behind your success. I am a <strong>highly-motivated</strong> and <strong>hardworking</strong> individual who is always ready to learn new things and take on new challenges.<br />
            <br/>Mr. Dependable—Mahi—is my greatest inspiration! His passion for the nation motivates me to make a meaningful contribution to my own. You don't have to be an IAS officer, politician, or similar to make a difference for your country. Whatever career path you choose, you can create a positive impact on the nation.
            
          </p>
        </div>
      </div>


      <div className="flex p-4 lg:'h-80 mt-14 mb-10' flex-grow rounded-2xl flex-col items-center md:flex-row-reverse md:items-stretch gap-4">
        <div className='sm:w-1/2 max-sm:w-full max-md:w-3/4 rounded-xl p-1'>
          <img
            src={img2}
            alt="Coding"
            className="max-h-96 w-full object-cover rounded-xl"
          />
        </div>
        <div className="w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-4xl capitalize font-Rubik font-semibold text-white md:text-right mb-4">My Achievements</h2>
          <ul className='text-[#F7F7FF]/85 text-left font-sans pt-2 gap-1 list-disc text-xl'>
          <li className='my-1'>Headed Events and PR team of our college's annual cultural fest - Vivacity.</li>
          <li className='my-1'>Achieved distinction in Trinity College London's Grade 3 exam in the "Electronic Keyboard" category.</li>
          <li className='my-1'>Received a 100% scholarship for the certification course by OEMs like Adobe, Apple, WhiteHat, etc. through RCAT Quizzathon-4 in Jaipur.</li>
          <li className='my-1'>Cleared the exam conducted by Adobe and received the Certificate of "Adobe Certified Professional in Web Authoring".</li>
          <li className='my-1'>Captain of the school cricket team.</li>

          </ul>
        </div>
      </div>


      <div className="flex p-4 lg:'h-80 mt-14 mb-10' flex-grow rounded-2xl flex-col items-center md:flex-row md:items-stretch gap-4 ">
        <div className='sm:w-1/2 max-sm:w-full max-md:w-3/4 rounded-xl  p-1'>
          <img
            src={img3}
            alt="Hobbies"
            className="max-h-96 w-full object-cover rounded-xl"
            />
        </div>
        <div className="sm:w-3/4 p-2 pt-0 text-center md:text-left">
          <h2 className="text-4xl capitalize font-Rubik font-semibold text-white mb-4">Hobbies</h2>
            <p className="text-[#F7F7FF]/85 font-sans text-left pt-2 text-xl">
              Music has been a passion of mine since childhood, especially the piano. I loved playing the keyboard during school assemblies and being part of the school choir. Along with my love for music, I'm deeply interested in exploring new technologies and products.<br />
              Gaming, both on mobile and PC, is another passion of mine as it sparks creativity and problem-solving.<br/>
              In my free time, I enjoy exploring new places, (<i className='text-[#279AF1]'> I love road trips </i>), staying updated on political news, and refining my skills through certifications and courses.
          </p>
        </div>
      </div>
      </div>
      </>
  );

};

export default About

