import { motion } from 'motion/react';
import { ColorScheme, colorSchemes } from '../App';
import { ShieldCheck, BrainCircuit, RotateCcw, Zap, Network, Scan } from 'lucide-react';

interface SingularityPlatformProps {
    activeScheme: ColorScheme;
}

export function SingularityPlatform({ activeScheme }: SingularityPlatformProps) {
    const scheme = colorSchemes[activeScheme];

    const features = [
        {
            title: 'IA Estática',
            description: 'Protección de pre-ejecución inmediata ante malware conocido y desconocido.',
            icon: <ShieldCheck className="w-5 h-5" style={{ color: scheme.primary }} />
        },
        {
            title: 'IA Comportamental',
            description: 'Monitoreo de procesos vivos para detener ransomware en plena acción.',
            icon: <BrainCircuit className="w-5 h-5" style={{ color: scheme.primary }} />
        },
        {
            title: 'Rollback Activo',
            description: 'Reversión automática con un solo clic de cualquier daño causado al endpoint.',
            icon: <RotateCcw className="w-5 h-5" style={{ color: scheme.primary }} />
        }
    ];

    return (
        <section className="relative py-32 px-6 overflow-hidden bg-black border-y border-white/5 mt-20">
            {/* Separadores elegantes */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent opacity-50 z-10" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent opacity-50 z-10" />

            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px z-20"
                style={{ background: `linear-gradient(90deg, transparent, ${scheme.primary}4D, transparent)` }}
            />
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px z-20"
                style={{ background: `linear-gradient(90deg, transparent, ${scheme.primary}4D, transparent)` }}
            />

            <div className="absolute inset-0 z-0">
                <div
                    className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 0l20 40H0z' fill='%23ffffff'/%3E%3C/svg%3E")`,
                        backgroundSize: '40px'
                    }}
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight max-w-4xl mx-auto mb-8">
                        Singularity Platform: <span style={{ color: scheme.primary }} className="font-bold">Ciberseguridad Inteligente</span>
                    </h2>
                    <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
                        SentinelOne Singularity unifica protección y respuesta mediante inteligencia artificial multinivel nítida y precisa.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Columna Izquierda: Imagen Nítida y MÁS GRANDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[60%]"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-scheme-primary/30 to-scheme-secondary/30 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000" />
                            <div className="relative bg-black rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                <img
                                    src="/images/lucid-origin_A_elegant_minimalist_image_for_section_of_a_webpage_._Multiple_layers_of_semi-tr-0 (1).jpg"
                                    alt="SentinelOne Singularity Layers"
                                    className="w-full h-auto object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-1000"
                                    style={{ filter: 'none', opacity: 1 }}
                                />
                                <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold" style={{ color: scheme.primary }}>Visualización 4K Nitidez Crítica</span>
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-10 bg-gradient-to-t from-black via-black/40 to-transparent">
                                    <div className="flex items-center gap-4">
                                        <div className="w-3 h-3 rounded-full bg-scheme-primary animate-pulse shadow-[0_0_10px_rgba(0,217,255,0.8)]" style={{ backgroundColor: scheme.primary }} />
                                        <span className="text-xs uppercase tracking-[0.25em] font-bold text-white">Arquitectura Multinivel Activa de SentinelOne</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Columna Derecha: Contenido Refinado */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[40%]"
                    >
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-scheme-primary/30 transition-all duration-500">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-scheme-primary/10 flex items-center justify-center">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                                        </div>
                                        <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                ))}

                                {/* Nuevos puntos: Control y Ranger */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-scheme-primary/30 transition-all duration-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Network className="w-4 h-4" style={{ color: scheme.primary }} />
                                            <h4 className="text-sm font-semibold">Control de Red</h4>
                                        </div>
                                        <p className="text-[11px] text-white/30 leading-tight">Políticas de red y periféricos autorizados.</p>
                                    </div>
                                    <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-scheme-primary/30 transition-all duration-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Scan className="w-4 h-4" style={{ color: scheme.primary }} />
                                            <h4 className="text-sm font-semibold">Ranger (Visibilidad)</h4>
                                        </div>
                                        <p className="text-[11px] text-white/30 leading-tight">Detección de dispositivos no gestionados.</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="p-8 rounded-3xl border relative overflow-hidden"
                                style={{ borderColor: `${scheme.primary}1A`, background: `linear-gradient(135deg, ${scheme.primary}0D, transparent)` }}
                            >
                                <div className="absolute top-0 right-0 p-2 opacity-10">
                                    <Zap className="w-20 h-20" style={{ color: scheme.primary }} />
                                </div>
                                <p className="text-white/60 text-base leading-relaxed relative z-10">
                                    <b className="text-white font-bold italic block mb-2">Visibilidad Storyline™</b>
                                    Contexto absoluto que conecta cada punto de la red automáticamente para una respuesta sin humanos.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
