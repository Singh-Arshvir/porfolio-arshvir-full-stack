import React from 'react';
import { Code, Terminal, Cpu } from 'lucide-react';

const skills = [
  {
    icon: Code,
    name: 'Full Stack Development',
    description: 'Beginner in MERN stack and modern web technologies',
  },
  {
    icon: Terminal,
    name: 'Backend Development',
    description: 'Node.js, Express, REST APIs & MongoDB',
  },
  {
    icon: Cpu,
    name: 'Problem Solving',
    description: 'Strong foundation in C, C++ and logic building',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* About Text */}
          <div className="space-y-5">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Hello! I'm <span className="text-white font-semibold">Arshvir Singh</span>, a passionate
              and dedicated Full Stack Developer with a strong interest in modern web technologies.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I have a solid foundation in the MERN stack and enjoy building responsive, scalable,
              and user-friendly web applications.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I’m always eager to learn new technologies, improve my skills, and write clean,
              maintainable code that solves real-world problems.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Apart from web development, I’m passionate about exploring AI, IoT, and participating
              in hackathons and personal projects.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                'C',
                'C++',
                'Python',
                'JavaScript',
                'React',
                'Node.js',
                'Express',
                'MongoDB',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm bg-white/5 text-cyan-400 border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(({ icon: Icon, name, description }) => (
              <div
                key={name}
                className="p-5 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
