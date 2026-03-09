import { motion } from 'motion/react';
import { ColorScheme, colorSchemes } from '../App';
import { Factory, Landmark, Building2 } from 'lucide-react';

interface ServicesProps {
  activeScheme: ColorScheme;
}

export function Services({ activeScheme }: ServicesProps) {
  const scheme = colorSchemes[activeScheme];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Fondo complejo con texturas sutiles */}
      <div className="absolute inset-0 z-0 bg-black">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/images/industry.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'grayscale(100%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Blindaje diseñado para tu industria
          </h2>
          <p className="text-xl text-white/70 max-w-3xl">
            No creemos en soluciones genéricas. Cada sector tiene vulnerabilidades únicas que nosotros interceptamos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Industria y Manufactura */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border bg-white/[0.03] backdrop-blur-sm flex flex-col h-full hover:bg-white/[0.05] transition-colors"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <Factory className="w-12 h-12 mb-6" style={{ color: scheme.secondary }} />
            <h3 className="text-2xl font-medium mb-4">Industria y Manufactura</h3>
            <p className="text-lg text-white/70 flex-grow mb-8">
              Aseguramos continuidad en plantas de producción y servidores críticos contra paros operativos letales.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium border text-white/80" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>OT/IT</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium border text-white/80" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>Cero Paros</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium border text-white/80" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>Segmentación</span>
            </div>
          </motion.div>

          {/* Servicios Financieros */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border bg-white/[0.03] backdrop-blur-sm flex flex-col h-full hover:bg-white/[0.05] transition-colors"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <Landmark className="w-12 h-12 mb-6" style={{ color: scheme.primary }} />
            <h3 className="text-2xl font-medium mb-4">Servicios Financieros</h3>
            <p className="text-lg text-white/70 flex-grow mb-8">
              Máxima trazabilidad, cumplimiento regulatorio y políticas estrictas para la banca moderna.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium border text-white/80" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>Cumplimiento</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium border text-white/80" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>Auditoría</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium border text-white/80" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>Visibilidad</span>
            </div>
          </motion.div>

          {/* Corporativos Locales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border bg-white/[0.03] backdrop-blur-sm flex flex-col h-full hover:bg-white/[0.05] transition-colors"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <Building2 className="w-12 h-12 mb-6" style={{ color: '#ffffff' }} />
            <h3 className="text-2xl font-medium mb-4">Corporativos Locales</h3>
            <p className="text-lg text-white/70 flex-grow mb-8">
              Plataforma unificada que reduce drásticamente la carga operativa sin requerir un SOC gigante.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium border text-white/80" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>Automatizado</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium border text-white/80" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>Ligero</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium border text-white/80" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>Rápido</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
