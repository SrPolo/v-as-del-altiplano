import React, { useState } from 'react';
import { Store, Landmark, Trees, CheckCircle2 } from 'lucide-react';
import { SOCIAL_FUNDS } from '../data/projectData';

export const SocialInvestment: React.FC = () => {
  const [activeFundIndex, setActiveFundIndex] = useState(0);

  return (
    <section id="inversion-social" className="section-pad bg-mist-50 text-asphalt-900">
      <div className="container-page space-y-14">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow">Retorno social</p>
          <h2 className="heading-section text-forest-950">
            Inversión social y economía popular
          </h2>
          <p className="lead text-asphalt-600">
            El <strong className="text-forest-800">5%</strong> del recaudo bruto de peajes se destina por contrato
            a comunidades, vías municipales, clima e infraestructura nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SOCIAL_FUNDS.map((fund, idx) => {
            const isSelected = activeFundIndex === idx;
            const Icon = idx === 1 ? Trees : idx === 2 ? Landmark : Store;

            return (
              <button
                key={fund.title}
                type="button"
                onClick={() => setActiveFundIndex(idx)}
                className={`text-left p-7 border transition-all space-y-5 ${isSelected
                    ? 'bg-forest-950 text-white border-forest-800'
                    : 'bg-white text-asphalt-800 border-mist-200 hover:border-mist-300'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 flex items-center justify-center ${isSelected ? 'bg-forest-600 text-white' : 'bg-forest-100 text-forest-800'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`font-display text-2xl font-extrabold ${isSelected ? 'text-copper-300' : 'text-forest-700'
                      }`}
                  >
                    {fund.percentage}
                  </span>
                </div>

                <div>
                  <h3 className={`font-display text-xl font-bold ${isSelected ? 'text-white' : 'text-forest-950'}`}>
                    {fund.title}
                  </h3>
                  <p className={`text-xs font-semibold mt-1.5 ${isSelected ? 'text-copper-300' : 'text-forest-600'}`}>
                    {fund.target}
                  </p>
                </div>

                <p className={`text-sm leading-relaxed ${isSelected ? 'text-mist-200' : 'text-asphalt-600'}`}>
                  {fund.description}
                </p>

                <ul className="space-y-2 pt-1">
                  {fund.pillars.map((pillar) => (
                    <li key={pillar} className="flex items-start gap-2 text-xs">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isSelected ? 'text-copper-400' : 'text-forest-600'
                          }`}
                      />
                      <span className={isSelected ? 'text-mist-200' : 'text-asphalt-700'}>{pillar}</span>
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
