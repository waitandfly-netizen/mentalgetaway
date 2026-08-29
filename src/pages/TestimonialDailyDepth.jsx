import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialDailyDepth() {
  const sections = [
    {
      heading: "食物連結的小遊戲",
      paragraphs: [
        "現在太常外食了，食材本身對我來說好像並沒有很親近～",
        "那天很感謝有好好挑選了有能量的食材，透過食材連結小遊戲，很難得靜下來好好觸摸、聞一聞，覺得有比我想像的更豐富，真的有感受到不只是食物，而是有生命力的蔬菜。",
      ],
    },
    {
      heading: "不一樣的看海經驗",
      paragraphs: [
        "心靈導遊安排獨處的環節，我那時候選擇去海邊，感覺浪的頻率，一波一波襲來，因為颱風的關係，浪比平常高大許多，當我專注在那個浪上面的時候，有一種跟自己很有連結⋯我也感受到那個頻率還有大浪的震撼感。",
      ],
    },
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
            原來日常，可以感受得這麼深
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2026.8月宜蘭二日放空營(學員G)</p>
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
            {sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-2xl font-light text-emerald-800 tracking-wide mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-stone-600 font-light leading-loose text-lg mb-4">
                    {p}
                  </p>
                ))}
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