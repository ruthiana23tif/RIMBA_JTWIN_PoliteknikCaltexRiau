import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen px-6 py-20 flex flex-col md:flex-row justify-between items-start gap-12 ">
      {/* Left Section */}
      <div className="max-w-lg mx-auto md:mx-0 space-y-6 text-center md:text-left">
        <h2 className="text-5xl font-extrabold text-pink-600">Let's Glow Together ✨</h2>
        <p className="text-gray-700 text-lg">
          Have questions, ideas, or just want to say hi? We'd love to hear from you! Let's create beauty together.
        </p>

        <div className="space-y-4 text-base text-gray-700">
          <div>
            <h4 className="font-semibold text-pink-600">Our Studio</h4>
            <p>
              Glowshere HQ <br />
              123 Bloom Avenue, Jakarta 12450
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-pink-600">Call Us</h4>
            <p>+62 812 3456 7890</p>
          </div>
          <div>
            <h4 className="font-semibold text-pink-600">Email</h4>
            <p>hello@glowshere.com</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-6 text-pink-600 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-pink-700 transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-700 transition">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-pink-700 transition">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-pink-700 transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="bg-white border border-pink-100 rounded-2xl shadow-xl p-10 w-full max-w-md mx-auto md:mx-0">
        <h3 className="text-2xl font-semibold mb-6 text-pink-600 text-center">Get in Touch</h3>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-pink-50 border border-pink-200 rounded-md text-gray-800 placeholder-pink-400 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-pink-50 border border-pink-200 rounded-md text-gray-800 placeholder-pink-400 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full bg-pink-50 border border-pink-200 rounded-md text-gray-800 placeholder-pink-400 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
