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
  "洗滌身心，讓累積已久的疲憊找到出口。",
  "靜心冥想，讓心回到一種安靜的、可以呼吸的狀態。",
  "淨化飲食，讓身體不再過度負荷，而是好好被滋養。",
  "心靈導遊從旁支持，在你需要的時候，有人在。",
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
        <motion.div
          className="absolute bottom-8 right-10"
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* ── 第一段：性質說明 ── */}
      <section className="py-20 md:py-28 px-6 bg-[#f7f4ef]">
        <motion.div {...fadeUp} className="max-w-xl mx-auto">
          <div className="w-6 h-px bg-violet-400 mb-8" />
          <p className="text-xl md:text-2xl font-light text-stone-700 leading-loose tracking-wide">
            「僻靜篇」是一趟特別的旅程。這不是開放報名的行程。
          </p>
          <p className="mt-6 text-stone-500 font-light leading-loose text-base md:text-lg">
            這趟旅程不定期舉辦，如果您被邀請參加，那代表這正是您需要的時刻。請給自己這個機會，在花東的寧靜場地中，好好與自己相處。
          </p>
        </motion.div>
      </section>

      {/* ── 第二段：為什麼免費 ── */}
      <section
        className="relative py-20 px-6 text-white"
        style={{
          backgroundImage: "url('https://media.base44.com/images/public/698fc983574e659f561934f1/ac2eca0e9_s__381296648_0.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-stone-900/65" />
        <div className="relative max-w-xl mx-auto">
          <motion.p
            {...fadeUp}
            className="text-violet-400 text-xs tracking-[0.3em] uppercase mb-12 text-center"
          >
            完全免費的靜修體驗
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative space-y-6"
          >
            <p className="text-stone-200 font-light leading-loose text-lg">
              僻靜篇由心靈導遊依據參加者的身心狀態，量身規劃的免費靜修體驗。
            </p>
            <p className="text-stone-400 font-light leading-loose">
              每個人的生命歷程都是獨特的，有時我們需要的不是標準化的課程，而是一段完全屬於自己的時光。心靈導遊會根據您當下的需求與狀態，設計最適合您的行程內容與節奏。
            </p>
            <p className="text-stone-400 font-light leading-loose">
              這份禮物沒有價格，因為它本來就不是商品。它是一個人在適當的時刻，願意把自己交給安靜的邀請。
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 第三段：四個核心（短句狀態式） ── */}
      <section className="py-24 px-6 bg-[#f7f4ef]">
        <div className="max-w-xl mx-auto">
          <motion.p
            {...fadeUp}
            className="text-stone-400 text-xs tracking-[0.3em] uppercase mb-16 text-center"
          >
            這趟旅程會給你的
          </motion.p>
          <div className="space-y-10">
            {pillars.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 items-start"
              >
                <span className="text-violet-400 font-mono text-xs tracking-widest mt-1 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-stone-700 font-light text-lg leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 第四段：邀請制的邏輯（情感高潮） ── */}
      <section className="py-28 px-6 bg-white">
        <motion.div
          {...fadeUp}
          className="max-w-xl mx-auto"
        >
          <div className="w-6 h-px bg-violet-400 mb-10" />
          <p className="text-2xl md:text-3xl font-light text-stone-700 leading-relaxed mb-8">
            若您對此行程有興趣，歡迎先參加我們其他的旅程體驗，與心靈導遊建立連結。
          </p>
          <p className="text-stone-500 font-light leading-loose text-lg">
            當時機成熟，邀請自然會到來。
          </p>
          <div className="mt-12">
            <Link to={createPageUrl("Programs")}>
              <Button variant="outline" className="border-stone-300 text-stone-600 hover:border-violet-400 hover:text-violet-700 rounded-xl px-8 py-5 font-light tracking-wider">
                <span className="flex items-center gap-2">
                  探索其他旅程 <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── 第五段：行程包含 + 規格 ── */}
      <section className="py-20 px-6 bg-[#f7f4ef]">
        <div className="max-w-3xl mx-auto">
          <motion.p
            {...fadeUp}
            className="text-stone-400 text-xs tracking-[0.3em] uppercase mb-14 text-center"
          >
            行程包含
          </motion.p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <ul className="space-y-3 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-violet-600" />
                    </div>
                    <span className="text-stone-600 font-light text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-violet-600 text-sm font-light">✦ 本行程完全免費</p>
              <p className="text-stone-400 text-xs font-light mt-1">* 交通費用請自理，可協助安排花東接駁</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="grid grid-cols-2 gap-5"
            >
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="w-3.5 h-3.5 text-violet-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-400">{label}</p>
                    <p className="text-sm font-medium text-stone-700">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}