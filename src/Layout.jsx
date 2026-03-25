import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  }, [location]);

  const navLinks = [
    { name: '初心緣起', page: 'About' },
    { name: '旅程介紹', page: 'Programs' },
    { name: '心靈導遊', page: 'Guide' },
    { name: '參加者心得', page: 'Testimonials' },
    { name: '蛻變故事', page: 'TransformationStories' },
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
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`${textColor} text-sm tracking-wider hover:text-emerald-600 transition-colors duration-300 relative group`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
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
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="block text-stone-700 text-lg font-light tracking-wider hover:text-emerald-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
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
              © 2026 心靈假期 Spirit Vacation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}