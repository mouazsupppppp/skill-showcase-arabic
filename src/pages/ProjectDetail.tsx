
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import { companies } from '@/data/companies';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);
  
  if (!project) return null;

  // Find the company associated with this project
  const company = companies.find(c => c.name === project.company);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <Link to="/projects">
          <Button variant="ghost" className="text-slate hover:text-teal mb-8">
            <ArrowLeft size={16} className="mr-2" />
            {language === 'en' ? 'Back to Projects' : 'العودة إلى المشاريع'}
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-lightestslate mb-4 md:mb-0">
              {project.name}
            </h1>
            
            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-teal hover:underline"
              >
                {language === 'en' ? 'Visit Website' : 'زيارة الموقع'}
                <ExternalLink size={16} className="ml-2" />
              </a>
            )}
          </div>

          {project.image && (
            <div className="mb-8 rounded-lg overflow-hidden border-2 border-lightnavy">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          
          <div className="bg-lightnavy rounded-lg p-6 mb-8">
            <p className="text-lightslate text-lg mb-6">
              {language === 'en' ? project.description.en : project.description.ar}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="text-sm font-mono text-lightestslate bg-navyblue px-3 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-teal font-medium mb-2">
                  {language === 'en' ? 'Company' : 'الشركة'}
                </h3>
                <div className="flex items-center gap-3">
                  {company && company.logo && (
                    <div className="w-10 h-10 bg-white rounded flex items-center justify-center p-1">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                  )}
                  <p className="text-lightslate">{project.company}</p>
                </div>
                {company && (
                  <Link 
                    to={`/companies/${company.id}`}
                    className="text-teal text-sm hover:underline mt-2 inline-block"
                  >
                    {language === 'en' ? 'View Company Details' : 'عرض تفاصيل الشركة'}
                  </Link>
                )}
              </div>
              <div>
                <h3 className="text-teal font-medium mb-2">
                  {language === 'en' ? 'Role' : 'الدور'}
                </h3>
                <p className="text-lightslate">{project.role}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-lightestslate mb-6">
              {language === 'en' ? 'Other Projects' : 'مشاريع أخرى'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map(relatedProject => (
                  <Link 
                    to={`/projects/${relatedProject.id}`} 
                    key={relatedProject.id} 
                    className="bg-lightnavy rounded-lg overflow-hidden card-hover"
                  >
                    {relatedProject.image && (
                      <div className="w-full h-32 overflow-hidden">
                        <img 
                          src={relatedProject.image} 
                          alt={relatedProject.name} 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-lightestslate mb-2">
                        {relatedProject.name}
                      </h3>
                      <p className="text-slate text-sm mb-2">
                        {relatedProject.company}
                      </p>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectDetail;
