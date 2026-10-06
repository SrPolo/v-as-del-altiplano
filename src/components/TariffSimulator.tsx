import React, { useState, useMemo } from 'react';
import { Calculator, Car, Bus, Truck, Check, Moon, Sun, Home, RefreshCw, ArrowRight } from 'lucide-react';
import { TOLL_STATIONS, VEHICLE_CATEGORIES } from '../data/projectData';
import { VehicleCategory, TollStationId } from '../types';

export const TariffSimulator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>('CAT1');
  const [selectedToll, setSelectedToll] = useState<TollStationId>('GUARNE');
  const [isResident, setIsResident] = useState(false);
  const [isNightSchedule, setIsNightSchedule] = useState(false);
  const [tripsPerMonth, setTripsPerMonth] = useState(20);

  const currentToll = useMemo(
    () => TOLL_STATIONS.find((t) => t.id === selectedToll) || TOLL_STATIONS[0],
    [selectedToll]
  );

  const calculation = useMemo(() => {
    const baseRate = currentToll.baseRates[selectedCategory];
    let newRate = baseRate;
    let discountPct = 0;
    let reason = '';
    const notes: string[] = [];

    if (selectedCategory === 'CAT1') {
      if (isResident) {
        discountPct = 50;
        newRate = Math.round(baseRate * 0.5);
        reason = '50% descuento predio cercano (<1.5 km)';
        notes.push('Beneficio por acreditación de residencia o propiedad cercana.');
      } else {
        discountPct = 30;
        newRate = Math.round(baseRate * 0.7);
        reason = '30% descuento estándar Vías del Altiplano';
        notes.push('Aplica a vehículos particulares del corredor.');
      }
    } else if (selectedCategory === 'CAT2') {
      newRate = 2000;
      discountPct = Math.round(((baseRate - newRate) / baseRate) * 100);
      reason = '$0 tarifa comercial (solo aporte de ley)';
      notes.push('El usuario solo abona FOSEVI + comisión de recaudo.');
    } else if (selectedCategory === 'CAT3_7') {
      if (isNightSchedule) {
        discountPct = 20;
        newRate = Math.round(baseRate * 0.8);
        reason = '20% descuento nocturno (10:00 p.m. – 4:00 a.m.)';
        notes.push('Incentivo para carga en franja nocturna.');
      } else {
        discountPct = 0;
        newRate = baseRate;
        reason = 'Tarifa diurna indexada al IPC';
        notes.push('Conduzca de noche para obtener 20% de descuento.');
      }
    }

    const singleSavings = baseRate - newRate;
    const monthlySavings = singleSavings * tripsPerMonth;
    const yearlySavings = monthlySavings * 12;

    return { baseRate, newRate, discountPct, reason, notes, monthlySavings, yearlySavings };
  }, [selectedCategory, currentToll, isResident, isNightSchedule, tripsPerMonth]);

  const handleReset = () => {
    setSelectedCategory('CAT1');
    setSelectedToll('GUARNE');
    setIsResident(false);
    setIsNightSchedule(false);
    setTripsPerMonth(20);
  };

  return (
    <section id="simulador" className="section-pad bg-forest-950 text-mist-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--color-forest-500),_transparent_55%)]" />

      <div className="container-page space-y-12 relative z-10">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow-light flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5" />
            Herramienta interactiva
          </p>
          <h2 className="heading-section text-white">Simula tu tarifa y ahorro</h2>
          <p className="lead text-mist-200">
            Elige vehículo, peaje y condiciones para ver la tarifa proyectada con el modelo Vías del Altiplano.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 border border-forest-800 bg-asphalt-950/80 p-6 sm:p-8 space-y-7">
            <div className="flex items-center justify-between border-b border-forest-800 pb-4">
              <h3 className="font-display text-lg font-bold text-white">Configura tu trayecto</h3>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-asphalt-400 hover:text-copper-300 flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Restablecer
              </button>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-mist-300">
                1. Categoría del vehículo
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VEHICLE_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const Icon = cat.id === 'CAT2' ? Bus : cat.id === 'CAT3_7' ? Truck : Car;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`p-4 text-left border transition-all ${isSelected
                        ? 'border-copper-400 bg-forest-900'
                        : 'border-forest-800 bg-forest-950 hover:border-forest-600'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-9 h-9 flex items-center justify-center ${isSelected ? 'bg-forest-600 text-white' : 'bg-asphalt-800 text-asphalt-400'
                            }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-copper-400" />}
                      </div>
                      <span className="text-[11px] font-bold text-copper-400 block">{cat.code}</span>
                      <span className="text-xs font-semibold text-white mt-0.5 block line-clamp-2">
                        {cat.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-mist-300">
                2. Estación de peaje
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TOLL_STATIONS.map((toll) => {
                  const isSelected = selectedToll === toll.id;
                  return (
                    <button
                      key={toll.id}
                      type="button"
                      onClick={() => setSelectedToll(toll.id)}
                      className={`p-3.5 text-left border transition-all ${isSelected
                        ? 'border-copper-400 bg-forest-900 text-white'
                        : 'border-forest-800 bg-forest-950 text-mist-200 hover:border-forest-600'
                        }`}
                    >
                      <span className="font-semibold text-sm block">{toll.name}</span>
                      <span className="text-[11px] text-asphalt-400 block mt-0.5 line-clamp-1">
                        {toll.corridor}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 pt-2 border-t border-forest-800">
              <label className="block text-xs font-semibold uppercase tracking-wider text-mist-300">
                3. Condiciones
              </label>

              {selectedCategory === 'CAT1' && (
                <label className="flex items-start gap-3 p-3.5 border border-forest-800 bg-forest-950 cursor-pointer hover:border-forest-600 transition-colors">
                  <input
                    type="checkbox"
                    checked={isResident}
                    onChange={(e) => setIsResident(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-forest-500"
                  />
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Home className="w-4 h-4 text-copper-400" />
                      Residente / predio cercano (&lt;1.5 km)
                    </div>
                    <p className="text-xs text-asphalt-400 mt-1">Activa el 50% de descuento preferencial.</p>
                  </div>
                </label>
              )}

              {selectedCategory === 'CAT3_7' && (
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsNightSchedule(false)}
                    className={`p-3 border flex items-center justify-center gap-2 text-xs font-semibold transition-all ${!isNightSchedule
                      ? 'border-copper-400 bg-forest-900 text-white'
                      : 'border-forest-800 text-asphalt-400'
                      }`}
                  >
                    <Sun className="w-4 h-4 text-copper-300" />
                    Diurno
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsNightSchedule(true)}
                    className={`p-3 border flex items-center justify-center gap-2 text-xs font-semibold transition-all ${isNightSchedule
                      ? 'border-copper-400 bg-forest-900 text-white'
                      : 'border-forest-800 text-asphalt-400'
                      }`}
                  >
                    <Moon className="w-4 h-4 text-copper-300" />
                    Nocturno
                  </button>
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-wider text-mist-300">
                    Pasos por mes
                  </span>
                  <span className="font-bold text-copper-300">{tripsPerMonth}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={60}
                  value={tripsPerMonth}
                  onChange={(e) => setTripsPerMonth(Number(e.target.value))}
                  className="w-full h-1.5 bg-forest-800 appearance-none cursor-pointer accent-copper-400"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-copper-500/40 bg-gradient-to-b from-forest-900 to-asphalt-950 p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-copper-400">
                  {currentToll.name}
                </p>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  Tarifa con beneficio
                </h3>
                <p className="text-xs text-mist-300 mt-2">{calculation.reason}</p>
              </div>

              <div className="space-y-4 border border-forest-800 bg-forest-950/60 p-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-asphalt-400">Tarifa base</span>
                  <span className="text-asphalt-400 line-through">
                    ${calculation.baseRate.toLocaleString('es-CO')}
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-sm font-semibold text-mist-100">Nueva tarifa</span>
                  <div className="text-right">
                    <span className="font-display text-3xl font-extrabold text-copper-300">
                      ${calculation.newRate.toLocaleString('es-CO')}
                    </span>
                    <span className="block text-[10px] text-asphalt-400">por paso</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-forest-900/80 px-3 py-2.5 border border-forest-700">
                  <span className="text-xs font-semibold text-mist-200">Ahorro</span>
                  <span className="font-display text-lg font-bold text-copper-300">
                    −{calculation.discountPct}%
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-mist-300">
                  Tu ahorro estimado
                </p>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="border border-forest-800 p-3">
                    <span className="text-[10px] uppercase tracking-wider text-asphalt-400 block">
                      Ahorro mensual
                    </span>
                    <span className="font-display text-lg font-bold text-copper-300 mt-1 block">
                      ${calculation.monthlySavings.toLocaleString('es-CO')}
                    </span>
                  </div>
                  <div className="border border-forest-800 p-3">
                    <span className="text-[10px] uppercase tracking-wider text-asphalt-400 block">
                      Ahorro anual
                    </span>
                    <span className="font-display text-lg font-bold text-copper-300 mt-1 block">
                      ${calculation.yearlySavings.toLocaleString('es-CO')}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-1.5 text-xs text-mist-300">
                {calculation.notes.map((note) => (
                  <li key={note} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-forest-400 shrink-0 mt-0.5" />
                    {note}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-forest-500 hover:bg-forest-400 text-white font-semibold text-sm transition-colors"
              >
                Solicitar acreditación
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
