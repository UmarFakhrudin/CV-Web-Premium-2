import { motion } from 'motion/react';
import { cvData } from '../data/cvData';

export default function Experience() {
  return (
    <section id="experience" className="bg-[var(--navy)] px-6 md:px-16 py-24 transition-colors duration-500">
      <div className="section-label">Perjalanan Karir</div>
      <h2 className="section-title">PENGALAMAN <span>KERJA</span></h2>
      
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent" />
        
        <div className="flex flex-col gap-10">
          {cvData.experience.slice().reverse().map((exp, index) => (
            <motion.div
              key={exp.period + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-10 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-10"
            >
              <div className="absolute left-[-6px] top-12 w-3 h-3 bg-[var(--gold)] rounded-full shadow-[0_0_0_4px_rgba(201,146,58,0.2)] animate-[dotPulse_2s_ease_infinite]" />
              
              <div className="font-mono text-[0.72rem] text-[var(--gold2)] tracking-[1px] pt-1">
                {exp.period}
              </div>
              
              <div className="bg-[rgba(26,46,69,0.6)] border border-[rgba(201,146,58,0.1)] rounded-lg p-6 md:p-7 transition-all duration-300 hover:border-[rgba(201,146,58,0.3)] hover:bg-[rgba(26,46,69,0.9)]">
                <div className="font-display text-2xl text-[var(--white)] tracking-[1px]">
                  {exp.company}
                </div>
                <div className="text-[0.85rem] text-[var(--gold2)] italic my-1">
                  {exp.role}
                </div>
                <div className="inline-block bg-[rgba(201,146,58,0.15)] text-[var(--gold)] text-[0.7rem] font-mono px-2.5 py-1 rounded mb-3">
                  📍 {exp.location}
                </div>
                <p className="text-[0.88rem] leading-[1.7] text-[var(--text-muted)]">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(201,146,58,0.2); }
          50% { box-shadow: 0 0 0 8px rgba(201,146,58,0.05); }
        }
      `}} />
    </section>
  );
}
