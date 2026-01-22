import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="text-2xl font-extrabold text-cyan-400 hacker-flicker">SG</div>
              <span className="text-xl font-bold text-white">SecGuided</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">Learn Security, Reverse Engineering & Defensive Research</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Terms and rules
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/forums" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Forums
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-700 text-center">
          <p className="text-gray-500 text-sm">© 2026 SecGuided. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
