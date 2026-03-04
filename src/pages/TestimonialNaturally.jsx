import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialNaturally() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://spiritvacation.wordpress.com/wp-content/uploads/2025/12/2017.08e5bf83e99d88e58187e69c9fefbc88e5ae9ce898adefbc89-1-1.jpg?w=1024')"
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
            自然而然
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2016.01.26</p>
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
              沉靜在笑靜心中，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              不用頭腦去思考，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              而將一切交給身體交給心，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              感受意識在一握一放之間，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              那些在意的酸酸的，苦苦的事，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              漸漸都不重要了，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              僅是簡單的存在於天地，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              消融在九印重力,反力和茶氣裡，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              享受愉悅，清明，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              舞動在濃稠的能量中，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              腦袋的控制感，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              緩緩化開，像水一樣，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              不管外界如何變化，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              隨時可以調整，跟上節奏，自然而然，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              如同水三態的變化順應著外在，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              並在變化中保有觀照，
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg mb-6">
              便不會迷失方向。
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}