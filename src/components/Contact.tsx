import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cvData } from '../data/cvData';
import { Send, Mail, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating a real integration - in a real scenario, you'd use Formspree, EmailJS, or a custom backend
    // For this demo, we'll simulate the success state
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Constructing mailto as a fallback/direct action
    const mailtoLink = `mailto:${cvData.contact.email}?subject=${encodeURIComponent(formState.subject || 'Pesan dari Website CV')}&body=${encodeURIComponent(`Nama: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setIsSent(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSent(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-[var(--navy2)] to-[var(--navy)] px-6 md:px-16 py-24 relative overflow-hidden transition-colors duration-500">
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 rotate-90 font-display text-[10rem] text-[rgba(201,146,58,0.04)] tracking-[10px] pointer-events-none whitespace-nowrap hidden lg:block">
        KONTAK
      </div>
      
      <div className="section-label">Mari Terhubung</div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <div className="contact-cta mb-12">
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
              className="text-[var(--text-muted)] leading-[1.7]"
            >
              Terbuka untuk peluang baru dalam copywriting, desain grafis, atau peran administratif. Jangan ragu untuk menghubungi saya langsung melalui formulir atau platform di bawah ini.
            </motion.p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { label: 'Email', value: cvData.contact.email, icon: <Mail size={20} />, href: `mailto:${cvData.contact.email}`, color: 'rgba(201,146,58,0.2)' },
              { label: 'WhatsApp', value: cvData.contact.whatsappDisplay, icon: <MessageSquare size={20} />, href: `https://wa.me/${cvData.contact.whatsapp}`, color: 'rgba(37,211,102,0.2)' },
              { label: 'Lokasi', value: cvData.contact.location, icon: <MapPin size={20} />, color: 'rgba(201,146,58,0.2)' }
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-lg border border-[rgba(201,146,58,0.2)] bg-[rgba(13,27,42,0.5)] no-underline transition-all duration-300 ${item.href ? 'hover:translate-x-1.5 hover:border-[var(--gold)]' : 'cursor-default'}`}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-[var(--gold)]" style={{ backgroundColor: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.7rem] text-[var(--text-muted)] mb-0.5 uppercase tracking-wider">{item.label}</div>
                  <div className="text-[0.9rem] text-[var(--white)] font-medium">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[rgba(13,27,42,0.4)] border border-[rgba(201,146,58,0.15)] rounded-xl p-6 md:p-8 backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--gold2)]">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  className="bg-[rgba(13,27,42,0.6)] border border-[rgba(201,146,58,0.2)] rounded-md p-3 text-sm text-[var(--cream)] focus:outline-none focus:border-[var(--gold)] transition-colors cursor-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--gold2)]">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="email@contoh.com"
                  className="bg-[rgba(13,27,42,0.6)] border border-[rgba(201,146,58,0.2)] rounded-md p-3 text-sm text-[var(--cream)] focus:outline-none focus:border-[var(--gold)] transition-colors cursor-none"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--gold2)]">Subjek</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                value={formState.subject}
                onChange={handleChange}
                placeholder="Apa yang ingin Anda bicarakan?"
                className="bg-[rgba(13,27,42,0.6)] border border-[rgba(201,146,58,0.2)] rounded-md p-3 text-sm text-[var(--cream)] focus:outline-none focus:border-[var(--gold)] transition-colors cursor-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--gold2)]">Pesan</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required 
                value={formState.message}
                onChange={handleChange}
                placeholder="Tuliskan pesan Anda di sini..."
                className="bg-[rgba(13,27,42,0.6)] border border-[rgba(201,146,58,0.2)] rounded-md p-3 text-sm text-[var(--cream)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none cursor-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`btn mt-2 flex items-center justify-center gap-3 ${isSent ? 'bg-green-600 text-white' : 'bg-[var(--gold)] text-[var(--navy)]'} font-bold transition-all duration-300 disabled:opacity-70`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-[var(--navy)] border-t-transparent rounded-full animate-spin" />
              ) : isSent ? (
                <>Terkirim <CheckCircle2 size={18} /></>
              ) : (
                <>Kirim Pesan <Send size={16} /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
