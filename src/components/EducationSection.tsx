
import { Bookmark, GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "Since 2022",
      description: "Currently pursuing a B.Tech in Computer Science and Engineering with a focus on data science and web development.",
      gpa: "CGPA: 7.06",
      logo: "/lovable-uploads/lpu.png"
    },
    {
      institution: "St. Antony's Public School",
      degree: "Higher Secondary Education (12th)",
      duration: "2022",
      description: "Completed higher secondary education with a focus on science and mathematics.",
      gpa: "Percentage: 92.60%",
      logo: "/lovable-uploads/school.png"
    },
    {
      institution: "Bhavans Vidya Mandir",
      degree: "Secondary Education (10th)",
      duration: "2020",
      description: "Completed secondary education with excellent academic performance.",
      gpa: "Percentage: 96.40%",
      logo: "/lovable-uploads/school2.png"
    }
  ];

  return (
    <section id="education" className="py-24 bg-theme-dark relative">
      <div className="section-container">
        <h2 className="section-title before:content-[''] before:block before:w-20 before:h-1 before:bg-theme-purple before:mb-4">
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-theme-purple/20 ml-[1px]"></div>
          
          {education.map((item, index) => (
            <div key={index} className="mb-12 pl-16 relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Timeline dot */}
              <div className="absolute left-8 top-8 w-3 h-3 bg-theme-purple rounded-full -ml-[7px]"></div>
              
              <div className="glass-card p-6 relative">
                <div className="absolute top-6 left-0 -ml-12 w-8 h-8 bg-theme-purple/20 rounded-full flex items-center justify-center">
                  {index === 0 ? (
                    <GraduationCap className="w-4 h-4 text-theme-purple" />
                  ) : (
                    <Bookmark className="w-4 h-4 text-theme-purple" />
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 sm:w-20 sm:h-20 w-16 h-16 rounded-full bg-white/10 p-2 flex items-center justify-center border border-white/5">
                    <img 
                      src={item.logo} 
                      alt={item.institution} 
                      className="max-w-full max-h-full rounded-full"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.institution}</h3>
                    <h4 className="text-theme-gray mb-2">{item.degree}</h4>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-theme-purple font-medium">{item.duration}</span>
                      <span className="text-theme-gray">•</span>
                      <span className="text-theme-gray">{item.gpa}</span>
                    </div>
                    
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
