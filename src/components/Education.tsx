import { motion } from 'motion/react';
import { cvData } from '../data/cvData';

export default function Education() {
  return (
    <section id="education" className="bg-[var(--navy2)] px-6 md:px-16 py-24 transition-colors duration-500">
      <div className="section-label">Latar Belakang Akademik</div>
      <h2 className="section-title">PENDIDIKAN</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cvData.education.map((edu, index) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[rgba(13,27,42,0.7)] border border-[rgba(201,146,58,0.15)] rounded-lg p-7 transition-all duration-300 hover:border-[rgba(201,146,58,0.4)] hover:-translate-y-1"
          >
            <div className="font-mono text-[0.65rem] text-[var(--gold)] tracking-[2px] mb-3">
              {edu.period}
            </div>
            <div className="font-display text-xl text-[var(--white)] tracking-[1px] mb-1.5">
              {edu.school}
            </div>
            <div className="text-[0.85rem] text-[var(--gold2)] mb-2">
              {edu.major}
            </div>
            <div className="text-[0.82rem] text-[var(--text-muted)]">
              {edu.detail}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
