import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar, ChevronDown, Wind, Leaf, Coffee } from 'lucide-react';

// ── Scroll-triggered fade-in wrapper ──
function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

// ── Expandable detail card ──
function ExpandCard({ time, activity, detail, icon: Icon, color }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={`rounded-2xl border cursor-pointer overflow-hidden transition-all duration-300 ${
        open ? 'border-emerald-300 shadow-md shadow-emerald-100' : 'border-stone-200 hover:border-emerald-200'
      } bg-white`}
      onClick={() => setOpen(!open)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-4 px-6 py-5">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${color}`}>
          {Icon && <Icon className="w-4 h-4" />}
        </div>
        <div className="flex-1">
          <span className="text-xs font-medium tracking-widest text-emerald-600 block mb-0.5">{time}</span>
          <h3 className="text-stone-800 font-medium">{activity}</h3>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-stone-400" />
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <p className="px-6 pb-5 text-stone-500 font-light leading-relaxed text-sm border-t border-stone-100 pt-4">
          {detail}
        </p>
      </motion.div>
    </motion.div>
  );
}

// ── Hover-highlight value pill ──
function ValuePill({ text }) {
  return (
    <motion.span
      className="inline-block px-4 py-2 rounded-full border border-emerald-200 text-emerald-700 text-sm font-light cursor-default select-none"
      whileHover={{ backgroundColor: '#d1fae5', borderColor: '#6ee7b7', scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.span>
  );
}

const schedule = [
  {
    time: "09:00",
    activity: "捷運劍潭站集合",
    detail: "於捷運劍潭站 1 號出口集合，由老師帶領大家互相認識，說明今日流程與注意事項，準備出發。",
    icon: MapPin,
    color: "bg-amber-100 text-amber-600",
  },
  {
    time: "10:00",
    activity: "開場引導",
    detail: "在山林入口處進行簡短的正念引導——放慢呼吸、感受腳踩地面的重量，讓身體提前切換到「放鬆模式」。",
    icon: Wind,
    color: "bg-sky-100 text-sky-600",
  },
  {
    time: "10:30",
    activity: "森林健行・站樁體驗",
    detail: "沿著自然步道緩步前行，途中會停留數個據點進行站樁體驗，感受樹木與大地的能量，重新喚醒身體感知。",
    icon: Leaf,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    time: "12:00",
    activity: "午餐休憩",
    detail: "享用以原型食材準備的健康便當，細嚼慢嚥，品味食物本身的滋味。飯後可自由休息、小睡或靜坐。",
    icon: Coffee,
    color: "bg-orange-100 text-orange-600",
  },
  {
    time: "13:30",
    activity: "放空練習",
    detail: "這段時光沒有指令、沒有任務。可以躺在草地上看雲、對著遠山發呆，或者什麼也不做——你只需要「在」這裡。",
    icon: Sun,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    time: "15:30",
    activity: "賦歸",
    detail: "老師帶領簡短的分享與感謝，讓這份平靜延伸進你回家之後的生活裡，帶著滿滿能量返回日常。",
    icon: Clock,
    color: "bg-violet-100 text-violet-600",
  },
];

const includes = [
  "專業引導老師全程帶領",
  "活動行政費",
  "旅遊平安保險",
];

const values = ["慢下來", "感受自然", "正念呼吸", "身體放鬆", "無手機時光", "與自己同在"];

export default function OneDayRetreat() {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafaf7]">

      {/* ── Hero ── */}
      <section className="relative h-[88vh] flex items-end justify-center overflow-hidden pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#fafaf7]" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="inline-block text-xs tracking-[0.4em] text-emerald-700/80 uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Day Retreat
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-light text-stone-800 tracking-wide mb-4 drop-shadow-sm">
            一日放空篇
          </h1>
          <p className="text-stone-500 font-light text-lg tracking-wide">
            在自然中深呼吸，讓身心回歸平靜
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-stone-400/60 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-14 px-6 bg-white border-y border-stone-100">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Clock, label: "時長", value: "約 8 小時" },
            { icon: Users, label: "人數", value: "6–12 人" },
            { icon: MapPin, label: "地點", value: "台北近郊山區" },
            { icon: Calendar, label: "梯次", value: "每月開團" },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1} className="text-center">
              <motion.div
                className="inline-flex flex-col items-center gap-2 cursor-default"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-xs text-stone-400 tracking-wider">{item.label}</p>
                <p className="font-medium text-stone-800 text-sm">{item.value}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Narrative: Intro ── */}
      <section className="py-28 px-6">
        <div className="max-w-xl mx-auto space-y-10">
          <FadeIn>
            <p className="text-xs tracking-[0.35em] text-emerald-600 uppercase mb-2">關於這趟旅程</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 leading-snug">
              一天，只給自己。
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-stone-500 font-light leading-loose text-base md:text-lg">
              「一日放空篇」是為忙碌的都市人設計的輕旅程。在這一天裡，我們將暫時放下手機、放下工作、放下煩惱，全然地投入大自然的懷抱。
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-stone-500 font-light leading-loose text-base md:text-lg">
              透過輕度的森林健行，慢慢喚醒身體的感知；透過正念呼吸練習，讓心安定下來；透過品味健康的原型食物，重新體會「吃」的美好。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-stone-600 font-light leading-loose text-base md:text-lg italic border-l-4 border-emerald-200 pl-5">
              這不是一場需要努力的課程，而是一段允許自己放鬆的時光。你可以只是單純地走路、單純地呼吸、單純地存在。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Value Pills ── */}
      <section className="py-10 px-6 bg-gradient-to-r from-emerald-50 to-amber-50">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-widest text-stone-400 mb-6 uppercase">你將在這裡體驗</p>
          <div className="flex flex-wrap justify-center gap-3">
            {values.map((v, i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <ValuePill text={v} />
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Schedule ── */}
      <section className="py-28 px-6 bg-[#fafaf7]">
        <div className="max-w-2xl mx-auto">
          <FadeIn className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.35em] text-emerald-600 uppercase mb-2">行程安排</p>
              <h2 className="text-3xl font-light text-stone-800">一天的節奏</h2>
            </div>
            <button
              onClick={() => setExpandAll(!expandAll)}
              className="text-xs text-stone-400 hover:text-emerald-600 transition-colors tracking-wider underline underline-offset-4"
            >
              {expandAll ? '全部收合' : '全部展開'}
            </button>
          </FadeIn>

          <div className="space-y-3">
            {schedule.map((item, i) => (
              <FadeIn key={item.time} delay={i * 0.08} direction="left">
                <ExpandCard {...item} defaultOpen={expandAll} />
              </FadeIn>
            ))}
          </div>
          <p className="text-xs text-stone-400 mt-4 text-center font-light">點擊每個項目可查看詳細說明</p>
        </div>
      </section>

      {/* ── Includes + Pricing ── */}
      <section className="py-28 px-6 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Includes */}
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.35em] text-emerald-600 uppercase mb-2">費用包含</p>
              <h2 className="text-3xl font-light text-stone-800 mb-8">你不需要擔心</h2>
            </FadeIn>
            <div className="space-y-4">
              {includes.map((item, i) => (
                <FadeIn key={item} delay={i * 0.1} direction="left">
                  <motion.div
                    className="flex items-center gap-3 p-4 rounded-xl border border-stone-100 bg-stone-50 hover:bg-emerald-50 hover:border-emerald-200 transition-colors duration-250 cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-stone-600 font-light">{item}</span>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.3}>
              <p className="mt-6 text-stone-400 text-sm font-light">
                ＊ 交通費用請自理，我們會提供詳細的交通指引
              </p>
            </FadeIn>
          </div>

          {/* Pricing Card */}
          <FadeIn delay={0.2} direction="right">
            <motion.div
              className="rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-900 p-8 text-white shadow-xl shadow-emerald-900/20"
              whileHover={{ y: -4, boxShadow: '0 24px 48px -12px rgba(4,120,87,0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-emerald-200 text-xs tracking-widest uppercase mb-1">費用</p>
              <p className="text-5xl font-light mb-1">
                NT$ 1,200
              </p>
              <p className="text-emerald-300 text-sm mb-6">/ 每人</p>

              <div className="bg-white/10 rounded-2xl px-5 py-4 mb-6">
                <p className="text-emerald-200 text-xs tracking-wider mb-2 uppercase">2026 場次</p>
                <p className="text-white font-light leading-loose">
                  5/1（五）｜5/29（五）
                </p>
              </div>

              <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="w-full bg-white text-emerald-800 font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-50 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  立即報名
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </a>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#fafaf7] to-amber-50 text-center">
        <FadeIn>
          <p className="text-stone-400 text-xs tracking-[0.4em] uppercase mb-4">準備好了嗎</p>
          <h2 className="text-3xl font-light text-stone-800 mb-6 leading-relaxed">
            給自己一天，就這樣而已。
          </h2>
          <Link to={createPageUrl("Contact")}>
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-stone-300 text-stone-600 hover:bg-white hover:border-emerald-300 hover:text-emerald-700 transition-colors duration-200 font-light tracking-wider"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              聯繫我們
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}