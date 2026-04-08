import { motion } from 'motion/react';
import { cvData } from '../data/cvData';

export default function Skills() {
  return (
    <section id="skills" className="bg-[var(--navy2)] px-6 md:px-16 py-24 transition-colors duration-500">
      <div className="section-label">Keahlian Saya</div>
      <h2 className="section-title">KEAHLIAN <span>SAYA</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cvData.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-[rgba(13,27,42,0.8)] border border-[rgba(201,146,58,0.15)] rounded-lg p-7 relative overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:border-[rgba(201,146,58,0.4)]"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--gold)] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
            
            <div className="w-11 h-11 bg-[rgba(201,146,58,0.15)] rounded-lg flex items-center justify-center text-2xl mb-4">
              {skill.icon}
            </div>
            
            <div className="font-bold text-[0.95rem] text-[var(--white)] mb-2.5">
              {skill.name}
            </div>
            
            <div className="h-1 bg-[rgba(255,255,255,0.1)] rounded-sm overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold2)] rounded-sm"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
