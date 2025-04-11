
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Customer Retention Analysis",
      description: "Developed a comprehensive analysis tool to predict customer churn and identify retention strategies based on historical data.",
      image: "/lovable-uploads/customer_retention.jpg",
      tech: ["Python", "Power BI", "Scikit-learn"],
      highlights: [
        "Analyzed customer behavior patterns to identify key churn indicators",
        "Built predictive models with 87% accuracy using machine learning algorithms",
        "Created interactive Power BI dashboards for real-time churn monitoring",
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Blinkit Website Revamp",
      description: "Led the backend redesign of a grocery delivery platform to enhance user experience and optimize data management.",
      image: "/lovable-uploads/blinkit.jpg",
      tech: ["Flask", "SQL", "HTML/CSS"],
      highlights: [
        "Implemented a robust authentication system with multiple user roles",
        "Optimized database queries resulting in 40% faster load times",
        "Designed RESTful APIs for seamless front-end and back-end communication",
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Restaurant Rating Analysis",
      description: "Created a data analysis solution to help restaurant owners understand customer preferences and improve service quality.",
      image: "/lovable-uploads/restaurant_review.jpg",
      tech: ["SQL", "Power BI", "Python"],
      highlights: [
        "Analyzed 50,000+ customer reviews to extract sentiment patterns",
        "Developed a recommendation engine to suggest menu improvements",
        "Built an interactive dashboard for tracking rating trends over time",
      ],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-theme-charcoal relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-theme-dark to-transparent"></div>
      
      <div className="section-container">
        <h2 className="section-title before:content-[''] before:block before:w-20 before:h-1 before:bg-theme-purple before:mb-4">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card overflow-hidden project-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-48 bg-gradient-to-br from-theme-purple/20 to-transparent flex items-center justify-center">
                <img src={project.image} alt={project.title} className="max-h-full p-4" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} className="bg-theme-purple/20 text-theme-purple hover:bg-theme-purple/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <p key={highlightIndex} className="text-white/80 text-sm flex">
                      <span className="text-theme-purple mr-2">•</span>
                      {highlight}
                    </p>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-4">
                  <a 
                    href={project.github} 
                    className="text-white hover:text-theme-purple transition-colors flex items-center"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github className="w-5 h-5 mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="text-white hover:text-theme-purple transition-colors flex items-center"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
