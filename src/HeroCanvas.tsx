import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 192;
const SCROLL_DISTANCE = TOTAL_FRAMES * 14; // px

function frameSrc(i: number) {
  return `/sequence/frame_${String(i).padStart(3, '0')}_delay-0.041s.jpg`;
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  W: number,
  H: number,
) {
  const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
  const w = img.naturalWidth * scale;
  const h = img.naturalHeight * scale;
  ctx.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);
}

interface Props {
  triggerRef: React.RefObject<HTMLElement | null>;
}

export default function HeroCanvas({ triggerRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    // Guard against StrictMode double-mount
    if (initialized.current) return;
    initialized.current = true;

    const canvas = canvasRef.current!;
    const overlay = overlayRef.current!;
    const trigger = triggerRef.current;
    if (!canvas || !overlay || !trigger) return;

    const ctx = canvas.getContext('2d', { alpha: false })!;
    const images: HTMLImageElement[] = [];
    const seq = { frame: 0 };
    let lastDrawn = -1;
    let resizeHandler: (() => void) | null = null;

    // ── Lock scroll during loading ────────────────────────────────────────
    document.body.style.overflow = 'hidden';

    // ── Size canvas to full screen ────────────────────────────────────────
    function sizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
      lastDrawn = -1;
    }

    // ── Draw a single frame ───────────────────────────────────────────────
    function draw() {
      const idx = Math.max(0, Math.min(Math.round(seq.frame), TOTAL_FRAMES - 1));
      if (idx === lastDrawn) return;
      lastDrawn = idx;
      const img = images[idx];
      if (img && img.complete && img.naturalWidth) {
        drawCover(ctx, img, window.innerWidth, window.innerHeight);
      }
    }

    // ── Called when all images loaded ─────────────────────────────────────
    function start() {
      document.body.style.overflow = '';
      sizeCanvas();
      draw(); // frame 0

      // Fade out preloader
      overlay.style.transition = 'opacity 0.7s ease';
      overlay.style.opacity = '0';
      setTimeout(() => { overlay.style.display = 'none'; }, 750);

      // GSAP ScrollTrigger
      gsap.to(seq, {
        frame: TOTAL_FRAMES - 1,
        ease: 'none',
        scrollTrigger: {
          trigger,
          start: 'top top',
          end: '+=' + SCROLL_DISTANCE,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
        onUpdate: draw,
      });

      resizeHandler = () => { sizeCanvas(); draw(); };
      window.addEventListener('resize', resizeHandler);
    }

    // ── Preload all frames ────────────────────────────────────────────────
    let loaded = 0;
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      img.onload = img.onerror = () => {
        loaded++;
        const pct = Math.round((loaded / TOTAL_FRAMES) * 100);
        if (barRef.current) barRef.current.style.width = pct + '%';
        if (pctRef.current) pctRef.current.textContent = String(pct);
        if (loaded === TOTAL_FRAMES) start();
      };
      images.push(img);
    }

    return () => {
      document.body.style.overflow = '';
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (resizeHandler) window.removeEventListener('resize', resizeHandler);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* ── Preloader overlay ── */}
      <div
        ref={overlayRef}
        style={{ position: 'fixed', inset: 0, zIndex: 9999, background: '#050505' }}
        className="flex flex-col items-center justify-center gap-6"
      >
        <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
          Batch Zero
        </p>
        <div className="w-52 h-px bg-white/10 relative">
          <div
            ref={barRef}
            style={{ width: '0%', transition: 'width 80ms linear' }}
            className="absolute inset-y-0 left-0 bg-white"
          />
        </div>
        <p className="text-xs text-white/30 tracking-widest">
          <span ref={pctRef}>0</span>&nbsp;/ 100
        </p>
      </div>

      {/* ── Canvas ── */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', top: 0, left: 0, display: 'block' }}
      />
    </>
  );
}
