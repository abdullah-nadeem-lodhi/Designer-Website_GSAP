import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();

  useGSAP(() => {
    gsap.from('.nav-element', {
      y: -20,
      opacity: 0,
      duration: 1,
      stagger: 0.08,
      ease: 'power4.out',
    });
  }, { scope: containerRef });

  const handleHover = (event, isEntering) => {
    const underline = event.currentTarget.querySelector('[data-underline]');
    if (!underline) return;
    gsap.to(underline, {
      width: isEntering ? '100%' : '0%',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Studio', path: '/studio' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav ref={containerRef} className="fixed top-0 left-0 w-full z-50 bg-cream-50/90 backdrop-blur-md border-b border-cream-200 px-6 md:px-12 lg:px-24 py-5 flex justify-between items-center text-studioDark">
      {/* Studio Branding */}
      <Link to="/" className="nav-element font-serif text-xl tracking-tight font-light flex items-center gap-2">
        PHOENUX <span className="w-1.5 h-1.5 rounded-full bg-studioDark block"></span>
      </Link>

      {/* Desktop Links: Always displayed on full-screen, hides the toggle bar completely */}
      <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest font-sans font-medium">
        {(navLinks || []).map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            className={`nav-element relative py-2 transition-colors duration-300 ${location.pathname === link.path ? 'text-studioDark font-semibold' : 'text-studioDark-muted hover:text-studioDark'}`}
          >
            {link.name}
            <span 
              data-underline 
              className={`absolute bottom-0 left-0 h-[1px] bg-studioDark transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0'}`}
            />
          </Link>
        ))}
      </div>

      {/* Toggle Bar Control: Restricted entirely to responsive screen layers */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex md:hidden nav-element p-2 hover:bg-cream-100 rounded-md transition-colors"
        aria-label="Toggle Navigation Layer"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Responsive Overlay Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-cream-50 border-b border-cream-200 flex flex-col p-6 space-y-4 font-sans text-sm uppercase tracking-wider font-medium md:hidden animate-fade-in">
          {(navLinks || []).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`py-2 border-b border-cream-100 last:border-none ${location.pathname === link.path ? 'text-studioDark' : 'text-studioDark-muted'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}