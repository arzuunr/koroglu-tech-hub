
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gravitational Waves Classification",
      description: "LSTM deep learning model to classify gravitational waves into BBH, BNS, and NSBH using simulated time-series data from L1 detector.",
      tech: ["Python", "LSTM", "Machine Learning", "Physics"],
      github: "https://github.com/arzuunrk/gw_classification_lstm",
      highlight: true
    },
    {
      title: "İş Bankası Banking Simulation",
      description: "Comprehensive banking simulation project including campaign creation, customer list generation, and data analysis for modern banking solutions.",
      tech: ["Python", "Data Analysis", "Jupyter Notebook"],
      github: "https://github.com/arzuunrk/ynbs_is_bankasi",
      highlight: true
    },
    {
      title: "Denizbank Data Analysis Bootcamp",
      description: "Complete data analysis project covering Python, SQL, and data visualization techniques developed during intensive bootcamp.",
      tech: ["Python", "SQL", "Data Visualization", "Pandas"],
      github: "https://github.com/arzuunrk/bootcamp_veri_analizi",
      highlight: false
    },
    {
      title: "Blockchain Projects",
      description: "Collection of blockchain-related projects and experiments, including smart contracts and decentralized applications.",
      tech: ["Blockchain", "Smart Contracts", "Web3"],
      github: "https://github.com/arzuunrk/blockchain",
      highlight: false
    },
    {
      title: "100 Day Python Challenge",
      description: "Comprehensive Python learning journey using Udemy crash course to evaluate skills and reach advanced proficiency level.",
      tech: ["Python", "Algorithms", "Data Structures"],
      github: "https://github.com/arzuunrk/100_day_challenge",
      highlight: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 ${
                project.highlight ? 'ring-2 ring-cyan-400/20' : ''
              }`}
            >
              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                <CardDescription className="text-slate-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full border border-blue-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
