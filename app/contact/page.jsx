"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const Contact = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    gsap.from(".contact-container", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "0d99f324-4190-4db8-8360-0fd0ed8ed2ac ");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="w-full py-32 px-6">
        <div className="w-[80vw] mx-auto contact-container">
          <h4 className="text-center mb-2 text-lg text-gray-300 font-Ovo">
            Connect with me
          </h4>
          <h2 className="text-center text-5xl font-extrabold text-white font-Ovo">
            Get in Touch
          </h2>

          <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-400 font-Ovo">
            I'd love to hear from you! Whether it's a project, collaboration, or
            just a chat, drop me a message.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="max-w-2xl mx-auto bg-deepGray p-6 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 mb-6 text-black">
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full p-3 rounded-md bg-gray-800 text-black outline-none focus:ring-2 focus:ring-primary"
                name="name"
              />
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 rounded-md bg-gray-800 text-black outline-none focus:ring-2 focus:ring-primary"
                name="email"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Enter your message"
              required
              className="w-full p-4 rounded-md bg-gray-800 text-black outline-none focus:ring-2 focus:ring-primary mb-6"
              name="message"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg hover:bg-red-600 transition"
            >
              Submit Now
            </button>
            <p className="mt-4 text-center text-gray-400">{result}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
