import React from 'react';
import { Network, PenTool, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="section-container">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="flex items-center gap-3 mb-4">
            <Network className="text-cyan-400" size={24} />
            <h3 className="text-xl font-bold text-white">Underground Fiber Optic Installation</h3>
          </div>
          <p className="text-white/90">
            End-to-end deployment including route survey, civil works, cable laying, joint enclosures and testing.
          </p>
        </div>
        
        <div className="service-card">
          <div className="flex items-center gap-3 mb-4">
            <PenTool className="text-cyan-400" size={24} />
            <h3 className="text-xl font-bold text-white">Network Planning & Design</h3>
          </div>
          <p className="text-white/90">
            Optimized route planning, capacity forecasting and turnkey network design for future growth.
          </p>
        </div>
        
        <div className="service-card">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="text-cyan-400" size={24} />
            <h3 className="text-xl font-bold text-white">Maintenance & Emergency Restoration</h3>
          </div>
          <p className="text-white/90">
            24/7 fault restoration, splicing teams and preventive maintenance to minimize downtime.
          </p>
          
          {/* Emergency Response Animation */}
          <div className="emergency-response mt-4">
            <div className="emergency-text">Emergency Response</div>
            <div className="emergency-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;