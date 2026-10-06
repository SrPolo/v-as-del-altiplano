import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tarifas', href: '#tarifas' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Inversión social', href: '#inversion-social' },
    { name: 'Obras', href: '#obras' },
    { name: 'Marco legal', href: '#legal' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,padding,box-shadow] duration-300 ${isScrolled
        ? 'bg-mist-50/95 backdrop-blur-md py-4 shadow-[0_1px_0_0_rgba(15,23,42,0.08)]'
        : 'bg-transparent py-4 shadow-none'
        }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src="/logo.png"
              alt="Vías del Altiplano"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors ${isScrolled
                  ? 'text-asphalt-700 hover:text-forest-700'
                  : 'text-white/85 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-colors ${isScrolled
                ? 'bg-forest-700 text-white hover:bg-forest-600'
                : 'bg-white text-forest-900 hover:bg-mist-100'
                }`}
            >
              Contacto
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 lg:hidden transition-colors ${isScrolled ? 'text-asphalt-800' : 'text-white'
                }`}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 bg-forest-950 border border-forest-800 p-5 space-y-1 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-3 text-mist-100 hover:text-copper-300 font-medium text-base transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, '#contacto')}
            className="mt-3 flex items-center justify-center gap-2 w-full py-3 bg-forest-500 text-white font-semibold text-sm"
          >
            Contacto
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
