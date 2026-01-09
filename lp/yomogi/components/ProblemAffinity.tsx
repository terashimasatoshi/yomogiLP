import React from 'react';
import { PROBLEMS } from '../constants';
import { motion } from 'framer-motion';

export const ProblemAffinity: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    show: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-primary font-bold tracking-widest text-sm mb-3 block bg-brand-primary/10 inline-block px-3 py-1 rounded-full">CHECK LIST</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6 leading-relaxed">
              こんな<span className="text-brand-primary underline decoration-wavy decoration-brand-primary/50 underline-offset-8">プチ不調</span>、<br className="md:hidden"/>感じていませんか？
            </h2>
            <p className="text-lg text-brand-textLight">
              「なんとなく調子が悪い…」は、<br className="md:hidden"/>体が冷えているサインかも。
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {PROBLEMS.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ scale: 1.03, rotate: -1 }}
                className="bg-brand-highlight rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-brand-primary/20"
              >
                <div className="bg-white p-3 rounded-full text-brand-primary shadow-sm shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-brand-text font-medium text-lg leading-relaxed pt-1">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            className="bg-brand-bgDark rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto border-2 border-dashed border-brand-primary/30 relative"
          >
            <div className="absolute -top-4 -left-4 text-4xl animate-bounce">🤔</div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-4">
              そのお悩み、<br className="md:hidden"/>温めると変わるかもしれません。
            </h3>
            <p className="text-lg text-brand-textLight leading-loose">
              冷えは万病の元と言われます。<br/>
              ミーシェのよもぎ蒸しで、体の芯からポカポカ温まって、<br className="hidden md:inline"/>
              明日からの自分をもっと好きになりませんか？
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-highlight/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12 border-4 border-white"
          >
            <div className="w-full md:w-1/2 relative">
               <motion.img 
                 whileHover={{ rotate: 0, scale: 1.05 }}
                 src="https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=1200&fm=webp" 
                 alt="Owner smiling" 
                 className="w-full aspect-square object-cover rounded-2xl shadow-lg rotate-2 transition-transform duration-500"
               />
               <motion.div 
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5, type: "spring" }}
                 className="absolute -bottom-4 -right-4 bg-brand-secondary text-white px-6 py-2 rounded-full font-bold shadow-md border-2 border-white"
               >
                 Owner Message
               </motion.div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text leading-relaxed">
                実は私も、<br/>
                <span className="text-brand-primary">冷えと生理痛</span>に<br/>
                悩んでいました。
              </h2>
              <p className="text-lg text-brand-textLight leading-loose">
                こんにちは、ミーシェ オーナーの森です。<br/>
                私は20代の頃、ひどい冷え性でした。冬は布団に入っても足が冷たくて眠れない、生理の時は薬が手放せない…。そんな毎日でした。
              </p>
              <p className="text-lg text-brand-textLight leading-loose">
                そんな時に出会ったのが「よもぎ蒸し」。<br/>
                通い始めてから、体が内側から変わっていくのを実感しました。「この感動を、同じ悩みを持つ女性に届けたい！」そんな想いでミーシェをオープンしました。
              </p>
              <p className="text-lg font-bold text-brand-text pt-4">
                初めての方も、どうぞリラックスしてお越しくださいね。
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};