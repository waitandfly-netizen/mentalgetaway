import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar, Wind, Leaf, Coffee, Heart } from 'lucide-react';

/* ── 資料 ──────────────────────────────────────── */
const chapters = [
  {
    id: 'open',
    time: '09:00',
    label: '出發',
    icon: MapPin,
    color: 'from-stone-600 to-stone-800',
    accent: '#a8977e',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80',
    title: '在捷運劍潭站，我們相遇',
    body: '帶著一顆願意放鬆的心出門。\n不用帶什麼行李，不用準備什麼狀態，\n只需要你，出現在這裡。',
  },
  {
    id: 'guide',
    time: '10:00',
    label: '引導',
    icon: Heart,
    color: 'from-emerald-700 to-emerald-900',
    accent: '#5a8f6a',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80',
    title: '放慢，是一種勇氣',
    body: '開場引導不是課程，不是表演。\n是一個邀請——邀請你，暫時放下慣常的節奏，\n讓身體先於頭腦，感受腳下的土地。',
  },
  {
    id: 'forest',
    time: '10:30',
    label: '森林健行',
    icon: Leaf,
    color: 'from-green-700 to-teal-900',
    accent: '#4a7c59',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1200&q=80',
    title: '樹的呼吸，也是你的呼吸',
    body: '我們走進林子裡。\n站樁，不是練功，是讓根系從腳底長出來。\n聽風、聽鳥、聽遠處的水聲。\n這些聲音一直在，只是你終於有機會聽見了。',
  },
  {
    id: 'lunch',
    time: '12:00',
    label: '午餐休憩',
    icon: Coffee,
    color: 'from-amber-700 to-orange-900',
    accent: '#c4884a',
    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&q=80',
    title: '好好吃一頓飯',
    body: '原型食物，簡單料理。\n沒有人要你吃快一點，也沒有會議等著你。\n慢慢嚼，慢慢嚐，\n也許這才是你久違的「一餐」。',
  },
  {
    id: 'empty',
    time: '13:30',
    label: '放空練習',
    icon: Wind,
    color: 'from-sky-700 to-indigo-900',
    accent: '#5b7fa6',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    title: '什麼都不做，也是一件事',
    body: '放空不是虛度。\n這段時光，可以躺著看天空，\n可以靜靜坐著，讓思緒像雲一樣飄過去。\n你不需要有所收穫，你只需要在這裡。',
  },
  {
    id: 'end',
    time: '15:30',
    label: '賦歸',
    icon: Sun,
    color: 'from-rose-700 to-stone-800',
    accent: '#c47a5a',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
    title: '帶著輕盈，回到日常',
    body: '你不需要有什麼頓悟。\n但也許，走出去的你，\n跟走進來的你，會有一點點不一樣。\n那一點點，就夠了。',
  },
];

const includes = [
  "專業引導老師全程帶領",
  "活動行政費",
  "旅遊平安保險",
];

/* ── 章節卡 ──────────────────────────────────── */
function ChapterCard({ chapter, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      className="relative"
    >
      {/* Timeline dot + line */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center" style={{ top: 0, bottom: 0, zIndex: 10 }}>
        <motion.div
          className="w-5 h-5 rounded-full border-4 border-white shadow-md flex-shrink-0"
          style={{ background: chapter.accent, marginTop: 48 }}
          animate={{ scale: hovered ? 1.4 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        {index < chapters.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-stone-300 to-transparent mt-2" />
        )}
      </div>

      <div className={`grid md:grid-cols-2 gap-0 ${isEven ? '' : 'md:grid-flow-dense'}`}>
        {/* Image side */}
        <motion.div
          className={`relative overflow-hidden ${isEven ? 'md:col-start-1' : 'md:col-start-2'} h-72 md:h-96`}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <motion.img
            src={chapter.image}
            alt={chapter.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-40`} />
          {/* Time badge */}
          <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1 flex items-center gap-2 shadow-sm">
            <chapter.icon className="w-3.5 h-3.5" style={{ color: chapter.accent }} />
            <span className="text-xs font-medium tracking-wider text-stone-700">{chapter.time} · {chapter.label}</span>
          </div>
          {/* Hover shimmer */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/10"
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Text side */}
        <div className={`flex items-center px-8 md:px-16 py-12 bg-white ${isEven ? 'md:col-start-2' : 'md:col-start-1'}`}>
          <div>
            <motion.div
              className="w-8 h-px mb-6"
              style={{ background: chapter.accent }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <h2 className="text-2xl md:text-3xl font-light text-stone-800 leading-snug mb-5">
              {chapter.title}
            </h2>
            <p className="text-stone-500 font-light leading-loose whitespace-pre-line text-sm md:text-base">
              {chapter.body}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── 主頁面 ──────────────────────────────────── */
export default function OneDayRetreat() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale, opacity: heroOpacity }}>
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80"
            alt="forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-stone-900/70" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-2xl mx-auto"
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-7"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Sun className="w-4 h-4 text-amber-200" />
            <span className="text-white/90 text-xs tracking-[0.25em] uppercase">One Day Retreat</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wider mb-5">
            一日放空行
          </h1>
          <motion.p
            className="text-stone-200/80 text-lg md:text-xl font-light tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            給自己一天，什麼都不用做
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6 text-white/70 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { icon: Clock, text: '約 8 小時' },
              { icon: Users, text: '6–12 人' },
              { icon: MapPin, text: '台北近郊山區' },
              { icon: Calendar, text: '每月開團' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <Icon className="w-4 h-4" />
                <span className="tracking-wider">{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <span className="text-white/50 text-xs tracking-[0.2em]">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* ── Intro quote ── */}
      <section className="py-28 px-6 bg-[#f8f5f0]">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-stone-400 tracking-[0.3em] text-xs mb-8 uppercase">The Journey</p>
          <p className="text-2xl md:text-3xl font-light text-stone-700 leading-relaxed">
            「一日放空行」不是旅遊，
            <br />不是課程，
            <br />是一次<span className="text-emerald-700">允許自己存在</span>的練習。
          </p>
          <motion.div
            className="w-12 h-px bg-stone-300 mx-auto mt-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
      </section>

      {/* ── Scrolling chapters ── */}
      <section className="bg-white divide-y divide-stone-100">
        {chapters.map((chapter, i) => (
          <ChapterCard key={chapter.id} chapter={chapter} index={i} />
        ))}
      </section>

      {/* ── What's included + CTA ── */}
      <section className="py-28 px-6 bg-[#f8f5f0]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Includes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-stone-400 tracking-[0.3em] text-xs mb-6 uppercase">費用包含</p>
            <ul className="space-y-5">
              {includes.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <Check className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="text-stone-600 font-light group-hover:text-stone-800 transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-8 text-stone-400 text-xs leading-relaxed">
              * 交通費用請自理，我們會提供詳細的交通指引
            </p>
          </motion.div>

          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-3xl p-10 text-white relative overflow-hidden"
          >
            {/* subtle bg shape */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-600/20 blur-3xl pointer-events-none" />

            <p className="text-emerald-300/70 text-xs tracking-[0.3em] uppercase mb-4">費用</p>
            <p className="text-5xl font-light mb-1">NT$ 1,200</p>
            <p className="text-emerald-300/70 text-sm mb-8">/ 人</p>

            <div className="mb-8">
              <p className="text-emerald-300/70 text-xs tracking-wider mb-2">近期場次</p>
              <p className="text-white font-light text-lg">5/1（五）｜5/29（五）</p>
            </div>

            <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer" className="block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-white text-emerald-900 font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-50 transition-colors"
              >
                立即報名
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}