import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialHometown() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://spiritvacation.wordpress.com/wp-content/uploads/2025/12/1975266_879221625441679_4962844343723837740_n.webp?w=768')"
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
            我的故鄉在這裡
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2015.11.19</p>
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
              不要問我從哪裡來~
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              我的故鄉在這裡~
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              這兩天，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              在這偌大的療癒性大草皮渡上了一個心靈假期，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              在這裡，我盡情的單獨與自己相處，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              躺在草地上，享受冬天裡難得的暖微風與陽光，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              讓身體休息、也讓心靈呼吸。
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              今天回到工作崗位上，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              仍不減昨天假期看見生命真實樣貌的清香，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              假面具的戴與不戴，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              即操之在手，不隨舊習氣的那樣沾黏，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              在人群裡，看到是單獨而不是孤獨，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              是從心裡冒出的力量、而不是受教束縛的忍讓。
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}