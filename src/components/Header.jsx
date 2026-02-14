import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { navItems } from '../data/data';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const navBase = 'text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium';

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowUserMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-800/95 backdrop-blur-sm border-b border-dark-700 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl font-extrabold text-cyan-400 hacker-glitch">SG</div>
            <span className="hidden sm:inline text-xl font-bold text-white">SecGuided</span>
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

            {isAuthenticated ? (
              // User is logged in - show user menu
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {user?.firstName?.[0] || user?.username?.[0] || 'U'}
                    </span>
                  </div>
                  <span className="text-sm font-medium">
                    {user?.firstName ? `${user.firstName} ${user.lastName}` : user?.username || 'User'}
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-dark-700 rounded-lg shadow-lg border border-dark-600 py-2">
                    <div className="px-4 py-2 border-b border-dark-600">
                      <p className="text-sm font-medium text-white">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-gray-400">{user?.email}</p>
                      <p className="text-xs text-cyan-400 capitalize">{user?.role || 'student'}</p>
                    </div>
                    <Link
                      to="/dashboard"
                      onClick={() => setShowUserMenu(false)}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-600 hover:text-cyan-400 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      onClick={() => setShowUserMenu(false)}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-600 hover:text-cyan-400 transition-colors"
                    >
                      Profile Settings
                    </Link>
                    <div className="border-t border-dark-600 mt-2 pt-2">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-dark-600 hover:text-red-400 transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // User is not logged in - show login/register buttons
              <>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white font-medium text-sm transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  Register
                </Link>
              </>
            )}
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
              
              {isAuthenticated ? (
                <div className="space-y-3">
                  <div className="bg-dark-700 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-white">
                          {user?.firstName?.[0] || user?.username?.[0] || 'U'}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {user?.firstName ? `${user.firstName} ${user.lastName}` : user?.username || 'User'}
                        </p>
                        <p className="text-xs text-gray-400">{user?.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link
                      to="/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex-1 text-gray-300 hover:text-white font-medium text-sm py-2 border border-dark-600 rounded-lg transition-colors text-center"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex-1 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex-1 text-gray-300 hover:text-white font-medium text-sm py-2 border border-dark-600 rounded-lg transition-colors text-center"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors text-center"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
