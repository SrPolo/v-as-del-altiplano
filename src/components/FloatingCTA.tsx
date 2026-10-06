import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 animate-fade-in">
      <a
        href="#contacto"
        className="px-4 py-3 bg-forest-500 hover:bg-forest-400 text-white font-semibold text-xs shadow-lg flex items-center gap-2 transition-colors"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">Contactar</span>
      </a>
    </div>
  );
};
