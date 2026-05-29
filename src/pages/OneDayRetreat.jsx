import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useInView } from 'framer-motion';
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

/* ---------- FadeIn helper ---------- */
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

/* ---------- Full-screen Chapter ---------- */
function Chapter({ image, children, overlayClass = 'bg-white/20' }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}

/* ---------- main ---------- */
export default function OneDayRetreat() {
  return (
    <div className="bg-stone-50">

      {/* ── 1. HERO ── */}
      <Chapter
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
        overlayClass="bg-gradient-to-b from-white/10 via-transparent to-stone-50"
      >
        <div className="text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/60 px-4 py-2 rounded-full mb-8">
              <Sun className="w-4 h-4 text-amber-500" />
              <span className="text-stone-700 text-xs tracking-[0.3em] uppercase">One Day Retreat</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light text-white tracking-wider mb-6 drop-shadow-md">
              一日放空篇
            </h1>
            <p className="text-xl text-white/90 font-light tracking-widest drop-shadow">
              在自然中深呼吸，讓身心回歸平靜
            </p>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <div className="w-px h-14 bg-gradient-to-b from-white/0 via-white/70 to-white/0 mx-auto" />
          </motion.div>
        </div>
      </Chapter>

      {/* ── 2. OPENING LETTER ── */}
      <section className="bg-stone-50 py-32 px-6">
        <div className="max-w-xl mx-auto space-y-14 text-center">
          {[
            { text: "給每一個，偷偷有點累的你。", cls: "text-2xl md:text-3xl text-stone-800 font-light" },
            { text: "「一日放空篇」是為忙碌的都市人設計的輕旅程。\n在這一天裡，我們將暫時放下手機、放下工作、放下煩惱，\n全然地投入大自然的懷抱。", cls: "text-base md:text-lg text-stone-500 font-light leading-loose" },
            { text: "這不是一場需要努力的課程，\n而是一段允許自己放鬆的時光。", cls: "text-lg md:text-xl text-stone-700 font-light leading-loose" },
            { text: "你可以只是單純地走路、\n單純地呼吸、單純地存在。", cls: "text-xl md:text-2xl text-emerald-800 font-light leading-loose" },
          ].map(({ text, cls }, i) => (
            <FadeIn key={i} delay={0} fromY={28}>
              <p className={`whitespace-pre-line ${cls}`}>{text}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── 3. FOREST SCENE + INFO ── */}
      <Chapter
        image="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
        overlayClass="bg-gradient-to-r from-white/70 via-white/30 to-transparent"
      >
        <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-emerald-600/80 text-xs tracking-[0.4em] uppercase mb-4">The Journey</p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 tracking-wide leading-tight mb-8">
              走進山林，<br />讓感官甦醒
            </h2>
            <p className="text-stone-600 font-light leading-loose mb-10">
              透過輕度的森林健行，慢慢地喚醒身體的感知；<br />
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
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-stone-400 text-xs">{label}</p>
                    <p className="text-stone-700 font-light">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Chapter>

      {/* ── 4. SCHEDULE ── */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn className="text-center mb-20">
            <p className="text-emerald-500/80 text-xs tracking-[0.4em] uppercase mb-3">Schedule</p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 tracking-wide">一日行程</h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-[22px] top-0 bottom-0 w-px bg-emerald-100" />
            <div className="space-y-0">
              {schedule.map((item, i) => (
                <FadeIn key={item.time} delay={i * 0.07} fromY={24}>
                  <div className="relative flex gap-8 pb-14 last:pb-0">
                    <div className="relative z-10 flex-shrink-0 w-11 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-white ring-2 ring-emerald-100 mt-1" />
                    </div>
                    <div className="flex-1 -mt-1">
                      <span className="text-emerald-600 text-xs font-medium tracking-widest">{item.time}</span>
                      <h3 className="text-stone-800 text-xl font-light mt-1 mb-1">{item.activity}</h3>
                      <p className="text-stone-400 font-light text-sm leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. MEADOW SCENE ── */}
      <Chapter
        image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80"
        overlayClass="bg-gradient-to-t from-stone-50 via-white/20 to-transparent"
      >
        <div className="max-w-xl mx-auto px-6 py-32 text-center">
          <FadeIn>
            <p className="text-white text-xl md:text-2xl font-light leading-loose drop-shadow-md">
              當身體真實的需要被看見，<br />
              心，也會慢慢鬆開。
            </p>
          </FadeIn>
        </div>
      </Chapter>

      {/* ── 6. INCLUDES + PRICING ── */}
      <section className="bg-stone-50 py-32 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          <FadeIn>
            <p className="text-emerald-500/80 text-xs tracking-[0.4em] uppercase mb-6">Included</p>
            <h2 className="text-3xl font-light text-stone-800 mb-10">費用包含</h2>
            <ul className="space-y-5">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-stone-600 font-light">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-stone-400 text-xs leading-relaxed">
              * 交通費用請自理，我們會提供詳細的交通指引
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-white border border-stone-100 rounded-3xl p-10 shadow-sm">
              <p className="text-emerald-600/70 text-xs tracking-widest mb-3">參加費用</p>
              <p className="text-5xl font-light text-stone-800 mb-1">NT$ 1,200</p>
              <p className="text-stone-400 text-sm mb-8">/ 每人</p>

              <div className="border-t border-stone-100 pt-6 mb-8">
                <p className="text-stone-400 text-xs tracking-widest mb-3">近期場次</p>
                <p className="text-stone-700 font-light">5/1（五）｜5/29（五）</p>
              </div>

              <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-6 rounded-2xl text-base tracking-wider">
                  立即報名
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 7. CLOSING ── */}
      <section className="bg-emerald-50 py-20 px-6 text-center border-t border-emerald-100">
        <FadeIn>
          <p className="text-stone-500 text-sm font-light leading-loose mb-6">
            願這段旅程，陪你慢下來。<br />
            讓安定、寧靜與自在，慢慢回到生活裡。
          </p>
          <Link
            to={createPageUrl('Programs')}
            className="inline-flex items-center gap-2 text-stone-400 text-sm hover:text-emerald-700 transition-colors"
          >
            ← 返回所有旅程
          </Link>
        </FadeIn>
      </section>

    </div>
  );
}