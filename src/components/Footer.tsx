import { cvData } from '../data/cvData';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--navy2)] px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between border-t border-[rgba(201,146,58,0.1)] transition-colors duration-500">
      <p className="font-mono text-[0.65rem] text-[var(--text-muted)] tracking-[1px]">
        © {year} {cvData.name} — Hak Cipta Dilindungi
      </p>
      <p className="font-mono text-[0.65rem] text-[var(--text-muted)] tracking-[1px] mt-2 md:mt-0">
        {cvData.title} · Jakarta, Indonesia
      </p>
    </footer>
  );
}
