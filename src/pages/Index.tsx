
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { companies } from '@/data/companies';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const { t, language } = useLanguage();
  
  // Filter featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  // Display latest companies
  const latestCompanies = [...companies].sort((a, b) => 
    new Date(b.period.split(' - ')[0]).getTime() - new Date(a.period.split(' - ')[0]).getTime()
  ).slice(0, 3);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center container mx-auto px-4 -mt-24">
        <div className="max-w-3xl">
          <p className="text-teal font-mono mb-4 animate-fadeIn">{t('hero.greeting')}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-lightestslate mb-4 animate-fadeIn">
            {t('hero.name')}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate mb-6 animate-fadeIn">
            {t('hero.title')}
          </h2>
          <p className="text-xl text-slate mb-8 max-w-xl animate-fadeIn">
            {t('hero.description')}
          </p>
          <Link to="/projects">
            <Button 
              className="bg-transparent text-teal border border-teal hover:bg-teal/10 font-mono animate-fadeIn"
              size="lg"
            >
              {t('hero.cta')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="section-heading">
          <span className="section-heading-number">01.</span>
          {t('projects.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project) => (
            <Link 
              to={`/projects/${project.id}`} 
              key={project.id} 
              className="bg-lightnavy rounded-lg overflow-hidden card-hover"
            >
              <div className="p-6">
                <h3 className="text-xl font-medium text-lightestslate mb-2">{project.name}</h3>
                <p className="text-lightslate mb-4">
                  {language === 'en' ? project.description.en : project.description.ar}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-mono text-lightestslate bg-navyblue px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-teal">{project.company}</span>
                  <span className="text-sm text-slate">{project.role}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/projects">
            <Button 
              variant="outline"
              className="border-teal text-teal hover:bg-teal/10"
            >
              {t('projects.viewAll')} <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 container mx-auto px-4 bg-lightnavy/30">
        <h2 className="section-heading">
          <span className="section-heading-number">02.</span>
          {t('companies.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {latestCompanies.map((company) => (
            <Link 
              to={`/companies/${company.id}`} 
              key={company.id} 
              className="bg-lightnavy rounded-lg overflow-hidden card-hover"
            >
              <div className="p-6">
                <h3 className="text-xl font-medium text-lightestslate mb-2">{company.name}</h3>
                <p className="text-lightslate mb-4">
                  {language === 'en' ? company.description.en : company.description.ar}
                </p>
                <div className="text-sm text-slate">
                  <div className="mb-2">{company.location} • {company.workType}</div>
                  <div>{company.period}</div>
                </div>
                <div className="text-teal mt-4">{company.role}</div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/companies">
            <Button 
              variant="outline"
              className="border-teal text-teal hover:bg-teal/10"
            >
              {t('companies.viewAll')} <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-teal font-mono mb-4">{`03. ${t('contact.title')}`}</h2>
        <h3 className="text-4xl font-bold text-lightestslate mb-6">{t('contact.title')}</h3>
        
        <p className="text-slate max-w-md mx-auto mb-8">
          {t('contact.message')}
        </p>
        
        <a href="mailto:muazkassm99@gmail.com">
          <Button 
            className="bg-transparent text-teal border border-teal hover:bg-teal/10 font-mono"
            size="lg"
          >
            {t('contact.email')}
          </Button>
        </a>
      </section>
    </MainLayout>
  );
};

export default Index;
