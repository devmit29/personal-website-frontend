// import React from 'react'

// export default function Home() {
//   return (
//     <div className='w-full h-full mt-10 mx-3 px-2 flex justify-center'>
//       <div className='block h-56 w-84'>
//         <div className='flex items-center justify-cente text-3xl h-full'>
//           <p>Welcome to my Home</p>
//         </div>  
//       </div>
//     </div>
//   );
// }

// import React from 'react';

// function Home() {
//   return (
//     <>
// <div className="bg-white">
//   <div className="relative isolate px-6 pt-14 lg:px-8">
//     <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Data to enrich your online business</h1>
//         <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
//         <div className="mt-10 flex items-center justify-center gap-x-6">
//           <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
//         </div>
//       </div>
//     </div>
//     <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
//       <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
//     </div>
//   </div>
// </div>

//     </>
//   );
// }

// export default Home;



import React, { useState, useRef } from 'react';


function Home() {

  const emailRef = useRef(null);
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    setEmail(emailValue);
    
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue }),
      });

      if (response.ok) {
        alert("Thanks for Connecting!");
        setEmail('');
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
        <div>
          <div className="relative isolate h-auto px-4 sm:px-6 mt-3 pt-14 lg:px-8">
            <div className="max-w-2xl mx-auto py-40 sm:py-48">
              <div className="text-center sm:-skew-y-3">
                <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-white transition-shadow">
                  Hey! Welcome to my Website
                </h1>
                <p className="mt-6 text-base sm:text-lg leading-8 text-gray-200">
                  Please Feel Free to drop your email to connect with me.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <form id='my-form' onSubmit={handleSubmit} className='flex gap-2 flex-col sm:flex-row'>
                    <input
                      ref={emailRef} name='email' type="email" id="email" placeholder="Please Enter Your Email" className="rounded-md w-auto sm:w-auto px-3.5 py-2.5 bg-slate-50" />
                    <button
                      type="submit" className="rounded-md max-sm:w-1/2 max-sm:m-auto bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Done
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-0" aria-hidden="true">
              <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#171135] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
            </div>
          </div>
        </div>
      </>
    
    );
}

export default Home;
