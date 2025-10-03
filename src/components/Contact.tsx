import React, { useState } from 'react';
import { Mail, MapPin, Phone, ExternalLink, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGetQuote = () => {
    // Open Google Form in new tab
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfPLV8dOlYwoMsVCBDkm4qAxBODuoKTI1wAQjJr8hFUlINDEQ/viewform?usp=header', '_blank');
    
    // Show success message with animation
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        form.reset();
        setTimeout(() => setShowSuccessMessage(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openLocation = () => {
    window.open('https://maps.app.goo.gl/zpfZ9m9pdtXJGoVy6', '_blank');
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact & Get a Quote</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="glass-card p-8 rounded-xl space-y-6">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">Get Your Quote</h3>
          
          <div className="space-y-4 text-white/90">
            <p className="text-lg">
              Ready to strengthen your digital infrastructure? Get a personalized quote for your fiber optic installation project.
            </p>
            
            <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">What we need to know:</h4>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• Project location and scope</li>
                <li>• Required cable length and capacity</li>
                <li>• Timeline and budget considerations</li>
                <li>• Special requirements or challenges</li>
              </ul>
            </div>
          </div>
          
          <button 
            onClick={handleGetQuote}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <ExternalLink size={20} />
            Get Detailed Quote
          </button>
          
          <form onSubmit={handleFormSubmit} className="border-t border-white/10 pt-6">
            <input type="hidden" name="access_key" value="333c2fee-9fdc-404e-be62-27e8b777d897" />
            <input type="hidden" name="subject" value="New Contact Form Submission from SIR Corporation Website" />
            <input type="hidden" name="from_name" value="SIR Corporation Website" />
            
            <p className="text-sm text-white/70 mb-4">Or send a quick message:</p>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="form-input w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="form-input w-full"
                required
              />
              <select name="service_type" className="form-input w-full" required>
                <option value="">Select Service Type</option>
                <option value="Installation">Installation</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Emergency Restoration">Emergency Restoration</option>
                <option value="Troubleshooting">Troubleshooting</option>
                <option value="Inspections">Inspections</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="budget"
                placeholder="Estimated budget or timeline"
                className="form-input w-full"
                pattern="[A-Za-z\s]+"
                title="Please enter letters and spaces only"
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Brief message about your project"
                className="form-input w-full resize-none"
                pattern="[A-Za-z\s]+"
                title="Please enter letters and spaces only"
                required
              />
              <button 
                type="submit" 
                className="btn-secondary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Quick Message'}
              </button>
            </div>
          </form>
        </div>
        
        <div className="glass-card p-8 rounded-xl space-y-6">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">Office</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <div className="font-semibold text-white mb-1">Address:</div>
                <div className="text-white/90 mb-2">
                  Plot No 117, First Floor, Stadium Road, Transport Nagar, Korba, Chhattisgarh – 495677
                </div>
                <button 
                  onClick={openLocation}
                  className="btn-secondary text-sm flex items-center gap-2"
                >
                  <MapPin size={16} />
                  View on Map
                </button>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mail className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <div className="font-semibold text-white mb-1">Email:</div>
                <div className="text-white/90">sircorp.pvtltd@gmail.com</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Phone className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <div className="font-semibold text-white mb-1">Professional Service:</div>
                <div className="text-white/70">
                  Expert fiber optic installation and maintenance solutions across India.
                </div>
              </div>
            </div>
          </div>

          {/* Network Visualization */}
          <div className="text-center mb-2">
            <span className="text-cyan-400 font-bold text-lg">🇮🇳 Pan-India Coverage Network</span>
          </div>
          <div className="mt-6 p-4 bg-slate-800/30 rounded-lg">
            <h4 className="text-cyan-400 font-semibold mb-3">Our Network Coverage</h4>
            <div className="network-coverage-map relative h-64 bg-slate-900/50 rounded-lg border border-cyan-400/20 overflow-hidden hover:h-80 transition-all duration-500 hover:scale-105 cursor-pointer group">
              {/* Major Cities */}
              <div className="coverage-node delhi" style={{top: '20%', left: '28%'}}>
                <div className="node-pulse"></div>
                <span className="node-label">Delhi</span>
              </div>
              <div className="coverage-node mumbai" style={{top: '55%', left: '12%'}}>
                <div className="node-pulse"></div>
                <span className="node-label">Mumbai</span>
              </div>
              <div className="coverage-node lucknow" style={{top: '30%', left: '42%'}}>
                <div className="node-pulse"></div>
                <span className="node-label">Lucknow</span>
              </div>
              <div className="coverage-node kolkata" style={{top: '35%', left: '68%'}}>
                <div className="node-pulse"></div>
                <span className="node-label">Kolkata</span>
              </div>
              <div className="coverage-node sultanpur" style={{top: '35%', left: '48%'}}>
                <div className="node-pulse"></div>
                <span className="node-label">Sultanpur</span>
              </div>
              <div className="coverage-node korba" style={{top: '40%', left: '48%'}}>
                <div className="node-pulse headquarters"></div>
                <span className="node-label headquarters">Korba HQ</span>
              </div>
              <div className="coverage-node koderma" style={{top: '37%', left: '58%'}}>
                <div className="node-pulse"></div>
                <span className="node-label">Koderma</span>
              </div>
              <div className="coverage-node patna" style={{top: '33%', left: '62%'}}>
                <div className="node-pulse"></div>
                <span className="node-label">Patna</span>
              </div>
              <div className="coverage-node bhagalpur" style={{top: '35%', left: '70%'}}>
                <div className="node-pulse"></div>
                <span className="node-label">Bhagalpur</span>
              </div>
              <div className="coverage-node raipur" style={{top: '50%', left: '46%'}}>
                <div className="node-pulse"></div>
                <span className="node-label">Raipur</span>
              </div>
              <div className="coverage-node anuppur" style={{top: '45%', left: '50%'}}>
                <div className="node-pulse"></div>
                <span className="node-label">Anuppur</span>
              </div>
              <div className="coverage-node ajmer" style={{top: '30%', left: '22%'}}>
                <div className="node-pulse"></div>
                <span className="node-label">Ajmer</span>
              </div>
              
              {/* Connection Lines */}
              <div className="coverage-line" style={{top: '25%', left: '28%', width: '160px', transform: 'rotate(25deg)'}}></div>
              <div className="coverage-line" style={{top: '50%', left: '15%', width: '180px', transform: 'rotate(-15deg)'}}></div>
              <div className="coverage-line" style={{top: '40%', left: '48%', width: '100px', transform: 'rotate(45deg)'}}></div>
              <div className="coverage-line" style={{top: '35%', left: '42%', width: '80px', transform: 'rotate(15deg)'}}></div>
              <div className="coverage-line" style={{top: '37%', left: '58%', width: '70px', transform: 'rotate(-30deg)'}}></div>
              <div className="coverage-line" style={{top: '45%', left: '46%', width: '80px', transform: 'rotate(20deg)'}}></div>
              
              {/* Coverage Areas */}
              <div className="coverage-area north" style={{top: '5%', left: '20%', width: '35%', height: '30%'}}></div>
              <div className="coverage-area west" style={{top: '40%', left: '2%', width: '30%', height: '35%'}}></div>
              <div className="coverage-area central" style={{top: '35%', left: '35%', width: '40%', height: '30%'}}></div>
              <div className="coverage-area east" style={{top: '30%', left: '60%', width: '30%', height: '30%'}}></div>
              
              <div className="absolute bottom-2 right-2 text-xs text-white/70 group-hover:text-white/90 transition-colors">
                Active Installations Nationwide
              </div>
              
              <div className="absolute top-2 left-2 text-xs text-cyan-400/70 group-hover:text-cyan-400 transition-colors">
                Hover to expand view
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Message Modal */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-xl max-w-md w-full text-center animate-scale-in">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Thank You for Your Interest!</h3>
            <p className="text-white/80 mb-6">
              We will review your requirements and notify you with a detailed quote soon.
            </p>
            <div className="flex gap-3 justify-center">
              <button 
                onClick={openLocation}
                className="btn-secondary flex items-center gap-2"
              >
                <MapPin size={16} />
                Our Location
              </button>
              <button 
                onClick={() => setShowSuccessMessage(false)}
                className="btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;