
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Phone, Github } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-lightestslate mb-12 text-center">
          {t('contact.title')}
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-lightnavy rounded-lg p-8 text-center mb-12">
            <p className="text-lightslate text-lg mb-8">
              {t('contact.message')}
            </p>
            
            <div className="flex justify-center space-x-4">
              <a 
                href="mailto:muazkassm99@gmail.com"
                className="inline-block"
              >
                <Button 
                  className="bg-teal text-navyblue hover:bg-teal/80"
                  size="lg"
                >
                  <Mail className="mr-2" size={18} />
                  {language === 'en' ? 'Send Email' : 'إرسال بريد إلكتروني'}
                </Button>
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://linkedin.com/in/mouaz-al-kassm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-lightnavy rounded-lg p-6 flex items-center hover:bg-lightestnavy transition-colors"
            >
              <Linkedin size={24} className="text-teal mr-4" />
              <div>
                <h3 className="text-lightestslate font-medium mb-1">LinkedIn</h3>
                <p className="text-slate">Mouaz Al-Kassm</p>
              </div>
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-lightnavy rounded-lg p-6 flex items-center hover:bg-lightestnavy transition-colors"
            >
              <Github size={24} className="text-teal mr-4" />
              <div>
                <h3 className="text-lightestslate font-medium mb-1">GitHub</h3>
                <p className="text-slate">muazkassm99</p>
              </div>
            </a>
            
            <a 
              href="tel:+963956134890" 
              className="bg-lightnavy rounded-lg p-6 flex items-center hover:bg-lightestnavy transition-colors"
            >
              <Phone size={24} className="text-teal mr-4" />
              <div>
                <h3 className="text-lightestslate font-medium mb-1">
                  {language === 'en' ? 'Phone' : 'الهاتف'}
                </h3>
                <p className="text-slate">+963 956-134-890</p>
              </div>
            </a>
            
            <a 
              href="mailto:muazkassm99@gmail.com"
              className="bg-lightnavy rounded-lg p-6 flex items-center hover:bg-lightestnavy transition-colors"
            >
              <Mail size={24} className="text-teal mr-4" />
              <div>
                <h3 className="text-lightestslate font-medium mb-1">
                  {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                </h3>
                <p className="text-slate">muazkassm99@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
