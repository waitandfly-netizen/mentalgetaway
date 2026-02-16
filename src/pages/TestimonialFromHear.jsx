import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialFromHear() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://spiritvacation.wordpress.com/wp-content/uploads/2025/12/17504706_1649813105033368_7986789980133880707_o.webp?w=1024')"
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
            從「聽」開始
          </h1>
        </motion.div>
      </section>

      {/* Content */}
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
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              這次心靈假期，從「聽」開始，在心靈導遊的提醒下，
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              才頓然發現外頭的聲音小，是因為自己內在的聲音太大。
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              確實常活在被自己困住的煩惱中，
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              以為和自己對話、親密著煩惱，
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              實則沒有放開來與外在的世界接軌。
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              能夠放開來去聽，山、海、火車聲、鳥叫聲、鞭炮聲、音樂等，是很和諧舒服的，能納入存在的種種，自己就慢慢變大了。
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              在享受每個發生淡出及淡入的過程，也和地球連線了。
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              地球乘載著萬物，且不斷地轉動著，
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              於是一個片刻接著一個片刻，這是事實。
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              生活中習慣用直線的想法去做事，執著於順序及結果，
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              與真實的存在背道而馳，難怪辛苦~
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              在進行每個活動中，不管是煮飯、吃飯、組願力共同體，幾乎都是原動力在說話。好笑的是，當原動力出來還會想打壓它，不透過這些過程，怎麼看得清楚自己長什麼樣子….
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              當願力共同體的呈現，又花蝴蝶去了，
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              內心其實很排斥這種沒實質內涵、很空泛的展現，
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              但它很自然地又發生了。
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              我沒有真正去傾聽生命為何需要這樣的元素，
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              和我原動力、原創力、心靈願景的關係又是什麼，
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              禮物擺在眼前，是我面對它的態度不友善，
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-4">
              覺得原先的排斥真的很傻~
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}