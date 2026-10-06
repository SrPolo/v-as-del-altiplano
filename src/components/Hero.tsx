import React from 'react';
import { ArrowRight, Calculator } from 'lucide-react';
import heroBannerImg from '../assets/images/hero_highway_banner_1786055344001.jpg';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-[100svh] flex flex-col text-white overflow-hidden">
      {/* Full-bleed visual plane */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBannerImg}
          alt="Corredor vial del Altiplano antioqueño"
          className="w-full h-full object-cover object-center animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/50 to-forest-950/20" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end pt-28 pb-10 sm:pb-14">
        <div className="container-page w-full">
          <div className="max-w-3xl space-y-6 sm:space-y-7">
            <p className="font-display text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-copper-300 drop-shadow-md animate-fade-up">
              Vías del Altiplano
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.15rem] font-bold tracking-[-0.03em] leading-[1.08] text-white text-balance drop-shadow-lg animate-fade-up delay-1">
              Infraestructura que no le cuesta al presupuesto de Antioquia
            </h1>

            <p className="lead text-white/90 drop-shadow-sm animate-fade-up delay-2">
              Propuesta de concesión vial con propósito social: conectamos el Oriente,
              reducimos tiempos de viaje y fortalecemos la economía popular con{' '}
              <span className="text-copper-300 font-semibold">$0 recursos públicos</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-up delay-3">
              <button
                type="button"
                onClick={() => handleScrollTo('#contacto')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-forest-500 hover:bg-forest-400 text-white font-semibold text-sm sm:text-base transition-colors group"
              >
                Solicitar socialización
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('#simulador')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/35 hover:border-white/70 hover:bg-white/5 text-white font-semibold text-sm sm:text-base transition-colors"
              >
                <Calculator className="w-4 h-4 text-copper-300" />
                Simular tarifa
              </button>
            </div>
          </div>
        </div>

        {/* Metrics strip — below primary composition */}
        <div className="container-page w-full mt-12 sm:mt-16 animate-fade-up delay-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/15">
            {[
              { value: '−43%', label: 'Tiempos de viaje' },
              { value: '$0', label: 'Recursos públicos' },
              { value: '220 km', label: 'Corredor modernizado' },
              { value: '40 años', label: 'Operación y mantenimiento' },
            ].map((metric) => (
              <div key={metric.label} className="bg-forest-950/80 py-5 sm:py-6 px-4 sm:px-5">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-copper-300 tracking-tight">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-mist-200/80 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
