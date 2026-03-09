import { motion } from 'motion/react';
import { ColorScheme, colorSchemes } from '../App';
import { AlertTriangle, DatabaseZap, TrendingDown, ShieldOff, Zap, Shield, Eye, History } from 'lucide-react';

const threatImg = "/images/threat.png";
const safeImg = "/images/safe.png";

interface ThreatProtectionProps {
  activeScheme: ColorScheme;
}

export function ThreatProtection({ activeScheme }: ThreatProtectionProps) {
  const scheme = colorSchemes[activeScheme];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Fondo con imagen del faro (visibilidad mejorada) */}
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/images/lucid-origin_A_elegant_minimalist_image_for_section_of_a_webpage_._A_low-angle_shot_of_a_high-0.jpg')",
            maskImage: 'radial-gradient(circle at center, black 70%, transparent 98%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 70%, transparent 98%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
            Ransomware: El final de tu{' '}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${scheme.primary}, ${scheme.secondary})` }}
            >
              continuidad operativa
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            El 70% de las empresas atacadas quedan paralizadas por días. Sin respuesta autónoma, tu empresa no es segura: es el próximo objetivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

          {/* Threat Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border backdrop-blur-sm relative overflow-hidden"
            style={{
              borderColor: 'rgba(239, 68, 68, 0.2)',
              background: `linear-gradient(135deg, rgba(239,68,68,0.05), rgba(255,255,255,0.02))`
            }}
          >
            {/* Soft background glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgb(239,68,68) 0%, transparent 70%)', filter: 'blur(60px)' }} />

            <div className="relative w-full h-48 mb-8 rounded-xl overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 z-10" style={{ boxShadow: 'inset 0 0 40px black' }} />
              {/* Using a placeholder if image fails to load, or the imported one */}
              <img src={threatImg || "https://images.unsplash.com/photo-1614064641936-38998970c926"} alt="Empresa vulnerada" className="w-full h-full object-cover filter grayscale contrast-125" style={{ maskImage: 'radial-gradient(circle, black 30%, transparent 80%)' }} />
            </div>

            <h3 className="text-2xl font-semibold mb-6">La realidad del ataque</h3>
            <ul className="space-y-4 text-lg text-white/80">
              <li className="flex items-start gap-4"><AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> <span>Crisis operativa inmediata</span></li>
              <li className="flex items-start gap-4"><DatabaseZap className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> <span>Fuga de datos y extorsión</span></li>
              <li className="flex items-start gap-4"><TrendingDown className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> <span>Costos de quiebra</span></li>
              <li className="flex items-start gap-4"><ShieldOff className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> <span>AV Tradicional: Inútil hoy</span></li>
            </ul>
          </motion.div>

          {/* Safe Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border backdrop-blur-sm relative overflow-hidden"
            style={{
              borderColor: `${scheme.primary}40`,
              background: `linear-gradient(135deg, ${scheme.primary}10, rgba(255,255,255,0.02))`
            }}
          >
            {/* Soft background glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${scheme.primary} 0%, transparent 70%)`, filter: 'blur(60px)' }} />

            <div className="relative w-full h-48 mb-8 rounded-xl overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 z-10" style={{ boxShadow: 'inset 0 0 40px black' }} />
              {/* Using a placeholder if image fails to load, or the imported one */}
              <img src={safeImg || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"} alt="Empresa protegida" className="w-full h-full object-cover filter contrast-125" style={{ maskImage: 'radial-gradient(circle, black 30%, transparent 80%)' }} />
            </div>

            <h3 className="text-2xl font-semibold mb-6">El blindaje definitivo</h3>
            <ul className="space-y-4 text-lg text-white/80">
              <li className="flex items-start gap-4"><Zap className="w-6 h-6 shrink-0 mt-0.5" style={{ color: scheme.primary }} /> <span>Contención en milisegundos</span></li>
              <li className="flex items-start gap-4"><Shield className="w-6 h-6 shrink-0 mt-0.5" style={{ color: scheme.primary }} /> <span>Cero superficie de ataque</span></li>
              <li className="flex items-start gap-4"><Eye className="w-6 h-6 shrink-0 mt-0.5" style={{ color: scheme.primary }} /> <span>Control y visibilidad total</span></li>
              <li className="flex items-start gap-4"><History className="w-6 h-6 shrink-0 mt-0.5" style={{ color: scheme.primary }} /> <span>Rollback: Regreso seguro</span></li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
