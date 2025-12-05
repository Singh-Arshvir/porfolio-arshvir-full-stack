import React from 'react';
import { Brain, Code, Cpu, Terminal, BarChart, Trophy, Microscope, PanelTop } from 'lucide-react';

const skills = [
  {
    icon: Code,
    name: 'Full Stack Development',
    description: 'Beginner in MERN stack and modern web technologies',
  }
];
export default function About() {
  return (
    <section id="about" className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm Arshvir Singh, a passionate and dedicated Full Stack Developer.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in MERN stack development, I have honed my skills in building robust web applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm always eager to learn and explore new technologies, and I'm committed to delivering high-quality code that meets the needs of my clients.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In my free time, I enjoy working on personal projects, contributing to open-source projects, and participating in Hackathons.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about creating innovative solutions that make a difference, whether it's developing 
              MERN stack applications, implementing IoT systems, or building AI Models & Deep Learning Models.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {['C++', 'mern', 'c', 'Python', 'javascript', 'express', 'react'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm bg-white/5 text-cyan-400 border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Grid - Now in 3 Columns */}
          <div className="grid grid-cols-3 gap-6">
            {skills.map(({ icon: Icon, name, description }) => (
              <div
                key={name}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}