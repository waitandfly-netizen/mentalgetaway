import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar, Wind, Leaf, Coffee } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

/* ---------- 資料 ---------- */
const schedule = [
  { time: "09:00", activity: "捷運劍潭站集合", desc: "帶著輕鬆的心情出發，不需要任何準備。", icon: MapPin },
  { time: "10:00", activity: "開場引導", desc: "靜下來，感受此刻的身體與呼吸。", icon: Wind },
  { time: "10:30", activity: "森林健行・站樁體驗", desc: "在林間緩步，讓大地承接你的重量。", icon: Leaf },
  { time: "12:00", activity: "午餐休憩", desc: "品味原型食物，讓味覺慢慢甦醒。", icon: Coffee },
  { time: "13:30", activity: "放空練習", desc: "只是存在。不需做什麼，也不需成為什麼。", icon: Sun },
  { time: "15:30", activity: "賦歸", desc: "帶著一份輕盈，回到你的日常。", icon: ArrowRight },
];

const includes = [
  "專業引導老師全程帶領",
  "活動行政費",
  "旅遊平安保險",
];

/* ---------- 段落敘事文字 ---------- */
const chapters = [
  {
    label: "序章",
    title: "你已經很久\n沒有真正放空了",
    body: "那種感覺，你知道的。\n不是沒有時間，而是即使空著，心也閒不下來。",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80",
    align: "left",
  },
  {
    label: "旅程",
    title: "一天，只是一天",
    body: "帶你走進台北近郊山林。\n讓身體先動起來，讓頭腦慢慢安靜。",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=80",
    align: "right",
  },
  {
    label: "體驗",
    title: "不是課程，\n是一段允許自己的時光",
    body: "輕度森林健行，喚醒感知。\n正念呼吸練習，讓心安定。\n品味原型食物，重新體會吃的美好。",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80",
    align: "left",
  },
];

/* ---------- 子組件 ---------- */
function ChapterBlock({ chapter, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const isRight = chapter.align === "right";

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isRight ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-0 min-h-[80vh]`}
    >
      {/* 圖片 */}
      <motion.div
        className="w-full md:w-1/2 h-[50vh] md:h-[80vh] overflow-hidden"
        initial={{ opacity: 0, x: isRight ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={chapter.image}
          alt={chapter.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>

      {/* 文字 */}
      <motion.div
        className={`w-full md:w-1/2 px-10 md:px-16 py-16 flex flex-col justify-center bg-[#f5f0ea]`}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
      >
        <p className="text-xs tracking-[0.35em] text-emerald-600 uppercase mb-4">{chapter.label}</p>
        <h2 className="text-3xl md:text-4xl font-light text-stone-800 leading-snug whitespace-pre-line mb-6">
          {chapter.title}
        </h2>
        <p className="text-stone-500 font-light leading-loose whitespace-pre-line text-base md:text-lg">
          {chapter.body}
        </p>
      </motion.div>
    </div>
  );
}

function ScheduleRow({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group flex items-start gap-6 p-6 rounded-2xl cursor-default transition-all duration-500 ${
        hovered ? "bg-emerald-800 shadow-xl" : "bg-white"
      }`}
    >
      {/* 時間 */}
      <div className="flex-shrink-0 w-16 text-right">
        <span className={`text-sm font-medium transition-colors duration-500 ${hovered ? "text-emerald-200" : "text-emerald-700"}`}>
          {item.time}
        </span>
      </div>

      {/* 分隔線 */}
      <div className={`flex-shrink-0 mt-1 w-px h-10 transition-colors duration-500 ${hovered ? "bg-emerald-400/40" : "bg-emerald-200"}`} />

      {/* 內容 */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <Icon className={`w-4 h-4 transition-colors duration-500 ${hovered ? "text-amber-300" : "text-emerald-500"}`} />
          <h3 className={`font-medium transition-colors duration-500 ${hovered ? "text-white" : "text-stone-800"}`}>
            {item.activity}
          </h3>
        </div>
        <p className={`text-sm font-light transition-colors duration-500 ${hovered ? "text-emerald-100/80" : "text-stone-400"}`}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ---------- 主頁 ---------- */
export default function OneDayRetreat() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-[#f5f0ea]">
      <SEOHead
        title="一日放空篇 | 心靈假期"
        description="為忙碌的都市人設計的輕旅程，在台北近郊山林中，給自己真正放空的一天。"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
      />

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80"
            alt="一日放空篇"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-[#f5f0ea]" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
            <Sun className="w-4 h-4 text-amber-200" />
            <span className="text-white/90 text-xs tracking-[0.3em] uppercase">One Day Retreat</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wider mb-6 drop-shadow">
            一日放空篇
          </h1>
          <p className="text-stone-200/80 text-lg md:text-xl font-light tracking-widest">
            在自然中深呼吸，讓身心回歸平靜
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="w-px h-14 bg-gradient-to-b from-white/0 via-white/60 to-white/0 mx-auto" />
        </motion.div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-14 px-6 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: "時長", value: "約 8 小時" },
            { icon: Users, label: "人數", value: "6–12 人" },
            { icon: MapPin, label: "地點", value: "台北近郊山區" },
            { icon: Calendar, label: "梯次", value: "每月開團" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="text-center group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-xs text-stone-400 mb-1 tracking-wider">{item.label}</p>
              <p className="font-medium text-stone-800">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 滾動敘事章節 ── */}
      <div>
        {chapters.map((chapter, i) => (
          <ChapterBlock key={i} chapter={chapter} index={i} />
        ))}
      </div>

      {/* ── 行程時間軸 ── */}
      <section className="py-28 px-6 bg-stone-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.35em] text-emerald-600 uppercase mb-3">Schedule</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800">這一天的樣子</h2>
          </motion.div>

          <div className="space-y-3">
            {schedule.map((item, i) => (
              <ScheduleRow key={item.time} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 費用 & 報名 ── */}
      <section className="py-28 px-6 bg-[#f5f0ea]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* 費用包含 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.35em] text-emerald-600 uppercase mb-4">Includes</p>
            <h2 className="text-3xl font-light text-stone-800 mb-8">費用包含</h2>
            <ul className="space-y-4">
              {includes.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-100 group-hover:bg-emerald-200 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Check className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="text-stone-600 font-light">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-8 text-stone-400 text-xs font-light">
              * 交通費用請自理，我們將提供詳細交通指引
            </p>
          </motion.div>

          {/* 報名卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="bg-emerald-900 rounded-3xl p-10 text-white relative overflow-hidden"
          >
            {/* 背景裝飾 */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-emerald-700/30 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-6 w-36 h-36 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <p className="text-emerald-300 text-xs tracking-widest uppercase mb-2">費用</p>
              <p className="text-5xl font-light mb-1">
                NT$ 1,200
                <span className="text-lg text-emerald-300 ml-1">/ 人</span>
              </p>

              <div className="mt-6 mb-8 border-t border-emerald-700/50 pt-6">
                <p className="text-emerald-300 text-xs tracking-wider mb-2">近期場次</p>
                <p className="text-white font-light text-lg">5 / 1（五）｜5 / 29（五）</p>
              </div>

              <a
                href="https://forms.gle/KCYzFjRnw8CuoYKT6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full py-5 bg-white text-emerald-900 rounded-2xl font-medium tracking-widest hover:bg-amber-50 transition-all duration-300 text-base"
              >
                給自己這一天
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}