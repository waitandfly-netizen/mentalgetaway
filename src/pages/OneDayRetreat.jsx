import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

/* ---------- data ---------- */
const schedule = [
  { time: "09:00", activity: "捷運劍潭站集合", note: "在城市的邊界，我們在此相遇" },
  { time: "10:00", activity: "開場引導", note: "放下手機，讓身體開始感受今天" },
  { time: "10:30", activity: "森林健行 · 站樁體驗", note: "踩在土地上，感受每一步的重量" },
  { time: "12:00", activity: "午餐休憩", note: "好好吃一頓，慢慢的，什麼都不想" },
  { time: "13:30", activity: "放空練習", note: "允許自己什麼都不做" },
  { time: "15:30", activity: "賦歸", note: "帶著輕盈，重新走回生活裡" },
];

const includes = [
  "專業引導老師全程帶領",
  "活動行政費",
  "旅遊平安保險",
];

/* ---------- helpers ---------- */
function FadeIn({ children, className = '', delay = 0, fromY = 40 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: fromY }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Chapter: full-screen scene ---------- */
function Chapter({ image, overlay = 'bg-stone-900/50', children }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}

/* ---------- main component ---------- */
export default function OneDayRetreat() {
  return (
    <div className="bg-stone-900">

      {/* ── 1. HERO ────────────────────────────────────── */}
      <Chapter
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
        overlay="bg-gradient-to-b from-stone-900/60 via-stone-900/30 to-stone-900/80"
      >
        <div className="text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
              <Sun className="w-4 h-4 text-amber-200" />
              <span className="text-white/90 text-xs tracking-[0.3em] uppercase">One Day Retreat</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light text-white tracking-wider mb-6">
              一日放空篇
            </h1>
            <p className="text-xl text-stone-200/80 font-light tracking-widest">
              在自然中深呼吸，讓身心回歸平靜
            </p>
          </motion.div>

          {/* scroll hint */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <div className="w-px h-14 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
          </motion.div>
        </div>
      </Chapter>

      {/* ── 2. OPENING LETTER ──────────────────────────── */}
      <section className="relative bg-[#1a1a18] py-32 px-6">
        <div className="max-w-xl mx-auto space-y-14 text-center">
          {[
            { text: "給每一個，偷偷有點累的你。", size: "text-2xl md:text-3xl text-stone-100 font-light" },
            { text: "「一日放空篇」是為忙碌的都市人設計的輕旅程。\n在這一天裡，我們將暫時放下手機、放下工作、放下煩惱，\n全然地投入大自然的懷抱。", size: "text-base md:text-lg text-stone-400 font-light leading-loose" },
            { text: "這不是一場需要努力的課程，\n而是一段允許自己放鬆的時光。", size: "text-lg md:text-xl text-stone-300 font-light leading-loose" },
            { text: "你可以只是單純地走路、\n單純地呼吸、單純地存在。", size: "text-xl md:text-2xl text-stone-200 font-light leading-loose" },
          ].map(({ text, size }, i) => (
            <FadeIn key={i} delay={0} fromY={30}>
              <p className={`whitespace-pre-line ${size}`}>{text}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── 3. FOREST SCENE + DETAILS ──────────────────── */}
      <Chapter
        image="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
        overlay="bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent"
      >
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-amber-200/80 text-xs tracking-[0.4em] uppercase mb-4">The Journey</p>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide leading-tight mb-8">
              走進山林，<br />讓感官甦醒
            </h2>
            <p className="text-stone-300 font-light leading-loose mb-8">
              透過輕度的森林健行，我們將慢慢地喚醒身體的感知；<br />
              透過正念呼吸練習，讓心安定下來；<br />
              透過品味健康的原型食物，重新體會「吃」的美好。
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Clock, label: "時長", value: "約 8 小時" },
                { icon: Users, label: "人數", value: "6–12 人" },
                { icon: MapPin, label: "地點", value: "台北近郊山區" },
                { icon: Calendar, label: "梯次", value: "每月開團" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-stone-400 text-xs">{label}</p>
                    <p className="text-white font-light">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <div /> {/* spacer for right side */}
        </div>
      </Chapter>

      {/* ── 4. SCHEDULE — scrolling timeline ──────────── */}
      <section className="relative bg-[#111210] py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn className="text-center mb-20">
            <p className="text-emerald-400/70 text-xs tracking-[0.4em] uppercase mb-3">Schedule</p>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide">一日行程</h2>
          </FadeIn>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-emerald-900" />

            <div className="space-y-0">
              {schedule.map((item, i) => (
                <FadeIn key={item.time} delay={i * 0.06} fromY={24}>
                  <div className="relative flex gap-8 pb-16 last:pb-0">
                    {/* dot */}
                    <div className="relative z-10 flex-shrink-0 w-12 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-emerald-900 mt-1" />
                    </div>
                    {/* content */}
                    <div className="flex-1 -mt-1">
                      <span className="text-emerald-400 text-xs font-medium tracking-widest">{item.time}</span>
                      <h3 className="text-white text-xl font-light mt-1 mb-2">{item.activity}</h3>
                      <p className="text-stone-500 font-light text-sm leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SUNSET SCENE ───────────────────────────── */}
      <Chapter
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        overlay="bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent"
      >
        <div className="max-w-xl mx-auto px-6 py-24 text-center">
          <FadeIn>
            <p className="text-stone-300/70 text-sm font-light leading-loose">
              當身體真實的需要被看見，<br />
              心，也會慢慢鬆開。<br /><br />
              那些一直撐著的、忙著的、來不及感受的，<br />
              也許會一點一點，重新回到平衡。
            </p>
          </FadeIn>
        </div>
      </Chapter>

      {/* ── 6. INCLUDES + PRICING ─────────────────────── */}
      <section className="relative bg-[#1a1a18] py-32 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* includes */}
          <FadeIn>
            <p className="text-emerald-400/70 text-xs tracking-[0.4em] uppercase mb-6">Included</p>
            <h2 className="text-3xl font-light text-white mb-10">費用包含</h2>
            <ul className="space-y-5">
              {includes.map((item, i) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-900/60 border border-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-stone-300 font-light">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-stone-600 text-xs leading-relaxed">
              * 交通費用請自理，我們會提供詳細的交通指引
            </p>
          </FadeIn>

          {/* pricing card */}
          <FadeIn delay={0.15}>
            <div className="bg-gradient-to-br from-emerald-900/60 to-emerald-950/80 border border-emerald-800/40 rounded-3xl p-10 text-white">
              <p className="text-emerald-400/80 text-xs tracking-widest mb-3">參加費用</p>
              <p className="text-5xl font-light mb-2">NT$ 1,200</p>
              <p className="text-emerald-300/60 text-sm mb-8">/ 每人</p>

              <div className="border-t border-emerald-800/40 pt-6 mb-8">
                <p className="text-emerald-400/70 text-xs tracking-widest mb-3">近期場次</p>
                <p className="text-stone-200 font-light">5/1（五）｜5/29（五）</p>
              </div>

              <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-white text-emerald-900 hover:bg-amber-50 py-6 rounded-2xl text-base font-medium tracking-wider">
                  立即報名
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 7. CLOSING CTA ────────────────────────────── */}
      <section className="bg-emerald-950 py-24 px-6 text-center">
        <FadeIn>
          <p className="text-emerald-200/60 text-sm font-light leading-loose mb-6">
            願這段旅程，陪你慢下來。<br />
            讓安定、寧靜與自在，慢慢回到生活裡。
          </p>
          <Link
            to={createPageUrl('Programs')}
            className="inline-flex items-center gap-2 text-stone-400 text-sm hover:text-white transition-colors"
          >
            ← 返回所有旅程
          </Link>
        </FadeIn>
      </section>

    </div>
  );
}