import React from 'react';
import { Calendar, MessageCircle, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { BOOKING_URL } from '../constants';

export const FinalCta: React.FC = () => {
  return (
    <>
      {/* Access Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              店舗情報
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-bgDark rounded-[3rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 items-center"
          >
             <div className="w-full md:w-1/2 h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-inner relative border-4 border-white">
               {/* Map Placeholder */}
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.123!2d136.2!3d36.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDAwJzAwLjAiTiAxMzbCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2sjp!4v1600000000000!5m2!1sen!2sjp" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen 
                 loading="lazy"
               ></iframe>
             </div>
             
             <div className="w-full md:w-1/2 space-y-8">
                <div>
                   <h3 className="text-2xl font-bold text-brand-text mb-2">本格よもぎ蒸し専門店 ミーシェ</h3>
                   <p className="text-brand-textLight text-lg tracking-widest">Meshie</p>
                </div>
                
                <div className="space-y-4 text-lg">
                   <div className="flex items-start gap-4">
                      <MapPin className="text-brand-primary shrink-0 mt-1" />
                      <div>
                         <p className="font-bold text-brand-text">〒910-0804</p>
                         <p className="text-brand-textLight">福井県福井市高木中央2丁目2612</p>
                         <p className="text-sm text-brand-primary mt-1">※ 越前開発駅から車8分 / 駐車場5台あり</p>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                      <Clock className="text-brand-primary shrink-0 mt-1" />
                      <div>
                         <p className="text-brand-text"><span className="font-bold">平日</span> 10:00 〜 14:00</p>
                         <p className="text-brand-text"><span className="font-bold"></span> 16:00 〜 21:00</p>
                         <p className="text-sm text-brand-textLight mt-1">※ 木曜定休</p>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="booking" className="py-24 bg-brand-highlight/30 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <motion.div 
           animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
           transition={{ duration: 5, repeat: Infinity }}
           className="absolute top-0 left-1/4 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-10"
        />

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-text mb-8 leading-tight"
          >
            冷えを手放して、<br/>
            もっと私を好きになる。
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-brand-textLight mb-12"
          >
            今日から温活、はじめませんか？<br/>
            あなたのご来店を心よりお待ちしています。
          </motion.p>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-[2rem] p-10 shadow-xl border-4 border-brand-primary/10 mb-12 inline-block w-full max-w-2xl"
          >
             <div className="inline-block bg-brand-accent text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                WEB予約限定
             </div>
             <p className="text-5xl font-bold text-brand-primary mb-2">
               ¥3,900 <span className="text-lg text-brand-textLight font-medium">(税込)</span>
             </p>
             <p className="text-xl font-bold text-brand-text">
               漢方よもぎ蒸し (30分)
             </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
             <motion.a 
               whileHover={{ scale: 1.05, y: -5 }}
               whileTap={{ scale: 0.95 }}
               href={BOOKING_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="flex-1 max-w-sm flex items-center justify-center gap-3 bg-brand-primary text-white text-xl font-bold py-5 rounded-full shadow-lg hover:bg-brand-accent transition-all"
             >
               <Calendar size={24} />
               <span>空き状況を見て予約</span>
             </motion.a>
             
             <motion.a 
               whileHover={{ scale: 1.05, y: -5 }}
               whileTap={{ scale: 0.95 }}
               href={BOOKING_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="flex-1 max-w-sm flex items-center justify-center gap-3 bg-[#06C755] text-white text-xl font-bold py-5 rounded-full shadow-lg hover:brightness-105 transition-all"
             >
               <MessageCircle size={24} />
               <span>LINEで相談する</span>
             </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};
