import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Sun, Mountain, Sparkles } from 'lucide-react';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const values = [
    {
      icon: Heart,
      title: "真誠連結",
      description: "與自然、與自己、與他人建立真實的連結"
    },
    {
      icon: Leaf,
      title: "自然療癒",
      description: "透過大自然的力量，讓身心重新找回平衡"
    },
    {
      icon: Sun,
      title: "內在光明",
      description: "喚醒每個人內在本有的智慧與光芒"
    },
    {
      icon: Mountain,
      title: "穩定扎根",
      description: "在變動的世界中，建立穩固的內在力量"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1920&q=80')"
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
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            初心緣起
          </h1>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <Sparkles className="w-8 h-8 text-amber-500/60 mx-auto mb-8" />
            <h2 className="text-3xl font-light text-stone-800 mb-12 tracking-wide">
              我們的故事
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="prose prose-lg prose-stone mx-auto"
          >
            <div className="space-y-8 text-stone-600 font-light leading-loose text-center md:text-left">
              <p>
                在這個快節奏的時代，我們常常忘記停下腳步，聆聽內心的聲音。
                「心靈假期」源自於一個簡單的初心——希望每個人都能找到屬於自己的寧靜角落。
              </p>
              
              <p>
                我們相信，真正的休息不只是身體的放鬆，更是心靈的沉澱。
                在大自然的懷抱中，遠離城市的喧囂，讓思緒得以沉靜，讓靈魂得以呼吸。
              </p>
              
              <p>
                每一趟心靈假期，都是一次與自己對話的機會。
                無論是一日的短暫出走，或是數日的深度僻靜，
                我們都用心設計每一個環節，讓您能夠全然地放鬆與療癒。
              </p>
              
              <p>
                我們精選高品質的原型食物，滿足身體真正的需要；
                我們安排適度的身心活動，讓能量自然流動；
                我們創造安全的空間，讓您可以卸下所有的防備。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <p className="text-emerald-700/80 tracking-[0.3em] text-sm mb-4">OUR VALUES</p>
            <h2 className="text-3xl font-light text-stone-800 tracking-wide">
              核心價值
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="text-lg font-medium text-stone-800 mb-3">{value.title}</h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-emerald-900 text-white">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-5xl text-amber-200/30 mb-6">"</div>
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
            真實、美好的旅程，是一趟快樂的出走
          </blockquote>
          <div className="w-16 h-px bg-amber-200/40 mx-auto" />
        </motion.div>
      </section>
    </div>
  );
}