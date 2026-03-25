import { motion } from 'motion/react';
import { ColorScheme, colorSchemes } from '../App';
import { Quote, Star } from 'lucide-react';

interface PricingCardsProps {
  activeScheme: ColorScheme;
}

export function PricingCards({ activeScheme }: PricingCardsProps) {
  const scheme = colorSchemes[activeScheme];

  return (
    <div className="space-y-0">
      {/* CONFIANZA COMPROBADA (Testimonios y Métricas) */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute bg-white/[0.02] inset-0" />

          {/* IMAGEN HALLMARK A LA DERECHA (GRANDE Y CLARA) */}
          <div
            className="absolute -right-20 inset-y-0 w-[60%] opacity-80 pointer-events-none"
            style={{
              filter: 'contrast(1.1) brightness(1.1)',
            }}
          >
            <img
              src="/images/gemini-2.5-flash-image_A_elegant_minimalist_image_for_HERO_section_of_a_webpage_IN_THE_RIGHT_BORDER_._A-0.jpg"
              alt="Hawk visualization"
              className="w-full h-full object-contain object-right"
            />
          </div>
          {/* Gradiente de desvanecimiento a la izquierda para la imagen */}
          <div className="absolute inset-y-0 right-[40%] left-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left mb-16 max-w-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Confianza comprobada
              </h2>
              <p className="text-xl text-white/70">
                Adoptado por líderes de industria para la protección absoluta de sus operaciones corporativas globales.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="flex flex-col gap-8 max-w-xl">
                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-2xl border bg-white/[0.03] backdrop-blur-sm relative overflow-hidden"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <Quote className="absolute right-[-20px] top-[-20px] w-32 h-32 text-white/[0.03]" strokeWidth={2} />

                  <div className="flex gap-1 text-yellow-500 mb-6">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xl leading-relaxed text-white italic relative mb-10 z-10">
                    "En 90 días mejoramos visibilidad y contención a niveles récord. Nuestro equipo de TI dejó de 'perseguir falsas alarmas' y pudo enfocarse por fin en la operación estratégica del negocio."
                  </p>

                  <div className="flex items-center gap-4 z-10 relative">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-black"
                      style={{ backgroundColor: scheme.primary }}
                    >
                      CISO
                    </div>
                    <div>
                      <div className="font-bold text-white">Líder de Seguridad</div>
                      <div className="text-sm text-white/60">Empresa Manufacturera Top 100</div>
                    </div>
                  </div>
                </motion.div>

                {/* Resultados */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-2xl border bg-white/[0.03] backdrop-blur-sm flex flex-col justify-center"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <h3 className="text-2xl font-medium mb-8">Resultados Medibles</h3>

                  <ul className="space-y-8">
                    <li>
                      <div className="text-5xl font-black mb-2" style={{ color: scheme.secondary }}>&gt;85%</div>
                      <div className="text-lg text-white/60">Reducción del tiempo de investigación y contención de amenazas críticas.</div>
                    </li>
                    <li>
                      <div className="text-5xl font-black mb-2" style={{ color: scheme.primary }}>0</div>
                      <div className="text-lg text-white/60">Incidentes de ransomware exitosos tras la implementación del FDR.</div>
                    </li>
                  </ul>
                </motion.div>
              </div>
              {/* Espaciador para que el halcón se vea bien */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO & VIDEO (Toma el Control) */}
      <section className="relative py-32 px-6 overflow-hidden bg-black/40 border-t border-white/5 mt-20">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent opacity-50 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-stretch gap-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black"
          >
            {/* Lado Izquierdo: Video Empotrado */}
            <div className="relative w-full lg:w-1/2 min-h-[400px] bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover opacity-80"
                style={{ filter: 'brightness(1.1) contrast(1.1)' }}
              >
                <source src="/videos/motion2Fast_Outer_ring_rotates_360_degrees_Background_particle_0.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black z-10" />

              <div className="absolute inset-x-0 bottom-0 p-12 z-20 text-left">
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  Tecnología de Vanguardia <br /> <span style={{ color: scheme.primary }}>Lista para tu Empresa</span>
                </h3>
                <p className="text-white/40 text-sm max-w-xs">
                  Nuestros ingenieros certificados te ayudarán a implementar la plataforma líder en el mercado.
                </p>
              </div>
            </div>

            {/* Lado Derecho: Formulario */}
            <div className="w-full lg:w-1/2 p-10 md:p-14 bg-white/[0.01] backdrop-blur-xl relative">
              <div className="mb-10 text-left">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Toma el control hoy mismo</h2>
                <p className="text-white/50">
                  Pide tu diagnóstico inicial estructurado. Te responderemos en menos de 2 horas.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-white/70 mb-2 font-medium text-left">Nombre completo</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full bg-white/5 border px-4 py-3 rounded-xl outline-none text-white transition-all hover:bg-white/10 focus:bg-white/10"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-2 font-medium text-left">Email corporativo</label>
                    <input
                      type="email"
                      placeholder="email@tuempresa.com"
                      className="w-full bg-white/5 border px-4 py-3 rounded-xl outline-none text-white transition-all hover:bg-white/10 focus:bg-white/10"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-white/70 mb-2 font-medium text-left">Cargo / Puesto</label>
                    <input
                      type="text"
                      placeholder="Ej. IT Manager, CISO"
                      className="w-full bg-white/5 border px-4 py-3 rounded-xl outline-none text-white transition-all hover:bg-white/10 focus:bg-white/10"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-2 font-medium text-left">Endpoints aproximados</label>
                    <select
                      className="w-full bg-white/5 border px-4 py-3 rounded-xl outline-none text-white appearance-none transition-all hover:bg-white/10 focus:bg-white/10"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <option value="" disabled className="text-black">Selecciona un rango...</option>
                      <option className="text-black">Menos de 100</option>
                      <option className="text-black">100 - 500</option>
                      <option className="text-black">500 - 1000</option>
                      <option className="text-black">Más de 1000</option>
                    </select>
                  </div>
                </div>

                <button
                  className="w-full py-4 rounded-xl text-black font-bold text-lg mt-4 transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,217,255,0.4)]"
                  style={{
                    backgroundColor: scheme.primary,
                    boxShadow: `0 15px 30px ${scheme.primary}4D`
                  }}
                >
                  Solicitar evaluación técnica confidencial
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
