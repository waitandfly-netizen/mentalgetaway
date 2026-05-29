import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar, ChevronDown, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";

// ── Parallax image block ──────────────────────────────────────────────────────
function ParallaxImage({ src, height = "60vh", overlay = "from-stone-900/30 to-stone-900/10" }) {
  return (
    <div className={`relative overflow-hidden`} style={{ height }}>
      <motion.div
        className="absolute inset-0 scale-110"
        initial={{ y: 0 }}
        whileInView={{ y: -30 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
    </div>
  );
}

// ── Scroll-reveal paragraph ───────────────────────────────────────────────────
function RevealText({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Expandable detail card ────────────────────────────────────────────────────
function ExpandCard({ time, title, detail }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className={`flex gap-4 items-start rounded-2xl px-6 py-5 border transition-all duration-300
        ${open
          ? 'bg-emerald-50 border-emerald-200 shadow-md'
          : 'bg-white border-stone-100 shadow-sm hover:border-emerald-200 hover:bg-emerald-50/40'
        }`}
      >
        {/* Time badge */}
        <span className={`text-sm font-medium w-14 flex-shrink-0 pt-0.5 transition-colors duration-300
          ${open ? 'text-emerald-700' : 'text-emerald-500 group-hover:text-emerald-700'}`}>
          {time}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <h3 className={`font-medium transition-colors duration-300
              ${open ? 'text-emerald-900' : 'text-stone-800 group-hover:text-emerald-800'}`}>
              {title}
            </h3>
            <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}>
              <Plus className={`w-4 h-4 flex-shrink-0 transition-colors duration-300
                ${open ? 'text-emerald-600' : 'text-stone-300 group-hover:text-emerald-400'}`} />
            </motion.div>
          </div>

          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-stone-500 font-light text-sm mt-3 leading-relaxed pr-2">{detail}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Hover-highlight include item ──────────────────────────────────────────────
function IncludeItem({ item, delay }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ x: 6 }}
      className="flex items-center gap-3 group cursor-default"
    >
      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center
        group-hover:bg-emerald-200 transition-colors duration-200 flex-shrink-0">
        <Check className="w-3.5 h-3.5 text-emerald-600" />
      </div>
      <span className="text-stone-600 group-hover:text-emerald-800 transition-colors duration-200 font-light">
        {item}
      </span>
    </motion.li>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

const schedule = [
  {
    time: "09:00",
    title: "捷運劍潭站集合",
    detail: "在劍潭站 2 號出口集合，導師會親自迎接每位夥伴。建議提前 5 分鐘到達，讓身心從城市的步調中慢慢緩下來。"
  },
  {
    time: "10:00",
    title: "開場引導",
    detail: "在林間空地，透過簡單的呼吸與意識引導，幫助大家從日常的慣性中鬆脫，進入今天旅程的節奏。"
  },
  {
    time: "10:30",
    title: "森林健行・站樁體驗",
    detail: "以緩步的方式走進森林，感受腳踩地面的踏實；站樁讓我們停下來，真正聆聽身體的聲音，不需要任何武術基礎。"
  },
  {
    time: "12:00",
    title: "午餐休憩",
    detail: "享用以原型食物為主的輕食午餐，練習慢慢咀嚼、感受食物的滋味。飯後可在山間自由散步或安靜地坐著。"
  },
  {
    time: "13:30",
    title: "放空練習",
    detail: "這段時間沒有任何「任務」，你可以躺下來看天空、發呆、靜靜地感受此刻。導師會陪伴在旁，提供需要時的引導。"
  },
  {
    time: "15:30",
    title: "賦歸",
    detail: "在短暫的分享圓圈後，帶著今天的感受慢慢回到生活裡。導師會提供一個小小的日常練習，延續旅程的溫度。"
  },
];

const includes = [
  "專業引導老師全程帶領",
  "活動行政費",
  "旅遊平安保險",
];

const SCENE_IMAGES = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=80", // 高山眺望
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80", // 開闊天空高原
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1800&q=80", // 山頂星空感
];

export default function OneDayRetreat() {
  return (
    <div className="min-h-screen bg-[#f5f0ea]">

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 scale-105"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 2.4, ease: "easeOut" }}
          style={{
            backgroundImage: `url('${SCENE_IMAGES[0]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-transparent to-stone-900/70" />

        <motion.div
          className="relative z-10 text-center px-6 pb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-5">
            <Sun className="w-4 h-4 text-amber-200" />
            <span className="text-white/90 text-xs tracking-[0.3em] uppercase">One Day Retreat</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wider mb-5 drop-shadow">
            一日放空篇
          </h1>
          <p className="text-stone-100/80 text-lg md:text-xl font-light tracking-widest">
            在自然中深呼吸，讓身心回歸平靜
          </p>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </section>

      {/* ── QUICK INFO ── */}
      <section className="py-12 px-6 bg-white border-b border-stone-100">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "時長", value: "約 8 小時" },
              { icon: Users, label: "人數", value: "6–12 人" },
              { icon: MapPin, label: "地點", value: "台北近郊山區" },
              { icon: Calendar, label: "梯次", value: "每月開團" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="text-center cursor-default"
              >
                <item.icon className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                <p className="text-xs text-stone-400 mb-1 tracking-wide">{item.label}</p>
                <p className="font-medium text-stone-800 text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHAPTER 1 · 出發前的心情 ── */}
      <section className="py-28 px-6 max-w-2xl mx-auto space-y-10">
        <RevealText>
          <p className="text-xs tracking-[0.35em] text-emerald-600 uppercase mb-4">Chapter 01 · 為什麼需要放空</p>
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 leading-relaxed mb-8">
            城市很忙，<br />你也需要一個出口。
          </h2>
        </RevealText>
        <RevealText delay={0.1}>
          <p className="text-stone-600 font-light leading-loose text-base md:text-lg">
            「一日放空篇」是為忙碌的都市人設計的輕旅程。在這一天裡，我們將暫時放下手機、放下工作、放下煩惱，全然地投入大自然的懷抱。
          </p>
        </RevealText>
        <RevealText delay={0.2}>
          <p className="text-stone-500 font-light leading-loose">
            透過輕度的森林健行，我們將慢慢地喚醒身體的感知；透過正念呼吸練習，我們將學習如何讓心安定下來；透過品味健康的原型食物，我們將重新體會「吃」的美好。
          </p>
        </RevealText>
        <RevealText delay={0.3}>
          <p className="text-stone-500 font-light leading-loose">
            這不是一場需要努力的課程，而是一段允許自己放鬆的時光。你可以只是單純地走路、單純地呼吸、單純地存在。
          </p>
        </RevealText>
      </section>

      {/* ── PARALLAX IMAGE 1 ── */}
      <ParallaxImage
        src={SCENE_IMAGES[1]}
        height="55vh"
        overlay="from-stone-900/10 via-transparent to-stone-900/20"
      />

      {/* ── CHAPTER 2 · 行程安排（expandable） ── */}
      <section className="py-28 px-6 bg-[#f5f0ea]">
        <div className="max-w-2xl mx-auto">
          <RevealText>
            <p className="text-xs tracking-[0.35em] text-emerald-600 uppercase mb-4">Chapter 02 · 一天的節奏</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-3">行程安排</h2>
            <p className="text-stone-400 text-sm font-light mb-12">點擊每個時段，看更多細節 ↓</p>
          </RevealText>

          <div className="space-y-3">
            {schedule.map((item, i) => (
              <ExpandCard key={item.time} time={item.time} title={item.title} detail={item.detail} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX IMAGE 2 ── */}
      <ParallaxImage
        src={SCENE_IMAGES[2]}
        height="50vh"
        overlay="from-stone-900/30 to-stone-900/5"
      />

      {/* ── CHAPTER 3 · 費用與報名 ── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <RevealText>
            <p className="text-xs tracking-[0.35em] text-emerald-600 uppercase mb-4">Chapter 03 · 出發準備</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-14">費用包含與報名</h2>
          </RevealText>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* includes */}
            <RevealText>
              <ul className="space-y-4">
                {includes.map((item, i) => (
                  <IncludeItem key={item} item={item} delay={i * 0.1} />
                ))}
              </ul>
              <p className="mt-8 text-stone-400 text-sm font-light leading-relaxed">
                * 交通費用請自理，我們會提供詳細的交通指引
              </p>
            </RevealText>

            {/* pricing card */}
            <RevealText delay={0.15}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-2xl p-8 text-white"
              >
                <p className="text-emerald-300 text-xs tracking-widest mb-2 uppercase">費用</p>
                <p className="text-5xl font-light mb-1">NT$ 1,200</p>
                <p className="text-emerald-300 text-sm mb-6">/ 人</p>
                <div className="mb-6">
                  <p className="text-emerald-300 text-xs tracking-widest uppercase mb-2">2026 場次</p>
                  <p className="text-white/90 font-light text-sm leading-relaxed">
                    5/1（五）｜5/29（五）
                  </p>
                </div>
                <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-white text-emerald-800 hover:bg-amber-50 py-6 rounded-xl transition-all duration-200 group">
                    <span className="flex items-center gap-2 tracking-wider">
                      立即報名
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </a>
              </motion.div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className="relative overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1800&q=80"
          height="56vh"
          overlay="from-stone-900/50 via-stone-900/30 to-stone-900/50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <RevealText>
            <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-4">Begin Your Journey</p>
            <p className="text-white text-2xl md:text-3xl font-light tracking-wide leading-relaxed">
              準備好讓自己<br />慢下來了嗎？
            </p>
          </RevealText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 border border-white/30 text-white rounded-full backdrop-blur-sm hover:bg-white/25 transition-all duration-300 group"
            >
              <span className="tracking-widest font-light">聯繫我們</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}