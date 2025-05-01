
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { companies } from '@/data/companies';
import { projects } from '@/data/projects'; 

const Companies = () => {
  const { language, t } = useLanguage();
  
  // Sort companies by date (most recent first)
  const sortedCompanies = [...companies].sort((a, b) => {
    const dateA = new Date(a.period.split(' - ')[0]).getTime();
    const dateB = new Date(b.period.split(' - ')[0]).getTime();
    return dateB - dateA;
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-lightestslate mb-12 text-center">
          {t('companies.title')}
        </h1>
        
        <div className="max-w-4xl mx-auto">
          {sortedCompanies.map((company) => {
            // Get related projects for this company
            const companyProjects = projects.filter(project => 
              company.projects.includes(project.id)
            ).slice(0, 3);
            
            return (
              <div 
                key={company.id} 
                className="mb-20"
              >
                <Link to={`/companies/${company.id}`}>
                  <div className="bg-lightnavy rounded-lg p-6 mb-4 hover:bg-lightestnavy transition-colors">
                    <div className="flex flex-col md:flex-row gap-6 mb-4">
                      {company.logo && (
                        <div className="w-24 h-24 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-lg p-3 overflow-hidden">
                          <img 
                            src={company.logo} 
                            alt={`${company.name} logo`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      )}
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row justify-between md:items-center">
                          <h2 className="text-2xl font-bold text-lightestslate mb-2 md:mb-0">
                            {company.name}
                          </h2>
                          <span className="text-teal">{company.period}</span>
                        </div>
                        
                        <p className="text-slate mb-4">
                          {company.location} • {company.workType}
                        </p>
                        
                        <div className="text-lightslate mb-4">
                          {language === 'en' ? company.description.en : company.description.ar}
                        </div>
                        
                        <div className="text-teal font-medium">
                          {company.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                
                {companyProjects.length > 0 && (
                  <div className="ml-4 mt-6">
                    <h3 className="text-xl text-lightestslate mb-4">
                      {language === 'en' ? 'Featured Projects' : 'مشاريع مميزة'}
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      {companyProjects.map(project => (
                        <Link 
                          to={`/projects/${project.id}`} 
                          key={project.id} 
                          className="bg-lightnavy rounded-lg overflow-hidden hover:bg-lightestnavy transition-colors"
                        >
                          {project.image && (
                            <div className="w-full h-32 overflow-hidden">
                              <img 
                                src={project.image} 
                                alt={project.name} 
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          )}
                          <div className="p-4">
                            <h4 className="text-lg font-medium text-lightestslate mb-2">
                              {project.name}
                            </h4>
                            <p className="text-slate text-sm">
                              {project.tech.slice(0, 2).join(', ')}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {company.projects.length > 3 && (
                      <div className="text-end mt-2">
                        <Link 
                          to={`/companies/${company.id}`}
                          className="text-teal text-sm hover:underline"
                        >
                          {language === 'en' 
                            ? `View all ${company.projects.length} projects` 
                            : `عرض كل ${company.projects.length} مشاريع`}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Companies;
