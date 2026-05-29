import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Moon, Clock, Users, MapPin, Check, ArrowRight, Calendar, Star, Leaf, Wind, Coffee } from 'lucide-react';
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

const includes = [
  "專業引導老師全程帶領",
  "住宿一晚",
  "活動期間全部餐食",
  "所有課程與活動費用",
  "旅遊平安保險"
];

export default function TwoDayRetreat() {
  return (
    <div className="min-h-screen">

      {/* ─── 第一段：抵達 ─── */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=85')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-transparent to-stone-50" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-2xl mx-auto pb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <p className="text-amber-100/70 tracking-[0.35em] text-xs uppercase mb-5">Weekend Escape</p>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wider mb-6 drop-shadow-sm">
            二日放空篇
          </h1>
          <p className="text-stone-100/85 text-xl md:text-2xl font-light tracking-wide leading-relaxed">
            放下，才能接住自己。
          </p>
        </motion.div>
      </section>

      {/* 規格列 */}
      <section className="py-12 px-6 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Clock, label: "時長", value: "2天1夜" },
              { icon: Users, label: "人數", value: "8–15 人" },
              { icon: MapPin, label: "地點", value: "宜蘭 / 南投" },
              { icon: Calendar, label: "梯次", value: "每月 1–2 梯" }
            ].map((item, i) => (
              <motion.div key={item.label} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.08 }}>
                <item.icon className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
                <p className="text-xs text-stone-400 mb-1">{item.label}</p>
                <p className="font-medium text-stone-700">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 第二段：第一天白天 ─── */}
      <section className="py-28 px-6 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50">
        <div className="max-w-2xl mx-auto">
          <motion.p {...fadeUp} className="text-stone-400 tracking-[0.3em] text-xs uppercase mb-4 text-center">Day 1 · Daytime</motion.p>
          <motion.h2 {...fadeUp} transition={{ duration: 1, delay: 0.1 }} className="text-3xl md:text-4xl font-light text-stone-800 text-center mb-16 tracking-wide">
            讓身體，先到
          </motion.h2>

          <div className="space-y-20">
            {[
              {
                icon: Wind,
                title: "放鬆引導 · 芳香療癒",
                body: "抵達後，不急著安排任何事。引導師帶著你，用呼吸卸下旅途的重量，空氣裡飄著淡淡的精油香，身體先於思緒，慢慢落地。",
                img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=80",
                align: "left"
              },
              {
                icon: Leaf,
                title: "直覺慢食 · 獨處漫步",
                body: "午餐用在地食材烹調，沒有電視、沒有手機，只有食物本身的味道。飯後，一個人走進林間，不必抵達任何地方。",
                img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80",
                align: "right"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 1, delay: 0.05 }}
                className={`flex flex-col ${item.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
              >
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-light text-stone-800 tracking-wide">{item.title}</h3>
                  <p className="text-stone-500 font-light leading-loose">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 第三段：入夜 ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050a14]">
        {/* Star field */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=85"
            alt="星空"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-700/60 via-[#050a14]/70 to-[#050a14]" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Moon className="w-8 h-8 text-indigo-300/70 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-wider leading-relaxed mb-6">
            在自然中<br />與星空對話
          </h2>
          <p className="text-indigo-200/60 font-light tracking-widest text-sm">Day 1 · Night</p>
        </motion.div>

        {/* Scattered stars overlay */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-white"
            style={{
              top: `${10 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 4 }}
          />
        ))}
      </section>

      {/* ─── 第四段：清晨 ─── */}
      <section className="py-28 px-6 bg-gradient-to-b from-[#0d1b2a] via-[#b8c8d8]/40 to-stone-100/80">
        <div className="max-w-2xl mx-auto">
          <motion.p {...fadeUp} className="text-slate-400 tracking-[0.3em] text-xs uppercase mb-4 text-center">Day 2 · Dawn</motion.p>
          <motion.h2 {...fadeUp} transition={{ duration: 1, delay: 0.1 }} className="text-3xl md:text-4xl font-light text-stone-700 text-center mb-6 tracking-wide">
            清晨，你不一樣了
          </motion.h2>
          <motion.p {...fadeUp} transition={{ duration: 1, delay: 0.15 }} className="text-stone-500 text-center font-light leading-loose mb-20">
            經過一夜的沉睡與夢境，清晨的身體更安靜，<br className="hidden md:block" />
            更願意聆聽自己。
          </motion.p>

          <div className="space-y-20">
            {[
              {
                icon: Coffee,
                title: "晨間站樁 · 品茶冥想",
                body: "霧還沒散，腳踩在草地上，身體緩緩找到中心。接著坐下來，捧一杯溫熱的茶，讓寧靜再深一些。",
                img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=900&q=80",
                align: "right"
              },
              {
                icon: Star,
                title: "舞動身心 · 舒緩瑜伽",
                body: "不是表演，不需要做得好看。音樂響起，身體跟著動，讓昨夜積累的東西，用最自然的方式流走。",
                img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80",
                align: "left"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 1, delay: 0.05 }}
                className={`flex flex-col ${item.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
              >
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <item.icon className="w-6 h-6 text-slate-400" />
                  <h3 className="text-xl font-light text-stone-700 tracking-wide">{item.title}</h3>
                  <p className="text-stone-500 font-light leading-loose">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 第五段：費用與報名 ─── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Includes */}
          <motion.div {...fadeUp} className="mb-20 text-center">
            <p className="text-stone-400 tracking-[0.3em] text-xs uppercase mb-3">What's included</p>
            <h2 className="text-3xl font-light text-stone-800 mb-10">費用包含</h2>
            <ul className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
              {includes.map((item, i) => (
                <motion.li
                  key={item}
                  {...fadeUp}
                  transition={{ duration: 0.8, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-stone-600 font-light">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-stone-400 text-sm">* 交通費用請自理，可協助安排共乘</p>
          </motion.div>

          {/* Sessions */}
          <motion.div {...fadeUp} transition={{ duration: 1, delay: 0.1 }}>
            <p className="text-stone-400 tracking-[0.3em] text-xs uppercase mb-3 text-center">Sessions</p>
            <h2 className="text-3xl font-light text-stone-800 mb-10 text-center">2026 梯次與費用</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Session 1 */}
              <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-indigo-300" />
                  <p className="text-indigo-200 text-sm tracking-wider">第一梯次</p>
                </div>
                <h3 className="text-2xl font-light mb-1">08/08 ~ 08/09</h3>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-4 h-4 text-indigo-300" />
                  <p className="text-indigo-200 text-sm">宜蘭場</p>
                </div>
                <div className="space-y-2 mb-6 border-t border-indigo-700 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-200 text-sm">原價</span>
                    <span className="text-indigo-200 line-through text-sm">NT$ 7,200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">早鳥優惠 <span className="text-indigo-300 text-xs font-normal">（6/30前）</span></span>
                    <span className="text-white font-medium text-xl">NT$ 6,200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-200 text-sm">協會優惠</span>
                    <span className="text-amber-200 font-medium">NT$ 5,800</span>
                  </div>
                </div>
                <a href="https://forms.gle/6q2nmZ8anrPKFN5F8" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-white text-indigo-800 hover:bg-amber-50 py-6 rounded-xl">
                    <span className="flex items-center gap-2">立即報名<ArrowRight className="w-4 h-4" /></span>
                  </Button>
                </a>
              </div>

              {/* Session 2 */}
              <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-emerald-300" />
                  <p className="text-emerald-200 text-sm tracking-wider">第二梯次</p>
                </div>
                <h3 className="text-2xl font-light mb-1">12/12 ~ 12/13</h3>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-4 h-4 text-emerald-300" />
                  <p className="text-emerald-200 text-sm">南投場</p>
                </div>
                <div className="space-y-2 mb-6 border-t border-emerald-700 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-200 text-sm">原價</span>
                    <span className="text-emerald-200 line-through text-sm">NT$ 6,800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">早鳥優惠 <span className="text-emerald-300 text-xs font-normal">（10/31前）</span></span>
                    <span className="text-white font-medium text-xl">NT$ 5,800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-200 text-sm">協會優惠</span>
                    <span className="text-amber-200 font-medium">NT$ 5,000</span>
                  </div>
                </div>
                <a href="https://forms.gle/6q2nmZ8anrPKFN5F8" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-white text-emerald-800 hover:bg-amber-50 py-6 rounded-xl">
                    <span className="flex items-center gap-2">立即報名<ArrowRight className="w-4 h-4" /></span>
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}