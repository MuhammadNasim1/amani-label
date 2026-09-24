
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f7f2ec] text-[#3d3028]">

      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#e8dfd5] px-6 py-20 text-center">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#8b6e56]">
            Welcome to AMANI
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Elegance in Every
            <span className="block italic">Thread</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#766354] md:text-lg">
            Discover the beauty of modest fashion, where timeless
            elegance meets modern sophistication. AMANI is more
            than a brand — it's a way of expressing your identity
            with confidence and grace.
          </p>

          <a
            href="#our-story"
            className="mt-10 inline-block border border-[#5b4535] px-8 py-3 text-xs uppercase tracking-[0.25em] transition duration-300 hover:bg-[#5b4535] hover:text-white"
          >
            Discover Our Story
          </a>
        </div>
      </section>

      {/* Our Story */}
      <section
        id="our-story"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28"
      >
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#9b7b60]">
            Our Story
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            A Story of Grace,
            <span className="block italic">Style & Identity</span>
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-8 text-[#766354] md:text-base">
            <p>
              AMANI was created with a simple vision: to celebrate
              modest fashion through beautiful designs, timeless
              styles, and thoughtful details.
            </p>

            <p>
              We believe every woman deserves to feel confident,
              comfortable, and beautiful in what she wears. Our
              collections bring together traditional inspiration
              and contemporary fashion.
            </p>

            <p>
              From everyday essentials to special occasions,
              AMANI is designed for women who appreciate simplicity,
              sophistication, and individuality.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/Amani-logo.jpeg"
            alt="AMANI Brand Logo"
            className="w-full max-w-md rounded-sm object-contain shadow-xl"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#e8dfd5] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#9b7b60]">
            What We Believe
          </p>

          <h2 className="font-serif text-4xl md:text-5xl">
            The AMANI Philosophy
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-2xl">
                Timeless Elegance
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#766354]">
                Designs that go beyond trends and celebrate
                effortless, lasting beauty.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl">
                Modest by Design
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#766354]">
                Fashion that embraces modesty while expressing
                individuality and personal style.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl">
                Made with Care
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#766354]">
                Thoughtful details, beautiful fabrics, and
                a focus on comfort and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="px-6 py-24 text-center md:py-32">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9b7b60]">
          The AMANI Experience
        </p>

        <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
          Wear Your Confidence.
          <span className="mt-2 block italic">
            Embrace Your Elegance.
          </span>
        </h2>

        <a
          href="/shop"
          className="mt-10 inline-block bg-[#5b4535] px-10 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-[#3d3028]"
        >
          Explore Collection
        </a>
      </section>

    </div>
  );
};

export default About;