import React from 'react'

const Footer = () => {
  return (
    <div>
      
      <footer className="bg-[#E6D9C9] px-6 md:px-16 py-14">

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

          {/* AMANI LABEL LOGO */}
          <a href="/" className="inline-block">

            <h2 className="font-serif text-5xl md:text-6xl tracking-[9px]">
              AMÁNI
            </h2>

            <p className="text-xs md:text-sm tracking-[13px] mt-2 pl-3">
              LABELL
            </p>

          </a>

          {/* Tagline */}
          <p className="text-sm md:text-base text-stone-600 mt-6 tracking-widest">
            Modern Modest Wear | Timeless You
          </p>

          <p className="font-serif text-xl mt-5 leading-9">
            Elegance in Every Thread.
          </p>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8 text-sm">
      
            <a href="/shop" className="hover:text-stone-500">
              Shop
            </a>

            <a href="/about" className="hover:text-stone-500">
              Our Story
            </a>

            <a href="/contact" className="hover:text-stone-500">
              Contact
            </a>

            <a
              href="https://www.instagram.com/amani.labell/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-stone-500"
            >
              Instagram
            </a>

          </div>

          {/* Bottom Copyright */}
          <div className="w-full border-t border-stone-400 mt-10 pt-6">

            <p className="text-xs text-stone-600">
              © {new Date().getFullYear()} AMANI LABEL. All rights reserved.
            </p>

          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer
