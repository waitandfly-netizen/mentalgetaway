import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Sun, Moon, Mountain } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import SoulQuiz from '@/components/SoulQuiz';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

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
  const [quizOpen, setQuizOpen] = useState(false);

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
            src="https://videos.pexels.com/video-files/30719906/13142558_1080_1920_30fps.mp4"
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

      {/* Soul Quiz CTA */}
      <section className="py-16 px-6 bg-[#f5f0ea] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-emerald-700/70 tracking-[0.3em] text-xs mb-2 font-light uppercase">BEGIN YOUR JOURNEY</p>
          <p className="text-stone-700 text-lg font-light tracking-wide mb-6">準備好踏上心靈之旅了嗎？</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setQuizOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-stone-200 text-stone-700 rounded-full hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-800 transition-all duration-300 shadow-sm group"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="tracking-wider font-light">🌿 心靈小探索</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to={createPageUrl("Programs")}
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-800 text-white rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-sm group"
            >
              <span className="tracking-wider font-light">瀏覽旅程</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-stone-400 text-xs mt-4 font-light">花 2 分鐘，找到適合你的旅程</p>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="py-24 md:py-32 px-6 bg-[#f5f0ea]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-emerald-700/80 tracking-[0.3em] text-sm mb-4">2026 PROGRAMS</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-wide">心靈假期篇章</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {[
              { title: "一日放空行", subtitle: "Day Retreat", description: "在自然中深呼吸，讓身心回歸平靜", image: "https://spiritvacation.wordpress.com/wp-content/uploads/2024/03/img_7582.jpeg", link: "OneDayRetreat", icon: Sun },
              { title: "二日放空篇", subtitle: "Weekend Escape", description: "兩天一夜的心靈充電之旅", image: "https://spiritvacation.wordpress.com/wp-content/uploads/2024/03/line_album_240313_12.jpg", link: "TwoDayRetreat", icon: Moon },
              { title: "蛻變篇", subtitle: "Silent Retreat", description: "在寧靜中與內在自我對話", image: "https://spiritvacation.wordpress.com/wp-content/uploads/2024/02/s__381304862_0.jpg", link: "SilentRetreat", icon: Mountain },
              { title: "僻靜篇", subtitle: "Invitation Only", description: "由心靈導遊邀請，為您量身打造的身心靈旅程", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/9c4e700ba_IMG_20220923_150004.jpg", link: "InvitationRetreat", icon: Sparkles }
            ].map((program, index) => (
              <motion.div key={program.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15, duration: 0.8 }}>
                <Link to={createPageUrl(program.link)} className="group block">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <program.icon className="w-6 h-6 text-amber-200/80 mb-3" />
                      <p className="text-amber-200/80 text-sm tracking-widest mb-2">{program.subtitle}</p>
                      <h3 className="text-2xl text-white font-light">{program.title}</h3>
                    </div>
                  </div>
                  <p className="text-stone-600 font-light leading-relaxed px-2">{program.description}</p>
                  <div className="flex items-center gap-2 text-emerald-700 mt-4 px-2 group-hover:gap-4 transition-all">
                    <span className="text-sm tracking-wider">了解更多</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

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
          <div className="flex justify-center">
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-emerald-900 rounded-full hover:bg-amber-50 transition-all duration-300 group"
            >
              <span className="tracking-wider font-medium">聯繫我們</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
      <AnimatePresence>
        {quizOpen && <SoulQuiz onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}