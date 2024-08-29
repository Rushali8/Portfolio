import React, { useState } from 'react';

function Contact() {
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch('https://formspree.io/f/myzgodjl', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setIsSent(true);
        console.log(response);

        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      } else {
        console.error('Failed to send message');
      }
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });

    e.target.reset(); // Resets the form fields after submission
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">Contact Me</h2>
        <div className="max-w-lg mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
          <form onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-white">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-white">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-white">Message</label>
              <textarea
                name="message"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 rounded-lg font-semibold hover:bg-blue-600 text-white"
            >
              Send Message
            </button>
          </form>
          {isSent && (
            <div className="mt-4 text-center text-green-500 font-semibold">
              Message sent successfully!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
