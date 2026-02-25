import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BOOKING_URL } from '../constants';
import { trackBookingClick } from '../utils/tracking';

export const StickyCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 border border-brand-primary/20 flex items-center justify-between">
            <div className="flex flex-col pl-2">
              <span className="text-xs text-brand-primary font-bold mb-0.5">初回限定</span>
              <span className="text-2xl font-bold text-brand-text leading-none">¥3,900<span className="text-xs text-brand-textLight ml-1 font-normal">(税込)</span></span>
            </div>
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick('sticky_cta')}
              className="bg-brand-primary text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-brand-accent transition-colors text-sm"
            >
              予約する
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};