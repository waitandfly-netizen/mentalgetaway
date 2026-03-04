import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialNightRhythm() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://spiritvacation.wordpress.com/wp-content/uploads/2025/12/e696b0e5a29ee6a899e9a18c-3.jpg?w=1024')"
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
            黑夜裡的自然律動
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2017.04.04</p>
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
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              心靈導遊夜間帶我們去海邊體驗宇宙浩瀚，在漆黑的海邊我踩著海水，海水是深黑色的，好可怕。
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              遠方的白浪，巨大的一股能量即將襲來。
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              我看著腳下的黑水，瞬間被一股巨大的能量給吸走，迎接而來的是白浪衝擊。
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              浪花碎後，白碎浪點綴在黑水上，慢慢相融，黑水白浪一來一往的，我發現這就是太極(老祖宗的智慧啊啊啊)。
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              我吃驚一直看著這樣的循環發生，這個宇宙就是這樣運行的嗎？
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              抗衡的兩股能量，如果有一股失衡的話，就不會是現在這樣子。
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              我必須跟著海水舞動，否則我就會跌倒，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              音樂性，同頻共振，好像有點感覺了。
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}