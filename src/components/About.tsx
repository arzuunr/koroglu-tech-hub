
const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              As a physics engineer passionate about technology and innovation, I approach problems with 
              <span className="text-cyan-400 font-semibold"> analytical rigor</span> and curiosity. 
              I am always diving into new fields from the ground up.
            </p>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              Whether exploring <span className="text-blue-400 font-semibold">machine learning</span> through 
              spin glasses and Ising models or building <span className="text-cyan-400 font-semibold">blockchain-based projects</span>, 
              I thrive on connecting theoretical foundations to practical applications.
            </p>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm particularly drawn to opportunities where I can apply my analytical mindset to real-world 
              challenges at the intersection of <span className="text-blue-400 font-semibold">technology and innovation</span>.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Education & Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-cyan-400 font-semibold">Istanbul Technical University</h4>
                <p className="text-slate-300">Physics Engineering (4th year)</p>
                <p className="text-slate-400 text-sm">GPA: 3.09/4.00</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold">Potsdam University</h4>
                <p className="text-slate-300">Physics - Erasmus Exchange</p>
                <p className="text-slate-400 text-sm">Berlin, Germany (2023-2024)</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold">SCA Social</h4>
                <p className="text-slate-300">Project Management Intern</p>
                <p className="text-slate-400 text-sm">May 2024 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
