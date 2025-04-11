
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-theme-dark border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white">
              <span className="text-theme-purple">G</span>autham Krishna
            </h2>
            <p className="text-theme-gray text-sm mt-1">Aspiring Data Analyst | Data Scientist</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:gauthamkrishnaarun1679@gmail.com"
              className="text-white hover:text-theme-purple transition-colors p-2"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/gauthamkrishna2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-theme-purple transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/gautham1679"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-theme-purple transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-6 pt-6 text-center">
          <p className="text-theme-gray text-sm">
            © {currentYear} Gautham Krishna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
