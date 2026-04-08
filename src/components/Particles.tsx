import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: string;
  dx: string;
  duration: string;
  delay: string;
  size: string;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      dx: `${(Math.random() - 0.5) * 200}px`,
      duration: `${Math.random() * 15 + 10}s`,
      delay: `${Math.random() * 15}s`,
      size: `${Math.random() * 3 + 1}px`
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute bg-[var(--gold)] rounded-full opacity-0 animate-[float-particle_linear_infinite]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            // @ts-ignore
            '--dx': p.dx
          }}
        />
      ))}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-particle {
          0% { transform: translateY(100vh) translateX(0) scale(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100px) translateX(var(--dx)) scale(1); opacity: 0; }
        }
      `}} />
    </div>
  );
}
