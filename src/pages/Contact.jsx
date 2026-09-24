
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting AMANI!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f4ef] text-[#3d3028]">

      {/* Hero Section */}
      <section className="bg-[#e9dfd4] px-6 py-20 text-center md:py-28">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#92765e]">
          Get in Touch
        </p>

        <h1 className="font-serif text-5xl md:text-7xl">
          Contact <span className="italic">AMANI</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#786656] md:text-base">
          We are here to help. Whether you have questions about
          our collections, your orders, or virtual try-on,
          we would love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:gap-20">

        {/* Left Side */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#92765e]">
            Contact Us
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Let's Start a
            <span className="block italic">Conversation</span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-8 text-[#786656]">
            Your experience matters to us. Reach out to our
            team for product information, styling assistance,
            or any questions about AMANI.
          </p>

          {/* Email */}
          <div className="mt-10 flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center bg-[#e9dfd4] text-2xl">
              ✉
            </div>

            <div>
              <h3 className="font-serif text-xl">Email</h3>
              <p className="mt-1 text-sm text-[#786656]">
                support@amanilabel.com
              </p>
            </div>
          </div>

          {/* Instagram */}
          <div className="mt-8 flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center bg-[#e9dfd4] text-2xl">
              ◎
            </div>

            <div>
              <h3 className="font-serif text-xl">Instagram</h3>
              <a
                href="https://www.instagram.com/amani.labell/"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm text-[#786656] hover:underline"
              >
                @amani.labell
              </a>
            </div>
          </div>

          {/* Customer Support */}
          <div className="mt-8 flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center bg-[#e9dfd4] text-2xl">
              ♡
            </div>

            <div>
              <h3 className="font-serif text-xl">Customer Care</h3>
              <p className="mt-1 text-sm text-[#786656]">
                We're happy to assist you.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="border border-[#dfd2c5] bg-white/60 p-6 md:p-10">

          <h2 className="font-serif text-3xl">
            Send a Message
          </h2>

          <p className="mt-3 text-sm text-[#786656]">
            Fill in the form below and we will be happy to help.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            {/* Name */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full border border-[#d8cabe] bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#8b6e56]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full border border-[#d8cabe] bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#8b6e56]"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest">
                Subject
              </label>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-[#d8cabe] bg-[#f8f4ef] px-4 py-3 text-sm outline-none focus:border-[#8b6e56]"
              >
                <option value="">Choose a subject</option>
                <option value="Order Enquiry">Order Enquiry</option>
                <option value="Product Information">Product Information</option>
                <option value="Virtual Try-On">Virtual Try-On</option>
                <option value="Returns">Returns & Exchanges</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                required
                className="w-full resize-none border border-[#d8cabe] bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#8b6e56]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#5b4535] py-4 text-xs uppercase tracking-[0.3em] text-white transition duration-300 hover:bg-[#3d3028]"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-[#e9dfd4] px-6 py-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">
          Your Elegance, Our Inspiration
        </h2>

        <p className="mt-4 text-sm text-[#786656]">
          Thank you for being a part of AMANI.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d8cabe] px-6 py-8 text-center">
        <img
          src="/Amani-logo.jpeg"
          alt="AMANI Logo"
          className="mx-auto h-20 w-auto object-contain"
        />

        <p className="mt-3 text-xs tracking-[0.3em] text-[#786656]">
          TIMELESS MODEST WEAR
        </p>

        <p className="mt-4 text-xs text-[#927f70]">
          © 2026 AMANI. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default Contact;
