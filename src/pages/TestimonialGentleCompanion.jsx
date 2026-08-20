import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialGentleCompanion() {
  const paragraphs = [
    "這幾天回來之後，時不時會浮現在有外澳點點滴滴的畫面。雖然活動中經歷了激烈和平靜的環節，但感覺心裡有一塊溫柔的部分被觸動了。",
    "可以換個視野好好地看著自己，本來煩心的事情都變得比較無所謂。原來有好好陪伴到自己、照顧到自己的身心靈需求，是會這麼感動。",
    "很感謝自己有報名參加，可以跟大家共度美好的兩天一夜。儘管有遇到風雨，心裡也是溫暖平靜的。",
  ];

  const gallery = [
    "https://media.base44.com/images/public/698fc983574e659f561934f1/bd92731cd_98cc188d-5cd5-4536-9340-9e52104c6fd9.jpg",
    "https://media.base44.com/images/public/698fc983574e659f561934f1/9ce798ba9_LINE_ALBUM_202608_260817_1.jpg",
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
            好好陪伴自己，也是一種溫柔
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2026.8月宜蘭二日放空營(學員D)</p>
        </motion.div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-none"
          >
            {paragraphs.map((p, i) => (
              <p key={i} className="text-stone-600 font-light leading-loose text-lg mb-4">
                {p}
              </p>
            ))}

            <div className="mt-12">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {gallery.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`活動紀錄 ${i + 1}`}
                      className={`w-full h-full max-h-[420px] object-cover rounded-xl ${i === 0 ? 'object-top' : 'object-center'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
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