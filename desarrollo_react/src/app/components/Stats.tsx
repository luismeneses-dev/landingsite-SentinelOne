import { motion } from 'motion/react';
import { ColorScheme, colorSchemes } from '../App';
import { CheckCircle, XCircle } from 'lucide-react';

interface StatsProps {
  activeScheme: ColorScheme;
}

export function Stats({ activeScheme }: StatsProps) {
  const scheme = colorSchemes[activeScheme];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/90 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <img
            src="https://www.sentinelone.com/wp-content/themes/sentinelone/assets/svg/header-logo-dark.svg"
            alt="SentinelOne"
            className="h-8 mx-auto mb-6 filter brightness-0 invert opacity-60"
          />
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            ¿Aún usas tecnología del pasado?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Compara el antivirus tradicional que ya ha fallado, contra la plataforma que detiene ataques en milisegundos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-3xl border bg-white/[0.02] backdrop-blur-md"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <table className="w-full min-w-[700px] text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.05]">
                <th className="px-8 py-6 text-xl font-medium text-white/90 border-b border-white/10 w-1/3">Capacidad</th>
                <th className="px-8 py-6 text-xl font-medium text-white/90 border-b border-white/10 w-1/3 text-center">Antivirus tradicional</th>
                <th
                  className="px-8 py-6 text-xl font-medium border-b w-1/3 text-center"
                  style={{
                    backgroundColor: `${scheme.primary}10`,
                    borderColor: `${scheme.primary}30`,
                    color: 'white',
                    borderLeft: `1px solid ${scheme.primary}30`
                  }}
                >
                  SentinelOne
                </th>
              </tr>
            </thead>
            <tbody className="text-lg">

              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="px-8 py-6 text-white/80">Detección por IA Conductual</td>
                <td className="px-8 py-6 text-center text-white/60">
                  <span className="flex items-center justify-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" /> Deficiente
                  </span>
                </td>
                <td
                  className="px-8 py-6 text-center font-bold"
                  style={{
                    backgroundColor: `${scheme.primary}05`,
                    borderLeft: `1px solid ${scheme.primary}30`
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" style={{ color: scheme.primary }} /> Máxima Precisión
                  </span>
                </td>
              </tr>

              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="px-8 py-6 text-white/80">Respuesta Autónoma sin Humanos</td>
                <td className="px-8 py-6 text-center text-white/60">
                  <span className="flex items-center justify-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" /> Requiere intervención
                  </span>
                </td>
                <td
                  className="px-8 py-6 text-center font-bold"
                  style={{
                    backgroundColor: `${scheme.primary}05`,
                    borderLeft: `1px solid ${scheme.primary}30`
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" style={{ color: scheme.primary }} /> En Milisegundos
                  </span>
                </td>
              </tr>

              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="px-8 py-6 text-white/80">Rollback: Restauración post-ataque</td>
                <td className="px-8 py-6 text-center text-white/60">
                  <span className="flex items-center justify-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" /> Inexistente
                  </span>
                </td>
                <td
                  className="px-8 py-6 text-center font-bold"
                  style={{
                    backgroundColor: `${scheme.primary}05`,
                    borderLeft: `1px solid ${scheme.primary}30`
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" style={{ color: scheme.primary }} /> One-Click Integrado
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="px-8 py-6 text-white/80">Visibilidad Forense Centralizada</td>
                <td className="px-8 py-6 text-center text-white/60">
                  <span className="flex items-center justify-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" /> Fragmentada
                  </span>
                </td>
                <td
                  className="px-8 py-6 text-center font-bold rounded-br-3xl"
                  style={{
                    backgroundColor: `${scheme.primary}05`,
                    borderLeft: `1px solid ${scheme.primary}30`
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" style={{ color: scheme.primary }} /> Absoluta (Storyline)
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
}
