import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle2, ShieldCheck } from 'lucide-react';
import { APP_LEGAL_FACTS, FAQS } from '../data/projectData';

export const LegalFramework: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="legal" className="section-pad bg-mist-50 text-asphalt-900">
      <div className="container-page space-y-14 md:space-y-16">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow">Marco regulatorio</p>
          <h2 className="heading-section text-forest-950">
            Esquema legal de iniciativa privada
          </h2>
          <p className="lead text-asphalt-600">
            Estructurado bajo la Ley 1508 de 2012 para ejecutar con rigor y{' '}
            <strong className="text-forest-800">cero riesgo fiscal</strong> para el tesoro público.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-mist-200">
          {APP_LEGAL_FACTS.map((fact, idx) => (
            <div key={fact.title} className="bg-white p-6 space-y-3 flex flex-col">
              <span className="font-display text-xs font-bold tracking-widest text-copper-600">
                0{idx + 1}
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-forest-600">
                  {fact.title}
                </p>
                <h3 className="font-display text-base font-bold text-forest-950 mt-1 leading-snug">
                  {fact.value}
                </h3>
              </div>
              <p className="text-xs text-asphalt-600 leading-relaxed flex-1">{fact.description}</p>
              <div className="pt-3 border-t border-mist-100 flex items-center gap-1.5 text-[11px] font-semibold text-forest-700">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                Ley 1508 de 2012
              </div>
            </div>
          ))}
        </div>

        <div className="bg-forest-950 text-white p-8 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-forest-800 pb-6">
            <div>
              <p className="eyebrow-light">Responsabilidad del concesionario</p>
              <h3 className="font-display text-2xl font-bold text-white mt-2">
                Ciclo de vida integral a 40 años
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 text-copper-300 text-xs font-semibold border border-forest-700 px-3 py-2">
              <ShieldCheck className="w-4 h-4" />
              Reversión 100% al Estado
            </div>
          </div>

          <p className="text-mist-200 text-sm leading-relaxed max-w-3xl">
            El proponente asume costos, riesgos y ejecución sin solicitar garantías de pago
            ni respaldos del Estado:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-forest-800">
            {[
              ['Fase 1', 'Estudios y diseños'],
              ['Fase 2', 'Financiación 100% privada'],
              ['Fase 3', 'Gestión ambiental y predial'],
              ['Fase 4', 'Social, O&M 40 años'],
            ].map(([phase, label]) => (
              <div key={phase} className="bg-forest-900 p-4 text-center">
                <span className="text-copper-400 font-bold text-xs block mb-1">{phase}</span>
                <span className="text-xs text-mist-200">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 pt-2">
          <div className="text-center space-y-2">
            <h3 className="font-display text-2xl font-bold text-forest-950 flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-forest-600" />
              Preguntas frecuentes
            </h3>
            <p className="text-sm text-asphalt-600">
              Respuestas claras para comunidades, usuarios, transportadores y alcaldías.
            </p>
          </div>

          <div className="space-y-2">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={faq.question} className="border border-mist-200 bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 font-semibold text-forest-950 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-mist-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-forest-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-asphalt-600 text-sm leading-relaxed border-t border-mist-100 bg-mist-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
