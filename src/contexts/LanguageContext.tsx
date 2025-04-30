
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.companies': 'Companies',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    'hero.greeting': 'Hi, my name is',
    'hero.name': 'Mouaz Al-Kassm',
    'hero.title': 'Frontend Developer & Team Leader',
    'hero.subtitle': "I build exceptional web experiences",
    'hero.description': "I'm a software engineer with 5 years of experience in both backend and frontend development. I specialize in building high-quality web applications with modern JavaScript frameworks.",
    'hero.cta': 'Check out my work',
    
    'projects.title': "Some Things I've Built",
    'projects.viewAll': 'View All Projects',
    'projects.viewProject': 'View Project',
    
    'companies.title': "Where I've Worked",
    'companies.viewAll': 'View All Companies',
    
    'about.title': 'About Me',
    'about.skills': 'Skills',
    'about.experience': 'Experience',
    'about.education': 'Education',
    
    'contact.title': 'Get In Touch',
    'contact.message': "Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    'contact.email': 'Say Hello',
    
    'footer.designed': 'Designed & Built by Mouaz Al-Kassm',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.projects': 'المشاريع',
    'nav.companies': 'الشركات',
    'nav.about': 'نبذة عني',
    'nav.contact': 'اتصل بي',
    
    'hero.greeting': 'مرحبا، اسمي',
    'hero.name': 'معاذ القاسم',
    'hero.title': 'مطور واجهات أمامية وقائد فريق',
    'hero.subtitle': "أبني تجارب ويب استثنائية",
    'hero.description': "أنا مهندس برمجيات مع 5 سنوات من الخبرة في تطوير الواجهات الأمامية والخلفية. أتخصص في بناء تطبيقات ويب عالية الجودة باستخدام أطر عمل جافاسكريبت الحديثة.",
    'hero.cta': 'استعرض أعمالي',
    
    'projects.title': 'بعض ما قمت ببنائه',
    'projects.viewAll': 'عرض جميع المشاريع',
    'projects.viewProject': 'عرض المشروع',
    
    'companies.title': 'أين عملت',
    'companies.viewAll': 'عرض جميع الشركات',
    
    'about.title': 'نبذة عني',
    'about.skills': 'المهارات',
    'about.experience': 'الخبرة',
    'about.education': 'التعليم',
    
    'contact.title': 'تواصل معي',
    'contact.message': "سواء كان لديك سؤال أو تريد فقط إلقاء التحية، سأحاول الرد عليك في أقرب وقت!",
    'contact.email': 'قل مرحباً',
    
    'footer.designed': 'تصميم وبناء معاذ القاسم',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set HTML dir attribute for RTL support
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    // Store language preference
    localStorage.setItem('language', language);
  }, [language]);

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
