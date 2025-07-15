import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
  const tags = ["Web Developer", "MERN Stack", "Python", "AI Enthusiast"];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="fade-in-on-scroll">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Profile image */}
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-accent to-purple-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="/images/175-removebg-preview.png"
                      alt="Ankit Acharya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-accent">
                  Tech Enthusiast from Nepal
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I'm Ankit Acharya, a passionate developer focused on creating practical 
                  and impactful digital solutions. From building AI assistants to full-stack 
                  e-commerce platforms like Liquor Kendra, I bring curiosity and determination 
                  to every project.
                </p>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Currently pursuing my Bachelor's degree while specializing in web development 
                  with expertise in Python, Scrapy, and the MERN stack (MongoDB, Express.js, 
                  React, Node.js).
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
