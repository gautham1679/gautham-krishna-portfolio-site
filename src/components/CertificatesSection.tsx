
import { Award } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CertificatesSection = () => {
  const certificates = [
    {
      name: "Microsoft Azure Data Fundamentals (DP-900)",
      issuer: "Microsoft",
      date: "October 2024",
      description: "Validated knowledge of core data concepts and Microsoft Azure data services.",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-theme-charcoal">
      <div className="section-container">
        <h2 className="section-title before:content-[''] before:block before:w-20 before:h-1 before:bg-theme-purple before:mb-4">
          Certificates
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {certificates.map((certificate, index) => (
            <div key={index} className="glass-card p-6 mb-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 p-4 bg-theme-purple/20 rounded-xl self-start">
                  <Award className="w-12 h-12 text-theme-purple" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{certificate.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-theme-gray">{certificate.issuer}</span>
                    <span className="text-theme-gray">•</span>
                    <span className="text-theme-gray">{certificate.date}</span>
                  </div>
                  
                  <p className="text-white/80 mb-4">{certificate.description}</p>
                  
                  <Button variant="outline" asChild className="border-theme-purple text-theme-purple hover:bg-theme-purple/10">
                    <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
