import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ client: '', email: '', summary: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.client || !formData.email) return;
    setSent(true);
  };

  return (
    <div className="w-full min-h-screen bg-cream-50 text-studioDark pt-32 pb-24 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-4">
          <h1 className="font-serif text-5xl font-light tracking-tight">Initiate Intake</h1>
          <p className="text-sm text-studioDark-muted font-light leading-relaxed">
            Let's coordinate project details. Use the standard intake setup or interact with our automated assistant below.
          </p>
        </div>
        <div className="lg:col-span-7 bg-cream-100 border border-cream-200 p-8">
          {sent ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-12 animate-fade-in">
              <span className="font-serif text-2xl font-light italic mb-2">Transmission Received</span>
              <p className="text-xs text-studioDark-muted uppercase tracking-wider">Our operators will connect within 24 cycles.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest font-medium mb-2 text-studioDark-muted">Identity / Studio</label>
                <input 
                  type="text" 
                  required
                  value={formData.client}
                  onChange={(e) => setFormData({...formData, client: e.target.value})}
                  className="w-full bg-cream-50 border border-cream-200 px-4 py-3 text-sm focus:outline-none focus:border-studioDark/40 transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-medium mb-2 text-studioDark-muted">Secure Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-cream-50 border border-cream-200 px-4 py-3 text-sm focus:outline-none focus:border-studioDark/40 transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-medium mb-2 text-studioDark-muted">Project Scope Summary</label>
                <textarea 
                  rows="4" 
                  value={formData.summary}
                  onChange={(e) => setFormData({...formData, summary: e.target.value})}
                  className="w-full bg-cream-50 border border-cream-200 px-4 py-3 text-sm focus:outline-none focus:border-studioDark/40 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="w-full bg-studioDark text-cream-50 py-3 text-xs uppercase tracking-widest font-medium hover:bg-studioDark-muted transition-colors duration-300">
                Submit Dispatch
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}