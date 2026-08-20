import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialConnection() {
  const paragraphs = [
    "第一天下午的笑靜心，我躺在地上，心裡忍不住想：「到底要笑多久啊？我真的笑不出來。」就在這時，耳邊傳來先生的笑聲，聽著聽著，我竟然也被感染，不由自主地大笑起來。",
    "那瞬間，我突然好想牽先生的手。靜如笑著提醒：「不要碰先生。」雖然只是一句玩笑話，卻讓我發現：「喔，原來我好希望和他連結。」",
    "笑著笑著，身旁也傳來哭聲，我默默流下幾滴眼淚。沒有悲傷，也不急著找答案，只是靜靜感受著。",
    "進到獨處環節，原本以為自己會很想和先生在一起，沒想到，一個人的時間裡，我發現了一件很重要的事：我可以自己一個人。",
    "後來，我獨自走到外澳海邊，看著浪花一次次拍向沙灘，也看著追逐海浪的人群。明明是一個人，卻沒有感覺到孤單。",
    "原來，連結不只有牽著一個人的手。",
    "有時是和愛的人連結，有時是和自己連結；有時，只是安靜地站在世界裡，感受眼前的一切。",
    "而那一刻，我好像都感受到了。",
  ];

  const image = "https://media.base44.com/images/public/698fc983574e659f561934f1/1505450ff_18174472-f7bf-4da2-b334-12ecac6914e6.jpg";

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
            感受與自己、與世界的連結
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2026.8月宜蘭二日放空營（學員E）</p>
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
                <img
                  src={image}
                  alt="感受與自己、與世界的連結"
                  className="w-full max-h-[70vh] object-contain rounded-xl"
                />
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