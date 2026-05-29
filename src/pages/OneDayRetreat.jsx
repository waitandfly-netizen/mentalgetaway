import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar, Wind, Leaf, Utensils, Eye } from 'lucide-react';

// ─── data ───────────────────────────────────────────────
const schedule = [
  {
    time: "09:00",
    activity: "捷運劍潭站集合",
    icon: MapPin,
    desc: "在都市的出發點，我們在這裡相遇，共同踏上今日的旅程。",
    color: "from-stone-400 to-stone-500",
  },
  {
    time: "10:00",
    activity: "開場引導",
    icon: Wind,
    desc: "放慢腳步，透過引導帶你把注意力從日常喧囂拉回到當下。",
    color: "from-sky-400 to-sky-500",
  },
  {
    time: "10:30",
    activity: "森林健行・站樁體驗",
    icon: Leaf,
    desc: "走進樹林，感受土地的扎實，讓腳步帶你回到身體裡。",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    time: "12:00",
    activity: "午餐休憩",
    icon: Utensils,
    desc: "品味簡單的原型食物，重新體會「吃」的美好與滋養。",
    color: "from-amber-400 to-amber-500",
  },
  {
    time: "13:30",
    activity: "放空練習",
    icon: Eye,
    desc: "正念呼吸、靜默凝視，允許自己只是單純地存在。",
    color: "from-violet-400 to-violet-500",
  },
  {
    time: "15:30",
    activity: "賦歸",
    icon: Sun,
    desc: "帶著一份安定，緩緩返回生活，也帶走今天的自己。",
    color: "from-rose-300 to-rose-400",
  },
];

const includes = [
  "專業引導老師全程帶領",
  "活動行政費",
  "旅遊平安保險",
];

// ─── sub-components ──────────────────────────────────────

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax bg */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-900/20 to-stone-900/70" />
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8"
        >
          <Sun className="w-4 h-4 text-amber-200" />
          <span className="text-white/90 text-xs tracking-[0.3em] uppercase">Day Retreat</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-light text-white tracking-wider mb-6"
        >
          一日放空篇
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-stone-200/80 text-lg md:text-xl font-light tracking-widest"
        >
          在自然中深呼吸，讓身心回歸平靜
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-widest">向下滑動</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-gradient-to-b from-white/40 to-white/0"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function QuickInfoBar() {
  const items = [
    { icon: Clock, label: "時長", value: "約 8 小時" },
    { icon: Users, label: "人數", value: "6–12 人" },
    { icon: MapPin, label: "地點", value: "台北近郊山區" },
    { icon: Calendar, label: "梯次", value: "每月開團" },
  ];

  return (
    <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="grid grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex items-center gap-2 justify-center"
            >
              <item.icon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <div className="text-left">
                <p className="text-[10px] text-stone-400 leading-none">{item.label}</p>
                <p className="text-sm font-medium text-stone-800 leading-snug">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NarrativeSection() {
  const lines = [
    {
      text: "「一日放空篇」是為忙碌的都市人設計的輕旅程。",
      size: "text-2xl md:text-3xl",
      weight: "font-light",
      color: "text-stone-800",
    },
    {
      text: "在這一天裡，我們將暫時放下手機、放下工作、放下煩惱，全然地投入大自然的懷抱。",
      size: "text-lg md:text-xl",
      weight: "font-light",
      color: "text-stone-600",
    },
    {
      text: "透過輕度的森林健行，我們將慢慢地喚醒身體的感知；透過正念呼吸練習，我們將學習如何讓心安定下來；透過品味健康的原型食物，我們將重新體會「吃」的美好。",
      size: "text-base md:text-lg",
      weight: "font-light",
      color: "text-stone-500",
    },
    {
      text: "這不是一場需要努力的課程，而是一段允許自己放鬆的時光。",
      size: "text-xl md:text-2xl",
      weight: "font-light",
      color: "text-emerald-800",
      highlight: true,
    },
    {
      text: "你可以只是單純地走路、單純地呼吸、單純地存在。",
      size: "text-lg md:text-xl",
      weight: "font-light",
      color: "text-stone-500",
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#f8f4ef]">
      <div className="max-w-2xl mx-auto space-y-16">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`${line.size} ${line.weight} ${line.color} leading-loose tracking-wide whitespace-pre-line relative group`}
          >
            {line.highlight && (
              <motion.span
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-full bg-emerald-400 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            )}
            <span className="group-hover:text-emerald-900 transition-colors duration-500">{line.text}</span>
          </motion.p>
        ))}
      </div>
    </section>
  );
}

function ScheduleSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-stone-400 text-xs tracking-[0.4em] uppercase mb-3">Itinerary</p>
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-wide">今日行程</h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[76px] top-0 bottom-0 w-px bg-stone-100 hidden md:block" />

          <div className="space-y-4">
            {schedule.map((item, i) => {
              const Icon = item.icon;
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  onHoverStart={() => setActiveIndex(i)}
                  onHoverEnd={() => setActiveIndex(null)}
                  className="flex gap-6 items-start group cursor-default"
                >
                  {/* time */}
                  <div className="w-16 flex-shrink-0 text-right pt-5 hidden md:block">
                    <motion.span
                      animate={{ color: isActive ? '#059669' : '#a8a29e' }}
                      className="text-sm font-medium tabular-nums"
                    >
                      {item.time}
                    </motion.span>
                  </div>

                  {/* dot */}
                  <div className="flex-shrink-0 mt-4 hidden md:block">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.4 : 1,
                        backgroundColor: isActive ? '#059669' : '#d6d3d1',
                      }}
                      transition={{ duration: 0.25 }}
                      className="w-3 h-3 rounded-full"
                    />
                  </div>

                  {/* card */}
                  <motion.div
                    animate={{
                      backgroundColor: isActive ? '#f0fdf4' : '#fafaf9',
                      borderColor: isActive ? '#6ee7b7' : '#e7e5e4',
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 border rounded-2xl p-5 flex gap-4 items-start"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="md:hidden text-emerald-700 text-xs font-medium tabular-nums">{item.time}</span>
                        <h3 className="text-stone-800 font-medium tracking-wide">{item.activity}</h3>
                      </div>
                      <AnimatePresence>
                        {(isActive) && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-stone-500 text-sm font-light leading-relaxed overflow-hidden"
                          >
                            {item.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-stone-400 text-xs mt-10 tracking-wider"
        >
          將滑鼠移到各時段，了解更多細節
        </motion.p>
      </div>
    </section>
  );
}

function IncludesSection() {
  return (
    <section className="py-32 px-6 bg-[#f8f4ef]">
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* includes */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-stone-400 text-xs tracking-[0.4em] uppercase mb-3">Included</p>
              <h2 className="text-3xl font-light text-stone-800 mb-10">費用包含</h2>
            </motion.div>

            <ul className="space-y-5">
              {includes.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-stone-600 group-hover:text-stone-800 transition-colors font-light">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-stone-400 text-sm font-light leading-relaxed"
            >
              * 交通費用請自理，我們會提供詳細的交通指引
            </motion.p>
          </div>

          {/* pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* decorative ring */}
            <div className="absolute -inset-3 rounded-3xl bg-emerald-100/50 blur-xl" />
            <div className="relative bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-2xl p-8 text-white overflow-hidden">
              {/* ambient dot */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-200/10 blur-3xl" />

              <p className="text-emerald-300/70 text-xs tracking-widest uppercase mb-2">費用</p>
              <p className="text-5xl font-light mb-1">
                NT$ 1,200
                <span className="text-lg text-emerald-300/70 ml-1">/ 人</span>
              </p>

              <div className="mt-6 mb-8 border-t border-white/10 pt-6">
                <p className="text-emerald-300/70 text-xs tracking-widest uppercase mb-3">近期場次</p>
                <div className="space-y-2">
                  {["5 / 1（五）", "5 / 29（五）"].map((d) => (
                    <div key={d} className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      <span className="text-white/90 font-light">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-emerald-900 py-4 rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-amber-50 transition-colors"
                >
                  立即報名
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="py-32 px-6 bg-stone-900 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald-900/40 blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto relative z-10"
      >
        <p className="text-stone-500 text-xs tracking-[0.4em] uppercase mb-6">Ready?</p>
        <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4 leading-relaxed">
          給自己一天，<br />只是存在就好。
        </h2>
        <p className="text-stone-400 font-light mb-12">
          不需要任何理由，只需要一個決定。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-900 rounded-full font-medium tracking-wider hover:bg-amber-50 transition-colors"
            >
              立即報名 <ArrowRight className="w-4 h-4" />
            </motion.button>
          </a>
          <Link to={createPageUrl("Contact")}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-light tracking-wider hover:bg-white/20 transition-colors"
            >
              有問題？聯繫我們
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

// ─── main export ─────────────────────────────────────────
export default function OneDayRetreat() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuickInfoBar />
      <NarrativeSection />
      <ScheduleSection />
      <IncludesSection />
      <ClosingSection />
    </div>
  );
}