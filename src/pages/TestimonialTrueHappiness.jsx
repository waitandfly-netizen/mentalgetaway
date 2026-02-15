import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialTrueHappiness() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://spiritvacation.wordpress.com/wp-content/uploads/2025/12/2017.03e5bf83e99d88e58187e69c9fe5ae9ce898ad-1.jpg?w=1024')"
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
            真實的快樂
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
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              全然投入每個當下、盡情享受所有發生，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              一步步貼近自己的愛、大家的愛…
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              越往下紮根、越深入內在，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              向外的揮灑，越直覺創新。
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              內在的自由度，如同大雁，翱翔於無涯邊際…
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              一同慶祝歡笑、一同搭肩笑唱很真實，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              全然的動自然進入更深的靜也很真實，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              我們一起玩過的畫面，印烙在心…
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              謝謝生命中這段珍貴的過程，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              在純粹的眼睛裡，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              看到每位夥伴的真實與自然，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              看見每個靈魂祂獨特的光芒…
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              延續大夥共創的能量，回到生活裡，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              繼續當自己生命的主人，並創造更多真實的快樂。
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}