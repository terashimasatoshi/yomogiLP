import React from 'react';
import { Flame, Leaf, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

export const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">
            よもぎ蒸しって、<br className="md:hidden"/>なにがいいの？
          </h2>
          <p className="text-lg text-brand-textLight max-w-2xl mx-auto leading-relaxed">
            よもぎ蒸しは、600年も前から続く伝統的な美容法。<br/>
            マントの中でよもぎを煎じて、<br className="md:hidden"/>その蒸気を全身で浴びるだけ。<br/>
            簡単なのに、うれしい効果がたくさんあるんです。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -10 }}
            className="bg-brand-highlight/30 rounded-3xl p-8 text-center hover:bg-brand-highlight/50 transition-colors duration-300 border border-transparent hover:border-brand-primary/10"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-brand-primary"
            >
              <Flame size={40} />
            </motion.div>
            <h3 className="text-2xl font-bold text-brand-text mb-4">体の芯からポカポカ</h3>
            <p className="text-brand-textLight leading-loose text-lg">
              下半身から温めることで、内臓までしっかり温まります。
              終わった後もポカポカが続いて、ぐっすり眠れますよ。
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-brand-highlight/30 rounded-3xl p-8 text-center hover:bg-brand-highlight/50 transition-colors duration-300 border border-transparent hover:border-brand-secondary/10"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-brand-secondary"
            >
              <Leaf size={40} />
            </motion.div>
            <h3 className="text-2xl font-bold text-brand-text mb-4">ハーブの力で整う</h3>
            <p className="text-brand-textLight leading-loose text-lg">
              「ハーブの女王」よもぎの成分を、蒸気でたっぷりと吸収。
              お肌もしっとり、女性特有のお悩みにも優しく寄り添います。
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="bg-brand-highlight/30 rounded-3xl p-8 text-center hover:bg-brand-highlight/50 transition-colors duration-300 border border-transparent hover:border-brand-accent/10"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-brand-accent"
            >
              <Smile size={40} />
            </motion.div>
            <h3 className="text-2xl font-bold text-brand-text mb-4">いい香りでリラックス</h3>
            <p className="text-brand-textLight leading-loose text-lg">
              よもぎの優しい香りに包まれて深呼吸。
              日々の忙しさを忘れて、心までほどけるリラックスタイムを。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};