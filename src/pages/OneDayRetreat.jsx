import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CORE_ITEMS = ['10:30', '13:30'];

const schedule = [
  {
    time: "09:00",
    activity: "捷運劍潭站集合",
    note: "輕裝出發，帶上此刻的自己就夠了",
    isCore: false,
  },
  {
    time: "10:00",
    activity: "開場引導",
    note: "緩緩進入今天的節奏",
    isCore: false,
  },
  {
    time: "10:30",
    activity: "森林健行 · 站樁體驗",
    note: "踩著樹根與泥土，感受腳底傳來的大地重量。走得慢一點，聽一聽風在說什麼。",
    isCore: true,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
    imageAlt: "陽光穿透樹冠灑落的森林小徑",
  },
  {
    time: "12:00",
    activity: "午餐休憩",
    note: "品味原型食物，讓身體好好被滋養",
    isCore: false,
  },
  {
    time: "13:30",
    activity: "放空練習",
    note: "不需要做什麼，只是靜靜地躺著、坐著、呼吸。讓思緒像雲一樣飄過，不追、不抓。",
    isCore: true,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    imageAlt: "開闊天空與遠山",
  },
  {
    time: "15:30",
    activity: "賦歸",
    note: "帶著今天的輕盈，回到生活裡",
    isCore: false,
  },
];

const includes = [
  "專業引導老師全程帶領",
  "活動行政費",
  "旅遊平安保險"
];

function ScheduleItem({ item, index }) {
  const [hovered, setHovered] = useState(false);

  if (item.isCore) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4"
      >
        {/* Core block — large format */}
        <div
          className={`relative rounded-2xl overflow-hidden transition-all duration-500 cursor-default ${
            hovered ? 'shadow-2xl' : 'shadow-md'
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Scene image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <motion.img
              src={item.image}
              alt={item.imageAlt}
              className="w-full h-full object-cover"
              animate={{ scale: hovered ? 1.04 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />
            {/* Time badge */}
            <div className="absolute top-5 left-5">
              <span className="text-emerald-300 font-mono text-sm tracking-widest bg-stone-900/50 backdrop-blur-sm px-3 py-1 rounded-full">
                {item.time}
              </span>
            </div>
          </div>

          {/* Text overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h3 className="text-white text-2xl md:text-3xl font-light tracking-wide mb-2">
              {item.activity}
            </h3>
            <motion.p
              className="text-stone-300 font-light leading-relaxed text-sm md:text-base"
              animate={{ opacity: hovered ? 1 : 0.75 }}
              transition={{ duration: 0.3 }}
            >
              {item.note}
            </motion.p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-start gap-5 py-5 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left line + dot */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <motion.div
          className="w-2.5 h-2.5 rounded-full border-2 border-emerald-400 bg-stone-50 transition-all duration-300"
          animate={{ backgroundColor: hovered ? '#34d399' : '#fafaf9', scale: hovered ? 1.3 : 1 }}
        />
        <div className="w-px flex-1 bg-emerald-200 mt-1 min-h-[2.5rem]" />
      </div>

      <div className="pb-4">
        <span className="text-emerald-700 font-mono text-xs tracking-widest">{item.time}</span>
        <h4 className={`font-light text-stone-800 mt-0.5 transition-colors duration-200 ${hovered ? 'text-emerald-800' : ''}`}>
          {item.activity}
        </h4>
        {item.note && (
          <p className="text-stone-400 text-sm font-light mt-1 leading-relaxed">{item.note}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function OneDayRetreat() {
  return (
    <div className="min-h-screen bg-[#f7f4ef]">

      {/* ── 1. HERO ── */}
      <section className="relative h-screen flex items-end justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-stone-900/30 to-stone-900/75" />
        </div>

        <motion.div
          className="relative z-10 px-8 md:px-16 pb-16 md:pb-24 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
            <Sun className="w-4 h-4 text-amber-200" />
            <span className="text-white/90 text-sm tracking-wider">ONE DAY RETREAT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wide mb-4 leading-tight">
            一日放空篇
          </h1>
          <p className="text-xl md:text-2xl text-stone-200/80 font-light tracking-wide">
            在自然中深呼吸，讓身心回歸平靜
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 right-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* ── 2. ANCHOR QUOTE ── */}
      <section className="py-20 md:py-28 px-6 bg-[#f7f4ef]">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-8 h-px bg-emerald-400 mx-auto mb-10" />
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-700 leading-relaxed tracking-wide">
            這不是一場需要努力的課程，
            <br className="hidden md:block" />
            而是一段<span className="text-emerald-700">允許自己放鬆</span>的時光。
          </p>
          <p className="mt-8 text-stone-400 font-light leading-loose text-base md:text-lg">
            你可以只是單純地走路、單純地呼吸、單純地存在。
          </p>
          <div className="w-8 h-px bg-emerald-400 mx-auto mt-10" />
        </motion.div>
      </section>

      {/* ── 2.5 NARRATIVE INTRO ── */}
      <section className="py-12 md:py-20 px-6 bg-[#f7f4ef]">
        <div className="max-w-xl mx-auto space-y-16">

          {/* Line 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-stone-500 font-light leading-loose text-base md:text-lg">
              「一日放空篇」是為忙碌的都市人設計的輕旅程。<br />
              在這一天裡，我們將暫時放下手機、放下工作、放下煩惱，<br />
              全然地投入大自然的懷抱。
            </p>
          </motion.div>

          {/* Three pillars — staggered */}
          <div className="space-y-10">
            {[
              { cue: "透過輕度的森林健行", body: "我們將慢慢地喚醒身體的感知——腳底的泥土、掌心的樹皮、耳邊的鳥鳴。" },
              { cue: "透過正念呼吸練習", body: "我們將學習如何讓心安定下來，不被思緒帶著跑。" },
              { cue: "透過品味健康的原型食物", body: "我們將重新體會「吃」的美好，讓身體好好被滋養。" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 group"
              >
                <div className="flex flex-col items-center pt-2 flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform duration-300" />
                  <div className="w-px flex-1 bg-emerald-100 mt-2" />
                </div>
                <div>
                  <p className="text-emerald-700 font-light text-sm tracking-wide mb-1">{item.cue}</p>
                  <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. NARRATIVE TIMELINE ── */}
      <section className="py-16 px-6 md:px-12 bg-[#f7f4ef]">
        <div className="max-w-2xl mx-auto">
          <motion.p
            className="text-emerald-700 text-xs tracking-[0.3em] uppercase mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            行程安排
          </motion.p>

          <div>
            {schedule.map((item, index) => (
              <ScheduleItem key={item.time} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FEES + SPECS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left: includes + specs */}
            <div>
              <h2 className="text-2xl font-light text-stone-800 mb-8">費用包含</h2>
              <ul className="space-y-4 mb-10">
                {includes.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-stone-600 font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-stone-400 text-sm font-light mb-10">
                * 交通費用請自理，我們會提供詳細的交通指引
              </p>

              {/* Specs moved here */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: "時長", value: "約 8 小時" },
                  { icon: Users, label: "人數", value: "6–12 人" },
                  { icon: MapPin, label: "地點", value: "台北近郊山區" },
                  { icon: Calendar, label: "梯次", value: "每月開團" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-stone-400">{label}</p>
                      <p className="text-sm font-medium text-stone-700">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: price card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-2xl p-8 text-white shadow-xl"
            >
              <p className="text-emerald-300 text-xs tracking-widest mb-2 uppercase">費用</p>
              <p className="text-5xl font-light mb-1">NT$ 1,200</p>
              <p className="text-emerald-200 text-sm mb-6">/ 人</p>
              <div className="mb-6">
                <p className="text-emerald-300 text-xs tracking-widest uppercase mb-2">近期場次</p>
                <p className="text-white font-light">5/1（五）｜5/29（五）</p>
              </div>
              <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-white text-emerald-800 hover:bg-amber-50 py-6 rounded-xl font-medium tracking-wider">
                  <span className="flex items-center gap-2">
                    立即報名
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}