import React, { useState, useEffect } from 'react';
import { WORK_PROJECTS } from '../data/projectData';
import {
  GitMerge, Network, TrainTrack, Route, Footprints, Hammer,
  Clock, ShieldCheck, MapPin, CheckCircle2, ZoomIn, X, ArrowUpRight,
} from 'lucide-react';
import { WorkProject } from '../types';

export const WorksViewer: React.FC = () => {
  const [selectedWorkId, setSelectedWorkId] = useState<string>(WORK_PROJECTS[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeWork: WorkProject =
    WORK_PROJECTS.find((w) => w.id === selectedWorkId) || WORK_PROJECTS[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GitMerge': return <GitMerge className="w-4 h-4" />;
      case 'Network': return <Network className="w-4 h-4" />;
      case 'TrainTrack': return <TrainTrack className="w-4 h-4" />;
      case 'Route': return <Route className="w-4 h-4" />;
      case 'Footprints': return <Footprints className="w-4 h-4" />;
      case 'Hammer': return <Hammer className="w-4 h-4" />;
      default: return <Route className="w-4 h-4" />;
    }
  };

  return (
    <section id="obras" className="section-pad bg-forest-950 text-mist-50">
      <div className="container-page space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow-light">Alcance técnico</p>
          <h2 className="heading-section text-white">Principales obras del corredor</h2>
          <p className="lead text-mist-200">
            Intervenciones para destrabar cuellos de botella del Altiplano, mejorar seguridad vial
            y beneficiar a las comunidades del Oriente antioqueño.
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-thin">
          {WORK_PROJECTS.map((work) => {
            const isSelected = work.id === selectedWorkId;
            const tabTitle =
              work.id === 'BARRIO_MADERA' ? 'Barrio de la Madera' : work.title;
            return (
              <button
                key={work.id}
                type="button"
                onClick={() => setSelectedWorkId(work.id)}
                className={`shrink-0 min-w-[9.5rem] max-w-[11rem] p-3.5 text-left border transition-all ${isSelected
                    ? 'border-copper-400 bg-forest-900 text-white'
                    : 'border-forest-800 bg-asphalt-950/50 text-asphalt-400 hover:text-mist-100 hover:border-forest-600'
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 flex items-center justify-center ${isSelected ? 'bg-forest-600 text-white' : 'bg-asphalt-800'
                      }`}
                  >
                    {getIcon(work.iconName)}
                  </div>
                </div>
                <span className="text-xs font-semibold block line-clamp-2 text-white">{tabTitle}</span>
                <span className="text-[10px] block text-asphalt-400 mt-1 line-clamp-1">
                  {work.keyMetric}
                </span>
              </button>
            );
          })}
        </div>

        <div className="border border-forest-800 bg-asphalt-950/60 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-forest-600 text-white text-[11px] font-bold px-2.5 py-1">
                  {activeWork.badge}
                </span>
                <span className="text-[11px] font-semibold text-mist-300 border border-forest-700 px-2.5 py-1">
                  {activeWork.status}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {activeWork.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-semibold text-copper-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    {activeWork.location} · {activeWork.lengthOrScope}
                  </span>
                </div>
              </div>

              <p className="text-mist-200 text-sm sm:text-base leading-relaxed">
                {activeWork.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-asphalt-400">
                  Especificaciones clave
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeWork.technicalDetails.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-2 bg-forest-950/80 p-3 border border-forest-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-mist-200">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-forest-800">
                <div className="p-4 border border-forest-800 bg-forest-900/40">
                  <div className="flex items-center gap-2 text-copper-400 text-xs font-bold uppercase">
                    <Clock className="w-3.5 h-3.5" />
                    Tiempo
                  </div>
                  <p className="font-display text-lg font-bold text-white mt-1.5">
                    {activeWork.travelTimeReduction}
                  </p>
                </div>
                <div className="p-4 border border-forest-800">
                  <div className="flex items-center gap-2 text-copper-400 text-xs font-bold uppercase">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Seguridad
                  </div>
                  <p className="text-xs text-mist-200 mt-1.5 font-medium leading-relaxed">
                    {activeWork.safetyImpact}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="relative w-full h-64 sm:h-72 overflow-hidden border border-forest-800 group cursor-pointer text-left"
              >
                <img
                  src={
                    activeWork.imageUrl ||
                    'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80'
                  }
                  alt={activeWork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-forest-950/90 text-copper-300 p-2 border border-forest-700 flex items-center gap-1.5 text-xs font-semibold">
                  <ZoomIn className="w-4 h-4" />
                  Ampliar
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-xs text-mist-200">
                  Vista proyectada — clic para pantalla completa
                </div>
              </button>

              <div className="flex items-center justify-between text-xs text-asphalt-400 border border-forest-800 p-3">
                <span>¿Necesitas la memoria técnica?</span>
                <a href="#contacto" className="text-copper-300 font-semibold flex items-center gap-1 hover:underline">
                  Contactar
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-forest-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-asphalt-950 border border-forest-800 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-forest-800">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  {activeWork.title}
                </h3>
                <p className="text-xs text-copper-400 font-medium mt-0.5">
                  {activeWork.category} · {activeWork.location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-mist-300 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 bg-black flex items-center justify-center p-2 sm:p-4 min-h-[280px]">
              <img
                src={
                  activeWork.imageUrl ||
                  'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80'
                }
                alt={activeWork.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
