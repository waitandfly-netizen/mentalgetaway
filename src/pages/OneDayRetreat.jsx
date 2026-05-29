import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar } from 'lucide-react';

const scheduleStops = [
  {
    time: "09:00",
    activity: "捷運劍潭站集合",
    feeling: "還帶著昨夜的倦意，\n但腳步已悄悄輕了。",
    image: "https://images.unsplash.com/photo-1527004013197-933b977c7eb0?w=1200&q=80",
    alt: "台北清晨捷運站"
  },
  {
    time: "10:00",
    activity: "開場引導",
    feeling: "先停下來。\n不急，慢慢來。",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    alt: "山林開闊晨光"
  },
  {
    time: "10:30",
    activity: "森林健行 • 站樁體驗",
    feeling: "腳踩在土地上，\n原來地球一直在這裡等你。",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    alt: "健行者的背影走在山徑上"
  },
  {
    time: "12:00",
    activity: "午餐休憩",
    feeling: "食物的味道變得清晰了，\n也許是心靜了。",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
    alt: "清淡質樸的食物"
  },
  {
    time: "13:30",
    activity: "放空練習",
    feeling: "什麼都不做，\n也是一種練習。",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80",
    alt: "一個人靜靜坐在山頂望向遠方"
  },
  {
    time: "15:30",
    activity: "賦歸",
    feeling: "你帶著同一個身體離開，\n卻像是輕了很多。",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80",
    alt: "下山的山路與遠景"
  }
];

function ScheduleCard({ stop, index }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-stretch gap-0 ${isEven ? '' : 'md:flex-row-reverse'} mb-2`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Side */}
      <div className="md:w-1/2 relative overflow-hidden" style={{ minHeight: 320 }}>
        <motion.img
          src={stop.image}
          alt={stop.alt}
          className="w-full h-full object-cover absolute inset-0"
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ minHeight: 320 }}
        />
        <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent to-stone-900/40 transition-opacity duration-500`} />
        {/* Time badge */}
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-emerald-800 text-sm font-medium tracking-wider shadow-sm">
          {stop.time}
        </div>
      </div>

      {/* Text Side */}
      <div className={`md:w-1/2 flex flex-col justify-center px-10 py-14 bg-white relative ${hovered ? 'bg-stone-50' : ''} transition-colors duration-500`}>
        {/* Feeling — the texture of the moment */}
        <motion.p
          className="whitespace-pre-line text-stone-400 font-light text-sm leading-loose tracking-wide mb-6 italic"
          animate={{ opacity: hovered ? 1 : 0.6 }}
          transition={{ duration: 0.4 }}
        >
          {stop.feeling}
        </motion.p>

        <h3 className="text-2xl font-light text-stone-800 tracking-wide">{stop.activity}</h3>

        {/* Hover accent line */}
        <motion.div
          className="h-px bg-emerald-400 mt-6"
          animate={{ width: hovered ? '60px' : '28px' }}
          initial={{ width: '28px' }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}

export default function OneDayRetreat() {
  const includes = [
    "專業引導老師全程帶領",
    "活動行政費",
    "旅遊平安保險"
  ];

  return (
    <div className="min-h-screen bg-[#f5f0ea]">

      {/* Hero — Full Screen */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-stone-900/30 to-[#f5f0ea]" />

        <motion.div
          className="relative z-10 text-center px-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <motion.p
            className="text-amber-100/70 tracking-[0.4em] text-xs mb-5 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Day Retreat
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wider mb-5 drop-shadow-sm">
            一日放空篇
          </h1>
          <p className="text-stone-200/80 text-lg font-light tracking-widest">
            給自己一整天，什麼都不必是。
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="w-px h-14 mx-auto bg-gradient-to-b from-white/0 via-white/60 to-white/0" />
        </motion.div>
      </section>

      {/* Quick Info Strip */}
      <section className="py-10 px-6 bg-white/60 backdrop-blur-sm border-y border-stone-200/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
                transition={{ delay: i * 0.08 }}
              >
                <item.icon className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                <p className="text-xs text-stone-400 mb-1 tracking-wider">{item.label}</p>
                <p className="text-stone-700 font-light">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6 text-stone-600 font-light leading-loose text-base md:text-lg"
        >
          <p>這一天，不是課程，不是任務。</p>
          <p>只是帶著你的身體，<br />回到山裡，重新走一走。</p>
          <p className="text-stone-400 text-sm tracking-wide">在台北近郊的山林中，跟著節奏慢下來。</p>
        </motion.div>
      </section>

      {/* Scrolling Narrative — Schedule */}
      <section className="pb-8">
        <motion.p
          className="text-center text-stone-400 text-xs tracking-[0.4em] uppercase mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          這一天的節奏
        </motion.p>
        <div className="max-w-6xl mx-auto">
          {scheduleStops.map((stop, i) => (
            <ScheduleCard key={stop.time} stop={stop} index={i} />
          ))}
        </div>
      </section>

      {/* What's Included + CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Includes */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <h2 className="text-2xl font-light text-stone-800 mb-8 tracking-wide">費用包含</h2>
              <ul className="space-y-4 mb-6">
                {includes.map((item, i) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-stone-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-400 text-sm font-light">* 交通費用請自理，我們會提供詳細的交通指引</p>
            </motion.div>

            {/* Price + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-2xl p-10 text-white"
            >
              <p className="text-emerald-300/70 text-xs tracking-widest mb-2">費用</p>
              <p className="text-4xl font-light mb-6">NT$ 1,200<span className="text-lg text-emerald-300/70"> /人</span></p>
              <div className="mb-8">
                <p className="text-emerald-300/70 text-xs tracking-widest mb-2">近期場次</p>
                <p className="text-white font-light tracking-wide">5/1（五）｜5/29（五）</p>
              </div>

              <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer" className="block group">
                <motion.div
                  className="w-full bg-white text-emerald-800 rounded-xl py-4 px-6 flex items-center justify-center gap-3 font-light tracking-wider cursor-pointer"
                  whileHover={{ backgroundColor: '#fefce8', scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  給自己這一天
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing image strip */}
      <section className="h-64 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80"
          alt="台灣山林全景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/30 flex items-center justify-center">
          <motion.p
            className="text-white/80 text-lg font-light tracking-[0.3em] italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            你值得這一天。
          </motion.p>
        </div>
      </section>
    </div>
  );
}