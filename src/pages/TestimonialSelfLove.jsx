import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialSelfLove() {
  const paragraphs = [
    "參加心靈假期的感覺真好，嚐到這美好滋味，深刻感覺自己是多麼的需要自由、放鬆，原來自己需要好多愛，永遠不嫌多～",
    "平常惰性太強，加上日子繁忙，一天一天過去，忽略好好善待自己，都要等到快枯萎了，才想起來～有很多方法可以好好愛自己。",
    "對於食材的連線印象深刻，因為以往都不知道要怎麼挑選食材，這次體驗摸一摸和它培養感情，感受它的能量，一邊感覺一邊覺得這顆蘋果真是越看越可愛，不知不覺，和它互動中，好像覺得已經吸收了它的養分……",
    "發現以前對於看不順眼、不擅長的事情，會非常抗拒討厭，這次比較能專注在自己身上，就像心輪靜心一樣，一直專注在指尖，雖然有跟這個世界連結，但最終還是回到自己往內看。",
    "不順眼的事就像一面鏡子，回過頭來問問自己在乎的是什麼？觸發了什麼？",
    "不擅長的事，以前常常逃走，因為怕做不好，但今天在做菜時，身邊很多人提醒：沒關係、沒關係，再調味就好，沒熟再蒸一下就好～～給出許多的愛，我也可以這樣愛自己，包容自己。",
    "感謝天地，原本有點擔心颱風，但這樣的天氣真是舒服，也不至於有危險；感謝主辦單位，每一年辦理心靈假期，服務著大家，感覺被照顧；感謝靜如的愛 智慧與耐心，給予我們那麼好的能量，耐心陪伴我們成長。",
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
            對自己的愛永遠不嫌多
          </h1>
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