import { motion } from 'motion/react';
import { ColorScheme, colorSchemes } from '../App';
import { ShieldCheck, FileText, RefreshCw, CheckCircle } from 'lucide-react';

interface HeroProps {
  activeScheme: ColorScheme;
}

export function Hero({ activeScheme }: HeroProps) {
  const scheme = colorSchemes[activeScheme];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Fondo con imagen panorámica y efectos (presencia intensa) */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75 select-none"
          style={{ backgroundImage: "url('/images/lucid-origin_A_elegant_minimalist_image_for_section_of_a_webpage_._A_panoramic_horizon_line_m-0.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ backgroundColor: scheme.primary }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
          style={{ backgroundColor: scheme.secondary }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-12">

          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8"
              style={{
                backgroundColor: `${scheme.primary}15`,
                border: `1px solid ${scheme.primary}40`,
                color: scheme.primary
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: scheme.primary, boxShadow: `0 0 0 4px ${scheme.primary}30` }} />
              <span className="text-sm font-medium">Respuesta autónoma contra ransomware · Implementación local</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl tracking-tight mb-6"
            >
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, ${scheme.primary}, ${scheme.secondary})` }}
              >
                Protege tu empresa
              </span> con <br />
              <img
                src="https://www.sentinelone.com/wp-content/themes/sentinelone/assets/svg/header-logo-dark.svg"
                alt="SentinelOne"
                className="h-16 md:h-20 inline-block mt-4 filter brightness-0 invert"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto mb-10"
            >
              Implementación experta en México para empresas industriales, corporativas y entornos críticos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center mb-10"
            >
              <button
                className="px-8 py-4 rounded-xl text-white transition-all hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${scheme.primary}, ${scheme.secondary})`,
                  boxShadow: `0 10px 30px ${scheme.primary}40`,
                }}
              >
                Solicitar diagnóstico gratuito
              </button>
              <button className="px-8 py-4 rounded-xl border border-white/20 hover:border-white/50 bg-white/5 transition-all">
                Hablar con un especialista
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-white/60 mb-16"
            >
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" style={{ color: scheme.primary }} /> Respuesta en &lt;24h</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" style={{ color: scheme.primary }} /> Sin compromiso</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" style={{ color: scheme.primary }} /> Asesoría confidencial</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-4xl"
            style={{ perspective: 1000 }}
          >
            <div
              className="relative p-6 rounded-2xl border backdrop-blur-md overflow-hidden"
              style={{
                borderColor: `${scheme.primary}30`,
                background: `linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`,
                boxShadow: `0 30px 60px rgba(0,0,0,0.5)`,
              }}
            >
              {/* Dashboard Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">

                {/* KPI 1 */}
                <div className="p-4 rounded-xl border flex flex-col items-center justify-center bg-black/40" style={{ borderColor: `${scheme.primary}50`, boxShadow: `0 0 20px ${scheme.primary}20` }}>
                  <div className="text-xs uppercase tracking-wider text-white/60 mb-2">Amenazas</div>
                  <ShieldCheck className="w-10 h-10 mb-2" style={{ color: scheme.primary }} />
                  <div className="text-2xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">Contención</div>
                </div>

                {/* KPI 2 */}
                <div className="p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center bg-black/40">
                  <div className="text-xs uppercase tracking-wider text-white/60 mb-2">Impacto</div>
                  <div className="flex items-end gap-1 h-10 mb-2">
                    {[40, 80, 60, 100, 30].map((h, i) => (
                      <div key={i} className="w-1.5 rounded-full" style={{ height: `${h}%`, backgroundColor: scheme.secondary }} />
                    ))}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">↓ Incidentes</div>
                </div>

                {/* KPI 3 */}
                <div className="p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center bg-black/40">
                  <div className="text-xs uppercase tracking-wider text-white/60 mb-2">Resiliencia</div>
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-8 h-8 text-white/80" />
                    <RefreshCw className="w-8 h-8 animate-spin-slow" style={{ color: scheme.primary }} />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">Rollback OK</div>
                </div>

                {/* KPI 4 */}
                <div className="p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center bg-black/40">
                  <div className="text-xs uppercase tracking-wider text-white/60 mb-2">Cobertura</div>
                  <div className="relative w-full h-10 mb-2">
                    <div className="absolute w-2 h-2 rounded-full shadow-[0_0_8px] top-[10%] left-[10%] animate-pulse" style={{ backgroundColor: scheme.secondary, color: scheme.secondary }} />
                    <div className="absolute w-2 h-2 rounded-full shadow-[0_0_8px] top-[60%] left-[80%] animate-pulse" style={{ backgroundColor: scheme.secondary, color: scheme.secondary, animationDelay: '0.5s' }} />
                    <div className="absolute w-2 h-2 rounded-full shadow-[0_0_8px] top-[80%] left-[20%] animate-pulse" style={{ backgroundColor: scheme.secondary, color: scheme.secondary, animationDelay: '1s' }} />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">Visibilidad</div>
                </div>

              </div>
              <div className="mt-4 text-[11px] text-white/40 text-center">
                * Visual Dashboard Interface. Unified Security Operations.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
