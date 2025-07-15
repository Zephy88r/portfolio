import { motion } from "framer-motion";
import { 
  Code, 
  Server, 
  Database, 
  Cpu,
  Globe,
  Zap
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe size={24} />,
      skills: [
        { name: "React", percentage: 90, icon: "⚛️" },
        { name: "JavaScript", percentage: 85, icon: "🟨" },
        { name: "HTML/CSS", percentage: 95, icon: "🎨" },
      ]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", percentage: 80, icon: "🟢" },
        { name: "Python", percentage: 88, icon: "🐍" },
        { name: "Express.js", percentage: 75, icon: "⚡" },
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database size={24} />,
      skills: [
        { name: "MongoDB", percentage: 82, icon: "🍃" },
        { name: "Git", percentage: 78, icon: "🔧" },
        { name: "Scrapy", percentage: 85, icon: "🕷️" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="fade-in-on-scroll">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className="bg-secondary/80 rounded-xl p-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-accent">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-accent">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="skill-item">
                        <div className="flex justify-between items-center mb-2">
                          <span className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="skill-bar bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="skill-fill bg-gradient-to-r from-accent to-purple-400 h-2 rounded-full"
                            data-width={skill.percentage}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
