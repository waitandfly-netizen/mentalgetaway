import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar, Wind, Leaf, Heart } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const schedule = [
  { time: "09:00", activity: "捷運劍潭站集合", desc: "抵達山腳，深呼吸，讓城市的喧囂慢慢遠去" },
  { time: "10:00", activity: "開場引導", desc: "放下手機，讓身體開始感受此刻" },
  { time: "10:30", activity: "森林健行・站樁體驗", desc: "踩踏落葉的聲音、林間的光影，和身體重新相識" },
  { time: "12:00", activity: "午餐休憩", desc: "原型食物，細嚼慢嚥，品味每一口的飽足" },
  { time: "13:30", activity: "放空練習", desc: "什麼都不必做，只是好好地存在" },
  { time: "15:30", activity: "賦歸", desc: "帶著一份輕盈，回到生活裡" },
];

const includes = [
  "專業引導老師全程帶領",
  "活動行政費",
  "旅遊平安保險",
];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&q=80",
    alt: "山林健行的背影",
    caption: "走進林間，讓腳步代替思緒",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80",
    alt: "開闊山谷天空",
    caption: "天空有多開闊，心就能有多自由",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    alt: "清晨山路",
    caption: "清晨的山徑，是送給自己最好的禮物",
  },
];

// Parallax photo block
function ParallaxPhoto({ src, alt, caption }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-2xl shadow-xl h-[60vh] md:h-[75vh]">
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
      </motion.div>
      {caption && (
        <p className="absolute bottom-6 left-8 text-white/90 text-sm font-light tracking-widest">
          {caption}
        </p>
      )}
    </div>
  );
}

// Schedule item with hover highlight
function ScheduleItem({ item, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ x: 6, transition: { duration: 0.25 } }}
      className="group flex gap-6 md:gap-10 items-start cursor-default"
    >
      {/* Time */}
      <div className="w-14 md:w-20 flex-shrink-0 pt-1 text-right">
        <span className="text-emerald-700 font-light text-sm md:text-base tracking-wider">{item.time}</span>
      </div>
      {/* Dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-emerald-400 group-hover:bg-emerald-600 group-hover:scale-125 transition-all duration-300 mt-2" />
        {index < schedule.length - 1 && (
          <div className="w-px flex-1 bg-emerald-100 group-hover:bg-emerald-200 transition-colors mt-2 min-h-[3rem]" />
        )}
      </div>
      {/* Content */}
      <div className="flex-1 pb-10">
        <h3 className="text-stone-800 font-medium tracking-wide group-hover:text-emerald-800 transition-colors duration-300">
          {item.activity}
        </h3>
        <p className="text-stone-400 font-light text-sm mt-1 leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function OneDayRetreat() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);

  return (
    <div className="min-h-screen bg-[#f5f0ea]">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen flex items-end justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80"
            alt="山林健行"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-stone-900/20 to-[#f5f0ea]" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-6 pb-20 max-w-3xl mx-auto"
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-1.5 rounded-full mb-6">
            <Sun className="w-3.5 h-3.5 text-amber-200" />
            <span className="text-white/90 text-xs tracking-[0.3em] uppercase">One Day Retreat</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wide mb-4 drop-shadow-md">
            一日放空篇
          </h1>
          <p className="text-stone-100/80 text-lg md:text-xl font-light tracking-widest">
            在自然中深呼吸，讓身心回歸平靜
          </p>

          {/* Scroll hint */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/60 to-white/0" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── QUICK STATS ── */}
      <section className="py-16 px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Clock, label: "時長", value: "約 8 小時" },
            { icon: Users, label: "人數", value: "6–12 人" },
            { icon: MapPin, label: "地點", value: "台北近郊山區" },
            { icon: Calendar, label: "梯次", value: "每月開團" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="text-center group cursor-default"
            >
              <item.icon className="w-5 h-5 text-emerald-600 mx-auto mb-2 group-hover:text-emerald-700 transition-colors" />
              <p className="text-xs text-stone-400 tracking-widest mb-1">{item.label}</p>
              <p className="font-medium text-stone-800">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── NARRATIVE ── */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto space-y-10 text-stone-700 font-light leading-loose text-base md:text-lg tracking-wide">
          {[
            { icon: Wind, text: "這一天，什麼都不必做——\n只是走路、呼吸、感受。" },
            { icon: Leaf, text: "「一日放空篇」是為忙碌的都市人設計的輕旅程。\n我們將暫時放下手機、放下工作、放下煩惱，全然地投入大自然的懷抱。" },
            { icon: Heart, text: "透過輕度的森林健行，慢慢喚醒身體的感知；\n透過正念呼吸練習，讓心安定下來；\n透過品味原型食物，重新體會「吃」的美好。" },
            { icon: null, text: "這不是一場需要努力的課程，\n而是一段允許自己放鬆的時光。\n\n你可以只是單純地走路、單純地呼吸、單純地存在。" },
          ].map((para, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex gap-4 items-start"
            >
              {para.icon && (
                <para.icon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1.5 opacity-70" />
              )}
              <p className={`whitespace-pre-line ${!para.icon ? 'text-center text-xl md:text-2xl text-stone-800 mx-auto' : ''}`}>
                {para.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PHOTO 1 ── */}
      <section className="px-6 md:px-16 pb-20">
        <ParallaxPhoto {...photos[0]} />
      </section>

      {/* ── SCHEDULE ── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-xs tracking-[0.4em] text-emerald-600 uppercase mb-3">Day Flow</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800">這一天的節奏</h2>
          </motion.div>

          <div>
            {schedule.map((item, i) => (
              <ScheduleItem key={item.time} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO 2 ── */}
      <section className="px-6 md:px-16 pb-20">
        <ParallaxPhoto {...photos[1]} />
      </section>

      {/* ── WHAT'S INCLUDED + PRICING ── */}
      <section className="py-24 px-6 bg-white/70 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Includes */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.4em] text-emerald-600 uppercase mb-3">Includes</p>
              <h2 className="text-2xl font-light text-stone-800 mb-8">費用包含</h2>
            </motion.div>
            <ul className="space-y-5">
              {includes.map((item, i) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-stone-600 group-hover:text-emerald-800 transition-colors duration-300">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-stone-400 text-sm font-light">＊ 交通費用請自理，我們會提供詳細的交通指引</p>
          </div>

          {/* Pricing card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-2xl p-8 text-white shadow-xl"
          >
            <p className="text-emerald-300 text-xs tracking-widest uppercase mb-2">Pricing</p>
            <p className="text-4xl font-light mb-1">NT$ 1,200</p>
            <p className="text-emerald-300 text-sm mb-6">每人</p>

            <div className="border-t border-emerald-700/50 pt-6 mb-6">
              <p className="text-emerald-300 text-xs tracking-widest uppercase mb-2">場次</p>
              <p className="font-light leading-loose">5/1（五）｜5/29（五）</p>
            </div>

            <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-3 bg-white text-emerald-800 hover:bg-amber-50 font-medium py-4 rounded-xl transition-colors duration-300"
              >
                給自己這一天
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── PHOTO 3 ── */}
      <section className="px-6 md:px-16 py-16">
        <ParallaxPhoto {...photos[2]} />
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="py-24 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <p className="text-stone-400 text-sm tracking-widest font-light mb-4">你值得擁有一天完全屬於自己的時光</p>
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-10 leading-relaxed">
            準備好了嗎？
          </h2>
          <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-emerald-800 text-white rounded-full hover:bg-emerald-700 transition-colors duration-300 shadow-md"
            >
              給自己這一天
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </a>
          <div className="mt-10">
            <Link
              to={createPageUrl("Programs")}
              className="text-sm text-stone-400 hover:text-emerald-700 transition-colors tracking-wider"
            >
              探索其他旅程 →
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}