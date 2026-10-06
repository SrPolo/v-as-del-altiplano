import React from 'react';
import { Car, Bus, Truck, Ban, ArrowDown } from 'lucide-react';
import { ELIMINATED_TOLL } from '../data/projectData';

export const TariffStructure: React.FC = () => {
  return (
    <section id="tarifas" className="section-pad bg-mist-50 text-asphalt-900">
      <div className="container-page space-y-14 md:space-y-16">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow">Tarifas justas</p>
          <h2 className="heading-section text-forest-950">
            Estructura tarifaria diferenciada
          </h2>
          <p className="lead text-asphalt-600">
            Esquema de peajes con propósito social: ajustes atados al{' '}
            <strong className="text-forest-800 font-semibold">IPC</strong>,
            descuentos para residentes y beneficios históricos para transporte público y carga.
          </p>
        </div>

        {/* Toll stations — editorial row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-mist-200">
          {[
            { n: '01', name: 'Peaje Guarne', sub: 'Autopista Medellín – Bogotá' },
            { n: '02', name: 'Peaje Las Palmas', sub: 'Don Diego – El Retiro' },
            { n: '03', name: 'Peaje Cocorná', sub: 'Santuario – Cocorná' },
          ].map((toll) => (
            <div key={toll.n} className="bg-white p-6 space-y-3">
              <span className="font-display text-xs font-bold tracking-widest text-copper-600">
                {toll.n}
              </span>
              <h3 className="font-display text-lg font-bold text-forest-950">{toll.name}</h3>
              <p className="text-sm text-asphalt-600">{toll.sub}</p>
              <p className="text-xs font-semibold text-forest-700 pt-2 border-t border-mist-100">
                Beneficios Cat. I, II y III
              </p>
            </div>
          ))}

          <div className="bg-forest-900 text-white p-6 space-y-3 relative">
            <span className="absolute top-0 right-0 bg-copper-500 text-forest-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
              Eliminado
            </span>
            <Ban className="w-5 h-5 text-copper-400" />
            <h3 className="font-display text-lg font-bold">{ELIMINATED_TOLL.name}</h3>
            <p className="text-sm text-mist-300 line-through">
              Antes: ${ELIMINATED_TOLL.previousRate.toLocaleString('es-CO')}
            </p>
            <p className="text-xs font-bold text-copper-300 pt-2 border-t border-white/10">
              Ahorro del 100% — cobro $0
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <article className="border border-mist-200 bg-white p-7 space-y-5">
            <div className="flex items-start justify-between gap-3">
              <div className="w-11 h-11 bg-forest-100 text-forest-800 flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-forest-700 bg-forest-50 px-2.5 py-1">
                30% – 50%
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-forest-600">Categoría I</p>
              <h3 className="font-display text-xl font-bold text-forest-950 mt-1">Vehículos livianos</h3>
              <p className="text-sm text-asphalt-600 mt-2">Automóviles, camperos y camionetas particulares.</p>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <ArrowDown className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                <span><strong className="text-forest-900">30% estándar</strong> para todos los livianos del corredor.</span>
              </li>
              <li className="flex gap-2 items-start">
                <ArrowDown className="w-4 h-4 text-copper-600 shrink-0 mt-0.5" />
                <span><strong className="text-forest-900">50% vecinos</strong> con predio a menos de 1.5 km del peaje.</span>
              </li>
            </ul>
          </article>

          <article className="border-2 border-forest-600 bg-white p-7 space-y-5 relative">
            <span className="absolute -top-3 left-6 bg-forest-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1">
              Beneficio estrella
            </span>
            <div className="flex items-start justify-between gap-3 pt-1">
              <div className="w-11 h-11 bg-forest-700 text-white flex items-center justify-center">
                <Bus className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white bg-forest-700 px-2.5 py-1">$0 comercial</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-forest-600">Categoría II</p>
              <h3 className="font-display text-xl font-bold text-forest-950 mt-1">Buses y busetas</h3>
              <p className="text-sm text-asphalt-600 mt-2">Transporte público colectivo intermunicipal y urbano.</p>
            </div>
            <p className="text-sm text-asphalt-700 leading-relaxed">
              Se elimina la tarifa comercial de peaje. Solo se paga el aporte de ley a FOSEVI
              más comisión de recaudo (aprox. $2.000).
            </p>
          </article>

          <article className="border border-mist-200 bg-white p-7 space-y-5">
            <div className="flex items-start justify-between gap-3">
              <div className="w-11 h-11 bg-asphalt-900 text-white flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white bg-asphalt-800 px-2.5 py-1">20% nocturno</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-asphalt-600">Cat. III – VII</p>
              <h3 className="font-display text-xl font-bold text-forest-950 mt-1">Carga pesada</h3>
              <p className="text-sm text-asphalt-600 mt-2">Camiones, tractocamiones y logística regional.</p>
            </div>
            <p className="text-sm text-asphalt-700 leading-relaxed">
              <strong className="text-forest-900">20% de descuento</strong> entre 10:00 p.m. y 4:00 a.m.
              para descongestionar el corredor en el día.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
