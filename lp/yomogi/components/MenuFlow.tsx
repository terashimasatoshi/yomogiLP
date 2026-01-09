import React from 'react';
import { FLOW_STEPS, BOOKING_URL } from '../constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const MenuFlow: React.FC = () => {
  return (
    <>
      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              メニュー・料金
            </h2>
            <p className="text-brand-textLight text-lg">
              シンプルで分かりやすい料金設定です。
            </p>
          </motion.div>

          {/* Main Price Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="bg-[#FFF5F5] rounded-3xl p-8 md:p-12 mb-12 shadow-sm border-2 border-brand-primary/10 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-primary/10 rounded-full animate-pulse" />

            <div className="text-center relative z-10">
              <span className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider mb-6 inline-block shadow-md">
                初めての方へ
              </span>

              <h3 className="text-2xl md:text-4xl font-bold text-brand-text mb-4">
                お悩み別・薬草よもぎ蒸し
              </h3>

              <p className="text-brand-textLight text-lg mb-8">
                カウンセリング + よもぎ蒸し(30分) + ハーブティー
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                <div className="text-gray-400 line-through text-xl">通常 ¥5,000</div>
                <div className="text-5xl md:text-6xl font-bold text-brand-primary">¥3,900</div>
                <div className="text-brand-textLight font-bold">(税込)</div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-brand-text text-base md:text-lg font-medium">
                <span className="bg-white px-4 py-2 rounded-lg shadow-sm">🌿 6種のハーブから選択</span>
                <span className="bg-white px-4 py-2 rounded-lg shadow-sm">👘 手ぶらでOK</span>
                <span className="bg-white px-4 py-2 rounded-lg shadow-sm">☕️ ドリンク付き</span>
              </div>
            </div>
          </motion.div>

          {/* Other Menu Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Repeat */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5, borderColor: '#E88D93' }}
              className="border-2 border-brand-primary/20 rounded-2xl p-6 bg-white transition-all shadow-sm"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <h4 className="text-xl font-bold text-brand-text">2回目以降</h4>
                  <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-bold">
                    最安値
                  </span>
                </div>

                <div className="text-right leading-none">
                  <div className="text-xs text-brand-textLight font-medium mb-1">最安</div>
                  <span className="text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight">
                    ¥3,850<span className="text-lg md:text-xl font-bold">〜</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-brand-textLight">※次回予約特典有り！</p>
            </motion.div>

            {/* Pair */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5, borderColor: '#E88D93' }}
              className="border-2 border-gray-100 rounded-2xl p-6 bg-white transition-all"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-bold text-brand-text">ペア蒸し(2名様)</h4>
                <span className="text-2xl font-bold text-brand-primary">¥7,800</span>
              </div>
              <p className="text-sm text-brand-textLight">お友達や親子で。お一人様 ¥3,900</p>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand-text text-white text-lg font-bold px-12 py-4 rounded-full shadow-lg hover:bg-brand-primary transition-all duration-300"
            >
              空き状況をチェックする <ArrowRight className="ml-2" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="py-24 bg-brand-bgDark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-secondary/20 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              当日の流れ
            </h2>
            <p className="text-lg text-brand-textLight">
              初めてでも大丈夫。ゆったりとお過ごしください。
            </p>
          </motion.div>

          <div className="space-y-8">
            {FLOW_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center relative overflow-visible"
              >
                {index !== FLOW_STEPS.length - 1 && (
                  <div className="absolute left-1/2 md:left-[5.5rem] bottom-[-2rem] w-1 h-8 bg-brand-primary/20 -z-10 hidden md:block" />
                )}

                <div className="flex-shrink-0 w-20 h-20 bg-brand-highlight rounded-full flex items-center justify-center border-4 border-white shadow-sm text-brand-primary font-bold text-xl relative z-10">
                  0{step.step}
                </div>

                <div className="flex-grow text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 justify-center md:justify-start">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-text">{step.title}</h3>
                    <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-lg text-brand-textLight leading-loose">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
