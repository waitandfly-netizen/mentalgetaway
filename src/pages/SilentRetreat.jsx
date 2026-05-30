import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Mountain, Clock, Users, MapPin, Check, ArrowRight, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

const pillars = [
  {
    title: "靜默修習",
    body: "在整段旅程中，我們保持靜默。不是因為語言有害，而是因為當語言暫停，另一種更深的聆聽才會開始——聽見自己真正在想什麼、在感受什麼。",
  },
  {
    title: "呼吸與冥想",
    body: "每天早晨與傍晚，透過引導式冥想回到呼吸。幾天下來，你會發現心的波動漸漸縮小，而那個一直在那裡的安靜，開始變得容易觸及。",
  },
  {
    title: "輕食淨化",
    body: "飲食回到最簡單的形式——原型、溫暖、不過量。讓身體不需要花費太多能量消化，而是把這些能量留給內在的沉澱。",
  },
  {
    title: "一對一引導",
    body: "資深引導老師每天與你單獨坐下，不評判、不給答案，只是陪你把浮現的東西看清楚。這是整趟旅程裡最個人、也最不可取代的一環。",
  },
];

const dayRhythm = [
  {
    description: "身體還帶著睡眠的溫度，緩緩起身。晨間站樁、品茶冥想。思緒最稀薄，也最容易進入安靜的狀態。",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1200&q=80",
  },
  {
    description: "靜心活動、瑜伽伸展、原型食物、自然漫步、以及獨處時間。沒有行程表要追，只是讓每件事發生在它該發生的時候。幾天下來，你會開始感受到身體的節奏，而不是時鐘的節奏。",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
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

const specs = [
  { icon: Clock, label: "時長", value: "3–7 天" },
  { icon: Users, label: "人數", value: "4–8 人" },
  { icon: MapPin, label: "地點", value: "花東僻靜場地" },
  { icon: Calendar, label: "梯次", value: "季節性開團" },
];

export default function SilentRetreat() {
  return (
    <div className="min-h-screen bg-[#f7f4ef]">

      {/* ── 1. HERO ── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://spiritvacation.wordpress.com/wp-content/uploads/2024/02/s__381304862_0.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-900/30 to-stone-900/85" />
        </div>
        <motion.div
          className="relative z-10 px-8 md:px-16 pb-16 md:pb-24 max-w-3xl"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-5">
            <Mountain className="w-3.5 h-3.5 text-emerald-200" />
            <span className="text-white/90 text-xs tracking-wider">SILENT RETREAT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wide mb-5 leading-tight">蛻變篇</h1>
          <p className="text-base md:text-lg text-stone-200/80 font-light leading-relaxed max-w-xl">
            「蛻變篇」是我們最深度的旅程。這是一趟向內探索的旅程，在遠離塵囂的環境中，透過靜默與冥想，與真實的自己相遇。
          </p>
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-10"
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* ── 門檻感：英雄後的文字 ── */}
      <section className="py-20 md:py-28 px-6 bg-[#f7f4ef]">
        <motion.div
          {...fadeUp}
          className="max-w-xl mx-auto"
        >
          <div className="w-6 h-px bg-emerald-400 mb-8" />
          <p className="text-xl md:text-2xl font-light text-stone-700 leading-loose tracking-wide">
            這趟旅程適合渴望深度轉化、或是想要建立穩定冥想習慣的夥伴。
          </p>
          <p className="mt-6 text-stone-500 font-light leading-loose text-base md:text-lg">
            透過遠離塵囂，來到好山好水的優質環境，給予自己一個難得的空間，不需要扮演任何角色，只是單純地存在。
          </p>
        </motion.div>
      </section>

      {/* ── 2. 靜默的質地（垂直積累）── */}
      <section
        className="relative px-6 text-white"
        style={{
          backgroundImage: "url('https://media.base44.com/images/public/698fc983574e659f561934f1/6c0312d19_DSC_5795.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-stone-900/70" />
        <div className="relative max-w-5xl mx-auto py-20">
          <motion.p
            {...fadeUp}
            className="text-emerald-400 text-xs tracking-[0.3em] uppercase mb-12 text-center"
          >
            旅程的核心
          </motion.p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 pb-12 border-b border-white/10 last:border-0 pt-12 first:pt-0 [&:nth-child(2)]:pt-0 [&:nth-child(3)]:border-0 md:[&:nth-child(3)]:border-b"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-px h-full bg-emerald-700/60 mt-1" style={{ minHeight: 60 }} />
                </div>
                <div>
                  <p className="text-emerald-400 text-xs tracking-[0.3em] uppercase mb-3">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="text-white text-xl font-light tracking-wide mb-3">{item.title}</h3>
                  <p className="text-stone-300 font-light leading-loose text-base">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. 一個典型的日子 ── */}
      <section className="py-24 px-6 bg-[#f7f4ef]">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <p className="text-stone-400 text-xs tracking-[0.3em] uppercase mb-4">一個典型的日子是這樣的</p>
            <p className="text-stone-500 font-light text-sm leading-loose">幾天下來，這個節奏會讓身體記住一種安靜的感覺。</p>
          </motion.div>

          <div className="space-y-3">
            {dayRhythm.map((block, i) => (
              <motion.div
                key={block.phase}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl overflow-hidden shadow-md"
              >
                <div className="relative h-52 md:h-72">
                  <img src={block.image} alt={block.phase} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-stone-300 font-light leading-relaxed text-sm max-w-lg">{block.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. 門檻的意義 ── */}
      <section className="py-20 px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-xl mx-auto">
          <div className="w-6 h-px bg-emerald-400 mb-8" />
          <h2 className="text-lg font-light text-stone-400 tracking-widest uppercase mb-5">參加資格</h2>
          <p className="text-2xl md:text-3xl font-light text-stone-700 leading-relaxed mb-6">
            參加六次以上二日放空篇
          </p>
          <p className="text-stone-500 font-light leading-loose text-base">
            這個門檻不是篩選，而是保護。蛻變篇的深度，需要一個已經熟悉自己身體節奏、對靜默不陌生的內在基礎。當你具備這個基礎，整趟旅程的每一個時刻，你才能真正接收得到。
          </p>
        </motion.div>
      </section>

      {/* ── 5. 費用與CTA ── */}
      <section className="py-20 px-6 bg-[#f7f4ef]">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* 費用包含 + 規格 */}
            <motion.div {...fadeUp}>
              <h3 className="text-lg font-light text-stone-700 mb-6">費用包含</h3>
              <ul className="space-y-3 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-stone-600 font-light text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-400 text-xs font-light mb-8">* 交通費用請自理，可協助安排花東接駁</p>
              <div className="grid grid-cols-2 gap-4">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-stone-400">{label}</p>
                      <p className="text-sm font-medium text-stone-700">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA 卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="bg-stone-900 rounded-2xl p-8 text-white"
            >
              <p className="text-stone-400 text-xs tracking-widest uppercase mb-2">費用</p>
              <p className="text-3xl font-light text-white mb-1">NT$ 3,600 – 6,800</p>
              <p className="text-stone-500 text-sm mb-8">依天數與房型而定</p>
              <p className="text-stone-300 font-light leading-relaxed text-sm mb-8">
                蛻變篇的場次與名額有限，如果你感覺準備好了，歡迎寫信給我們，我們會陪你確認這趟旅程是否適合現在的你。
              </p>
              <Link to={createPageUrl("Contact")}>
                <Button className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-5 rounded-xl font-light tracking-wider">
                  <span className="flex items-center gap-2">
                    想了解，聯繫我們 <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}