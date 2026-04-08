import { motion } from 'motion/react';
import { cvData } from '../data/cvData';

export default function Download() {
  return (
    <section id="download" className="bg-[var(--navy)] px-6 md:px-16 py-20 text-center transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-[600px] mx-auto bg-[rgba(26,46,69,0.6)] border border-[rgba(201,146,58,0.2)] rounded-xl p-12"
      >
        <div className="text-5xl mb-4 animate-bounce">📄</div>
        <h3 className="font-display text-3xl text-[var(--white)] mb-2">Unduh CV</h3>
        <p className="text-[var(--text-muted)] mb-7 text-[0.9rem]">Dapatkan salinan kurikulum vitae Umar dalam format pilihan Anda.</p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href={cvData.downloads.pdf} 
            download="Umar_Fakhrudin_CV.pdf" 
            className="btn btn-primary bg-[var(--gold)] text-[var(--navy)] font-bold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,146,58,0.4)]"
          >
            ⬇ Unduh PDF
          </a>
          <a 
            href={cvData.downloads.jpg} 
            download="Umar_Fakhrudin_CV.jpg" 
            className="btn btn-outline bg-transparent border border-[rgba(201,146,58,0.5)] text-[var(--gold2)] hover:border-[var(--gold)] hover:text-[var(--gold)] hover:-translate-y-0.5"
          >
            ⬇ Unduh Gambar
          </a>
        </div>
      </motion.div>
    </section>
  );
}
