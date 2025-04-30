
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { skillCategories } from '@/data/skills';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-lightestslate mb-12 text-center">
          {t('about.title')}
        </h1>
        
        <div className="max-w-4xl mx-auto">
          {/* About section */}
          <div className="bg-lightnavy rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-lightestslate mb-6">
              {language === 'en' ? 'About Me' : 'نبذة عني'}
            </h2>
            
            <div className="text-lightslate space-y-4">
              {language === 'en' ? (
                <>
                  <p>
                    I'm a software engineer with 5 years of experience in both backend and frontend development. 
                    I've had the chance to supervise and guide teams through various projects. 
                  </p>
                  <p>
                    I'm always looking for creative, out-of-the-box solutions to solve real-world problems and improve existing systems. 
                    I'm passionate about finding new ways to make things work better and more efficiently, always eager to learn and bring fresh ideas to the table.
                  </p>
                  <p>
                    I'm constantly expanding my knowledge so I can contribute more to the team and the company, while also improving myself in the process. 
                    My goal is to grow alongside the places I work, making a positive impact and evolving as a professional.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    أنا مهندس برمجيات بخبرة 5 سنوات في تطوير الواجهات الخلفية والأمامية. 
                    لقد أتيحت لي الفرصة للإشراف وتوجيه الفرق عبر مشاريع مختلفة.
                  </p>
                  <p>
                    أبحث دائمًا عن حلول إبداعية غير تقليدية لحل مشاكل العالم الحقيقي وتحسين الأنظمة الحالية. 
                    أنا شغوف بإيجاد طرق جديدة لجعل الأشياء تعمل بشكل أفضل وأكثر كفاءة، دائمًا متحمس للتعلم وتقديم أفكار جديدة.
                  </p>
                  <p>
                    أعمل باستمرار على توسيع معرفتي حتى أتمكن من المساهمة أكثر في الفريق والشركة، مع تحسين نفسي في هذه العملية. 
                    هدفي هو النمو جنبًا إلى جنب مع الأماكن التي أعمل فيها، وإحداث تأثير إيجابي والتطور كمحترف.
                  </p>
                </>
              )}
            </div>
          </div>
          
          {/* Skills section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-lightestslate mb-6">
              {t('about.skills')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map(category => (
                <div 
                  key={category.category} 
                  className="bg-lightnavy rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-teal mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span 
                        key={skill}
                        className="bg-navyblue rounded-md px-3 py-1 text-lightslate text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-lightestslate mb-6">
              {t('about.education')}
            </h2>
            
            <div className="bg-lightnavy rounded-lg p-6">
              <h3 className="text-xl font-semibold text-lightestslate">
                {language === 'en' ? 'Bachelor in Information Technology' : 'بكالوريوس في تكنولوجيا المعلومات'}
              </h3>
              <p className="text-teal mt-2">
                {language === 'en' ? 'Major in Software Engineering (Damascus University)' : 'تخصص في هندسة البرمجيات (جامعة دمشق)'}
              </p>
            </div>
          </div>
          
          {/* Languages section */}
          <div>
            <h2 className="text-2xl font-bold text-lightestslate mb-6">
              {language === 'en' ? 'Languages' : 'اللغات'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-lightnavy rounded-lg p-6">
                <h3 className="text-xl font-semibold text-lightestslate">
                  {language === 'en' ? 'English' : 'الإنجليزية'}
                </h3>
                <p className="text-teal mt-2">
                  {language === 'en' ? 'Excellent English' : 'إنجليزية ممتازة'}
                </p>
              </div>
              <div className="bg-lightnavy rounded-lg p-6">
                <h3 className="text-xl font-semibold text-lightestslate">
                  {language === 'en' ? 'Arabic' : 'العربية'}
                </h3>
                <p className="text-teal mt-2">
                  {language === 'en' ? 'Native Language' : 'اللغة الأم'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
