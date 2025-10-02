import React from 'react';
import { Award, Shield, Clock, Headphones } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="section-container">
      <h2 className="section-title">Why Choose Sir Corporation?</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-cyan-400" size={24} />
            <h3 className="text-xl font-bold text-white">Expert Installation</h3>
          </div>
          <p className="text-white/90">
            Skilled teams for trenching, ducting, jointing and fiber splicing — delivering high-quality underground installations across terrains.
          </p>
        </div>
        
        <div className="service-card">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-cyan-400" size={24} />
            <h3 className="text-xl font-bold text-white">Reliable & Secure</h3>
          </div>
          <p className="text-white/90">
            Robust materials and best practices ensure network longevity and secure performance for critical communication links.
          </p>
        </div>
        
        <div className="service-card">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="text-cyan-400" size={24} />
            <h3 className="text-xl font-bold text-white">Timely Delivery</h3>
          </div>
          <p className="text-white/90">
            Over a decade of proven project execution with attention to schedule, safety, and regulatory compliance.
          </p>
        </div>
        
        <div className="service-card">
          <div className="flex items-center gap-3 mb-4">
            <Headphones className="text-cyan-400" size={24} />
            <h3 className="text-xl font-bold text-white">24/7 Support</h3>
          </div>
          <p className="text-white/90">
            Round-the-clock technical support and emergency response team for critical network maintenance and fault resolution.
          </p>
          
          {/* Emergency Response Animation */}
          <div className="emergency-response mt-4">
            <div className="emergency-text">Emergency Response Active</div>
            <div className="emergency-pulse"></div>
          </div>
        </div>
        
        <div className="service-card">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-cyan-400" size={24} />
            <h3 className="text-xl font-bold text-white">Quality Assurance</h3>
          </div>
          <p className="text-white/90">
            Rigorous testing protocols and quality control measures ensure every installation meets international standards and long-term reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;