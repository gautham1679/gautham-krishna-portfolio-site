
import { Building, Calendar, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-theme-dark relative">
      <div className="absolute inset-0 bg-[url('/public/placeholder.svg')] opacity-5 bg-repeat"></div>
      
      <div className="section-container relative">
        <h2 className="section-title before:content-[''] before:block before:w-20 before:h-1 before:bg-theme-purple before:mb-4">
          Work Experience
        </h2>
        
        <div className="glass-card p-8 max-w-3xl mx-auto animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-shrink-0 p-4 bg-theme-purple/20 rounded-xl">
              <Briefcase className="w-12 h-12 text-theme-purple" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Data Analyst Intern</h3>
              <div className="flex items-center text-theme-gray mb-2">
                <Building className="w-4 h-4 mr-2" />
                <span>Futurense Technologies</span>
              </div>
              <div className="flex items-center text-theme-gray mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>June 2024 - August 2024</span>
              </div>
              
              <div className="space-y-3 text-white/80">
                <div className="flex">
                  <div className="w-1 bg-theme-purple/50 rounded mr-3 mt-1.5 mb-1.5"></div>
                  <p>Analyzed US Pathway dataset with over 10,000 records to extract meaningful insights for university admissions strategies.</p>
                </div>
                <div className="flex">
                  <div className="w-1 bg-theme-purple/50 rounded mr-3 mt-1.5 mb-1.5"></div>
                  <p>Designed and built interactive Power BI dashboards to visualize enrollment trends and developed machine learning models in Python to predict future applications.</p>
                </div>
                <div className="flex">
                  <div className="w-1 bg-theme-purple/50 rounded mr-3 mt-1.5 mb-1.5"></div>
                  <p>Implemented data-driven strategies that enhanced university engagement metrics and increased student enrollment by 5%.</p>
                </div>
                <div className="flex">
                  <div className="w-1 bg-theme-purple/50 rounded mr-3 mt-1.5 mb-1.5"></div>
                  <p>Contributed to the revamp of the Blinkit website using Flask framework and SQL database, improving user experience and backend efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
