import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { companyInfo } from '../data/company';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsMenuOpen(false), [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/research', label: 'R&D' },
    { path: '/gallery', label: 'Gallery' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-teal-900/10'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-600 animate-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="assets/logo/CP-logo.png"
                alt="Carer Pharma Logo"
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                {companyInfo.name}
              </h1>
              <p className="text-xs text-teal-600 font-medium tracking-wide">
                {companyInfo.slogan}
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group ${
                    active
                      ? 'text-teal-600'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50/60'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 ${
                      active ? 'w-3/4 opacity-100' : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-600 btn-glow transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-teal-50 transition-colors duration-200"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-white/30 px-4 py-4 space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 border border-teal-200/50'
                    : 'text-gray-700 hover:bg-teal-50/70 hover:text-teal-600'
                }`}
              >
                {item.label}
                {active && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-500" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
