import React, { useState, useId } from 'react'
import toast from 'react-hot-toast';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactsData = {
      name,
      email,
      phone,
      message,
    }
    try {
      const response = await fetch('https://website-backend-aokp.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactsData),
      });
      if (response.ok) {
        toast.success("Thanks for connecting! I'll reach out to you soon 🚀", {
          duration: 4000,
          style: {
            background: '#10b981',
            color: '#ffffff',
          },
        });
        setEmail('');
        setName('');
        setPhone('');
        setMessage('');
      } else {
        console.error('Failed to save contact information');
        toast.error("Failed to send message. Please try again.", {
          duration: 4000,
        });
      }
    }
    catch (error) {
      console.error("Error:", error);
      toast.error("Network error. Please check your connection and try again.", {
        duration: 4000,
      });
    }
  }

  const nameId = useId()
  const emailId = useId()
  const phoneId = useId()
  const msgId = useId()


  return (
    <>
      <div className="min-h-screen flex animate-fadeIn flex-col items-center p-4 pb-16">
        <h1 className="text-3xl rounded-3xl border-[#F7F7FF] dark:border-gray-700 font-sans border-2 font-bold text-center w-fit mx-auto px-6 py-4 my-8 text-black dark:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 animate-scaleIn">
          Connect with Me
        </h1>
      
        <form 
          onSubmit={handleSubmit} 
          className="w-full max-w-lg glass-dark backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-200/20 dark:border-gray-700/50 transition-all duration-500 hover:shadow-[#279AF1]/20 hover:shadow-2xl animate-fadeInUp"
        >
          <div className="mb-6 group">
            <label className="block dark:text-blue-50 text-slate-50 text-md font-bold mb-2 transition-all duration-300 group-focus-within:text-[#279AF1]" htmlFor={nameId}>
              Name
            </label>
            <input
              required
              className="w-full px-4 py-3 text-gray-700 dark:text-white bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#279AF1] focus:border-transparent focus:scale-[1.02] hover:border-[#279AF1]"
              type="text"
              id={nameId}
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div className="mb-6 group">
            <label className="block dark:text-blue-50 text-slate-50 text-md font-bold mb-2 transition-all duration-300 group-focus-within:text-[#279AF1]" htmlFor={emailId}>
              Email
            </label>
            <input
              required
              className="w-full px-4 py-3 text-gray-700 dark:text-white bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#279AF1] focus:border-transparent focus:scale-[1.02] hover:border-[#279AF1]"
              type="email"
              id="emailId"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6 group">
            <label className="block dark:text-blue-50 text-slate-50 text-md font-bold mb-2 transition-all duration-300 group-focus-within:text-[#279AF1]" htmlFor={phoneId}>
              Phone Number
            </label>
            <input
              required
              className="w-full px-4 py-3 text-gray-700 dark:text-white bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#279AF1] focus:border-transparent focus:scale-[1.02] hover:border-[#279AF1]"
              type="tel"
              id={phoneId}
              name="mobile"
              placeholder="Phone Number"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>

          <div className="mb-6 group">
            <label className="block dark:text-blue-50 text-slate-50 text-md font-bold mb-2 transition-all duration-300 group-focus-within:text-[#279AF1]" htmlFor={msgId}>
              Message
            </label>
            <textarea 
              required
              className="w-full px-4 py-3 text-gray-700 dark:text-white bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#279AF1] focus:border-transparent focus:scale-[1.02] hover:border-[#279AF1] resize-none"
              id={msgId}
              name="message"
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-gradient-to-r from-blue-500 to-[#279AF1] hover:from-blue-600 hover:to-[#1e80d1] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#279AF1] focus:ring-offset-2 w-full"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact