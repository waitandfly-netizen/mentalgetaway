import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Mountain, ArrowRight, Leaf, Wind, Droplet, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

const pillars = [
  {
    icon: Leaf,
    title: "靜默修習",
    description: "當語言暫停，身體才真正開始說話。靜默不是空洞，而是一種讓內在得以被聽見的容器——每一天，你會慢慢發現，那些平時被噪音蓋住的感受，其實一直都在。",
  },
  {
    icon: Wind,
    title: "呼吸與冥想",
    description: "每日多次回到呼吸。不是因為你做得不夠好，而是因為心需要反覆練習才能記住如何安靜下來。幾天下來，你會發現呼吸不只是呼吸，它是通往內在的一條路。",
  },
  {
    icon: Droplet,
    title: "輕食淨化",
    description: "簡單、原型、清淡——讓身體從消化的負擔中釋放。吃得少一點、慢一點、感受多一點。許多人在這裡第一次真正嚐到食物的味道。",
  },
  {
    icon: Eye,
    title: "一對一引導",
    description: "你不是一個人走進這個空間。資深老師會在適當的時刻與你坐下來，不是給答案，而是陪你更靠近你自己的問題。",
  },
];

const dayRhythm = [
  {
    time: "清晨",
    state: "身體還沒完全醒來",
    description: "在晨光裡站樁、品茶，讓感官慢慢打開。不需要立刻思考任何事情，只是讓身體先回到當下。",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
  },
  {
    time: "白天",
    state: "靜默開始有了重量",
    description: "冥想、漫步、與自己獨處。偶爾一對一引導，讓那些浮現的東西有地方落腳。不趕，不催，時間在這裡是不同的質地。",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
  },
  {
    time: "傍晚",
    state: "身體開始記住這個節奏",
    description: "輕柔的瑜伽、芳香療癒，或只是在安靜中坐著。到了第二天，你會發現傍晚變得不一樣了——不是疲憊，而是一種充實的空。",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=1200&q=80",
  },
];

const includes = [
  "資深引導老師全程帶領",
  "全程住宿",
  "活動期間全部餐食",
  "靜心活動與課程",
  "一對一引導時間",
  "旅遊平安保險",
];

const pricingOptions = [
  { days: "3天2夜", price: "3,600 – 6,800 元", note: "初次踏入靜默空間" },
  { days: "5天4夜", price: "6,000 – 11,000 元", note: "讓節奏真正落進身體" },
  { days: "7天6夜", price: "8,400 – 15,600 元", note: "給自己一次完整的內在旅程" },
];

export default function SilentRetreat() {
  return (
    <div className="min-h-screen bg-[#f5f2ed]">

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-900/30 to-stone-900/80" />
        </div>
        <motion.div
          className="relative z-10 px-8 md:px-16 pb-16 md:pb-24 max-w-3xl"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6">
            <Mountain className="w-3.5 h-3.5 text-emerald-200" />
            <span className="text-white/90 text-xs tracking-wider">SILENT RETREAT · 蛻變篇</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wide mb-6 leading-tight">蛻變篇</h1>
          <p className="text-lg md:text-xl text-stone-200/80 font-light leading-relaxed max-w-xl">
            給自己幾天，離開所有的角色與責任。到一個好山好水的地方，什麼都不做，只是好好存在。
          </p>
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10"
          animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 mx-auto" />
        </motion.div>
      </section>

      {/* ── 第一段：門檻感 ── */}
      <section className="py-24 md:py-36 px-6 bg-[#f5f2ed]">
        <div className="max-w-xl mx-auto">
          <motion.div {...fadeUp}>
            <div className="w-6 h-px bg-emerald-500 mb-10" />
            <p className="text-3xl md:text-4xl font-light text-stone-800 leading-relaxed tracking-wide mb-10">
              不需要扮演任何角色，<br />只是單純地<span className="text-emerald-700">存在</span>。
            </p>
            <p className="text-stone-500 font-light leading-loose text-base md:text-lg">
              「蛻變篇」不是一場課程，也不是一次療程。它是一個空間——在這裡，你不需要表現、不需要成長、不需要有收穫。只是讓自己暫時放下那個每天努力撐著的自己，看看底下有什麼。
            </p>
            <p className="mt-6 text-stone-500 font-light leading-loose text-base md:text-lg">
              幾天的靜默，往往比幾年的忙碌，更能讓一個人認識自己。
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 第二段：靜默的質地 ── */}
      <section className="py-20 px-6 bg-stone-900">
        <div className="max-w-xl mx-auto">
          <motion.p
            {...fadeUp}
            className="text-emerald-400 text-xs tracking-[0.3em] uppercase mb-14 text-center"
          >
            靜默本身的質地
          </motion.p>
          <div className="space-y-16">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center flex-shrink-0 pt-1.5">
                  <div className="w-8 h-8 rounded-full border border-emerald-700/50 flex items-center justify-center">
                    <item.icon className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  {i < pillars.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-emerald-800/60 to-transparent mt-3 min-h-12" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="text-emerald-300 text-sm tracking-wider mb-3 font-light">{item.title}</h3>
                  <p className="text-stone-300/80 font-light leading-relaxed text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 第三段：每日節奏 ── */}
      <section className="py-24 px-6 bg-[#f5f2ed]">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <p className="text-emerald-700 text-xs tracking-[0.3em] uppercase mb-4">每日的節奏</p>
            <h2 className="text-2xl md:text-3xl font-light text-stone-800 leading-relaxed">
              一個典型的日子，是這樣的
            </h2>
          </motion.div>
          <div className="space-y-8">
            {dayRhythm.map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl overflow-hidden shadow-md"
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img src={item.image} alt={item.time} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="text-emerald-300 font-mono text-xs tracking-widest block mb-1">{item.time}</span>
                    <h3 className="text-white text-lg md:text-xl font-light tracking-wide">{item.state}</h3>
                  </div>
                </div>
                <div className="bg-white px-6 md:px-8 py-5">
                  <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p
            {...fadeUp}
            className="mt-10 text-center text-stone-400 text-sm font-light italic"
          >
            每個人在這個節奏裡的感受都不一樣。有些人第一天就很深，有些人第三天才真正放下。都是對的。
          </motion.p>
        </div>
      </section>

      {/* ── 第四段：門檻的意義 ── */}
      <section className="py-24 px-6 bg-stone-100/70">
        <div className="max-w-xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-emerald-700 text-xs tracking-[0.3em] uppercase mb-8 text-center">關於參加條件</p>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <h3 className="text-xl font-light text-stone-800 mb-5 leading-relaxed">
                為什麼需要參加過六次以上二日放空篇？
              </h3>
              <p className="text-stone-500 font-light leading-loose text-base mb-6">
                靜默的空間，比大多數人想像的更深。當外在的刺激消失，內在的東西會開始浮現——有時是平靜，有時是不舒服，有時是從未面對過的情緒。
              </p>
              <p className="text-stone-500 font-light leading-loose text-base mb-6">
                這個條件不是門檻，而是保護。我們希望走進這個空間的你，已經對自己的內在有基本的熟悉——知道如何在不舒服的時候不被淹沒，也知道如何讓老師陪你走過。
              </p>
              <p className="text-stone-700 font-light text-base">
                如果你已走過那六次，你會知道自己準備好了。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 第五段：費用與接觸 ── */}
      <section className="py-24 px-6 bg-[#f5f2ed]">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <p className="text-emerald-700 text-xs tracking-[0.3em] uppercase mb-4">選擇你的天數</p>
            <h2 className="text-2xl md:text-3xl font-light text-stone-800 mb-3">
              你準備好了，我們來談談
            </h2>
            <p className="text-stone-400 font-light text-sm">每個人需要的深度不一樣，天數可以依此決定</p>
          </motion.div>

          <div className="space-y-4 mb-10">
            {pricingOptions.map((opt, i) => (
              <motion.div
                key={opt.days}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl px-7 py-6 flex items-center justify-between shadow-sm"
              >
                <div>
                  <p className="text-stone-800 font-light text-lg mb-0.5">{opt.days}</p>
                  <p className="text-stone-400 text-sm font-light">{opt.note}</p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-800 font-light text-base">NT$ {opt.price}</p>
                  <p className="text-stone-300 text-xs mt-0.5">/ 人</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="bg-stone-50 border border-stone-200 rounded-2xl px-7 py-5">
              <p className="text-stone-500 text-sm font-light leading-relaxed mb-1">費用包含</p>
              <p className="text-stone-600 font-light text-sm leading-loose">
                {includes.join('、')}
              </p>
              <p className="text-stone-400 text-xs mt-3">* 交通費用請自理，可協助安排花東接駁</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="text-center">
            <p className="text-stone-400 font-light text-sm mb-6">
              有任何問題，或想先聊聊自己是否準備好——歡迎與我們聯繫。
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-emerald-800 hover:bg-emerald-700 text-white px-10 py-5 rounded-full text-base tracking-wider">
                <span className="flex items-center gap-2">
                  我準備好了，聯繫我們
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}