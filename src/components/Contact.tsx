import { motion } from 'motion/react';
import { cvData } from '../data/cvData';

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-[var(--navy2)] to-[var(--navy)] px-6 md:px-16 py-24 relative overflow-hidden transition-colors duration-500">
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 rotate-90 font-display text-[10rem] text-[rgba(201,146,58,0.04)] tracking-[10px] pointer-events-none whitespace-nowrap hidden lg:block">
        KONTAK
      </div>
      
      <div className="section-label">Mari Terhubung</div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="contact-cta">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl text-[var(--white)] leading-none mb-4"
          >
            MARI <span className="text-[var(--gold)]">BEKERJA</span><br />SAMA
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-muted)] leading-[1.7] mb-8"
          >
            Terbuka untuk peluang baru dalam copywriting, desain grafis, atau peran administratif. Jangan ragu untuk menghubungi saya langsung melalui email atau WhatsApp.
          </motion.p>
          
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${cvData.contact.email}`} className="btn btn-primary bg-[var(--gold)] text-[var(--navy)] font-bold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,146,58,0.4)]">
              Kirim Email ✉️
            </a>
            <a href={`https://wa.me/${cvData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn bg-[#25d366] text-white font-bold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)]">
              WhatsApp 💬
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          {[
            { label: 'Email', value: cvData.contact.email, icon: '✉️', href: `mailto:${cvData.contact.email}`, color: 'rgba(201,146,58,0.2)' },
            { label: 'WhatsApp', value: cvData.contact.whatsappDisplay, icon: '💬', href: `https://wa.me/${cvData.contact.whatsapp}`, color: 'rgba(37,211,102,0.2)' },
            { label: 'Lokasi', value: cvData.contact.location, icon: '📍', color: 'rgba(201,146,58,0.2)' }
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href?.startsWith('http') ? '_blank' : undefined}
              rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-4 p-4 md:p-6 rounded-lg border border-[rgba(201,146,58,0.2)] bg-[rgba(13,27,42,0.5)] no-underline transition-all duration-300 ${item.href ? 'hover:translate-x-1.5 hover:border-[var(--gold)]' : 'cursor-default'}`}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: item.color }}>
                {item.icon}
              </div>
              <div>
                <div className="text-[0.75rem] text-[var(--text-muted)] mb-0.5">{item.label}</div>
                <div className="text-[0.95rem] text-[var(--white)] font-medium">{item.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
