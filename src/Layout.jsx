import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';

const programsDropdown = [
  { name: '一日放空行', page: 'OneDayRetreat' },
  { name: '二日放空篇', page: 'TwoDayRetreat' },
  { name: '蛻變篇', page: 'SilentRetreat' },
  { name: '僻靜篇', page: 'InvitationRetreat' },
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isHomePage = currentPageName === 'Home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProgramsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: '初心緣起', page: 'About' },
    { name: '旅程介紹', page: 'Programs' },
    { name: '心靈導遊', page: 'Guide' },
    { name: '參加者心得', page: 'Testimonials' },
    { name: '蛻變故事', page: 'TransformationStories' },
    { name: '資源分享', page: 'Resources' },
    { name: '常見問題', page: 'FAQ' },
    { name: '聯繫我們', page: 'Contact' },
  ];

  const headerBg = isHomePage 
    ? (isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent')
    : 'bg-white/95 backdrop-blur-md shadow-sm';
  
  const textColor = isHomePage && !isScrolled ? 'text-white' : 'text-stone-800';
  const logoColor = isHomePage && !isScrolled ? 'text-white' : 'text-emerald-800';

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to={createPageUrl('Home')}
              className={`flex items-center gap-2 ${logoColor} transition-colors duration-300`}
            >
              <Leaf className="w-6 h-6" />
              <span className="text-xl font-light tracking-wider">心靈假期</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.page === 'Programs' ? (
                  <div key="Programs" className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setProgramsOpen(!programsOpen)}
                      className={`${textColor} text-sm tracking-wider hover:text-emerald-600 transition-colors duration-300 flex items-center gap-1`}
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${programsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {programsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-stone-100 overflow-hidden py-2"
                        >
                          <Link
                            to={createPageUrl('Programs')}
                            className="block px-4 py-2 text-sm text-stone-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors tracking-wide border-b border-stone-100 mb-1"
                          >
                            全部旅程
                          </Link>
                          {programsDropdown.map((item) => (
                            <Link
                              key={item.page}
                              to={createPageUrl(item.page)}
                              className="block px-4 py-2 text-sm text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors tracking-wide"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`${textColor} text-sm tracking-wider hover:text-emerald-600 transition-colors duration-300 relative group`}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 ${textColor}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
            >
              <nav className="px-6 py-6 space-y-4">
                {navLinks.map((link) =>
                  link.page === 'Programs' ? (
                    <div key="Programs">
                      <button
                        onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                        className="flex items-center gap-2 text-stone-700 text-lg font-light tracking-wider hover:text-emerald-700 transition-colors w-full"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileProgramsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileProgramsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-4 mt-2 space-y-3 border-l-2 border-emerald-100"
                          >
                            <Link to={createPageUrl('Programs')} className="block text-stone-500 font-light tracking-wider hover:text-emerald-700 transition-colors">全部旅程</Link>
                            {programsDropdown.map((item) => (
                              <Link
                                key={item.page}
                                to={createPageUrl(item.page)}
                                className="block text-stone-600 font-light tracking-wider hover:text-emerald-700 transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.page}
                      to={createPageUrl(link.page)}
                      className="block text-stone-700 text-lg font-light tracking-wider hover:text-emerald-700 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className={isHomePage ? '' : 'pt-20'}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 text-white mb-4">
                <Leaf className="w-5 h-5" />
                <span className="text-lg font-light tracking-wider">心靈假期</span>
              </div>
              <p className="text-stone-400 font-light leading-relaxed text-sm">
                好好生活，找回心靈寧靜的綠洲
              </p>
            </div>
            
            <div>
              <h4 className="text-white text-sm tracking-wider mb-4">旅程篇章</h4>
              <div className="space-y-2">
                <Link to={createPageUrl('OneDayRetreat')} className="block text-sm hover:text-white transition-colors">一日放空行</Link>
                <Link to={createPageUrl('TwoDayRetreat')} className="block text-sm hover:text-white transition-colors">二日放空篇</Link>
                <Link to={createPageUrl('SilentRetreat')} className="block text-sm hover:text-white transition-colors">蛻變篇</Link>
                <Link to={createPageUrl('InvitationRetreat')} className="block text-sm hover:text-white transition-colors">僻靜篇</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-white text-sm tracking-wider mb-4">關於我們</h4>
              <div className="space-y-2">
                <Link to={createPageUrl('About')} className="block text-sm hover:text-white transition-colors">初心緣起</Link>
                <Link to={createPageUrl('Testimonials')} className="block text-sm hover:text-white transition-colors">參加者心得</Link>
                <Link to={createPageUrl('FAQ')} className="block text-sm hover:text-white transition-colors">常見問題</Link>
                <Link to={createPageUrl('Contact')} className="block text-sm hover:text-white transition-colors">聯繫我們</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 text-center">
            <p className="text-stone-500 text-sm font-light">
              © 2026 心靈假期 Mental Getaway. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}