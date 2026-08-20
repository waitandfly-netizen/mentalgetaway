import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialTrueHappiness() {
  const paragraphs = [
    "全然投入每個當下、盡情享受所有發生，",
    "一步步貼近自己的愛、大家的愛…",
    "越往下紮根、越深入內在，",
    "向外的揮灑，越直覺創新。",
    "內在的自由度，如同大雁，翱翔於無涯邊際…",
    "一同慶祝歡笑、一同搭肩笑唱很真實，",
    "全然的動自然進入更深的靜也很真實，",
    "我們一起玩過的畫面，印烙在心…",
    "謝謝生命中這段珍貴的過程，",
    "在純粹的眼睛裡，",
    "看到每位夥伴的真實與自然，",
    "看見每個靈魂祂獨特的光芒…",
    "延續大夥共創的能量，回到生活裡，",
    "繼續當自己生命的主人，並創造更多真實的快樂。",
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
            真實的快樂
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2016.04.24</p>
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