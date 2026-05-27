import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const paragraphs = [
  "給正在尋找安定、寧靜的你～",
  "這個世界的資訊很多，\n有時多到讓人分不清方向，\n也總有一股莫名的躁動，推著我們不斷往前。",
  "每天忙著工作、忙著生活，\n好不容易下了班、放了假，\n屬於自己的時間卻總是稍縱即逝。",
  "還來不及真正放鬆，\n又回到日常的忙碌裡。",
  "回憶小時候，\n一件簡單的小事，就能讓我們專注投入。",
  "看天空、吹風、發呆、走路、玩耍。",
  "時間好像同樣的流逝，\n心卻很安定。",
  "只是隨著進入社會，\n生活裡多了許多放不下的人事物，\n也慢慢忘了，該怎麼和自己好好相處。",
  "如果你願意，",
  "無論是一個人前來，\n或是和 3–5 位好友一起，",
  "我們將從平凡卻重要的日常開始——",
  "好好吃一頓飯。\n好好睡一場覺。\n感受身體的節奏。\n走進自然裡，慢慢放下累積已久的疲憊。",
  "當身體真實的需要被看見，\n心，也會慢慢鬆開。",
  "那些一直撐著的、忙著的、來不及感受的，也許會一點一點，重新回到平衡。",
  "願這段旅程，陪你慢下來。",
  "讓安定、寧靜與自在，\n\n慢慢回到生活裡。",
];

function AnimatedParagraph({ text, index }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      className={`whitespace-pre-line font-light leading-loose tracking-wide text-stone-700 ${
        index === 0
          ? 'text-xl md:text-2xl text-emerald-800 font-normal'
          : index === paragraphs.length - 1
          ? 'text-xl md:text-2xl text-stone-800'
          : 'text-base md:text-lg'
      }`}
    >
      {text}
    </motion.p>
  );
}

// Floating organic shape
function FloatingShape({ className, style, duration = 8, yRange = 18 }) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -yRange, 0], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function Home() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.06]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f0ea]" ref={containerRef}>
      <SEOHead
        title="好好生活，找回心靈寧靜的綠洲"
        description="心靈假期 Mental Getaway — 給正在尋找安定、寧靜的你。提供一日放空篇、二日放空篇、僻靜篇等身心靈退修旅程。"
        keywords="心靈假期, Mental Getaway, 身心靈退修, 靜心旅程, 一日放空, 僻靜篇, 自然療癒, mindfulness retreat"
        image="https://media.base44.com/images/public/698fc983574e659f561934f1/701f6988b_IMG_6964.jpg"
      />

      {/* Hero — Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ opacity: heroOpacity, scale: heroScale }}>
          <video
            ref={videoRef}
            src="https://media.base44.com/videos/public/698fc983574e659f561934f1/60fb3d5c7_.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-900/15 to-[#f5f0ea]" />
        </motion.div>

        {/* Floating ambient shapes */}
        <FloatingShape
          className="absolute rounded-full bg-emerald-200/20 blur-3xl pointer-events-none"
          style={{ width: 420, height: 420, bottom: '8%', left: '5%' }}
          duration={10}
          yRange={22}
        />
        <FloatingShape
          className="absolute rounded-full bg-amber-100/20 blur-3xl pointer-events-none"
          style={{ width: 300, height: 300, top: '12%', right: '8%' }}
          duration={13}
          yRange={16}
        />

        <motion.div
          className="relative z-10 text-center px-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <motion.p
            className="text-amber-100/80 tracking-[0.4em] text-xs mb-6 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Mental Getaway
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wider mb-6 drop-shadow-sm">
            心靈假期
          </h1>
          <motion.p
            className="text-stone-100/80 text-lg md:text-xl font-light tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            好好生活，回到寧靜心靈的綠洲
          </motion.p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="w-px h-14 bg-gradient-to-b from-white/0 via-white/60 to-white/0" />
        </motion.div>
      </section>

      {/* Letter Section */}
      <section className="relative py-24 md:py-36 px-6">
        {/* Subtle ambient blobs */}
        <FloatingShape
          className="absolute rounded-full bg-emerald-100/40 blur-3xl pointer-events-none"
          style={{ width: 500, height: 500, top: '10%', right: '-10%' }}
          duration={15}
          yRange={30}
        />
        <FloatingShape
          className="absolute rounded-full bg-stone-200/50 blur-3xl pointer-events-none"
          style={{ width: 380, height: 380, bottom: '20%', left: '-8%' }}
          duration={12}
          yRange={25}
        />

        <div className="max-w-xl mx-auto relative z-10 space-y-12">
          {paragraphs.map((text, i) => (
            <AnimatedParagraph key={i} text={text} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingShape
            className="absolute rounded-full bg-amber-200/10 blur-3xl"
            style={{ width: 400, height: 400, top: '-20%', left: '-10%' }}
            duration={11}
            yRange={20}
          />
          <FloatingShape
            className="absolute rounded-full bg-emerald-400/10 blur-3xl"
            style={{ width: 350, height: 350, bottom: '-15%', right: '-5%' }}
            duration={14}
            yRange={18}
          />
        </div>
        <motion.div
          className="max-w-xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-emerald-200/70 tracking-[0.3em] text-xs mb-6">BEGIN YOUR JOURNEY</p>
          <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-wide leading-relaxed">
            準備好踏上心靈之旅了嗎？
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={createPageUrl("Programs")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-emerald-900 rounded-full hover:bg-amber-50 transition-all duration-300 group"
            >
              <span className="tracking-wider font-medium">探索旅程</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <span className="tracking-wider">聯繫我們</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}