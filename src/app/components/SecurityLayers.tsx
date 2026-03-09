import { motion } from 'motion/react';
import { ColorScheme, colorSchemes } from '../App';
import { Layers, Shield, CheckCircle } from 'lucide-react';

interface SecurityLayersProps {
  activeScheme: ColorScheme;
}

export function SecurityLayers({ activeScheme }: SecurityLayersProps) {
  const scheme = colorSchemes[activeScheme];

  return (
    <div className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-x-0 h-px top-0"
          style={{ background: `linear-gradient(90deg, transparent, ${scheme.primary}40, transparent)` }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at center, ${scheme.primary} 0%, transparent 80%)`,
            filter: 'blur(100px)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight max-w-4xl mx-auto mb-6">
            ¿Por qué conformarte con alertas, si puedes tener resiliencia absoluta?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6"
          >
            <h3 className="text-2xl font-medium mb-8 flex items-center gap-3">
              <Layers className="w-8 h-8" style={{ color: scheme.secondary }} />
              Entrega técnica
            </h3>
            <ul className="space-y-6 text-lg text-white/80">
              <li className="flex items-start gap-4"><CheckCircle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: scheme.secondary }} /> <span>Despliegue ágil en cada endpoint</span></li>
              <li className="flex items-start gap-4"><CheckCircle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: scheme.secondary }} /> <span>Políticas optimizadas desde el día 1</span></li>
              <li className="flex items-start gap-4"><CheckCircle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: scheme.secondary }} /> <span>Integración total con SIEM/SOC</span></li>
              <li className="flex items-start gap-4"><CheckCircle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: scheme.secondary }} /> <span>Playbooks de respuesta a medida</span></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6"
          >
            <h3 className="text-2xl font-medium mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8" style={{ color: scheme.primary }} />
              Resiliencia Operativa
            </h3>
            <ul className="space-y-6 text-lg text-white/80">
              <li className="flex items-start gap-4"><CheckCircle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: scheme.primary }} /> <span>Recuperación automática (Rollback)</span></li>
              <li className="flex items-start gap-4"><CheckCircle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: scheme.primary }} /> <span>RTO/RPO medido en minutos</span></li>
              <li className="flex items-start gap-4"><CheckCircle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: scheme.primary }} /> <span>Simulacros de ataque de alto impacto</span></li>
              <li className="flex items-start gap-4"><CheckCircle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: scheme.primary }} /> <span>Capacitación experta para tu equipo TI</span></li>
            </ul>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 p-6 text-center text-lg"
        >
          <b className="font-semibold text-white">Tu tranquilidad no es opcional: </b>
          <span className="text-white/70">Pasamos de la detección a la respuesta automática. <b className="font-bold" style={{ color: '#00D9FF' }}>Tu operación no se detendrá.</b></span>
        </motion.div>
      </div>
    </div>
  );
}
