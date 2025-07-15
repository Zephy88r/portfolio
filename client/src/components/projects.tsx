import { motion } from "framer-motion";
import { ShoppingCart, Cloud, Bot, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Liquor Kendra",
      description: "A full-stack e-commerce platform for liquor sales built with the MERN stack, featuring secure payment processing and inventory management.",
      icon: <ShoppingCart size={48} />,
      gradient: "from-accent to-purple-500",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      githubLink: "#"
    },
    {
      title: "Weather App",
      description: "A responsive weather application that displays real-time weather data with a clean, intuitive interface and location-based forecasts.",
      icon: <Cloud size={48} />,
      gradient: "from-blue-400 to-cyan-500",
      tags: ["React", "API Integration", "CSS3"],
      githubLink: "#"
    },
    {
      title: "Personal AI Assistant",
      description: "An intelligent AI assistant with voice recognition, face detection, and command processing capabilities for personalized user interactions.",
      icon: <Bot size={48} />,
      gradient: "from-purple-500 to-pink-500",
      tags: ["Python", "OpenCV", "Speech Recognition", "ML"],
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="fade-in-on-scroll">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card bg-secondary rounded-xl p-6 hover:shadow-xl group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center text-white`}>
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 text-accent">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    className="text-accent hover:text-purple-400 transition-colors flex items-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
