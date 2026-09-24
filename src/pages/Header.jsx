
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingBag,
  UserRound,
} from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-[#f8f5ef] text-[#29251f] border-b border-[#e5ded2] sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">

            <img
              src="Amani-logo.jpeg"
              alt="Amani Label Logo"
              className="w-12 h-12 object-contain"
            />

            <div>
              <h1 className="text-xl md:text-2xl tracking-[0.2em] font-serif font-semibold">
                AMANI
              </h1>

              <p className="text-[9px] tracking-[0.45em] text-gray-500 text-center">
                LABEL
              </p>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm tracking-wide hover:text-[#a17b50] transition duration-300"
              >
                {link.name}
              </Link>
            ))}

          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-5">

            <Link
              to="/login"
              className="hidden sm:block hover:text-[#a17b50] transition"
              aria-label="Account"
            >
              <UserRound size={21} strokeWidth={1.5} />
            </Link>

            <Link
              to="/cart"
              className="relative hover:text-[#a17b50] transition"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={22} strokeWidth={1.5} />

              <span className="absolute -top-2 -right-2 bg-[#a17b50] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={25} />
              ) : (
                <Menu size={25} />
              )}
            </button>

          </div>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden border-t border-[#e5ded2] py-5 flex flex-col gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-wide hover:text-[#a17b50] transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-wide hover:text-[#a17b50]"
            >
              My Account
            </Link>

          </nav>
        )}

      </div>

    </header>
  );
};

export default Header;