import React from 'react';
import { ArrowUp, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { name: 'Tarifas', href: '#tarifas' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Inversión social', href: '#inversion-social' },
    { name: 'Obras', href: '#obras' },
    { name: 'Marco legal', href: '#legal' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-asphalt-950 text-asphalt-400 text-sm border-t border-forest-900 pt-16 pb-10">
      <div className="container-page space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-forest-900">
          <div className="lg:col-span-1 space-y-4">
            <a href="#inicio" className="inline-block">
              <img
                src="/logo.svg"
                alt="Vías del Altiplano"
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="text-xs leading-relaxed text-asphalt-400 max-w-xs">
              Iniciativa privada de beneficio social para la conectividad del Oriente antioqueño
              con $0 recursos públicos.
            </p>
            <div className="inline-flex items-center gap-2 text-copper-300 text-xs font-semibold border border-forest-800 px-3 py-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              Radicado en la ANI · Ley 1508
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-copper-300 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Destacados
            </h4>
            <ul className="space-y-2 text-xs text-asphalt-400">
              <li>30%–50% descuento en Cat. I</li>
              <li>Buses: $0 tarifa comercial</li>
              <li>Peaje Puerto Triunfo eliminado</li>
              <li>20% nocturno para carga</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-copper-400 shrink-0 mt-0.5" />
                <span>Oriente antioqueño · Medellín</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-copper-400 shrink-0" />
                <span>contacto@viasdelaltiplano.com.co</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-copper-400 shrink-0" />
                <span>+57 (604) 444 8427</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-asphalt-600">
          <div>
            © {new Date().getFullYear()} Vías del Altiplano — Estructura Plural
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-forest-800 text-asphalt-300 hover:text-white hover:border-forest-600 transition-colors"
          >
            Ir arriba
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
