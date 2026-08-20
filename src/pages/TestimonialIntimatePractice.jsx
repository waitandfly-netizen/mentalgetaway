import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialIntimatePractice() {
  const intro = "一個人搭上火車，原以為只是在海邊住一晚的輕鬆假期，沒想到，這趟旅程和想像中很不一樣。";

  const sections = [
    {
      heading: "之一｜站樁",
      paragraphs: [
        "站樁時，感受重力往下扎根，也感受到自己被滋養著。那一刻，我真實地感覺自己活著。",
        "但躺下的剎那，關於死亡的悲傷突然襲來，我像孩子般大哭，那些壓抑已久的情緒被喚了出來。",
        "靜默之後，身體變輕了。我不知道還需要多久，但開始接受：原來我的悲傷，還沒有走完。",
      ],
    },
    {
      heading: "之二｜亢達里尼靜心",
      paragraphs: [
        "這是熟悉的靜心，過去總是用力地搖晃身體，這次卻練習等待，等待細微的震動自然升起，讓能量帶著身體舞動。",
        "第一次發現，原來不需要那麼用力。",
        "回想過去劇烈的舞動，我忍不住笑了：「以前是不是有點用演的呀？」",
        "原來，對待自己可以更細緻。我喜歡這種和自己親密的感覺，雖然還有些陌生。",
      ],
    },
    {
      heading: "之三｜直覺慢食",
      paragraphs: [
        "這些年，食物總在精準計算卡路里與失控吃零食之間擺盪，好久沒有真正感受食物。",
        "這次，我重新用五感去聞、去看、去品嚐。兩天裡，食物的香氣重新打開了我的嗅覺，也讓身體開始自然選擇真正想吃的東西。",
        "回家後，我減少了便利商店的微波食品，身體反而自然帶著我走進傳統市場。",
      ],
    },
  ];

  const gallery = [
    "https://media.base44.com/images/public/698fc983574e659f561934f1/24b4ae7a9_79594b09-eba8-41b4-be40-234bd06dc2b8.jpg",
    "https://media.base44.com/images/public/698fc983574e659f561934f1/14be903c7_LINE_ALBUM_202608_260812_2.jpg",
  ];

  const closing = [
    "心靈假期一下子就過去了。",
    "外澳的海因颱風激起巨浪，我心裡的小宇宙也跟著波瀾起伏。",
    "在那份震耳欲聾的寂靜裡，我實實在在地和自己待在一起。",
    "我喜歡這個特別的假期。",
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
            一場與自己的親密練習
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2026.8月宜蘭二日放空營(學員C)</p>
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
            <p className="text-stone-600 font-light leading-loose text-lg mb-10">{intro}</p>

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

            <div className="border-t border-stone-200 pt-8 mt-8">
              {closing.map((p, i) => (
                <p key={i} className="text-stone-600 font-light leading-loose text-lg mb-4">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {gallery.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`練習紀錄 ${i + 1}`}
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