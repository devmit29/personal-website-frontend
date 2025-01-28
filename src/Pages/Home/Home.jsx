
import React, { useRef } from 'react';


function Home() {

  const emailRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    emailRef.current.value = '';
    try {
      const response = await fetch('https://website-backend-aokp.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue }),
      });

      if (response.ok) {
        alert("Thanks for Connecting!");
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
}

    return (
      <>
        {/* <div className="bg-[#000]"> */}
        <div className='flex justify-center xl:justify-start max-w-[1440px] mx-auto items-center '>
          <div className="animate-appear lg:pr-96 xl:px-8 ">
            <div className="max-w-2xl mx-auto pt-64 pb-24 sm:pt-96 lg:pt-80 lg:pb-32 xl:pt-72 xl:pb-32">
              <div className="text-center md:-skew-y-3">
              <h1 className="text-5xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white transition-shadow">
                Welcome! I'm Dev Mittal 🚀
              </h1>
              <p className="mt-6 text-base font-medium sm:text-lg leading-7 text-gray-200">
                I'm passionate about building innovative solutions 💡, exploring new technologies, and bringing ideas to life ✨. Whether you're here to collaborate 🤝, get inspired, or just say hi 👋, I’d love to hear from you. Let’s connect and make something amazing happen!
              </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <form id='my-form' onSubmit={handleSubmit} className='flex gap-2 flex-col sm:flex-row'>
                    <input
                      ref={emailRef} name='email' type="email" id="email" placeholder="Please Enter Your Email" className="rounded-md text-black outline-none w-auto sm:w-auto px-3.5 py-2.5 bg-slate-50" />
                    <button
                      type="submit" className="rounded-md max-sm:w-1/2 max-sm:m-auto bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Done
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-0" aria-hidden="true">
              <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#171135] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
            </div> */}
          </div>
        <img src='/myimg.svg' alt='myimg'
          className="
          absolute 
          animate-appear
          transition-shadow
          top-0 
          right-0
          w-auto 
          h-auto 
          -z-10
        " />
        </div>
          </>
    
    );
}

export default Home;
