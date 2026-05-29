import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sun, Clock, Users, MapPin, ArrowRight, Check } from 'lucide-react';

// Full-bleed parallax image scene
function ParallaxScene({ image, children, height = "100vh", overlay = "from-black/50 via-black/30 to-transparent" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height }}>
      <motion.div className="absolute inset-0 w-full h-[120%] -top-[10%]" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </motion.div>
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}

// Scroll-triggered text fade
function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Hoverable schedule row
function ScheduleRow({ time, activity, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-6 cursor-default group"
    >
      <motion.span
        animate={{ color: hovered ? "#059669" : "#a8a29e", width: hovered ? 64 : 48 }}
        transition={{ duration: 0.3 }}
        className="text-sm font-light tabular-nums flex-shrink-0 text-right"
        style={{ minWidth: 52 }}
      >
        {time}
      </motion.span>
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0.6, backgroundColor: hovered ? "#059669" : "#d1fae5" }}
        style={{ originX: 0 }}
        transition={{ duration: 0.35 }}
        className="h-px flex-shrink-0"
        style={{ width: 28 }}
      />
      <motion.p
        animate={{ color: hovered ? "#1c1917" : "#57534e", x: hovered ? 4 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-base md:text-lg font-light tracking-wide"
      >
        {activity}
      </motion.p>
    </motion.div>
  );
}

const scheduleItems = [
  { time: "09:00", activity: "捷運劍潭站集合" },
  { time: "10:00", activity: "開場引導" },
  { time: "10:30", activity: "森林健行・站樁體驗" },
  { time: "12:00", activity: "午餐休憩" },
  { time: "13:30", activity: "放空練習" },
  { time: "15:30", activity: "賦歸" },
];

const includes = [
  "專業引導老師全程帶領",
  "活動行政費",
  "旅遊平安保險",
];

export default function OneDayRetreat() {
  return (
    <div className="bg-[#f5f0ea]">

      {/* ── 01 HERO ── */}
      <ParallaxScene
        image="https://images.unsplash.com/photo-1682687221038-404cb8830901?w=1920&q=80"
        height="100vh"
        overlay="from-stone-900/60 via-stone-900/30 to-stone-900/10"
      >
        <div className="text-center px-6 max-w-3xl mx-auto">
          <motion.p
            className="text-amber-200/70 tracking-[0.4em] text-xs uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            Day Retreat
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-light text-white tracking-wider mb-6 drop-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            一日放空篇
          </motion.h1>
          <motion.p
            className="text-stone-200/80 text-lg md:text-xl font-light tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            在自然中深呼吸，讓身心回歸平靜
          </motion.p>
          {/* scroll hint */}
          <motion.div
            className="mt-20 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.6 }}
          >
            <div className="w-px h-14 bg-gradient-to-b from-white/0 via-white/60 to-white/0" />
          </motion.div>
        </div>
      </ParallaxScene>

      {/* ── 02 QUICK STATS ── */}
      <section className="py-16 px-6 bg-white/70 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Clock, label: "時長", value: "約 8 小時" },
            { icon: Users, label: "人數", value: "6–12 人" },
            { icon: MapPin, label: "地點", value: "台北近郊山區" },
            { icon: Sun,   label: "梯次", value: "每月開團" },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1} className="text-center">
              <item.icon className="w-5 h-5 text-emerald-600 mx-auto mb-2 opacity-80" />
              <p className="text-xs text-stone-400 tracking-widest mb-1">{item.label}</p>
              <p className="text-stone-800 font-light">{item.value}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── 03 NARRATIVE SCENE 1 — sky ── */}
      <ParallaxScene
        image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80"
        height="70vh"
        overlay="from-stone-900/20 via-transparent to-[#f5f0ea]"
      >
        <FadeIn className="text-center px-6 max-w-xl mx-auto">
          <p className="text-white/90 text-xl md:text-3xl font-light leading-relaxed tracking-wide drop-shadow">
            「暫時放下手機、放下工作、放下煩惱，全然地投入大自然的懷抱。」
          </p>
        </FadeIn>
      </ParallaxScene>

      {/* ── 04 BODY COPY ── */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto space-y-14">
          {[
            {
              label: "01",
              heading: "為什麼需要這一天",
              body: "每天忙著工作、忙著生活，好不容易到了週末，時間卻又稍縱即逝。這一天，我們替你創造一個真正屬於自己的空白。"
            },
            {
              label: "02",
              heading: "走進森林",
              body: "透過輕度健行，慢慢地喚醒身體的感知。不趕路、不打卡，只是走路、呼吸，讓腳步帶著你回到當下。"
            },
            {
              label: "03",
              heading: "放空，不是什麼都不做",
              body: "這不是一場需要努力的課程，而是一段允許自己鬆開的時光。你可以只是單純地坐著、聽風、什麼都不想。"
            },
          ].map((block, i) => (
            <FadeIn key={block.label} delay={0.05} className="flex gap-8 items-start">
              <span className="text-stone-200 text-4xl font-light flex-shrink-0 select-none mt-1">{block.label}</span>
              <div>
                <h3 className="text-xl md:text-2xl font-light text-stone-800 mb-3 tracking-wide">{block.heading}</h3>
                <p className="text-stone-500 font-light leading-relaxed text-base md:text-lg">{block.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── 05 NARRATIVE SCENE 2 — hiker ── */}
      <ParallaxScene
        image="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80"
        height="65vh"
        overlay="from-transparent via-stone-900/20 to-[#f5f0ea]"
      >
        <div />
      </ParallaxScene>

      {/* ── 06 SCHEDULE ── */}
      <section className="py-28 px-6 bg-white/50">
        <div className="max-w-xl mx-auto">
          <FadeIn className="mb-14 text-center">
            <p className="text-emerald-700 tracking-[0.3em] text-xs uppercase mb-3">Timeline</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-wide">一天的節奏</h2>
          </FadeIn>
          <div className="space-y-7">
            {scheduleItems.map((item, i) => (
              <ScheduleRow key={item.time} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 NARRATIVE SCENE 3 — open sky ── */}
      <ParallaxScene
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        height="60vh"
        overlay="from-stone-900/10 via-transparent to-[#f5f0ea]"
      >
        <FadeIn className="text-center px-6">
          <p className="text-white text-2xl md:text-4xl font-light tracking-widest drop-shadow">
            有時候，最遠的旅程<br />是回到自己
          </p>
        </FadeIn>
      </ParallaxScene>

      {/* ── 08 INCLUDES + CTA ── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Includes */}
          <FadeIn>
            <p className="text-emerald-700 tracking-[0.3em] text-xs uppercase mb-6">費用包含</p>
            <ul className="space-y-5 mb-6">
              {includes.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                  className="flex items-center gap-3 text-stone-600 font-light"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
            <p className="text-stone-400 text-xs font-light">＊ 交通費用請自理，報名後將提供詳細交通指引</p>
          </FadeIn>

          {/* Price + CTA */}
          <FadeIn delay={0.15}>
            <div className="bg-emerald-900 rounded-2xl p-8 text-white">
              <p className="text-emerald-300 text-xs tracking-widest mb-2">費用</p>
              <p className="text-5xl font-light mb-1">
                1,200
                <span className="text-lg text-emerald-300 ml-1">NT$ / 人</span>
              </p>
              <p className="text-emerald-200/60 text-sm font-light mb-6">5/1（五）｜5/29（五）</p>

              <a
                href="https://forms.gle/KCYzFjRnw8CuoYKT6"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-emerald-900 rounded-xl py-4 font-medium tracking-wider flex items-center justify-center gap-2 group transition-colors hover:bg-amber-50"
                >
                  給自己這一天
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 09 FINAL SCENE ── */}
      <ParallaxScene
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80"
        height="50vh"
        overlay="from-transparent to-stone-900/40"
      >
        <FadeIn className="text-center px-6">
          <p className="text-white/80 text-sm tracking-[0.4em] uppercase">心靈假期 Mental Getaway</p>
        </FadeIn>
      </ParallaxScene>

    </div>
  );
}