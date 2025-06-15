
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Arzu <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Köroğlu</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-4 font-light">
            Physics Engineer Student
          </p>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Passionate about bridging theoretical physics with practical applications in 
            <span className="text-cyan-400 font-semibold"> data science</span>, 
            <span className="text-blue-400 font-semibold"> blockchain</span>, and 
            <span className="text-cyan-400 font-semibold"> financial markets</span>
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button 
              asChild 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://github.com/arzuunrk" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <a href="https://www.linkedin.com/in/arzu-koroglu/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-cyan-400 transition-colors"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
