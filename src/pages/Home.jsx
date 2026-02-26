import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sun, Moon, Mountain, Sparkles } from 'lucide-react';

export default function Home() {
  const programs = [
    {
      title: "一日放空篇",
      subtitle: "Day Retreat",
      description: "在自然中深呼吸，讓身心回歸平靜",
      image: "https://spiritvacation.wordpress.com/wp-content/uploads/2024/03/img_7582.jpeg",
      link: "OneDayRetreat",
      icon: Sun
    },
    {
      title: "二日放空篇",
      subtitle: "Weekend Escape",
      description: "兩天一夜的心靈充電之旅",
      image: "https://spiritvacation.wordpress.com/wp-content/uploads/2024/03/line_album_240313_12.jpg",
      link: "TwoDayRetreat",
      icon: Moon
    },
    {
      title: "僻靜篇",
      subtitle: "Silent Retreat",
      description: "在寧靜中與內在自我對話",
      image: "https://spiritvacation.wordpress.com/wp-content/uploads/2024/02/s__381304862_0.jpg",
      link: "SilentRetreat",
      icon: Mountain
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/60" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <Sparkles className="w-10 h-10 text-amber-200/80 mx-auto mb-4" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">
            心靈假期
          </h1>
          <p className="text-xl md:text-2xl text-stone-100/90 font-light mb-4 tracking-widest leading-relaxed">
            好好生活，<br />
            <span className="inline-block pl-16">回到寧靜心靈的綠洲</span>
          </p>
          <div className="w-20 h-px bg-amber-200/60 mx-auto my-8" />
          <p className="text-xl md:text-2xl text-stone-200/80 font-light max-w-2xl mx-auto leading-relaxed tracking-widest">
            真實旅程，<br />
            <span className="inline-block pl-16">一趟美好滋養的出走</span>
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12"
          >
            <Link 
              to={createPageUrl("Programs")}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/20 transition-all duration-500 group"
            >
              <span className="tracking-wider">探索旅程</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Leaf className="w-8 h-8 text-emerald-700/60 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-12 tracking-wide">
              我們的理念
            </h2>
            <div className="space-y-8 text-stone-600 text-lg md:text-xl leading-relaxed font-light">
              <p>既能享受全然打開內在的歡愉</p>
              <p>又能深入獨處保有心靈寧靜自在</p>
              <div className="w-12 h-px bg-emerald-700/30 mx-auto my-10" />
              <p>品嘗高質地的原型食物</p>
              <p>滿足身體對營養真正的需要、排除負擔</p>
              <div className="w-12 h-px bg-emerald-700/30 mx-auto my-10" />
              <p>從無盡想像中的虛擬旅程轉為真切實際</p>
              <p>滋養生命的安定與養分</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 md:py-32 px-6 bg-stone-100/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-emerald-700/80 tracking-[0.3em] text-sm mb-4">2026 PROGRAMS</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-wide">
              心靈假期篇章
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Link 
                  to={createPageUrl(program.link)}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <program.icon className="w-6 h-6 text-amber-200/80 mb-3" />
                      <p className="text-amber-200/80 text-sm tracking-widest mb-2">{program.subtitle}</p>
                      <h3 className="text-2xl text-white font-light">{program.title}</h3>
                    </div>
                  </div>
                  <p className="text-stone-600 font-light leading-relaxed px-2">
                    {program.description}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-700 mt-4 px-2 group-hover:gap-4 transition-all">
                    <span className="text-sm tracking-wider">了解更多</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-amber-200 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-200 blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto text-center relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
            準備好踏上心靈之旅了嗎？
          </h2>
          <p className="text-emerald-100/80 text-lg font-light mb-10 leading-relaxed">
            讓我們一起，在大自然中找回內心的平靜與力量
          </p>
          <Link 
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-emerald-900 rounded-full hover:bg-amber-50 transition-all duration-300 group"
          >
            <span className="tracking-wider font-medium">聯繫我們</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}