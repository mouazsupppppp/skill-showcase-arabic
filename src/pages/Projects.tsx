
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTech, setFilterTech] = useState<string[]>([]);
  
  // Extract all unique technologies
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.tech))
  ).filter(tech => tech);
  
  // Filter projects based on search and tech filters
  const filteredProjects = projects.filter(project => {
    const nameMatch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const descMatch = language === 'en' 
      ? project.description.en.toLowerCase().includes(searchTerm.toLowerCase())
      : project.description.ar.toLowerCase().includes(searchTerm.toLowerCase());
    
    const techMatch = filterTech.length === 0 || 
      filterTech.some(tech => project.tech.includes(tech));
    
    return (nameMatch || descMatch) && techMatch;
  });

  const toggleTechFilter = (tech: string) => {
    if (filterTech.includes(tech)) {
      setFilterTech(filterTech.filter(t => t !== tech));
    } else {
      setFilterTech([...filterTech, tech]);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-lightestslate mb-12 text-center">
          {t('projects.title')}
        </h1>
        
        {/* Search and filters */}
        <div className="mb-8">
          <div className="mb-4">
            <Input
              type="text"
              placeholder={language === 'en' ? "Search projects..." : "البحث في المشاريع..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-lightnavy border-lightestnavy"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map((tech) => (
              <Badge 
                key={tech}
                variant={filterTech.includes(tech) ? "default" : "outline"}
                className={`cursor-pointer ${
                  filterTech.includes(tech) 
                    ? "bg-teal text-navyblue hover:bg-teal/80" 
                    : "border-teal text-teal hover:bg-teal/10"
                }`}
                onClick={() => toggleTechFilter(tech)}
              >
                {tech}
              </Badge>
            ))}
            
            {filterTech.length > 0 && (
              <Button 
                variant="ghost" 
                size="sm"
                className="text-slate hover:text-teal"
                onClick={() => setFilterTech([])}
              >
                {language === 'en' ? "Clear filters" : "مسح التصفية"}
              </Button>
            )}
          </div>
        </div>
        
        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredProjects.map((project) => (
              <Link 
                to={`/projects/${project.id}`} 
                key={project.id} 
                className="bg-lightnavy rounded-lg overflow-hidden card-hover h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-medium text-lightestslate mb-2">{project.name}</h3>
                  <p className="text-lightslate mb-4 flex-grow">
                    {language === 'en' ? project.description.en : project.description.ar}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-slate text-xl">
              {language === 'en' ? "No projects found matching your criteria." : "لم يتم العثور على مشاريع تطابق معايير البحث."}
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Projects;
