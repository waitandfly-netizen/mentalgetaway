import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar, Leaf } from 'lucide-react';

function FadeIn({ children, className = '', delay = 0, fromY = 30 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: fromY }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

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

export default function OneDayRetreat() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=85"
          alt="森林"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white" />
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/80 px-5 py-2 rounded-full mb-6">
            <Sun className="w-4 h-4 text-amber-500" />
            <span className="text-stone-600 text-xs tracking-[0.35em] uppercase">One Day Retreat</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-light text-white tracking-wider drop-shadow-lg mb-4">
            一日放空篇
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light tracking-widest drop-shadow">
            在自然中深呼吸，讓身心回歸平靜
          </p>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-lg mx-auto text-center space-y-10">
          <FadeIn>
            <p className="text-emerald-600 text-xs tracking-[0.4em] uppercase mb-2">A Letter for You</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 leading-snug">
              給每一個，<br />偷偷有點累的你。
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-stone-500 font-light leading-[2] text-base md:text-lg">
              「一日放空篇」是為忙碌的都市人設計的輕旅程。<br />
              在這一天裡，我們暫時放下手機、放下工作，<br />
              全然地投入大自然的懷抱。
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-stone-700 font-light leading-[2] text-lg md:text-xl">
              這不是一場需要努力的課程，<br />
              而是一段允許自己放鬆的時光。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SPLIT: IMAGE LEFT + TEXT RIGHT ── */}
      <section className="py-0 overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[70vh]">
          <FadeIn fromY={0} className="relative min-h-[50vw] md:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=960&q=85"
              alt="森林步道"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </FadeIn>
          <div className="flex items-center bg-stone-50 px-10 md:px-16 py-20">
            <FadeIn>
              <p className="text-emerald-600 text-xs tracking-[0.4em] uppercase mb-5">The Journey</p>
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 leading-snug mb-8">
                走進山林，<br />讓感官甦醒
              </h2>
              <p className="text-stone-500 font-light leading-loose mb-10">
                透過輕度的森林健行，慢慢喚醒身體的感知；<br />
                透過正念呼吸練習，讓心安定下來；<br />
                透過品味原型食物，重新體會「吃」的美好。
              </p>
              <div className="grid grid-cols-2 gap-5">
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
                      <p className="text-stone-700 text-sm font-light">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-emerald-600 text-xs tracking-[0.4em] uppercase mb-3">Schedule</p>
            <h2 className="text-4xl font-light text-stone-800">一日行程</h2>
          </FadeIn>
          <div className="space-y-0 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-emerald-100" />
            {schedule.map((item, i) => (
              <FadeIn key={item.time} delay={i * 0.06} fromY={20}>
                <div className="flex gap-8 pb-10 last:pb-0 relative">
                  <div className="flex-shrink-0 w-10 flex justify-center pt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-50" />
                  </div>
                  <div>
                    <p className="text-emerald-500 text-xs tracking-widest font-medium mb-1">{item.time}</p>
                    <h3 className="text-stone-800 text-lg font-light mb-1">{item.activity}</h3>
                    <p className="text-stone-400 text-sm font-light">{item.note}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL IMAGE QUOTE ── */}
      <section className="relative overflow-hidden" style={{ height: '60vh' }}>
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=85"
          alt="草地"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        <FadeIn className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-stone-700 text-2xl md:text-3xl font-light leading-relaxed tracking-wide">
              當身體真實的需要被看見，<br />
              <span className="text-emerald-700">心，也會慢慢鬆開。</span>
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── SPLIT: TEXT LEFT + IMAGE RIGHT ── */}
      <section className="overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[60vh]">
          <div className="flex items-center bg-white px-10 md:px-16 py-20 order-2 md:order-1">
            <FadeIn>
              <p className="text-emerald-600 text-xs tracking-[0.4em] uppercase mb-5">Included</p>
              <h2 className="text-3xl font-light text-stone-800 mb-8">費用包含</h2>
              <ul className="space-y-4 mb-10">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-stone-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-400 text-xs">* 交通費用請自理，我們會提供詳細的交通指引</p>
            </FadeIn>
          </div>
          <FadeIn fromY={0} className="relative min-h-[50vw] md:min-h-0 order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=960&q=85"
              alt="山景"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </FadeIn>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-28 px-6 bg-stone-50">
        <FadeIn className="max-w-md mx-auto text-center">
          <p className="text-emerald-600 text-xs tracking-[0.4em] uppercase mb-6">Join Us</p>
          <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-10">
            <p className="text-stone-400 text-sm mb-2">參加費用</p>
            <p className="text-6xl font-light text-stone-800 mb-1">1,200</p>
            <p className="text-stone-400 text-sm mb-8">NT$ / 每人</p>
            <div className="border-t border-stone-100 pt-6 mb-8 text-left">
              <p className="text-stone-400 text-xs tracking-wider mb-2">近期場次</p>
              <p className="text-stone-700 font-light">5/1（五）｜5/29（五）</p>
            </div>
            <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-emerald-700 hover:bg-emerald-800 transition-colors text-white py-4 rounded-2xl text-base tracking-wider font-light flex items-center justify-center gap-2">
                立即報名
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── CLOSING ── */}
      <section className="py-20 px-6 bg-white text-center border-t border-stone-100">
        <FadeIn>
          <Leaf className="w-6 h-6 text-emerald-400 mx-auto mb-6" />
          <p className="text-stone-400 text-sm font-light leading-loose mb-6">
            願這段旅程，陪你慢下來。<br />
            讓安定、寧靜與自在，慢慢回到生活裡。
          </p>
          <Link
            to={createPageUrl('Programs')}
            className="inline-flex items-center gap-2 text-stone-400 text-sm hover:text-emerald-600 transition-colors"
          >
            ← 返回所有旅程
          </Link>
        </FadeIn>
      </section>

    </div>
  );
}