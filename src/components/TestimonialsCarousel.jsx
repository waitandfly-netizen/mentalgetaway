import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const testimonials = [
  {
    content: "這是我第三次參加心靈假期，也是享受到身心靈都幸福滿滿的心靈假期！！發覺我內心更開放的同時，我接收到的愛的能量也就更多了，取決於自己決定要不要投入其中。",
    author: "Ting"
  },
  {
    content: "過往參加心靈假期，第一印象就是舒服乾淨的空間與氛圍，更神奇的是⋯心靈導遊總能透過空間、環境支持著我們，回到心裡的家～",
    author: "Joe"
  },
  {
    content: "過去在活動中跟人互動總會有卡卡的感覺，也許是連結到海的寬廣，內在無拘無束的孩子完全被釋放，沒有應該如何，不需小心翼翼，接受‧滿足自己的每一個狀態。",
    author: "Jullien"
  },
  {
    content: "順著心靈導遊的引導，回到和自己相處的寧靜中，感受身體的每個部分漸漸放鬆，在觀照的燈光下，看著洩出的能量，一點一滴補回來，精神與體能回復到令人舒適的狀態。",
    author: "Yun"
  },
  {
    content: "以前對度假的認知，就是去吃大餐、小吃，跑很多景點，拍美照。去了幾次的心靈假期，發現假期有不一樣的可能性。在這個快速、量產的時代，不用目標取向的過生活～當遇見自己時，會會心一笑～",
    author: "Yi"
  }
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(prev => (prev + 1) % testimonials.length);

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-emerald-100/40 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-amber-100/30 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-emerald-700/70 tracking-[0.35em] text-xs mb-3">VOICES FROM THE HEART</p>
          <h2 className="text-2xl md:text-3xl font-light text-stone-800 tracking-wide">參加者心聲</h2>
          <div className="w-8 h-px bg-emerald-600/40 mx-auto mt-5" />
        </div>

        {/* Card */}
        <div className="relative">
          {/* Large decorative quote mark */}
          <div className="absolute -top-6 left-6 text-8xl text-emerald-200/60 font-serif leading-none select-none pointer-events-none">"</div>

          <div className="bg-white rounded-3xl shadow-sm border border-stone-100 px-10 py-12 md:px-16 md:py-14">
            <div className="min-h-[160px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-center"
                >
                  <p className="text-stone-600 text-lg md:text-xl font-light leading-[2] tracking-wide">
                    {testimonials[current].content}
                  </p>
                  <div className="mt-8 flex items-center justify-center gap-3">
                    <div className="w-8 h-px bg-emerald-400/60" />
                    <p className="text-emerald-700 tracking-[0.2em] text-sm font-light">
                      {testimonials[current].author}
                    </p>
                    <div className="w-8 h-px bg-emerald-400/60" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Read More Link */}
        <div className="text-center mt-6">
          <Link
            to={createPageUrl('Testimonials')}
            className="inline-flex items-center gap-2 text-emerald-700 text-sm tracking-wider hover:gap-4 transition-all duration-300 group"
          >
            <span>閱讀更多心得</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-400 ${
                  i === current
                    ? 'bg-emerald-700 w-5 h-1.5'
                    : 'bg-stone-300 w-1.5 h-1.5 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}