
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 px-4 mt-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-lightslate hover:text-teal transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/mouaz-al-kassm" target="_blank" rel="noopener noreferrer" className="text-lightslate hover:text-teal transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {t('footer.designed')}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © 2025 Mouaz Al-Kassm
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
