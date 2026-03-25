import { motion } from 'motion/react';
import { ColorScheme, colorSchemes } from '../App';

interface SectionDividerProps {
  activeScheme: ColorScheme;
  variant?: 'line' | 'gradient' | 'dots';
}

export function SectionDivider({ activeScheme, variant = 'gradient' }: SectionDividerProps) {
  const scheme = colorSchemes[activeScheme];

  if (variant === 'line') {
    return (
      <div className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[2px] w-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${scheme.primary}, ${scheme.secondary}, transparent)`,
            }}
          />
        </div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: i === 1 ? scheme.primary : scheme.secondary,
                boxShadow: `0 0 20px ${i === 1 ? scheme.primary : scheme.secondary}`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-16 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-px w-full"
        style={{
          background: `linear-gradient(90deg, ${scheme.primary}, ${scheme.secondary}, ${scheme.accent})`,
          boxShadow: `0 0 20px ${scheme.primary}`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] opacity-20"
        style={{
          background: `radial-gradient(circle, ${scheme.primary}, ${scheme.secondary}, transparent)`,
        }}
      />
    </div>
  );
}
