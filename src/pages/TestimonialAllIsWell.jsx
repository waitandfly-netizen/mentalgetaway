import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialAllIsWell() {
  const paragraphs = [
    "登頂之際，海拔濾去了城市的喧囂，只留下大自然的白噪音，這份靜謐並非無聲，而是一種心理空間的轉換，讓人從瑣碎中抽離，向內觀照。細雨連結了天空與大地，龜山島在迷濛中若隱若現。此刻，「自己與地球是一體」的感受變得具體而真實，我們承接天空的降水，立足於厚實的大地，這種宏大的歸屬感令人安心。",
    "",
    "天氣的變化是大自然最直接的語言，無論晴雨，本質上都是自然運作的一環，當內心與環境合一，便不再抗拒雨天，也不執著晴天。",
    "「這一切都很好」，是對當下際遇的深度接納。",
    "",
    "這段旅程讓我體認到，「放空」並非停滯，而是高質量的「留白」，正是這份留白，讓身心得以重整，將山頂的靜、對陰晴的接納，融入每一天的生活。",
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')"
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
            一切都很好
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2025.11.01</p>
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
              ) : (
                <p key={i} className="text-stone-600 font-light leading-loose text-lg mb-4">
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