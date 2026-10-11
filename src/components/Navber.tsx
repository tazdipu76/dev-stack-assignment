import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* ================= MOBILE LEFT: HAMBURGER MENU ================= */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* ================= BRAND LOGO & NAME ================= */}
          <div className="flex items-center gap-3">
            {/* Logo Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-pink-500/20">
              DS
            </div>
            {/* Brand Text */}
            <a href="#" className="text-2xl font-bold tracking-tight text-gray-900">
              Dev<span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Stack</span>
            </a>
          </div>

          {/* ================= DESKTOP NAV LINKS ================= */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="#home"
              className="text-pink-600 font-semibold border-b-2 border-pink-500 pb-0.5"
            >
              Home
            </a>
            <a
              href="#technologies"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Technologies
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* ================= RIGHT: AUTH BUTTONS ================= */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 transition-colors">
              Sign In
            </button>
            <button className="text-sm font-medium text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 px-6 py-2.5 rounded-full shadow-md shadow-pink-500/25 transition-all duration-200 transform hover:-translate-y-0.5">
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#home"
            className="block text-base font-semibold text-pink-600 bg-pink-50 px-3 py-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#technologies"
            className="block text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="block text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#about"
            className="block text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;