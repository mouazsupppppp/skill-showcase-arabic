
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.companies'), path: '/companies' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navyblue/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-teal font-bold text-2xl">MA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className={`flex ${language === 'ar' ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
            {navLinks.map((link, i) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className="text-lightslate hover:text-teal transition-colors font-medium"
                >
                  <span className="text-teal font-mono">{`0${i + 1}. `}</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-teal border border-teal hover:bg-teal/10"
            onClick={toggleLanguage}
          >
            <Globe size={16} className="mr-2" />
            {language === 'en' ? 'عربي' : 'English'}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-teal border-none hover:bg-transparent"
            onClick={toggleLanguage}
          >
            <Globe size={18} />
          </Button>
          
          <Button
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-lightslate hover:text-teal"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-lightnavy/95 flex flex-col items-center justify-center">
          <Button
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-lightslate hover:text-teal"
          >
            <X size={24} />
          </Button>
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link, i) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lightslate hover:text-teal transition-colors text-xl font-medium"
                >
                  <span className="text-teal font-mono block text-center mb-1">{`0${i + 1}.`}</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
