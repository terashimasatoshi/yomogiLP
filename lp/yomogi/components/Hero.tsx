import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { m } from 'framer-motion';
import { BOOKING_URL } from '../constants';
import { trackBookingClick } from '../utils/tracking';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-20 pb-10 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="/images/hero-visual.webp" alt="" fetchpriority="high" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/40"></div>
      </div>

      {/* Background Decorative Blobs (animate only, no initial → SSR safe) */}
      <m.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0 mix-blend-multiply"
      />
      <m.div
        animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-brand-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 z-0 mix-blend-multiply"
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20">

          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-8">
            {/* Badge - plain div for instant SSR visibility */}
            <div className="inline-block bg-white/80 backdrop-blur-md border border-brand-primary/20 text-brand-primary px-4 py-2 rounded-full text-base font-bold mb-4 shadow-sm">
              福井市・女性専用サロン 🌿
            </div>

            {/* Heading - plain h1 for instant SSR visibility */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight tracking-tight">
              ふわっと温まる、<br />
              <span className="text-brand-primary inline-block relative">
                私をいたわる時間。
                <svg
                   className="absolute -bottom-2 left-0 w-full h-3 text-brand-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            <p className="hidden md:block text-lg md:text-xl text-brand-textLight leading-relaxed font-medium">
              冷えも、疲れも、全部リセット。<br />
              完全個室のよもぎ蒸しで、<br className="md:hidden" />心と体をほどきませんか？
            </p>

            <div className="hidden md:flex flex-wrap justify-center md:justify-start gap-4 text-base md:text-lg font-bold text-brand-text">
              <div className="flex items-center bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm text-brand-accent border border-brand-accent/20">
                <Star className="w-5 h-5 fill-current mr-2" />
                <span>口コミ 4.75</span>
              </div>
              <div className="flex items-center bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm text-brand-secondary border border-brand-secondary/20">
                <span className="w-3 h-3 bg-brand-secondary rounded-full mr-2"></span>
                <span>国産無農薬よもぎ</span>
              </div>
            </div>

            {/* CTA box - plain div for instant SSR visibility */}
            <div className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl border-2 border-brand-primary/20 max-w-lg mx-auto md:mx-0 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-16 h-16 bg-brand-primary/10 rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
               <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
                  <div className="text-center md:text-left">
                     <p className="text-sm text-brand-textLight mb-1 font-bold">まずは体験してみませんか？</p>
                     <div className="flex items-baseline justify-center md:justify-start gap-2">
                        <span className="text-2xl font-bold text-brand-primary">初回限定</span>
                        <span className="text-4xl font-bold text-brand-text">¥3,900</span>
                        <span className="text-sm text-gray-500">(税込)</span>
                     </div>
                  </div>
                  <m.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackBookingClick('hero_cta')}
                    className="w-full md:w-auto bg-brand-primary text-white text-lg font-bold px-8 py-4 rounded-full shadow-md hover:bg-brand-accent hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
                  >
                    空き状況を見る <ArrowRight className="w-5 h-5" />
                  </m.a>
               </div>
            </div>
          </div>

          {/* Desktop image column - plain div for SSR */}
          <div className="w-full md:w-1/2 relative hidden md:block">
             <m.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 rotate-2 hover:rotate-0 transition-transform duration-500 z-10"
             >
                <img
                  src="/images/hero-visual.webp"
                  alt="Relaxed woman smiling"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
             </m.div>

             {/* Decorative Elements (animate only → SSR safe) */}
             <m.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-100 rounded-full z-0 opacity-80 border-4 border-white/50 border-dashed"
             />
             <m.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 -left-4 w-4 h-4 bg-brand-primary rounded-full z-20"
             />

             {/* Floating badge - plain div for SSR */}
             <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20">
                <div className="bg-brand-secondary/20 p-2 rounded-full text-brand-secondary">
                  <Star className="w-6 h-6 fill-brand-secondary" />
                </div>
                <div>
                  <p className="text-xs text-brand-textLight">お客様満足度</p>
                  <p className="text-lg font-bold text-brand-text">98.5%</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
