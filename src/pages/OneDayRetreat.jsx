import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const scheduleItems = [
  {
    time: "09:00",
    activity: "捷運劍潭站集合",
    feeling: "一個深呼吸，今天只屬於你。",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    desc: "輕裝出發，把工作通知靜音。今天，你只需要出現。"
  },
  {
    time: "10:00",
    activity: "開場引導",
    feeling: "讓身體先學會慢下來。",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80",
    desc: "透過簡單的身體掃描與呼吸引導，把你從城市的步調，輕輕帶進山林的節奏。"
  },
  {
    time: "10:30",
    activity: "森林健行 · 站樁體驗",
    feeling: "腳踩進土地，心也跟著落地。",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80",
    desc: "走在樹與樹之間，感受光影穿過葉縫。站樁，不是姿勢，是一種讓自己安靜下來的方式。"
  },
  {
    time: "12:00",
    activity: "午餐休憩",
    feeling: "好好吃一頓，就是當下。",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    desc: "原型食物、當季食材，細嚼慢嚥。這一餐，是給自己的禮物。"
  },
  {
    time: "13:30",
    activity: "放空練習",
    feeling: "什麼都不做，也是一種練習。",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    desc: "正念靜坐、自由書寫，或只是靜靜地看山、聽風。沒有目標，只有當下。"
  },
  {
    time: "15:30",
    activity: "賦歸",
    feeling: "帶走安靜，帶著它回到日常。",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    desc: "一天的旅程在夕陽餘暉中輕輕收尾。你不需要變成另一個人，只是更接近自己。"
  }
];

const includes = [
  "專業引導老師全程帶領",
  "活動行政費",
  "旅遊平安保險"
];

function ScheduleCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 md:gap-0 items-stretch min-h-[420px] overflow-hidden rounded-2xl shadow-md`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.activity}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
        {/* Time badge on image */}
        <div className="absolute bottom-4 left-4 md:hidden">
          <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/30 tracking-wider">
            {item.time}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-12 py-10">
        {/* Vertical time indicator — desktop */}
        <span className="hidden md:block text-emerald-300 text-xs tracking-[0.3em] font-light mb-3 uppercase">
          {item.time}
        </span>

        <motion.h3
          className="text-2xl md:text-3xl font-light text-stone-800 mb-3 tracking-wide"
          animate={{ color: hovered ? '#065f46' : '#292524' }}
          transition={{ duration: 0.3 }}
        >
          {item.activity}
        </motion.h3>

        {/* Feeling phrase */}
        <motion.p
          className="text-base md:text-lg text-emerald-700 font-light italic mb-5 border-l-2 border-emerald-300 pl-4"
          animate={{ opacity: hovered ? 1 : 0.75, x: hovered ? 4 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {item.feeling}
        </motion.p>

        <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">
          {item.desc}
        </p>

        {/* Hover hint line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-200"
          animate={{ width: hovered ? '100%' : '0%' }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}

export default function OneDayRetreat() {
  return (
    <div className="min-h-screen bg-[#f5f0ea]">
      <SEOHead
        title="一日放空篇"
        description="給忙碌都市人的一天。森林健行、站樁、正念練習，讓身心在自然中真正放鬆。"
        image="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80"
      />

      {/* ── Hero ── */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-stone-900/30 to-[#f5f0ea]" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-2xl mx-auto pb-24 md:pb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <motion.p
            className="text-amber-100/70 tracking-[0.5em] text-xs mb-5 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Day Retreat
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wider mb-6 drop-shadow-sm">
            一日放空篇
          </h1>
          <p className="text-stone-200/80 text-lg md:text-xl font-light tracking-widest leading-loose">
            給自己這一天。<br />
            <span className="text-base text-stone-300/70">什麼都不用做，只需要出現。</span>
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="w-px h-14 bg-gradient-to-b from-white/0 via-white/50 to-white/0 mx-auto" />
        </motion.div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-12 px-6 bg-white/70 backdrop-blur-sm border-y border-stone-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Clock, label: "時長", value: "約 8 小時" },
            { icon: Users, label: "人數", value: "6–12 人" },
            { icon: MapPin, label: "地點", value: "台北近郊山區" },
            { icon: Calendar, label: "梯次", value: "每月開團" }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <item.icon className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
              <p className="text-xs text-stone-400 tracking-wider mb-1">{item.label}</p>
              <p className="font-medium text-stone-800 text-sm">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Opening Letter ── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-xl mx-auto space-y-8 text-center">
          {[
            "「一日放空篇」是為忙碌的你設計的輕旅程。",
            "不需要任何準備，\n不需要期待什麼改變。",
            "只是走進山林，走進自己。"
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`whitespace-pre-line font-light leading-loose tracking-wide ${
                i === 0 ? 'text-xl text-stone-800' :
                i === 2 ? 'text-lg text-emerald-800 italic' :
                'text-base text-stone-500'
              }`}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ── Scrolling Narrative Schedule ── */}
      <section className="py-8 px-6 pb-24">
        <motion.div
          className="max-w-xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-stone-400 text-xs tracking-[0.4em] uppercase mb-3">The Journey</p>
          <h2 className="text-3xl font-light text-stone-800 tracking-wide">這一天，我們一起走</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6 md:space-y-10">
          {scheduleItems.map((item, index) => (
            <ScheduleCard key={item.time} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* ── Includes + CTA ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-stone-400 text-xs tracking-[0.4em] uppercase mb-4">Includes</p>
            <h2 className="text-3xl font-light text-stone-800 mb-8">費用包含</h2>
            <ul className="space-y-4">
              {includes.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-stone-600 font-light">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-8 text-stone-400 text-sm font-light">* 交通費用請自理，我們會提供詳細的交通指引</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-3xl p-10 text-white overflow-hidden"
          >
            {/* Ambient circle */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-600/20 blur-3xl pointer-events-none" />

            <p className="text-emerald-300/70 text-xs tracking-[0.4em] uppercase mb-2">費用</p>
            <p className="text-5xl font-light mb-1">
              NT$ 1,200
              <span className="text-lg text-emerald-300 ml-1">/人</span>
            </p>
            <p className="text-emerald-200/60 text-sm font-light mb-8">含稅費及保險</p>

            <div className="mb-8">
              <p className="text-emerald-300/70 text-xs tracking-widest uppercase mb-2">近期場次</p>
              <p className="text-white font-light tracking-wide">5/1（五）｜5/29（五）</p>
            </div>

            <a
              href="https://forms.gle/KCYzFjRnw8CuoYKT6"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full py-4 bg-white text-emerald-900 rounded-2xl hover:bg-amber-50 transition-all duration-300 font-medium tracking-wider"
            >
              給自己這一天
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80')" }}
        />
        <motion.div
          className="relative z-10 max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-2xl md:text-3xl font-light text-stone-700 leading-loose tracking-wide">
            你值得一個<br />
            <span className="text-emerald-700">好好呼吸的日子。</span>
          </p>
        </motion.div>
      </section>
    </div>
  );
}