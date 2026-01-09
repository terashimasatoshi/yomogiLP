import React from 'react';
import { FEATURES } from '../constants';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-bgCream overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-primary font-bold tracking-widest text-sm mb-3 block">Meshie STYLE</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text">
            ミーシェの<span className="text-brand-primary">5つ</span>のこだわり
          </h2>
        </motion.div>

        <div className="space-y-24">
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={feature.id} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative group">
                   {/* Background Blob */}
                   <motion.div 
                     animate={{ 
                       rotate: index % 2 === 0 ? [3, -3, 3] : [-3, 3, -3],
                       scale: [1, 1.05, 1]
                     }}
                     transition={{ duration: 6, repeat: Infinity }}
                     className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-[3rem] ${index % 2 === 0 ? 'bg-brand-primary/10' : 'bg-brand-secondary/10'} -z-10`}
                   />
                   
                   <img 
                    src={feature.img} 
                    alt={feature.title} 
                    className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="absolute -top-6 -left-6 bg-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-brand-primary shadow-lg border-4 border-brand-bgCream z-10"
                  >
                    0{feature.id}
                  </motion.div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 leading-relaxed relative inline-block">
                  {feature.title}
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/20 -z-10 rounded-full"></span>
                </h3>
                <p className="text-lg text-brand-textLight leading-loose text-justify">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
