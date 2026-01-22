import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../data/data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBase = 'text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium';

  return (
    <header className="sticky top-0 z-50 bg-dark-800/95 backdrop-blur-sm border-b border-dark-700 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl font-extrabold text-cyan-400 hacker-glitch">SG</div>
            <span className="text-xl font-bold text-white">SecGuided</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `${navBase} ${isActive ? 'text-cyan-400' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search…"
                className="bg-dark-700 text-gray-200 placeholder-gray-400 rounded-lg px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 w-48"
              />
              <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 9 9 0 0114 0z"
                />
              </svg>
            </div>
            <button className="text-gray-300 hover:text-white font-medium text-sm transition-colors">Log in</button>
            <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
              Register
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3 mb-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium py-2 transition-colors ${
                      isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Search…"
                className="bg-dark-700 text-gray-200 placeholder-gray-400 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <div className="flex space-x-3">
                <button className="flex-1 text-gray-300 hover:text-white font-medium text-sm py-2 border border-dark-600 rounded-lg transition-colors">
                  Log in
                </button>
                <button className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
