import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar } from 'lucide-react';

const schedule = [
  { time: "09:00", activity: "捷運劍潭站集合", desc: "在熟悉的城市出口，開始一段不同的旅程" },
  { time: "10:00", activity: "開場引導", desc: "放下手機，讓心慢慢靜下來" },
  { time: "10:30", activity: "森林健行 · 站樁體驗", desc: "用雙腳感受土地，用身體感受森林的氣息" },
  { time: "12:00", activity: "午餐休憩", desc: "品嚐原型食物，重新體會「吃」的美好" },
  { time: "13:30", activity: "放空練習", desc: "允許自己什麼都不做，只是存在" },
  { time: "15:30", activity: "賦歸", desc: "帶著一份輕盈，回到日常" },
];

const includes = [
  "專業引導老師全程帶領",
  "活動行政費",
  "旅遊平安保險",
];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    alt: "開闊的山頂天空",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80",
    alt: "森林健行小徑",
  },
  {
    src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1200&q=80",
    alt: "山中靜謐時光",
  },
];

function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80"
          alt="健行背影"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-stone-900/30 to-stone-900/70" />
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        style={{ opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Sun className="w-4 h-4 text-amber-200" />
          <span className="text-white/90 text-xs tracking-[0.3em] uppercase">One Day Retreat</span>
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-light text-white tracking-wider mb-6 drop-shadow-sm">
          一日放空篇
        </h1>
        <motion.p
          className="text-stone-200/85 text-lg md:text-xl font-light tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          在自然中深呼吸，讓身心回歸平靜
        </motion.p>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <div className="w-px h-14 bg-gradient-to-b from-white/0 via-white/60 to-white/0 mx-auto" />
      </motion.div>
    </section>
  );
}

function QuickInfo() {
  const items = [
    { icon: Clock, label: "時長", value: "約 8 小時" },
    { icon: Users, label: "人數", value: "6–12 人" },
    { icon: MapPin, label: "地點", value: "台北近郊山區" },
    { icon: Calendar, label: "梯次", value: "每月開團" },
  ];
  return (
    <section className="py-10 px-6 bg-white/90 backdrop-blur-md border-b border-stone-100 sticky top-0 z-40 shadow-sm">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="w-9 h-9 rounded-full bg-emerald-50 group-hover:bg-emerald-100 transition-colors flex items-center justify-center flex-shrink-0">
              <item.icon className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-stone-400">{item.label}</p>
              <p className="text-sm font-medium text-stone-800">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function NarrativeBlock({ children, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-xl ${align === "right" ? "ml-auto text-right" : align === "center" ? "mx-auto text-center" : ""}`}
    >
      {children}
    </motion.div>
  );
}

function FullBleedPhoto({ src, alt, caption }) {
  return (
    <motion.div
      className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden rounded-none md:rounded-2xl"
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
      {caption && (
        <p className="absolute bottom-6 left-6 text-white/70 text-sm font-light tracking-wider">{caption}</p>
      )}
    </motion.div>
  );
}

export default function OneDayRetreat() {
  return (
    <div className="min-h-screen bg-[#f5f0ea]">
      <ParallaxHero />
      <QuickInfo />

      {/* Act 1 — 召喚 */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <NarrativeBlock>
            <p className="text-emerald-700 text-xs tracking-[0.35em] uppercase mb-4">這一天，只屬於你</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 leading-snug mb-6">
              暫時放下<br />一切需要被完成的事
            </h2>
            <p className="text-stone-500 font-light leading-loose text-base">
              「一日放空篇」是為忙碌的都市人設計的輕旅程。
              在這一天裡，我們將暫時放下手機、放下工作、放下煩惱，
              全然地投入大自然的懷抱。
            </p>
          </NarrativeBlock>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src={photos[1].src}
              alt={photos[1].alt}
              className="w-full h-80 md:h-[420px] object-cover rounded-2xl shadow-md"
            />
            <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-emerald-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Full bleed — 開闊天空 */}
      <div className="px-0 md:px-12 py-4">
        <FullBleedPhoto
          src={photos[0].src}
          alt={photos[0].alt}
          caption="站在山頂，讓思緒跟著雲飄走"
        />
      </div>

      {/* Act 2 — 旅程描述 */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src={photos[2].src}
              alt={photos[2].alt}
              className="w-full h-80 md:h-[420px] object-cover rounded-2xl shadow-md"
            />
          </motion.div>

          <NarrativeBlock align="right">
            <p className="text-emerald-700 text-xs tracking-[0.35em] uppercase mb-4">身體先鬆，心才會跟著鬆</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 leading-snug mb-6">
              走路、呼吸、<br />單純地存在
            </h2>
            <p className="text-stone-500 font-light leading-loose text-base">
              透過輕度的森林健行，慢慢喚醒身體的感知；
              透過正念呼吸練習，讓心安定下來；
              透過品味健康的原型食物，重新體會「吃」的美好。
            </p>
            <p className="text-stone-500 font-light leading-loose text-base mt-4">
              這不是一場需要努力的課程，而是一段允許自己放鬆的時光。
            </p>
          </NarrativeBlock>
        </div>
      </section>

      {/* Act 3 — 行程時間線 */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <NarrativeBlock align="center">
            <p className="text-emerald-700 text-xs tracking-[0.35em] uppercase mb-3">一天的節奏</p>
            <h2 className="text-3xl font-light text-stone-800 mb-16">行程安排</h2>
          </NarrativeBlock>

          <div className="relative pl-8 border-l-2 border-emerald-100 space-y-0">
            {schedule.map((item, i) => (
              <motion.div
                key={item.time}
                className="relative pb-10 group cursor-default"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
              >
                {/* dot */}
                <div className="absolute -left-[1.15rem] top-1 w-4 h-4 rounded-full bg-white border-2 border-emerald-300 group-hover:bg-emerald-400 group-hover:border-emerald-400 transition-all duration-300" />
                <div className="pl-6">
                  <span className="text-emerald-600 text-xs tracking-widest font-medium">{item.time}</span>
                  <h3 className="text-stone-800 font-medium text-lg mt-0.5 group-hover:text-emerald-800 transition-colors duration-300">
                    {item.activity}
                  </h3>
                  <p className="text-stone-400 text-sm font-light mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Act 4 — 費用 & CTA */}
      <section className="py-28 px-6 bg-[#f5f0ea]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* includes */}
            <NarrativeBlock>
              <p className="text-emerald-700 text-xs tracking-[0.35em] uppercase mb-4">費用包含</p>
              <h2 className="text-3xl font-light text-stone-800 mb-8">我們為你準備好了</h2>
              <ul className="space-y-4">
                {includes.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 group"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 group-hover:bg-emerald-200 flex items-center justify-center transition-colors">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-stone-600 font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-6 text-stone-400 text-xs font-light leading-relaxed">
                * 交通費用請自理，我們會提供詳細的交通指引
              </p>
            </NarrativeBlock>

            {/* pricing + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="bg-emerald-900 rounded-3xl p-10 text-white relative overflow-hidden"
            >
              {/* ambient */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-700/30 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-amber-300/10 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <p className="text-emerald-300 text-xs tracking-[0.3em] uppercase mb-2">費用</p>
                <p className="text-5xl font-light mb-1">
                  NT$ 1,200
                  <span className="text-lg text-emerald-300 ml-1">/人</span>
                </p>

                <div className="mt-6 mb-8 space-y-1">
                  <p className="text-emerald-300 text-xs tracking-widest">近期場次</p>
                  <p className="text-white font-light">5/1（五）｜5/29（五）</p>
                </div>

                <a
                  href="https://forms.gle/KCYzFjRnw8CuoYKT6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full bg-white text-emerald-900 hover:bg-amber-50 py-4 rounded-2xl font-medium tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>給自己這一天</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <p className="text-center text-emerald-400/70 text-xs mt-4 font-light">名額有限，先報先得</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}