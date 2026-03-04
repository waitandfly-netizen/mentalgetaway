import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialAcceptSelf() {
  const paragraphs = [
    "上個週末參加助人者心靈假期，",
    "來到朝思暮想的海邊-宜蘭外澳，",
    "過去在活動中跟人互動總會有卡卡的感覺，",
    "也許是連結到海的寬廣，",
    "內在無拘無束的孩子完全被釋放，",
    "享受為自己而跳的迎賓舞中，",
    "享受在海邊和伙伴打水仗，",
    "享受一起合作完成料理、",
    "沒有應該如何，",
    "不需小心翼翼，",
    "接受.滿足自己的每一個狀態。",
    "",
    "玩累了，",
    "順著心靈導遊的引導，",
    "回到和自己相處的寧靜中，",
    "感受身體的每個部分漸漸放鬆，",
    "在觀照的燈光下，",
    "看著洩出的能量，",
    "一點一滴補回來，",
    "精神與體能回復到令人舒適的狀態。",
    "",
    "第二天早上出發看日出，",
    "剛開始等待太陽升起時，",
    "就像平常生活中的狀態一樣，",
    "抱著期待和有所求，",
    "一直用力地看著海平線，",
    "只想捕捉升起的那瞬間，",
    "此時心靈導遊的話傳入耳中，",
    "",
    "「是日出重要，還是看日出的人重要？」",
    "",
    "當然兩個都重要，",
    "然而沒有看日出的人這個主體存在，",
    "日出這個客體意義也就不大了，",
    "與其浪費精力在用力等，",
    "閉上眼，放鬆下來，",
    "感受海浪的拍打聲、海風輕輕地吹過身體的每一寸，",
    "睜開眼睛橘紅色的太陽正緩緩升起，",
    "無所求反而能迎接生命中的每個驚喜時刻。",
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">TESTIMONIAL</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            接受自己的每個狀態
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2017.09.15</p>
        </motion.div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to={createPageUrl('Testimonials')}
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>返回參加者心得</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-stone max-w-none"
          >
            {paragraphs.map((p, i) =>
              p === "" ? (
                <div key={i} className="h-4" />
              ) : p.startsWith("「") ? (
                <p key={i} className="text-emerald-700 font-medium leading-loose text-lg mb-2 pl-4 border-l-4 border-emerald-200">
                  {p}
                </p>
              ) : (
                <p key={i} className="text-stone-600 font-light leading-loose text-lg mb-2">
                  {p}
                </p>
              )
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}