import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { cvData } from '../data/cvData';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-16 pt-32 pb-16 relative overflow-hidden"
    >
      <div className="hero-bg-lines" />
      
      <motion.div 
        style={{ opacity }}
        className="relative z-[2]"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-[rgba(201,146,58,0.15)] border border-[rgba(201,146,58,0.4)] rounded-full px-4 py-1.5 font-mono text-[0.65rem] tracking-[2px] uppercase text-[var(--gold2)] mb-7"
        >
          <div className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse" />
          Tersedia untuk Bekerja
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] text-[var(--white)]"
        >
          {cvData.name.split(' ')[0]}<br />
          <span className="text-[var(--gold)]">{cvData.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-[0.85rem] tracking-[4px] text-[var(--gold2)] uppercase my-4 md:my-7"
        >
          {cvData.title}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-base leading-[1.7] text-[var(--text-muted)] max-w-[480px]"
        >
          {cvData.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-8 md:mt-10 justify-center lg:justify-start"
        >
          <a href="#contact" className="btn btn-primary bg-[var(--gold)] text-[var(--navy)] font-bold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,146,58,0.4)]">
            Hubungi Saya ↗
          </a>
          <a href="#experience" className="btn btn-outline bg-transparent border border-[rgba(201,146,58,0.5)] text-[var(--gold2)] hover:border-[var(--gold)] hover:text-[var(--gold)] hover:-translate-y-0.5">
            Lihat Pengalaman
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ y, scale, opacity }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-[2] flex flex-col items-center justify-center mt-12 lg:mt-0 gap-10"
      >
        {/* Profile Photo */}
        <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]">
          <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border-2 border-[var(--gold)] rounded-2xl z-0 animate-[framePulse_3s_ease_infinite]" />
          <div className="absolute top-4 left-4 -right-4 -bottom-4 bg-[rgba(201,146,58,0.1)] rounded-2xl z-0" />
          <img 
            src={cvData.photo} 
            alt={cvData.name}
            className="w-full h-full object-cover object-top rounded-2xl relative z-[1] grayscale-[20%] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Download Box */}
        <div className="relative w-full max-w-[400px] flex flex-col items-center justify-center bg-[rgba(26,46,69,0.4)] border border-[rgba(201,146,58,0.2)] rounded-2xl p-8 backdrop-blur-md">
          <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border-2 border-[var(--gold)] rounded-2xl z-0 opacity-20" />
          
          <div className="text-5xl mb-6 animate-bounce">📄</div>
          <h3 className="font-display text-4xl text-[var(--white)] mb-2 tracking-wider">UNDUH CV</h3>
          <p className="text-[var(--text-muted)] text-center mb-8 text-sm">Pilih format dokumen yang Anda inginkan untuk melihat profil lengkap saya.</p>
          
          <div className="flex flex-col w-full gap-4">
            <a 
              href={cvData.downloads.pdf} 
              download 
              className="btn w-full bg-[var(--gold)] text-[var(--navy)] font-bold flex items-center justify-center gap-3 hover:shadow-[0_8px_30px_rgba(201,146,58,0.4)] transition-all"
            >
              UNDUH PDF (DOKUMEN)
            </a>
            <a 
              href={cvData.downloads.jpg} 
              download 
              className="btn w-full bg-transparent border border-[var(--gold)] text-[var(--gold)] font-bold flex items-center justify-center gap-3 hover:bg-[rgba(201,146,58,0.1)] transition-all"
            >
              UNDUH JPG (GAMBAR)
            </a>
          </div>

          <div className="absolute -bottom-5 -right-5 bg-[var(--gold)] text-[var(--navy)] w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center font-display text-sm md:text-[1.1rem] leading-[1.1] z-[3] animate-[rotateBadge_10s_linear_infinite] shadow-[0_4px_20px_rgba(201,146,58,0.5)]">
            {cvData.experienceYears}+<br />THN
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-6 md:left-16 hidden md:flex items-center gap-3 font-mono text-[0.65rem] tracking-[2px] text-[var(--text-muted)]"
      >
        <div className="w-10 h-[1px] bg-[var(--gold)] origin-left animate-[scrollLine_2s_ease_infinite]" />
        GULIR KE BAWAH
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes framePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes rotateBadge {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scrollLine {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(1.5); opacity: 0.5; }
        }
      `}} />
    </section>
  );
}
