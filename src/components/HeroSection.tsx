
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-theme-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-theme-purple/10 to-transparent"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-theme-purple/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-theme-purple/5 blur-3xl"></div>
      
      <div className="section-container grid md:grid-cols-2 gap-12 relative">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading text-white animate-fade-in">
            Hi, I'm <span className="text-theme-purple">Gautham Krishna</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-theme-gray mb-6 animate-fade-in animate-delay-100">
            Aspiring Data Analyst | Data Scientist
          </h2>
          
          <p className="text-white/80 mb-8 animate-fade-in animate-delay-200">
            Based in Pathanamthitta, Kerala • Building data-driven solutions and web applications
          </p>
          
          <div className="flex space-x-4 mb-10 animate-fade-in animate-delay-300">
            <a href="mailto:gauthamkrishnaarun1679@gmail.com" className="text-white hover:text-theme-purple transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/gauthamkrishna2004" target="_blank" rel="noopener noreferrer" className="text-white hover:text-theme-purple transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/gautham1679" target="_blank" rel="noopener noreferrer" className="text-white hover:text-theme-purple transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
          
          <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-400">
            <Button asChild className="bg-theme-purple hover:bg-theme-purple-dark text-white">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild className="border-theme-purple text-theme-purple hover:bg-theme-purple/10">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-theme-purple/20 blur-xl"></div>
            <img 
              src="/lovable-uploads/3c6b720e-2f50-4bfe-84e8-419ffdd78657.png" 
              alt="Gautham Krishna" 
              className="w-64 h-64 object-cover rounded-full border-4 border-theme-purple/30 relative z-10 animate-fade-in animate-delay-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
