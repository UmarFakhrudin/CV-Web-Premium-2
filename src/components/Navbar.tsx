import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light';
    }
    return false;
  });

  const [isFlash, setIsFlash] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  const toggleTheme = () => {
    setIsFlash(true);
    setTimeout(() => setIsFlash(false), 200);
    setIsLight(!isLight);
  };

  return (
    <>
      <AnimatePresence>
        {isFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--gold)] pointer-events-none z-[9000]"
          />
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-[500] px-6 md:px-16 py-5 flex items-center justify-between backdrop-blur-xl bg-[rgba(13,27,42,0.85)] border-bottom border-[rgba(201,146,58,0.15)] transition-colors duration-500">
        <a href="#hero" className="font-display text-2xl tracking-[3px] text-[var(--gold)] no-underline">SA</a>
        
        <ul className="hidden md:flex gap-8 list-none">
          {['Keahlian', 'Pengalaman', 'Pendidikan', 'Kontak'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item === 'Keahlian' ? 'skills' : item === 'Pengalaman' ? 'experience' : item === 'Pendidikan' ? 'education' : 'contact'}`}
                className="font-mono text-[0.7rem] tracking-[2px] uppercase text-[var(--text-muted)] no-underline hover:text-[var(--gold2)] transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#hero"
              className="font-mono text-[0.7rem] tracking-[2px] uppercase text-[var(--gold)] no-underline hover:text-[var(--gold2)] transition-colors duration-300"
            >
              Unduh CV
            </a>
          </li>
        </ul>

        <button 
          onClick={toggleTheme}
          className="relative w-[52px] h-[28px] bg-[rgba(201,146,58,0.2)] border border-[rgba(201,146,58,0.4)] rounded-full cursor-none transition-all duration-400 flex items-center p-[3px] hover:bg-[rgba(201,146,58,0.35)] hover:border-[var(--gold)]"
          aria-label="Toggle theme"
        >
          <motion.div 
            animate={{ x: isLight ? 24 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-5 h-5 rounded-full bg-[var(--gold)] flex items-center justify-center text-[11px] shadow-[0_2px_8px_rgba(201,146,58,0.5)]"
          >
            {isLight ? '☀️' : '🌙'}
          </motion.div>
        </button>
      </nav>
    </>
  );
}
