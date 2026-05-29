import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const schedule = [
  { time: "09:00", activity: "捷運劍潭站集合", note: "輕裝出發，帶上此刻的自己就夠了", isCore: false },
  { time: "10:00", activity: "開場引導", note: "緩緩進入今天的節奏", isCore: false },
  {
    time: "10:30", activity: "森林健行 · 站樁體驗",
    note: "踩著樹根與泥土，感受腳底傳來的大地重量。走得慢一點，聽一聽風在說什麼。",
    isCore: true,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
    imageAlt: "陽光穿透樹冠灑落的森林小徑",
  },
  { time: "12:00", activity: "午餐休憩", note: "品味原型食物，讓身體好好被滋養", isCore: false },
  {
    time: "13:30", activity: "放空練習",
    note: "不需要做什麼，只是靜靜地躺著、坐著、呼吸。讓思緒像雲一樣飄過，不追、不抓。",
    isCore: true,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    imageAlt: "開闊天空與遠山",
  },
  { time: "15:30", activity: "賦歸", note: "帶著今天的輕盈，回到生活裡", isCore: false },
];

const includes = ["專業引導老師全程帶領", "活動行政費", "旅遊平安保險"];

const pillars = [
  { cue: "透過輕度的森林健行", body: "我們將慢慢地喚醒身體的感知——腳底的泥土、掌心的樹皮、耳邊的鳥鳴。" },
  { cue: "透過正念呼吸練習", body: "我們將學習如何讓心安定下來，不被思緒帶著跑。" },
  { cue: "透過品味健康的原型食物", body: "我們將重新體會「吃」的美好，讓身體好好被滋養。" },
];

const specs = [
  { icon: Clock, label: "時長", value: "約 8 小時" },
  { icon: Users, label: "人數", value: "6–12 人" },
  { icon: MapPin, label: "地點", value: "台北近郊山區" },
  { icon: Calendar, label: "梯次", value: "每月開團" },
];

function CoreBlock({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl overflow-hidden cursor-default transition-shadow duration-500 ${hovered ? 'shadow-2xl' : 'shadow-md'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-56 md:h-80 overflow-hidden">
        <motion.img
          src={item.image} alt={item.imageAlt}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-emerald-300 font-mono text-xs tracking-widest bg-stone-900/50 backdrop-blur-sm px-3 py-1 rounded-full">
            {item.time}
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
        <h3 className="text-white text-xl md:text-2xl font-light tracking-wide mb-1.5">{item.activity}</h3>
        <motion.p
          className="text-stone-300 font-light leading-relaxed text-sm"
          animate={{ opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          {item.note}
        </motion.p>
      </div>
    </motion.div>
  );
}

function SimpleBlock({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="flex items-start gap-4 py-3 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col items-center flex-shrink-0 pt-1.5">
        <motion.div
          className="w-2 h-2 rounded-full border-2 border-emerald-400"
          animate={{ backgroundColor: hovered ? '#34d399' : 'transparent', scale: hovered ? 1.3 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <div className="w-px flex-1 bg-emerald-100 mt-1 min-h-[1.8rem]" />
      </div>
      <div>
        <span className="text-emerald-700 font-mono text-xs tracking-widest">{item.time}</span>
        <h4 className={`font-light text-stone-800 mt-0.5 text-base transition-colors duration-200 ${hovered ? 'text-emerald-800' : ''}`}>
          {item.activity}
        </h4>
        {item.note && <p className="text-stone-400 text-sm font-light mt-1 leading-relaxed">{item.note}</p>}
      </div>
    </motion.div>
  );
}

export default function OneDayRetreat() {
  return (
    <div className="min-h-screen bg-[#f7f4ef]">

      {/* HERO */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-stone-900/25 to-stone-900/80" />
        </div>
        <motion.div
          className="relative z-10 px-8 md:px-16 pb-14 md:pb-20 max-w-3xl"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-5">
            <Sun className="w-3.5 h-3.5 text-amber-200" />
            <span className="text-white/90 text-xs tracking-wider">ONE DAY RETREAT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wide mb-3 leading-tight">一日放空篇</h1>
          <p className="text-lg md:text-2xl text-stone-200/80 font-light tracking-wide">在自然中深呼吸，讓身心回歸平靜</p>
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-10 flex flex-col items-center"
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* ANCHOR QUOTE */}
      <section className="py-16 md:py-20 px-6 bg-[#f7f4ef]">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-6 h-px bg-emerald-400 mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-light text-stone-700 leading-relaxed tracking-wide">
            這不是一場需要努力的課程，<br className="hidden md:block" />
            而是一段<span className="text-emerald-700">允許自己放鬆</span>的時光。
          </p>
          <p className="mt-6 text-stone-400 font-light leading-loose text-base">
            你可以只是單純地走路、單純地呼吸、單純地存在。
          </p>
          <div className="w-6 h-px bg-emerald-400 mx-auto mt-8" />
        </motion.div>
      </section>

      {/* NARRATIVE INTRO */}
      <section className="pb-10 px-6 bg-[#f7f4ef]">
        <div className="max-w-xl mx-auto space-y-10">
          <motion.p
            className="text-stone-500 font-light leading-loose text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9 }}
          >
            「一日放空篇」是為忙碌的都市人設計的輕旅程。在這一天裡，我們將暫時放下手機、放下工作、放下煩惱，全然地投入大自然的懷抱。
          </motion.p>

          <div className="space-y-6">
            {pillars.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 group"
              >
                <div className="flex flex-col items-center pt-2 flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform duration-300" />
                  <div className="w-px flex-1 bg-emerald-100 mt-1.5" />
                </div>
                <div>
                  <p className="text-emerald-700 text-sm tracking-wide font-light mb-1">{item.cue}</p>
                  <p className="text-stone-500 font-light leading-relaxed text-base">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-10 px-6 bg-[#f7f4ef]">
        <div className="max-w-xl mx-auto">
          <motion.p
            className="text-emerald-700 text-xs tracking-[0.3em] uppercase mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            行程安排
          </motion.p>
          <div>
            {schedule.map((item) =>
              item.isCore
                ? <CoreBlock key={item.time} item={item} />
                : <SimpleBlock key={item.time} item={item} />
            )}
          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            <div>
              <h2 className="text-xl font-light text-stone-800 mb-6">費用包含</h2>
              <ul className="space-y-3 mb-7">
                {includes.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-stone-600 font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-stone-400 text-sm font-light mb-8">* 交通費用請自理，我們會提供詳細的交通指引</p>

              <div className="grid grid-cols-2 gap-3">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-stone-400">{label}</p>
                      <p className="text-base font-medium text-stone-700">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-2xl p-7 text-white shadow-xl"
            >
              <p className="text-emerald-300 text-xs tracking-widest mb-1.5 uppercase">費用</p>
              <p className="text-4xl font-light mb-0.5">NT$ 1,200</p>
              <p className="text-emerald-200 text-sm mb-5">/ 人</p>
              <div className="mb-5">
                <p className="text-emerald-300 text-xs tracking-widest uppercase mb-1.5">近期場次</p>
                <p className="text-white font-light">5/1（五）｜5/29（五）</p>
              </div>
              <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-white text-emerald-800 hover:bg-amber-50 py-5 rounded-xl font-medium tracking-wider">
                  <span className="flex items-center gap-2">
                    立即報名 <ArrowRight className="w-4 h-4" />
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