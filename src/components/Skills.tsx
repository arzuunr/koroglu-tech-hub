
const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, category: "Programming" },
    { name: "Pandas & NumPy", level: 85, category: "Data Science" },
    { name: "Machine Learning", level: 80, category: "AI/ML" },
    { name: "Git & GitHub", level: 85, category: "Tools" },
    { name: "SQL", level: 75, category: "Database" },
    { name: "C# & Unity", level: 70, category: "Game Dev" },
    { name: "Blockchain", level: 65, category: "Web3" },
    { name: "Bash", level: 70, category: "Systems" }
  ];

  const languageSkills = [
    { name: "English", level: 90 },
    { name: "German", level: 70 },
    { name: "Turkish", level: 100 }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Core Competencies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-slate-400 text-sm">{skill.category}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">Languages</h3>
            <div className="space-y-6">
              {languageSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-slate-400 text-sm">
                      {skill.level === 100 ? 'Native' : skill.level >= 90 ? 'Advanced' : 'Intermediate'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
              <h4 className="text-lg font-bold text-white mb-4">Entrepreneurial Experience</h4>
              <div className="space-y-3 text-slate-300">
                <p><span className="text-cyan-400 font-semibold">Largus Games</span> - Co-Founder (2022)</p>
                <p className="text-sm">Led team of 9, blockchain-based social impact NFT game hub</p>
                <p><span className="text-cyan-400 font-semibold">KÜGİM Incubation</span> - Selected startup</p>
                <p className="text-sm">Secured spot in prestigious incubation program</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
