import React from 'react'

function Contact() {
  return (
    <>
      <div className="h-max flex flex-col items-center p-4">
        <h1 className="text-3xl rounded-3xl border-[#F7F7FF] font-sans border-2 font-bold text-center w-fit mx-auto px-4 py-4 my-8">
        Connect with Me</h1>
      
      <form className="w-full max-w-lg bg-white/40 p-8 rounded-3xl shadow-md">
        <div className="mb-4">
          <label className="block text-blue-50 text-md font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2  text-gray-700 border rounded-lg focus:outline-none"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-59 text-md font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
          </div>
          <div className="mb-4">
          <label className="block text-blue-59 text-md font-bold mb-2" htmlFor="email">
            Phone Number
          </label>
          <input
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Phone Number"
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-50 text-md font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
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