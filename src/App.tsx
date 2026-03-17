/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Droplet, ThermometerSnowflake, Lock } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  const scrollToForm = () => {
    document.getElementById('allocation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg-dark text-text-light selection:bg-text-light selection:text-bg-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 md:p-8 mix-blend-difference">
        <div className="font-display font-bold tracking-[0.2em] text-sm uppercase">
          Batch Zero
        </div>
        <button 
          onClick={scrollToForm}
          className="text-xs font-medium tracking-widest uppercase hover:text-accent-bronze transition-colors duration-300"
        >
          Přístup
        </button>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=2071&auto=format&fit=crop" 
            alt="Dark textured ice cream" 
            className="w-full h-full object-cover grayscale opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            DOKONALOST NELZE<br />VYRÁBĚT PO TUNÁCH.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-accent-silver text-sm md:text-base max-w-xl mb-12 font-light tracking-wide leading-relaxed"
          >
            Batch Zero. Mikrodávky řemeslné zmrzliny z těch nejlepších surovin světa. Striktně na příděl.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center mt-4"
          >
            <svg width="0" height="0" className="absolute">
              <filter id="liquid">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.02"
                  numOctaves={3}
                  seed="2"
                ></feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="8"></feDisplacementMap>
              </filter>
            </svg>
            <div className="button-container" onClick={scrollToForm}>
              <button type="button" className="button">
                <div className="text-one">
                  <p>
                    <span style={{ "--i": 0 } as React.CSSProperties}>P</span>
                    <span style={{ "--i": 1 } as React.CSSProperties}>Ř</span>
                    <span style={{ "--i": 2 } as React.CSSProperties}>I</span>
                    <span style={{ "--i": 3 } as React.CSSProperties}>P</span>
                    <span style={{ "--i": 4 } as React.CSSProperties}>O</span>
                    <span style={{ "--i": 5 } as React.CSSProperties}>J</span>
                    <span style={{ "--i": 6 } as React.CSSProperties}>I</span>
                    <span style={{ "--i": 7 } as React.CSSProperties}>T</span>
                    <span>&nbsp;</span>
                    <span style={{ "--i": 8 } as React.CSSProperties}>S</span>
                    <span style={{ "--i": 9 } as React.CSSProperties}>E</span>
                  </p>
                </div>
                <div className="bg-div">
                  <div className="bg-inn-1"></div>
                  <div className="bg-inn-2"></div>
                  <div className="bg-inn-3"></div>
                  <div className="bg-inn-4"></div>
                  <div className="bg-inn-5"></div>
                  <div className="bg-inn-6"></div>
                  <div className="bg-inn-7"></div>
                  <div className="bg-inn-8"></div>
                  <div className="bg-inn-9"></div>
                  <div className="bg-inn-10"></div>
                  <div className="bg-inn-11"></div>
                  <div className="bg-inn-12"></div>
                  <div className="bg-inn-13"></div>
                  <div className="bg-inn-14"></div>
                </div>
                <div className="text-two">
                  <p>
                    <span style={{ "--i": 0 } as React.CSSProperties}>P</span>
                    <span style={{ "--i": 1 } as React.CSSProperties}>Ř</span>
                    <span style={{ "--i": 2 } as React.CSSProperties}>I</span>
                    <span style={{ "--i": 3 } as React.CSSProperties}>P</span>
                    <span style={{ "--i": 4 } as React.CSSProperties}>O</span>
                    <span style={{ "--i": 5 } as React.CSSProperties}>J</span>
                    <span style={{ "--i": 6 } as React.CSSProperties}>I</span>
                    <span style={{ "--i": 7 } as React.CSSProperties}>T</span>
                    <span>&nbsp;</span>
                    <span style={{ "--i": 8 } as React.CSSProperties}>S</span>
                    <span style={{ "--i": 9 } as React.CSSProperties}>E</span>
                  </p>
                </div>
                <div className="bg-div-2">
                  <div className="bg-div-3"></div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-accent-silver">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent-silver to-transparent" />
        </motion.div>
      </section>

      {/* 2. MANIFESTO */}
      <section className="relative w-full border-t border-border-subtle">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border-subtle">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-8">
                JAK A PROČ?
              </h2>
              <p className="text-lg md:text-xl text-accent-silver font-light leading-relaxed mb-8">
                Většina značek vyrábí pro všechny. My vyrábíme pro ty, kteří chápou rozdíl. Žádné zkratky. Žádné umělé objemové složky. Proces, který je spíše vědou než cukrařinou.
              </p>
            </motion.div>
          </div>
          
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-[#080808]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="space-y-12"
            >
              <div>
                <div className="text-[10px] uppercase tracking-widest text-accent-bronze mb-2">Aktuální status</div>
                <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter">BATCH NO. 004</div>
                <div className="text-sm tracking-widest uppercase mt-2 text-accent-silver">Ve zrání</div>
              </div>
              
              <div className="w-full h-[1px] bg-border-subtle" />
              
              <div>
                <div className="text-[10px] uppercase tracking-widest text-accent-bronze mb-2">Dostupnost</div>
                <div className="font-display text-6xl md:text-7xl font-bold tracking-tighter">0 %</div>
                <div className="text-sm tracking-widest uppercase mt-2 text-accent-silver">Vyprodáno v předprodeji</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ANATOMIE DOKONALOSTI */}
      <section className="py-24 md:py-32 border-t border-border-subtle overflow-hidden">
        <div className="px-6 md:px-12 mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-5xl font-bold tracking-tight"
          >
            ANATOMIE DOKONALOSTI
          </motion.h2>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar px-6 md:px-12 pb-12 snap-x snap-mandatory">
          <div className="flex gap-6 md:gap-8 w-max">
            {/* Pillar 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="w-[85vw] md:w-[400px] shrink-0 border border-border-subtle p-8 md:p-10 snap-start bg-[#050505] hover:bg-[#0a0a0a] transition-colors duration-500"
            >
              <Droplet className="w-8 h-8 text-accent-bronze mb-12" strokeWidth={1} />
              <h3 className="font-display text-2xl font-bold mb-4">01 / Suroviny</h3>
              <p className="text-accent-silver font-light leading-relaxed text-sm">
                Žádné pasty. Žádné extrakty. Ručně seškrabávané lusky madagaskarské vanilky, pistácie z Bronte a čerstvé mléko z mikrofarem. Každá ingredience má svůj rodokmen.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-[85vw] md:w-[400px] shrink-0 border border-border-subtle p-8 md:p-10 snap-start bg-[#050505] hover:bg-[#0a0a0a] transition-colors duration-500"
            >
              <ThermometerSnowflake className="w-8 h-8 text-accent-bronze mb-12" strokeWidth={1} />
              <h3 className="font-display text-2xl font-bold mb-4">02 / Technika</h3>
              <p className="text-accent-silver font-light leading-relaxed text-sm">
                Základ zraje přesně 72 hodin při 4 °C pro maximální rozvinutí chuti. Stloukání probíhá při specifické teplotě, aby se minimalizoval nášleh vzduchu (overrun pod 15 %).
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-[85vw] md:w-[400px] shrink-0 border border-border-subtle p-8 md:p-10 snap-start bg-[#050505] hover:bg-[#0a0a0a] transition-colors duration-500"
            >
              <Lock className="w-8 h-8 text-accent-bronze mb-12" strokeWidth={1} />
              <h3 className="font-display text-2xl font-bold mb-4">03 / Exkluzivita</h3>
              <p className="text-accent-silver font-light leading-relaxed text-sm">
                Kapacita našich strojů a nekompromisní proces znamenají jediné: vyrobíme maximálně 50 kg z jedné várky. Když dojde, dojde. Další šance je až s novým batchem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. ALOKAČNÍ FORMULÁŘ */}
      <section id="allocation-form" className="py-24 md:py-32 border-t border-border-subtle bg-[#030303] relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase">
              Na nejlepší věci se čeká
            </h2>
            <p className="text-accent-silver font-light leading-relaxed max-w-xl mx-auto">
              Naše produkce je omezena kapacitou řemeslné výroby. Zapište se na listinu a získejte přístup k privátním várkám, edukačnímu obsahu a komunitě dříve, než se vyprodají.
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-accent-silver block">Identifikace (Jméno)</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-transparent border-b border-border-subtle py-3 text-text-light focus:outline-none focus:border-text-light transition-colors duration-300 placeholder:text-[#333]"
                  placeholder="Vaše jméno"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-accent-silver block">Komunikační kanál (E-mail)</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-transparent border-b border-border-subtle py-3 text-text-light focus:outline-none focus:border-text-light transition-colors duration-300 placeholder:text-[#333]"
                  placeholder="vas@email.cz"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-accent-silver block">Záměr (Povinné)</label>
              <input 
                type="text" 
                required
                className="w-full bg-transparent border-b border-border-subtle py-3 text-text-light focus:outline-none focus:border-text-light transition-colors duration-300 placeholder:text-[#333]"
                placeholder="Proč chcete ochutnat naši zmrzlinu?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-accent-silver block">Profilace (Volitelné)</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-border-subtle py-3 text-text-light focus:outline-none focus:border-text-light transition-colors duration-300 placeholder:text-[#333]"
                placeholder="Vaše oblíbená restaurace nebo chuťový profil"
              />
            </div>

            <div className="pt-8 flex justify-center">
              <button
                type="submit"
                className="group relative px-12 py-5 border border-border-subtle bg-transparent overflow-hidden transition-all duration-500 hover:border-text-light w-full md:w-auto"
              >
                <div className="absolute inset-0 bg-text-light translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 text-xs font-bold tracking-[0.2em] uppercase group-hover:text-bg-dark transition-colors duration-500">
                  Vystát si frontu
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-subtle py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-accent-silver">
        <div>&copy; {new Date().getFullYear()} BATCH ZERO. Všechna práva vyhrazena.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-text-light transition-colors">Instagram</a>
          <a href="#" className="hover:text-text-light transition-colors">Podmínky</a>
        </div>
      </footer>
    </div>
  );
}
