import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

export default function Home() {
  const paragraphs = [
    "這個世界的資訊很多，\n有時多到讓人分不清方向，\n也總有一股莫名的躁動，推著我們不斷往前。",
    "每天忙著工作、忙著生活，\n好不容易下了班、放了假，\n屬於自己的時間卻總是稍縱即逝。",
    "還來不及真正放鬆，\n又回到日常的忙碌裡。",
    "回憶小時候，\n一件簡單的小事，就能讓我們專注投入。",
    "看天空、吹風、發呆、走路、玩耍。",
    "時間好像同樣的流逝，\n心卻很安定。",
    "只是隨著進入社會，\n生活裡多了許多放不下的人事物，\n也慢慢忘了，該怎麼和自己好好相處。",
  ];

  const inviteParagraphs = [
    "無論是一個人前來，\n或是和 3–5 位好友一起，",
    "我們將從平凡卻重要的日常開始——",
    "好好吃一頓飯。\n好好睡一場覺。\n感受身體的節奏。\n走進自然裡，慢慢放下累積已久的疲憊。",
    "當身體真實的需要被看見，\n心，也會慢慢鬆開。",
    "那些一直撐著的、忙著的、來不及感受的，\n也許會一點一點，重新回到平衡。",
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <SEOHead
        title="給正在尋找安定、寧靜的你"
        description="心靈假期 Mental Getaway — 好好生活，回到寧靜心靈的綠洲。提供一日放空篇、二日放空篇、僻靜篇等身心靈退修旅程。"
        keywords="心靈假期, Mental Getaway, 身心靈退修, 靜心旅程, 自然療癒, mindfulness retreat"
        image="https://media.base44.com/images/public/698fc983574e659f561934f1/701f6988b_IMG_6964.jpg"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-stone-900/70" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <Leaf className="w-9 h-9 text-emerald-300/70 mx-auto" />
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-widest mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            給正在尋找安定、寧靜的你
          </motion.h1>

          <motion.div
            className="w-12 h-px bg-white/30 mx-auto mb-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Link
              to={createPageUrl("About")}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/20 transition-all duration-500 group"
            >
              <span className="tracking-wider text-sm">繼續閱讀</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
        </motion.div>
      </section>

      {/* Letter Section */}
      <section className="py-24 md:py-36 px-6 bg-white">
        <div className="max-w-xl mx-auto">

          {/* Story paragraphs */}
          <div className="space-y-8 mb-16">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.7 }}
                className="text-stone-600 font-light leading-loose text-lg whitespace-pre-line"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 my-16"
          >
            <div className="flex-1 h-px bg-emerald-200" />
            <Leaf className="w-5 h-5 text-emerald-500/60" />
            <div className="flex-1 h-px bg-emerald-200" />
          </motion.div>

          {/* Invitation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-stone-700 font-light text-xl leading-loose mb-10"
          >
            如果你願意，
          </motion.p>

          <div className="space-y-8 mb-16">
            {inviteParagraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.7 }}
                className="text-stone-600 font-light leading-loose text-lg whitespace-pre-line"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-8 space-y-5"
          >
            <p className="text-stone-700 font-light text-lg leading-loose">
              願這段旅程，陪你慢下來。
            </p>
            <p className="text-emerald-800 font-light text-xl leading-loose tracking-wide">
              讓安定、寧靜與自在，<br />慢慢回到生活裡。
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to={createPageUrl("Programs")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-800 text-white rounded-full hover:bg-emerald-700 transition-all duration-300 group"
            >
              <span className="tracking-wider text-sm">探索旅程篇章</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={createPageUrl("About")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-stone-300 text-stone-600 rounded-full hover:border-emerald-600 hover:text-emerald-700 transition-all duration-300"
            >
              <span className="tracking-wider text-sm">認識心靈假期</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}