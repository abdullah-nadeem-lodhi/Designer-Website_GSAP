import { useRef } from 'react';
import { ArrowUpRight, Shield, Layers, Compass } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Chatbot from '../components/Chatbot';

export default function Home() {
  const containerRef = useRef(null);

  // Safe, scoped GSAP animations that automatically clear memory on unmount
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.from('.hero-title-line', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
    })
    .from('.hero-meta', {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, '-=0.6')
    .from('.interactive-card', {
      scale: 0.95,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    }, '-=0.4');
  }, { scope: containerRef });

  // Safe data arrays to handle content rendering adaptively without hardcoding blocks
  const capabilities = [
    { 
      icon: <Layers className="w-5 h-5 text-studioDark" />, 
      title: "Architectural Frontends", 
      desc: "Immersive web platforms with high-fidelity sensory interactions." 
    },
    { 
      icon: <Compass className="w-5 h-5 text-studioDark" />, 
      title: "Minimalist Identity", 
      desc: "Distilling complex system architectures into clean visual currencies." 
    },
    { 
      icon: <Shield className="w-5 h-5 text-studioDark" />, 
      title: "Engineered Performance", 
      desc: "Flawless technical performance under modern production benchmarks." 
    }
  ];

  const featuredProjects = [
    { title: "The Obsidian Monolith", category: "Spatial Web Design", year: "2026" },
    { title: "Tactile Typography Framework", category: "Interactive Systems", year: "2026" }
  ];

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-cream-50 text-studioDark font-sans pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
        <div className="lg:col-span-8 space-y-6">
          <span className="hero-meta block font-sans tracking-widest text-xs uppercase text-studioDark-muted border-b border-cream-200 pb-2 max-w-fit">
            Digital Design & Interaction Studio
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] font-light">
            <span className="hero-title-line block overflow-hidden">We shape raw code</span>
            <span className="hero-title-line block overflow-hidden text-studioDark-muted italic">into experiential</span>
            <span className="hero-title-line block overflow-hidden">digital realities.</span>
          </h1>
        </div>
        <div className="hero-meta lg:col-span-4 lg:pt-16 space-y-6">
          <p className="text-lg text-studioDark-muted font-light leading-relaxed">
            A boutique design group working at the intersection of raw frontend engineering and editorial typography. We build interfaces that command focus.
          </p>
          <button className="group flex items-center gap-3 px-6 py-3 border border-studioDark text-sm tracking-wider uppercase hover:bg-studioDark hover:text-cream-50 transition-colors duration-300">
            Explore Portfolio
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>
      </header>

      {/* Interactive Project Showcase Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="flex justify-between items-end border-b border-cream-200 pb-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-light">Selected Work</h2>
          <span className="text-xs uppercase tracking-widest text-studioDark-muted">Curated Showcase</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(featuredProjects || []).map((project, idx) => (
            <div 
              key={idx} 
              className="interactive-card group relative bg-cream-100 p-8 min-h-[450px] flex flex-col justify-between border border-cream-200/50 hover:border-studioDark/20 transition-all duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs uppercase font-mono tracking-wider text-studioDark-muted">0{idx + 1} /</span>
                <span className="text-xs uppercase font-mono tracking-wider text-studioDark-muted">{project.year}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-studioDark-muted mb-2">{project.category}</span>
                <h3 className="font-serif text-3xl md:text-4xl font-light group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
              </div>
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities / Studio Focus Section */}
      <section className="max-w-7xl mx-auto bg-cream-100 border border-cream-200 p-8 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {(capabilities || []).map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-cream-50 flex items-center justify-center border border-cream-200 shadow-sm">
                {item.icon}
              </div>
              <h4 className="font-serif text-xl font-normal">{item.title}</h4>
              <p className="text-sm text-studioDark-muted font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Chatbot />
    </div>
  );
}