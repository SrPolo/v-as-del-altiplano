import React, { useState } from 'react';
import {
  Mail, Phone, User, Building2, Send, CheckCircle2, AlertCircle,
  Loader2, ShieldCheck, X,
} from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    role: 'Comunidad',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const rolesList: ContactFormData['role'][] = [
    'Comunidad',
    'Municipio/Alcaldía',
    'Transportador',
    'Inversionista',
    'Otro',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Ingrese un nombre válido (mín. 3 caracteres).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Ingrese un correo electrónico válido.';
    }
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim() || phoneDigits.length < 7) {
      newErrors.phone = 'Ingrese un teléfono válido.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({ fullName: '', email: '', phone: '', role: 'Comunidad', message: '' });
      setErrors({});
    }, 1000);
  };

  const fieldClass = (hasError?: string) =>
    `w-full pl-9 pr-3 py-2.5 bg-forest-950 border text-sm text-white placeholder-asphalt-400 focus:outline-none focus:border-copper-400 transition-colors ${hasError ? 'border-red-500' : 'border-forest-800'
    }`;

  return (
    <section id="contacto" className="section-pad bg-forest-950 text-mist-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--color-copper-500),_transparent_60%)]" />

      <div className="container-page space-y-12 relative z-10">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow-light">Canal institucional</p>
          <h2 className="heading-section text-white">Conversemos sobre el proyecto</h2>
          <p className="lead text-mist-200">
            Canal para comunidades, alcaldías, gremios e inversionistas interesados en
            socializar Vías del Altiplano.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 border border-forest-800 bg-asphalt-950/60 p-6 sm:p-8 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-copper-400">
                Estructura Plural
              </p>
              <h3 className="font-display text-xl font-bold text-white mt-1">
                Atención directa
              </h3>
              <p className="text-sm text-mist-300 mt-2 leading-relaxed">
                Consultas sobre tarifas sociales, empleabilidad local y programas de inversión productiva.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 py-3 border-b border-forest-800">
                <Mail className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-mist-100 block text-xs uppercase tracking-wider">
                    Correo
                  </span>
                  <span className="text-mist-300">contacto@viasdelaltiplano.com.co</span>
                </div>
              </div>
              <div className="flex items-start gap-3 py-3 border-b border-forest-800">
                <Phone className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-mist-100 block text-xs uppercase tracking-wider">
                    Teléfono
                  </span>
                  <span className="text-mist-300">+57 (604) 444 8427</span>
                </div>
              </div>
              <div className="flex items-start gap-3 py-3">
                <Building2 className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-mist-100 block text-xs uppercase tracking-wider">
                    Área de influencia
                  </span>
                  <span className="text-mist-300 text-xs leading-relaxed">
                    Guarne, Marinilla, Rionegro, El Retiro, Santuario, Cocorná y Puerto Triunfo.
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-forest-700 bg-forest-900/50 text-xs text-mist-300 space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-copper-300">
                <ShieldCheck className="w-4 h-4" />
                Tratamiento de datos
              </div>
              <p>
                Datos tratados únicamente para responder tu solicitud (Ley 1581 de 2012).
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 border border-forest-800 bg-asphalt-950/60 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-mist-300">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-asphalt-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="María Fernanda Gómez"
                      className={fieldClass(errors.fullName)}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-mist-300">
                    Rol / organización *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-asphalt-400 absolute left-3 top-3" />
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className={`${fieldClass()} cursor-pointer`}
                    >
                      {rolesList.map((r) => (
                        <option key={r} value={r} className="bg-forest-950">
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-mist-300">
                    Correo *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-asphalt-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nombre@correo.com"
                      className={fieldClass(errors.email)}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-mist-300">
                    Teléfono *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-asphalt-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+57 300 123 4567"
                      className={fieldClass(errors.phone)}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-mist-300">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escriba su consulta sobre tarifas, obras o inversión social..."
                  className={`w-full p-3 bg-forest-950 border text-sm text-white placeholder-asphalt-400 focus:outline-none focus:border-copper-400 resize-none transition-colors ${errors.message ? 'border-red-500' : 'border-forest-800'
                    }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-forest-500 hover:bg-forest-400 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/85 backdrop-blur-sm animate-fade-in">
          <div className="bg-asphalt-950 border border-copper-500/50 p-7 sm:p-8 max-w-md w-full text-center space-y-4 relative">
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-asphalt-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-14 h-14 border border-copper-400/40 text-copper-300 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Mensaje registrado</h3>
            <p className="text-sm text-mist-300 leading-relaxed">
              Gracias por contactarnos. Un representante se pondrá en contacto al correo o teléfono indicado.
            </p>
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 bg-forest-500 hover:bg-forest-400 text-white font-semibold text-sm transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
