
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-theme-charcoal relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-theme-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-theme-dark to-transparent"></div>
      
      <div className="section-container">
        <h2 className="section-title before:content-[''] before:block before:w-20 before:h-1 before:bg-theme-purple before:mb-4">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 space-y-4 animate-fade-in">
            <p className="text-white/90 leading-relaxed">
              I'm a dedicated Computer Science and Engineering student at Lovely Professional University with a passion for solving real-world problems through data analysis and full-stack development.
            </p>
            <p className="text-white/90 leading-relaxed">
              My academic journey has equipped me with strong analytical skills and technical knowledge in various programming languages and tools. I'm particularly interested in extracting meaningful insights from complex datasets and developing applications that deliver value.
            </p>
            <p className="text-white/90 leading-relaxed">
              I believe in continuous learning and staying updated with emerging technologies in the field of data science and web development. My goal is to leverage my skills to create impactful solutions that make a difference.
            </p>
            
            <Button asChild className="bg-theme-purple hover:bg-theme-purple-dark text-white mt-4">
              <a href="#experience">See My Experience</a>
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-theme-purple/10 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-theme-purple/10 blur-2xl"></div>
            
            <div className="glass-card p-8 animate-fade-in animate-delay-200">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-theme-purple font-semibold mb-2">Location</h3>
                  <p className="text-white/80">Pathanamthitta, Kerala</p>
                </div>
                
                <div>
                  <h3 className="text-theme-purple font-semibold mb-2">Email</h3>
                  <p className="text-white/80 break-all">gauthamkrishnaarun1679@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-theme-purple font-semibold mb-2">LinkedIn</h3>
                  <p className="text-white/80">
                    <a href="https://linkedin.com/in/gauthamkrishna2004" target="_blank" rel="noopener noreferrer" className="hover:text-theme-purple">
                      gauthamkrishna2004
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-theme-purple font-semibold mb-2">GitHub</h3>
                  <p className="text-white/80">
                    <a href="https://github.com/gautham1679" target="_blank" rel="noopener noreferrer" className="hover:text-theme-purple">
                      gautham1679
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
