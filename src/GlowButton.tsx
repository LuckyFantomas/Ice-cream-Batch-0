import React from 'react';

interface GlowButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

const LETTERS = ['V','Y','S','T','Á','T',' ','S','I',' ','F','R','O','N','T','U'];

export default function GlowButton({ onClick, type = 'button', children }: GlowButtonProps) {
  return (
    <div className="glow-btn-wrapper">
      <button type={type} className="glow-btn" onClick={onClick}>
        {/* Text with per-letter animation */}
        <div className="glow-btn-txt-wrapper">
          <div className="glow-btn-txt">
            {LETTERS.map((letter, i) => (
              <span
                key={i}
                className="glow-btn-letter"
                style={{ '--i': i, animationDelay: `${i * 0.08}s` } as React.CSSProperties}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
        </div>
      </button>
    </div>
  );
}
