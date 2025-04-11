
import { CheckCircle } from 'lucide-react';

const SkillsSection = () => {
  const skills = {
    languages: [
      {
        name: "Python",
        image: "/lovable-uploads/e937efb5-be10-4a90-850d-c2aa1042cc14.png"
      },
      {
        name: "Java",
        image: "/lovable-uploads/f9a6e0d9-93d5-40ac-97bd-44d47485eb1c.png"
      },
      {
        name: "HTML/CSS",
        image: "/lovable-uploads/b3deea52-c3d0-4ca4-9b24-70c87cea713e.png"
      },
      {
        name: "JavaScript",
        image: "/lovable-uploads/733c77c1-58e3-4518-b9aa-069c7efa91b6.png"
      },
      {
        name: "SQL",
        image: "/lovable-uploads/16e4fba2-ec98-4915-bcd4-25d959e029fa.png"
      }
    ],
    tools: [
      { name: "Flask" },
      { name: "Power BI" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Scikit-learn" },
      { name: "Git" }
    ],
    areas: [
      "Data Analysis",
      "Machine Learning",
      "Exploratory Data Analysis",
      "Full-Stack Development",
      "Data Visualization"
    ]
  };

  return (
    <section id="skills" className="py-24 bg-theme-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(155,135,245,0.1),transparent_70%)] bg-no-repeat bg-right-bottom"></div>
      
      <div className="section-container">
        <h2 className="section-title before:content-[''] before:block before:w-20 before:h-1 before:bg-theme-purple before:mb-4">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-xl font-bold text-theme-purple mb-6">Languages</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.languages.map((language, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-2 rounded-lg bg-white/5 p-2">
                    <img 
                      src={language.image} 
                      alt={language.name} 
                      className="skill-icon"
                    />
                  </div>
                  <span className="text-white/80 text-sm">{language.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div className="glass-card p-6 animate-fade-in animate-delay-100">
            <h3 className="text-xl font-bold text-theme-purple mb-6">Tools & Frameworks</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-2 px-3 py-2 rounded-md bg-white/5">
                  <span className="w-2 h-2 rounded-full bg-theme-purple"></span>
                  <span className="text-white/80">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Areas */}
          <div className="glass-card p-6 animate-fade-in animate-delay-200">
            <h3 className="text-xl font-bold text-theme-purple mb-6">Expertise Areas</h3>
            <div className="space-y-4">
              {skills.areas.map((area, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-theme-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">{area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
