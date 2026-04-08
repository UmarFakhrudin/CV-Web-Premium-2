import { motion } from 'motion/react';
import { cvData } from '../data/cvData';

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-[var(--navy2)] px-6 md:px-16 py-20 transition-colors duration-500">
      <div className="section-label">Minat Pribadi</div>
      <h2 className="section-title">HOBI</h2>
      
      <div className="flex flex-wrap gap-6">
        {cvData.hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-2.5 px-5 py-3 border border-[rgba(201,146,58,0.25)] rounded-full font-mono text-[0.75rem] tracking-[2px] uppercase text-[var(--cream)] cursor-none transition-all duration-300 bg-[rgba(201,146,58,0.05)] hover:bg-[rgba(201,146,58,0.15)] hover:border-[var(--gold)] hover:-translate-y-1"
          >
            <span>{hobby.icon}</span>
            {hobby.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
