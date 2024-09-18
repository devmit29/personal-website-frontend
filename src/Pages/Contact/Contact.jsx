import React, { useState, useId } from 'react'

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
        alert("Thanks for connecting, I'll reach out to you soon");
        setEmail('');
        setName('');
        setPhone('');
        setMessage('');
      } else {
        console.error('Failed to save contact information');
      }
    }
    catch (error) {
      console.error("Error:", error);
    }
  }

  const nameId = useId()
  const emailId = useId()
  const phoneId = useId()
  const msgId = useId()


  return (
    <>
      <div className="h-max flex animate-appear flex-col items-center p-4">
        <h1 className="text-3xl rounded-3xl border-[#F7F7FF] font-sans border-2 font-bold text-center w-fit mx-auto px-4 py-4 my-8">
        Connect with Me</h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white/40 p-8 rounded-3xl shadow-md">
        <div className="mb-4">
          <label className="block text-blue-50 text-md font-bold mb-2" htmlFor={nameId}>
            Name
          </label>
            <input
              required
              className="w-full px-3 py-2  text-gray-700 border rounded-lg focus:outline-none"
              type="text"
              id={nameId}
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-59 text-md font-bold mb-2" htmlFor={emailId}>
            Email
          </label>
            <input
              required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            type="email"
            id="emailId"
            name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
          />
          </div>
          <div className="mb-4">
          <label className="block text-blue-59 text-md font-bold mb-2" htmlFor={phoneId}>
            Phone Number
          </label>
            <input
              required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            type="tel"
            id={phoneId}
            name="mobile"
              placeholder="Phone Number"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-blue-50 text-md font-bold mb-2" htmlFor={msgId}>
            Message
          </label>
            <textarea 
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            id={msgId}
            name="message"
            placeholder="Your Message"
              rows="4"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
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