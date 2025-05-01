
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { companies } from '@/data/companies';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  
  const company = companies.find(c => c.id === id);
  
  useEffect(() => {
    if (!company) {
      navigate('/companies');
    }
  }, [company, navigate]);
  
  if (!company) return null;

  const companyProjects = projects.filter(project => 
    company.projects.includes(project.id)
  );

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <Link to="/companies">
          <Button variant="ghost" className="text-slate hover:text-teal mb-8">
            <ArrowLeft size={16} className="mr-2" />
            {language === 'en' ? 'Back to Companies' : 'العودة إلى الشركات'}
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              {company.logo && (
                <div className="w-32 h-32 flex items-center justify-center bg-white rounded-lg p-4 overflow-hidden">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-lightestslate mb-4">
                  {company.name}
                </h1>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate mb-6">
                  <div>{company.location}</div>
                  <div>{company.period}</div>
                  <div>{company.workType}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-lightnavy rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-lightestslate mb-4">
                {company.role}
              </h2>
              
              <p className="text-lightslate mb-6">
                {language === 'en' ? company.description.en : company.description.ar}
              </p>
              
              <div className="mb-8">
                <h3 className="text-teal font-medium mb-4">
                  {language === 'en' ? 'Key Contributions' : 'المساهمات الرئيسية'}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lightslate">
                  {(language === 'en' ? company.contributions.en : company.contributions.ar).map((contribution, idx) => (
                    <li key={idx}>{contribution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Projects section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-lightestslate mb-6">
              {language === 'en' ? 'Projects at this Company' : 'المشاريع في هذه الشركة'}
            </h2>
            
            {companyProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {companyProjects.map(project => (
                  <Link 
                    to={`/projects/${project.id}`} 
                    key={project.id} 
                    className="bg-lightnavy rounded-lg overflow-hidden card-hover"
                  >
                    {project.image && (
                      <div className="w-full h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="w-full h-full object-cover object-top transition-transform hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-lightestslate mb-2">
                        {project.name}
                      </h3>
                      <p className="text-lightslate mb-4 line-clamp-3">
                        {language === 'en' ? project.description.en : project.description.ar}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs font-mono text-lightestslate bg-navyblue px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-slate">
                {language === 'en' 
                  ? 'No projects recorded for this company.' 
                  : 'لا توجد مشاريع مسجلة لهذه الشركة.'}
              </p>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CompanyDetail;
