import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Users, MapPin, Check, ArrowRight, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

const pillars = [
  {
    label: "洗滌身心",
    body: "在僻靜中，深度清理與釋放自然發生。不是努力做到，而是讓它發生。",
  },
  {
    label: "靜心冥想",
    body: "每一天的靜心，是讓心回到它本來的樣子——安靜，而且清醒。",
  },
  {
    label: "淨化飲食",
    body: "吃得簡單，身體才有空間沉澱。這裡的食物，只為滋養而存在。",
  },
  {
    label: "心靈導遊從旁支持",
    body: "全程陪伴，不推進、不評判。只在你需要的時候，輕輕地在那裡。",
  },
];

const includes = [
  "心靈導遊全程帶領",
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
  { icon: Calendar, label: "舉辦", value: "不定期邀請制" },
];

export default function InvitationRetreat() {
  return (
    <div className="min-h-screen bg-[#f7f4ef]">

      {/* ── 1. HERO ── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/9c4e700ba_IMG_20220923_150004.jpg')" }}
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
            <Sparkles className="w-3.5 h-3.5 text-violet-200" />
            <span className="text-white/90 text-xs tracking-wider">INVITATION ONLY</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wide mb-5 leading-tight">僻靜篇</h1>
          <p className="text-base md:text-lg text-stone-200/80 font-light leading-relaxed max-w-xl">
            由心靈導遊邀請，為您量身打造的身心靈旅程
          </p>
        </motion.div>
      </section>

      {/* ── 英雄後：重新定向 ── */}
      <section className="py-20 md:py-28 px-6 bg-[#f7f4ef]">
        <motion.div {...fadeUp} className="max-w-xl mx-auto">
          <div className="w-6 h-px bg-violet-400 mb-8" />
          <p className="text-2xl md:text-3xl font-light text-stone-700 leading-relaxed tracking-wide mb-6">
            這不是開放報名的行程。
          </p>
          <p className="text-stone-500 font-light leading-loose text-base md:text-lg">
            「僻靜篇」不是一個產品，而是心靈導遊給予某個人的一段時光——當她感覺到，眼前這個人，正是需要這樣的空間的時候。每個人的生命歷程都是獨特的，所以這裡沒有標準化的行程，只有此刻最適合你的節奏與安排。
          </p>
        </motion.div>
      </section>

      {/* ── 2. 完全免費 ── */}
      <section className="py-20 px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-xl mx-auto">
          <p className="text-violet-500 text-xs tracking-[0.3em] uppercase mb-6">關於費用</p>
          <p className="text-2xl md:text-3xl font-light text-stone-700 leading-relaxed mb-6">
            這趟旅程，完全免費。
          </p>
          <p className="text-stone-500 font-light leading-loose text-base">
            不是因為它不珍貴，而是因為它珍貴得無法定價。心靈導遊在這段旅程裡給予的，是她所有的注意力、陪伴與智慧。這些東西不是商品，所以它們不在市場上出售。當一個邀請發生，它是一份禮物，是心靈導遊用她認識你的方式，說「你值得被好好照顧」。
          </p>
        </motion.div>
      </section>

      {/* ── 3. 四個核心 ── */}
      <section className="py-20 px-6 bg-stone-900 text-white">
        <div className="max-w-xl mx-auto">
          <motion.p
            {...fadeUp}
            className="text-violet-400 text-xs tracking-[0.3em] uppercase mb-16 text-center"
          >
            旅程的質地
          </motion.p>
          <div className="space-y-0">
            {pillars.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 pb-14 border-b border-stone-800 last:border-0 last:pb-0 pt-14 first:pt-0"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-px bg-violet-800 mt-1" style={{ minHeight: 60 }} />
                </div>
                <div>
                  <p className="text-violet-400 text-xs tracking-[0.3em] uppercase mb-3">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="text-white text-xl font-light tracking-wide mb-3">{item.label}</h3>
                  <p className="text-stone-400 font-light leading-loose text-base">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. 邀請的邏輯（情感高潮）── */}
      <section className="py-28 md:py-36 px-6 bg-[#f7f4ef]">
        <motion.div {...fadeUp} className="max-w-xl mx-auto">
          <div className="w-6 h-px bg-violet-400 mb-10" />
          <p className="text-stone-400 text-xs tracking-[0.3em] uppercase mb-6">如果你想被邀請</p>
          <p className="text-xl md:text-2xl font-light text-stone-700 leading-relaxed">
            若您對此行程有興趣，歡迎先參加我們其他的旅程體驗，與心靈導遊建立連結。
          </p>
          <p className="mt-6 text-xl md:text-2xl font-light text-stone-700 leading-relaxed">
            當時機成熟，邀請自然會到來。
          </p>
          <div className="mt-12">
            <Link to={createPageUrl("Programs")}>
              <Button variant="outline" className="border-stone-400 text-stone-600 hover:bg-stone-100 rounded-xl px-7 py-5 font-light tracking-wider">
                <span className="flex items-center gap-2">
                  探索其他旅程 <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── 5. 行程包含 ── */}
      <section className="py-20 px-6 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <h3 className="text-lg font-light text-stone-500 tracking-widest uppercase mb-6">行程包含</h3>
              <ul className="space-y-3 mb-6">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-violet-600" />
                    </div>
                    <span className="text-stone-600 font-light text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-400 text-xs font-light">* 交通費用請自理，可協助安排花東接駁</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <h3 className="text-lg font-light text-stone-500 tracking-widest uppercase mb-6">基本規格</h3>
              <div className="grid grid-cols-2 gap-5">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon className="w-3.5 h-3.5 text-violet-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-stone-400">{label}</p>
                      <p className="text-sm font-medium text-stone-700">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}