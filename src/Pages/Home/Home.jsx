import React, { useRef, useState, useEffect } from 'react';
import ModelViewer from '../../components/ModelViewer';
import toast from 'react-hot-toast';

function Home() {
  const emailRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    emailRef.current.value = '';
    try {
      toast.success("Thanks for Connecting! 🎉", {
        duration: 4000,
        style: {
          background: '#10b981',
          color: '#ffffff',
        },
      });
      const response = await fetch('https://website-backend-aokp.onrender.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue }),
      });

      if (response.ok) {
        
      } else {
        console.error('Error sending email', response);
        toast.error("Oops! Something went wrong. Please try again.", {
          duration: 4000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Network error. Please check your connection and try again.", {
        duration: 4000,
      });
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Model */}
      <div className='absolute inset-0 -z-10'>
        <div className="relative w-full h-full">
          {/* Gradient overlay for better contrast in light mode */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 dark:bg-transparent z-10"></div>
          <div className="opacity-20 dark:opacity-40">
            <ModelViewer className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Hero Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Main Title */}
            <div className="space-y-6 mb-12">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-800 dark:text-gray-300">
                <span className="block">Welcome! I'm</span>
                <span className="block bg-gradient-to-r from-[#279AF1] to-blue-400 bg-clip-text text-transparent">
                  Dev Mittal
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="max-w-3xl mx-auto space-y-6 mb-12">
                <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm passionate about building innovative solutions 💡, exploring new technologies, and bringing ideas to life ✨. Whether you're here to collaborate 🤝, get inspired, or just say hi 👋, I'd love to hear from you. Let's connect and make something amazing happen!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="max-w-md mx-auto">
                <div className="bg-white/20 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                    Let's Connect! 💬
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        ref={emailRef}
                        name='email'
                        type="email"
                        id="email"
                        placeholder="Please Enter Your Email"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#279AF1]/50 focus:border-[#279AF1]/50 transition-all duration-300"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#279AF1] to-blue-500 hover:from-[#1e80d1] hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#279AF1]/50"
                    >
                      Done
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
