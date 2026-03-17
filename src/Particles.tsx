import { useMemo } from 'react';

interface ParticleDot {
  id: number;
  x: number;
  y: number;
  size: number;
  dur: number;
  del: number;
  opMin: number;
  opMax: number;
}

interface Props {
  count?: number;
  zIndex?: number;
}

export default function Particles({ count = 32, zIndex = 15 }: Props) {
  const dots = useMemo<ParticleDot[]>(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (i * 37.7 + 13) % 100,
      y: (i * 61.3 + 27) % 100,
      size: (i % 3 === 0) ? 2.5 : (i % 5 === 0) ? 1.5 : 1,
      dur: 3 + (i * 0.7) % 4,
      del: (i * 0.23) % 5,
      opMin: 0.04 + (i % 4) * 0.02,
      opMax: 0.25 + (i % 3) * 0.1,
    })),
    [count],
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex }}
    >
      {dots.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            '--dur': `${p.dur}s`,
            '--del': `${p.del}s`,
            '--op-min': p.opMin,
            '--op-max': p.opMax,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
