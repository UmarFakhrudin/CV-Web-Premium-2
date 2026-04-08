import { motion } from 'motion/react';
import { cvData } from '../data/cvData';

export default function Languages() {
  return (
    <section id="languages" className="bg-[var(--navy)] px-6 md:px-16 py-24 flex flex-col items-center text-center transition-colors duration-500">
      <div className="section-label justify-center mb-3">Komunikasi</div>
      <h2 className="section-title mb-12">BAHASA</h2>
      
      <div className="flex flex-wrap gap-16 justify-center">
        {cvData.languages.map((lang, index) => {
          const circ = 2 * Math.PI * 45;
          const offset = circ - (circ * lang.level / 100);
          
          return (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-[100px] h-[100px] relative">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle 
                    cx="50" cy="50" r="45" 
                    className="fill-none stroke-[rgba(201,146,58,0.15)] stroke-[6px]" 
                  />
                  <motion.circle 
                    cx="50" cy="50" r="45" 
                    initial={{ strokeDashoffset: circ }}
                    whileInView={{ strokeDashoffset: offset }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    style={{ strokeDasharray: circ }}
                    className="fill-none stroke-[var(--gold)] stroke-[6px] stroke-round drop-shadow-[0_0_6px_rgba(201,146,58,0.5)]" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-display text-xl text-[var(--gold2)]">
                  {lang.level}%
                </div>
              </div>
              <div className="font-mono text-[0.7rem] tracking-[2px] uppercase text-[var(--text-muted)]">
                {lang.name}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
