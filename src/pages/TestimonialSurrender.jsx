import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialSurrender() {
  const paragraphs = [
    "這次心靈假期讓我印象很深刻的是畫畫。靜心後休息時，我走到外澳海邊，迎著颱風接近時強勁的風，看著眼前拍打的浪花，再看看前方安靜、穩固存在的龜山島，最後是遠方海洋與天空無邊的寬闊。",
    "",
    "那時我感受到大自然的巨大與敬畏，也感受到它不受控制、甚至有些無情，卻又很包容。站在那裡，突然覺得自己很渺小，好像什麼都不用做，只要安靜地存在、慢慢感受，也許就是一種臣服。於是，我把這份感受畫了下來。",
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-emerald-900">
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">TESTIMONIAL</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            臣服於天地之間
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2026.8月宜蘭二日放空營(學員B)</p>
        </motion.div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-stone max-w-none"
          >
            {paragraphs.map((p, i) =>
              p === "" ? (
                <div key={i} className="h-4" />
              ) : (
                <p key={i} className="text-stone-600 font-light leading-loose text-lg mb-4">
                  {p}
                </p>
              )
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          >
            {[
              "https://media.base44.com/images/public/698fc983574e659f561934f1/97f13095a_LINE_ALBUM_202608_260817_4.jpg",
              "https://media.base44.com/images/public/698fc983574e659f561934f1/f17cd2f3a_LINE_ALBUM_202608_260817_6.jpg",
            ].map((src, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
                <img
                  src={src}
                  alt={`臣服於天地之間畫作 ${i + 1}`}
                  className="w-full h-auto object-contain rounded-xl max-h-[80vh]"
                />
              </div>
            ))}
          </motion.div>

          <Link
            to={createPageUrl('Testimonials')}
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mt-12 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>返回參加者心得</span>
          </Link>
        </div>
      </section>
    </div>
  );
}