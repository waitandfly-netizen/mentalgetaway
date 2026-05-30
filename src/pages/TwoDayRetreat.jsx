import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Clock, Users, MapPin, Check, ArrowRight, Calendar, Star, Leaf, Wind, Coffee, Sunrise } from 'lucide-react';
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
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
    <div className="min-h-screen bg-stone-50">

      {/* ── 第一段：抵達 ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
        {/* White daytime forest hero */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://media.base44.com/images/public/698fc983574e659f561934f1/7247dfa1e_s__381296664.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-stone-900/55" />
        </div>

        <motion.div
          className="relative z-10 w-full px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-white/70 tracking-[0.4em] text-xs mb-5 uppercase drop-shadow">Two-Day Retreat</p>
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-wider mb-8 leading-tight drop-shadow-lg">
              二日放空篇
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed drop-shadow">
              「二日放空篇」是我們最受歡迎的旅程之一。
              <br />
              透過兩天一夜的完整體驗，
              <br />
              讓您有足夠的時間真正地「慢下來」。
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── 第二段：第一天白天 ────────────────────────────── */}
      <section className="py-32 px-6 bg-[#f7f4ef]">
        <div className="max-w-2xl mx-auto space-y-20">
          <motion.div {...fadeUp}>
            <p className="text-emerald-600 tracking-widest text-xs mb-4 uppercase">Day One · 抵達</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 leading-relaxed mb-8">
              放下行囊，<br />先讓身體慢慢鬆開
            </h2>
            <p className="text-stone-500 font-light leading-loose text-lg">
              第一天，我們將透過深度的森林浴體驗，讓身心慢慢沉靜。
              在引導老師的帶領下，身體感知會漸漸清晰，思緒也會一點一點安靜下來。
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Wind, label: "放鬆引導", note: "卸下日常慣性，讓身體重新呼吸" },
              { icon: Leaf, label: "芳香療癒", note: "植物精油喚醒感官，回到當下" },
              { icon: Coffee, label: "直覺慢食", note: "用心吃一頓飯，感受食物的溫度" },
              { icon: MapPin, label: "獨處漫步", note: "在自然裡，獨自和自己在一起" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <item.icon className="w-5 h-5 text-emerald-600 mb-3" />
                <h4 className="text-stone-800 font-light text-base mb-1">{item.label}</h4>
                <p className="text-stone-400 text-sm font-light leading-relaxed">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 第三段：入夜 ─────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #1a1f2e 0%, #0d1117 60%, #070b12 100%)"
        }}
      >
        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
              }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Moon className="w-8 h-8 text-indigo-300 mx-auto mb-8 opacity-70" />
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-wide leading-relaxed mb-6">
            在自然中，
            <br />
            與星空對話
          </h2>
          <p className="text-indigo-200/60 text-base font-light leading-loose">
            傍晚時分，在溫暖的晚餐後，
            <br />
            我們會在星空下分享彼此的故事。
            <br />
            這是一個安全的空間，
            <br />
            您可以選擇傾聽，也可以選擇分享。
          </p>
        </motion.div>
      </section>

      {/* ── 第四段：清晨 ─────────────────────────────────── */}
      <section
        className="py-32 px-6"
        style={{ background: "linear-gradient(to bottom, #0d1117 0%, #e8ecf0 18%, #f0f3f5 100%)" }}
      >
        <div className="max-w-2xl mx-auto space-y-20 pt-16">
          <motion.div {...fadeUp}>
            <p className="text-stone-400 tracking-widest text-xs mb-4 uppercase">Day Two · 清晨</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 leading-relaxed mb-8">
              一夜之後，<br />靠近自己
            </h2>
            <p className="text-stone-500 font-light leading-loose text-lg">
              第二天清晨，我們邀請您一起迎接日出，進行溫和的冥想練習。
              經過一夜的沉澱，身體比昨天更安靜，感知也更細膩。
              這一天的練習，帶領您更深入地認識自己的身體與情緒。
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Sunrise, label: "晨間站樁", note: "讓身體在靜止中重新紮根" },
              { icon: Coffee, label: "品茶冥想", note: "一杯茶的時間，回到內在" },
              { icon: Wind, label: "舞動身心", note: "用身體說出昨夜未盡的話" },
              { icon: Leaf, label: "舒緩瑜伽", note: "溫柔地整合這趟旅程的收穫" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/80 rounded-2xl p-6 shadow-sm"
              >
                <item.icon className="w-5 h-5 text-stone-400 mb-3" />
                <h4 className="text-stone-700 font-light text-base mb-1">{item.label}</h4>
                <p className="text-stone-400 text-sm font-light leading-relaxed">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 第五段：收尾與費用 ────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* 規格 */}
          <motion.div
            {...fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-stone-100"
          >
            {[
              { icon: Clock, label: "時長", value: "2天1夜" },
              { icon: Users, label: "人數", value: "8-15 人" },
              { icon: MapPin, label: "地點", value: "宜蘭山區民宿" },
              { icon: Calendar, label: "梯次", value: "每月 1-2 梯" }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="w-5 h-5 text-stone-300 mx-auto mb-3" />
                <p className="text-xs text-stone-400 mb-1 tracking-wider">{item.label}</p>
                <p className="text-stone-800 font-light text-lg">{item.value}</p>
              </div>
            ))}
          </motion.div>

          {/* 費用包含 */}
          <motion.div {...fadeUp} className="mb-20">
            <h2 className="text-2xl font-light text-stone-800 mb-10 text-center tracking-wider">費用包含</h2>
            <ul className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {includes.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.7 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-stone-600 font-light">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-stone-400 text-sm text-center font-light">
              * 交通費用請自理，可協助安排共乘
            </p>
          </motion.div>

          {/* 梯次與費用 */}
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-light text-stone-800 mb-10 text-center tracking-wider">2026 梯次與費用</h2>
            <div className="grid md:grid-cols-2 gap-8">

              {/* 第一梯次 */}
              <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-indigo-300" />
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
                    <span className="flex items-center gap-2">立即報名 <ArrowRight className="w-4 h-4" /></span>
                  </Button>
                </a>
              </div>

              {/* 第二梯次 */}
              <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-emerald-300" />
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
                    <span className="flex items-center gap-2">立即報名 <ArrowRight className="w-4 h-4" /></span>
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