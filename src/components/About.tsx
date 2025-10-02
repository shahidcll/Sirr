import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/18"></div>
      <div className="section-container relative z-10">
        <h2 className="section-title">About Us</h2>
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Calendar className="text-cyan-400 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-white">2013</div>
              <div className="text-white/70">Founded</div>
            </div>
            <div className="text-center">
              <MapPin className="text-cyan-400 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-white">Pan-India</div>
              <div className="text-white/70">Coverage</div>
            </div>
            <div className="text-center">
              <Users className="text-cyan-400 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-white">Expert</div>
              <div className="text-white/70">Team</div>
            </div>
          </div>
          
          <div className="space-y-6 text-white/90">
            <p className="text-lg leading-relaxed">
              <strong className="text-cyan-400">Founded in 2013</strong>, Sir Corporation Private Limited has been a trusted name in underground fiber optic cable installation. Our experience spans urban and rural deployments, complex crossings, and mission-critical links. We combine technical know-how, modern tools, and strict safety standards to deliver long-term, high-performance network infrastructure.
            </p>
            <p className="text-lg leading-relaxed">
              We offer site survey, design, trenching, duct installation, splicing, testing (OTDR), and maintenance — supporting telecom providers, enterprises, and government projects across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;