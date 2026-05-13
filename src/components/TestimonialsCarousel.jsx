import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-center text-emerald-700/80 tracking-[0.3em] text-sm mb-12">VOICES</p>

        <div className="relative flex items-center gap-4">
          <button
            onClick={prev}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:text-emerald-700 hover:border-emerald-300 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 overflow-hidden min-h-[180px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center w-full"
              >
                <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed mb-6">
                  「{testimonials[current].content}」
                </p>
                <p className="text-emerald-700 tracking-widest text-sm">
                  —— {testimonials[current].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:text-emerald-700 hover:border-emerald-300 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-emerald-700 w-4' : 'bg-stone-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}