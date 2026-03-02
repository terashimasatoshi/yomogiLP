import React from 'react';
import { TESTIMONIALS, FAQS } from '../constants';
import { ChevronDown, Star } from 'lucide-react';
import { m } from 'framer-motion';

export const TestimonialsFaq: React.FC = () => {
  return (
    <>
      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              お客様の声
            </h2>
            <p className="text-lg text-brand-textLight">
               嬉しいお言葉をたくさんいただいています。
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {TESTIMONIALS.map((t, idx) => (
              <m.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, type: "spring" }}
                whileHover={{ y: -10 }}
                className="flex flex-col h-full"
              >
                 <div className="bg-brand-highlight p-8 rounded-[2rem] rounded-bl-none relative mb-6 shadow-sm flex-grow border-2 border-transparent hover:border-brand-primary/10 transition-colors">
                    <div className="flex text-brand-accent mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <h4 className="font-bold text-brand-text text-xl mb-3">{t.title}</h4>
                    <p className="text-brand-textLight leading-loose text-lg">
                       {t.content}
                    </p>
                 </div>
                 <div className="flex items-center gap-3 pl-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl shadow-inner">👩</div>
                    <div>
                       <p className="text-brand-text font-bold">{t.name}</p>
                       <p className="text-sm text-brand-textLight">{t.concern}</p>
                    </div>
                 </div>
              </m.div>
            ))}
          </div>

          <m.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
             <div className="inline-block bg-gray-50 border border-gray-200 px-8 py-4 rounded-full">
                <p className="text-brand-text text-lg">
                  ホットペッパービューティーの口コミ評価 
                  <span className="text-3xl font-bold text-brand-primary mx-2">4.75</span>
                  <span className="text-sm">/ 5.0</span>
                </p>
             </div>
          </m.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-bgCream">
        <div className="container mx-auto px-6 max-w-3xl">
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              よくあるご質問
            </h2>
            <p className="text-lg text-brand-textLight">
               気になることはこちらでチェック！
            </p>
          </m.div>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <m.details 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl shadow-sm open:shadow-md transition-all duration-300 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 font-bold text-brand-text text-lg md:text-xl list-none select-none hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="text-brand-primary text-2xl font-black">Q.</span>
                    <span className="pt-1">{faq.q}</span>
                  </div>
                  <div className="bg-brand-bgDark rounded-full p-2 group-open:rotate-180 transition-transform">
                     <ChevronDown className="w-5 h-5 text-brand-text" />
                  </div>
                </summary>
                <div className="px-8 pb-8 pt-0 pl-[4.5rem] text-brand-textLight text-lg leading-loose bg-white">
                  {faq.a}
                </div>
              </m.details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};