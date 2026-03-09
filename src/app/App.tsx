import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { SectionDivider } from './components/SectionDivider';
import { ThreatProtection } from './components/ThreatProtection';
import { SecurityLayers } from './components/SecurityLayers';
import { PricingCards } from './components/PricingCards';
import { SingularityPlatform } from './components/SingularityPlatform';

// Paleta de colores Cyan/Turquesa
export const colorSchemes = {
  cyan: {
    name: 'Cyan/Turquesa',
    primary: '#00D9FF',
    secondary: '#8B5CF6',
    accent: '#06B6D4',
    gradient: 'from-cyan-500 via-blue-500 to-purple-600',
  },
};

export type ColorScheme = keyof typeof colorSchemes;

// Tipografías disponibles (Locales Panton y alternativas gratuitas)
export const fonts = {
  // Panton (Fuentes Locales Propietarias)
  pantonThin: { name: 'Panton Thin', family: 'Panton', weight: 100, italic: false },
  pantonLight: { name: 'Panton Light', family: 'Panton', weight: 300, italic: false },
  pantonRegular: { name: 'Panton Regular', family: 'Panton', weight: 400, italic: false },
  pantonSemiBold: { name: 'Panton SemiBold', family: 'Panton', weight: 600, italic: false },
  pantonBold: { name: 'Panton Bold', family: 'Panton', weight: 700, italic: false },
  pantonExtraBold: { name: 'Panton ExtraBold', family: 'Panton', weight: 800, italic: false },
  pantonBlack: { name: 'Panton Black', family: 'Panton', weight: 900, italic: false },

  // Space Grotesk (Similar a Panton)
  spaceLight: { name: 'Space Grotesk Light', family: 'Space Grotesk', weight: 300, italic: false },
  spaceRegular: { name: 'Space Grotesk Regular', family: 'Space Grotesk', weight: 400, italic: false },
  spaceMedium: { name: 'Space Grotesk Medium', family: 'Space Grotesk', weight: 500, italic: false },
  spaceSemiBold: { name: 'Space Grotesk SemiBold', family: 'Space Grotesk', weight: 600, italic: false },
  spaceBold: { name: 'Space Grotesk Bold', family: 'Space Grotesk', weight: 700, italic: false },

  // Rajdhani (Futurista/Tech)
  rajdhaniLight: { name: 'Rajdhani Light', family: 'Rajdhani', weight: 300, italic: false },
  rajdhaniRegular: { name: 'Rajdhani Regular', family: 'Rajdhani', weight: 400, italic: false },
  rajdhaniMedium: { name: 'Rajdhani Medium', family: 'Rajdhani', weight: 500, italic: false },
  rajdhaniSemiBold: { name: 'Rajdhani SemiBold', family: 'Rajdhani', weight: 600, italic: false },
  rajdhaniBold: { name: 'Rajdhani Bold', family: 'Rajdhani', weight: 700, italic: false },

  // Exo 2 (Muchos pesos disponibles)
  exoExtraLight: { name: 'Exo 2 ExtraLight', family: 'Exo 2', weight: 200, italic: false },
  exoLight: { name: 'Exo 2 Light', family: 'Exo 2', weight: 300, italic: false },
  exoRegular: { name: 'Exo 2 Regular', family: 'Exo 2', weight: 400, italic: false },
  exoMedium: { name: 'Exo 2 Medium', family: 'Exo 2', weight: 500, italic: false },
  exoSemiBold: { name: 'Exo 2 SemiBold', family: 'Exo 2', weight: 600, italic: false },
  exoBold: { name: 'Exo 2 Bold', family: 'Exo 2', weight: 700, italic: false },
  exoExtraBold: { name: 'Exo 2 ExtraBold', family: 'Exo 2', weight: 800, italic: false },
  exoBlack: { name: 'Exo 2 Black', family: 'Exo 2', weight: 900, italic: false },
};

export type FontOption = keyof typeof fonts;

export default function App() {
  const [activeFont, setActiveFont] = useState<FontOption>('pantonRegular');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeScheme = 'cyan'; // Solo usamos cyan/turquesa

  // Aplicar la tipografía activa dinámicamente con overrides globales
  useEffect(() => {
    const font = fonts[activeFont];
    const fontFamily = `'${font.family}', sans-serif`;
    const fontWeight = font.weight.toString();
    const fontStyle = font.italic ? 'italic' : 'normal';

    // Actualizar body
    document.body.style.fontFamily = fontFamily;
    document.body.style.fontWeight = fontWeight;
    document.body.style.fontStyle = fontStyle;

    // Inyectar estilos globales para forzar en títulos y elementos con clases de peso
    let styleTag = document.getElementById('dynamic-font-overrides');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'dynamic-font-overrides';
      document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = `
      h1, h2, h3, h4, h5, h6, 
      .font-light, .font-normal, .font-medium, .font-semibold, .font-bold, .font-black,
      button, .btn-primary { 
        font-family: ${fontFamily} !important;
        font-weight: ${fontWeight} !important;
        font-style: ${fontStyle} !important;
      }
    `;
  }, [activeFont]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Selector de tipografías colapsable */}
      <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-cyan-500/50 rounded-full text-cyan-400 shadow-lg hover:scale-105 transition-all"
        >
          <span className="text-xs font-semibold uppercase tracking-wider">Ajustar Tipografía</span>
          <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
            ▼
          </div>
        </button>

        {isMenuOpen && (
          <div className="w-64 bg-black/90 backdrop-blur-md border-2 border-cyan-500/30 rounded-xl p-4 shadow-2xl shadow-cyan-500/20 animate-in fade-in slide-in-from-top-4 duration-300">
            <h3 className="text-sm mb-3 text-cyan-400 font-semibold flex items-center gap-2">
              Selector Visual
            </h3>
            <p className="text-[10px] text-white/50 mb-3 leading-tight">Alternativas similares a Panton para previsualización.</p>
            <div className="grid grid-cols-1 gap-1.5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {(Object.keys(fonts) as FontOption[]).map((fontKey) => (
                <button
                  key={fontKey}
                  onClick={() => {
                    setActiveFont(fontKey);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-2.5 rounded-md border transition-all text-left ${activeFont === fontKey
                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                    : 'border-white/20 hover:border-cyan-400/50 text-white/70 hover:text-white'
                    }`}
                  style={{
                    boxShadow: activeFont === fontKey ? `0 0 15px rgba(0, 217, 255, 0.3)` : 'none',
                    fontFamily: `'${fonts[fontKey].family}', sans-serif`,
                    fontWeight: fonts[fontKey].weight,
                  }}
                >
                  <span className="text-xs">{fonts[fontKey].name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contenido principal */}
      <Hero activeScheme={activeScheme} />

      <ThreatProtection activeScheme={activeScheme} />

      <Features activeScheme={activeScheme} />

      <SecurityLayers activeScheme={activeScheme} />

      <Services activeScheme={activeScheme} />

      <Stats activeScheme={activeScheme} />

      <SingularityPlatform activeScheme={activeScheme} />

      <PricingCards activeScheme={activeScheme} />
    </div>
  );
}