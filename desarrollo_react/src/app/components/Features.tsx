import { Brain, Zap, Cpu, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { ColorScheme, colorSchemes } from '../App';

interface FeaturesProps {
  activeScheme: ColorScheme;
}

const features = [
  {
    icon: Brain,
    title: 'IA y comportamiento',
    description: 'Detecta amenazas conocidas y desconocidas con análisis de comportamiento.',
  },
  {
    icon: Zap,
    title: 'Respuesta autónoma',
    description: 'Contiene el ataque sin depender de acciones manuales en el momento crítico.',
  },
  {
    icon: Cpu,
    title: 'Agente super ligero',
    description: 'Singularity Agent corre de forma fluida y silenciosa en Windows, Linux y macOS sin impactar el rendimiento.',
  },
  {
    icon: Search,
    title: 'Visibilidad centralizada',
    description: 'Inventario, actividad y trazabilidad en endpoints, servidores y cloud.',
  },
];

export function Features({ activeScheme }: FeaturesProps) {
  const scheme = colorSchemes[activeScheme];
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    let w: number, h: number;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        w = canvas.width = parent.offsetWidth;
        h = canvas.height = parent.offsetHeight;
      }
    };

    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      size: number = 0;
      alpha: number = 0;
      color: string = '';

      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        // Velocidad horizontal alta hacia la izquierda
        this.vx = -(Math.random() * 5 + 2);
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;

        const isPurple = Math.random() > 0.5;
        this.color = isPurple ? '168, 85, 247' : '0, 217, 255';
        this.alpha = Math.random() * 0.6 + 0.2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < -10) this.x = w + 10;
        if (this.y < 0 || this.y > h) this.reset();
      }
      draw() {
        ctx!.beginPath();
        // Estela de movimiento
        ctx!.moveTo(this.x, this.y);
        ctx!.lineTo(this.x - this.vx * 2, this.y);
        ctx!.strokeStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx!.lineWidth = this.size;
        ctx!.stroke();

        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx!.fill();
      }
    }

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < 150; i++) particles.push(new Particle());
    };

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-24 border-y border-white/5 bg-black text-white relative overflow-hidden min-h-[850px] flex items-center">
      {/* Partículas de Carrera (Moradas/Cian) Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      <div
        className="absolute inset-0 z-0 w-full h-full opacity-10 select-none bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: "url('/images/lucid-origin_A_elegant_minimalist_image_for_section_of_a_webpage_._A_futuristic_architectural-0.jpg')",
          mixBlendMode: 'overlay'
        }}
      />

      {/* EL PUMA (JAGUAR) - POSICIÓN Y ESTÉTICA MEJORADA */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-full lg:w-[70%] h-[90%] z-0 pointer-events-none overflow-visible">
        <img
          src="/images/lucid-origin_A_elegant_minimalist_image_for_section_of_a_webpage_._Majestic_jaguar_silhouette-0.jpg"
          alt="SentinelOne Predator"
          className="w-full h-full object-contain object-right opacity-100 scale-125 drop-shadow-[0_0_100px_rgba(168,85,247,0.5)]"
          style={{
            filter: 'contrast(1.2) brightness(1.1)',
            WebkitMaskImage: 'radial-gradient(ellipse at center right, black 20%, transparent 85%)',
            maskImage: 'radial-gradient(ellipse at center right, black 20%, transparent 85%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-left mb-16 lg:mb-24 max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://www.sentinelone.com/wp-content/themes/sentinelone/assets/svg/header-logo-dark.svg"
              alt="SentinelOne"
              className="h-10 filter brightness-0 invert"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-light tracking-tight mb-8"
          >
            ¿Qué es <span className="font-bold" style={{ color: scheme.primary }}>SentinelOne</span>?
          </motion.h2>
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-6">
            VELOCIDAD DE RESPUESTA AUTÓNOMA
          </div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-3xl text-white/90 leading-relaxed mb-6"
          >
            El depredador definitivo que no solo detecta, <span className="text-purple-400">caza</span> las amenazas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-3xl">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border bg-black/40 backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 group relative overflow-hidden"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white/[0.05] border"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <Icon className="w-7 h-7" style={{ color: scheme.primary }} />
                  </div>
                  <h3 className="text-xl mb-3 font-medium">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
