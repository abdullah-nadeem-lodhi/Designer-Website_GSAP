export default function Process() {
  const blueprintSteps = [
    { rank: "01", phase: "System Discovery", details: "Deconstructing core brand criteria into scalable interface blueprints." },
    { rank: "02", phase: "Typographic Framework", details: "Setting strict mathematical grids and structural scale rules." },
    { rank: "03", phase: "Kinetic Optimization", details: "Injecting high-performance GSAP parameters into local UI layers." },
    { rank: "04", phase: "Production Buildout", details: "Compiling semantic code assemblies using secure development pipelines." }
  ];

  return (
    <div className="w-full min-h-screen bg-cream-50 text-studioDark pt-32 pb-24 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-5xl font-light tracking-tight mb-16 border-b border-cream-200 pb-6">Methodology</h1>
        <div className="relative border-l border-cream-200 pl-6 md:pl-12 space-y-12">
          {(blueprintSteps || []).map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] md:-left-[55px] top-0 w-[11px] h-[11px] rounded-full bg-cream-50 border border-studioDark group-hover:bg-studioDark transition-colors duration-300" />
              <span className="font-mono text-xs text-studioDark-muted block tracking-widest mb-1">{step.rank} // PHASE</span>
              <h3 className="font-serif text-2xl font-normal mb-2">{step.phase}</h3>
              <p className="text-sm text-studioDark-muted font-light max-w-2xl leading-relaxed">{step.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}