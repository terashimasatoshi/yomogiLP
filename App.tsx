import React from 'react';
import { Hero } from './components/Hero';
import { ProblemAffinity } from './components/ProblemAffinity';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { MenuFlow } from './components/MenuFlow';
import { TestimonialsFaq } from './components/TestimonialsFaq';
import { FinalCta } from './components/FinalCta';
import { StickyCta } from './components/StickyCta';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="antialiased text-brand-text font-sans bg-brand-bg selection:bg-brand-primary/30">
      {/* Navigation Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md h-16 md:h-20 flex items-center justify-between px-6 md:px-12 transition-all border-b border-brand-primary/10"
      >
        <div className="flex items-center gap-2">
           <a href="#" className="font-bold text-brand-text text-2xl tracking-tight hover:text-brand-primary transition-colors">
             ミーシェ
           </a>
           <span className="text-xs text-brand-primary bg-brand-highlight px-2 py-0.5 rounded-full hidden md:block border border-brand-primary/20">
             福井の本格よもぎ蒸し専門店
           </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-base font-bold text-brand-textLight">
          <a href="#features" className="hover:text-brand-primary transition-colors hover:scale-105 inline-block">こだわり</a>
          <a href="#menu" className="hover:text-brand-primary transition-colors hover:scale-105 inline-block">メニュー</a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#booking" 
            className="bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand-accent transition-all shadow-md hover:shadow-lg"
          >
            ご予約はこちら
          </motion.a>
        </nav>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#booking" 
          className="md:hidden bg-brand-primary text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-brand-accent transition-colors shadow-sm"
        >
          予約
        </motion.a>
      </motion.header>

      <main>
        <Hero />
        <ProblemAffinity />
        <Solution />
        <Features />
        <MenuFlow />
        <TestimonialsFaq />
        <FinalCta />
      </main>

      <footer className="bg-brand-bgDark text-brand-textLight py-12 text-center text-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-primary/20"></div>
        <div className="mb-6">
          <span className="text-2xl font-bold block mb-2 text-brand-text">ミーシェ</span>
          <span className="text-xs opacity-80">本格よもぎ蒸し専門店</span>
        </div>
        <div className="flex justify-center gap-6 mb-8 text-sm font-medium">
          <a href="#" className="hover:text-brand-primary transition-colors">利用規約</a>
          <a href="#" className="hover:text-brand-primary transition-colors">プライバシーポリシー</a>
          <a href="#" className="hover:text-brand-primary transition-colors">店舗情報</a>
        </div>
        <p className="text-xs opacity-60">© {new Date().getFullYear()} Mieche. All Rights Reserved.</p>
      </footer>

      <StickyCta />
    </div>
  );
};

export default App;