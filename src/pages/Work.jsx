import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Work() {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    gsap.from('.work-card', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  const portfolio = [
    { title: "The Obsidian Platform", category: "Web Architecture", size: "Full Scale" },
    { title: "Kinetic Typography Lab", category: "Branding Systems", size: "Identity" },
    { title: "Aether E-Commerce Grid", category: "Interaction Design", size: "Bespoke" },
    { title: "Minimalist Sensory Framework", category: "Core Development", size: "Library" },
  ];

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-cream-50 text-studioDark pt-32 pb-24 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-cream-200 pb-8 mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight">Selected Artifacts</h1>
          <p className="text-studioDark-muted text-sm uppercase tracking-widest mt-3">Case Studies & Production Builds</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(portfolio || []).map((item, idx) => (
            <div key={idx} className="work-card group bg-cream-100 p-8 border border-cream-200/60 hover:border-studioDark/30 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[380px]">
              <div className="flex justify-between items-start text-xs font-mono text-studioDark-muted">
                <span>[ 0{idx + 1} ]</span>
                <span>{item.size}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-studioDark-muted block mb-2">{item.category}</span>
                <h2 className="font-serif text-3xl font-light group-hover:translate-x-2 transition-transform duration-300">{item.title}</h2>
              </div>
              <div className="flex justify-end pt-4 border-t border-cream-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}