export default function Studio() {
  return (
    <div className="w-full min-h-screen bg-cream-50 text-studioDark pt-32 pb-24 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="border-b border-cream-200 pb-6">
          <h1 className="font-serif text-5xl font-light tracking-tight">The Studio Mindset</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <h2 className="md:col-span-4 font-serif text-xl italic text-studioDark-muted font-normal">
            Rooted in raw structural mechanics, optimized for high-end digital articulation.
          </h2>
          <div className="md:col-span-8 space-y-6 text-lg text-studioDark-muted font-light leading-relaxed">
            <p>
              We operate out of a highly calculated workspace designed to remove secondary environmental noise. Our offline environment directly influences our online output—pure, high-contrast, structural typography.
            </p>
            <p>
              By treating computational constraints as design guidelines rather than limits, we build digital storefronts and production interfaces that preserve engineering integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}