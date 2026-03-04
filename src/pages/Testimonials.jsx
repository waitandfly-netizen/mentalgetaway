import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      title: "【從「聽」開始】",
      date: "2017.03.27",
      content: "這次心靈假期，從「聽」開始，在心靈導遊的提醒下，才頓然發現外頭的聲音小，是因為自己內在的聲音太大。確實如此，當我們靜下來聆聽，才能真正聽見...",
      link: "TestimonialFromHear"
    },
    {
      title: "【我的故鄉在這裡】",
      date: "2015.11.19",
      content: "不要問我從哪裡來～我的故鄉在這裡～這兩天，在這偌大的療癒性大草皮渡上了一個心靈假期，在這裡，我盡情地感受大自然的擁抱...",
      link: "TestimonialHometown"
    },
    {
      title: "【自然而然】",
      date: "2016.01.26",
      content: "沉靜在笑靜心中，不用頭腦去思考，而將一切交給身體交給心，感受意識在一握一放之間，那些在意的酸酸的，苦苦的，都在這過程中慢慢釋放...",
      link: "TestimonialNaturally"
    },
    {
      title: "【真實的快樂】",
      date: "2016.04.24",
      content: "全然投入每個當下、盡情享受所有發生，一步步貼近自己的愛、大家的愛⋯ 越往下紮根、越深入內在，向外的揮灑也越自在...",
      link: "TestimonialTrueHappiness"
    },
    {
      title: "【黑夜裡的自然律動】",
      date: "2017.04.04",
      content: "心靈導遊夜間帶我們去海邊體驗宇宙浩瀚，在漆黑的海邊我踩著海水，海水是深黑色的，好可怕。遠方的白浪，巨大的聲響，讓我感受到大自然的力量...",
      link: "TestimonialNightRhythm"
    },
    {
      title: "【接受自己的每個狀態】",
      date: "2017.09.15",
      content: "上個週末參加助人者心靈假期，來到朝思暮想的海邊-宜蘭外澳，過去在活動中跟人互動總會有卡卡的感覺，也許是連結到海的寬廣，內在無拘無束的孩子完全被釋放...",
      link: "TestimonialAcceptSelf"
    },
    {
      title: "【一切都很好】",
      date: "2025.11.01",
      content: "登頂之際，海拔濾去了城市的喧囂，只留下大自然的白噪音，這份靜謐並非無聲，而是一種心理空間的轉換，讓人從瑣碎中抽離，向內觀照...",
      link: "TestimonialAllIsWell"
    }
  ];



  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900" />
        
        <motion.div 
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">TESTIMONIALS</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            參加者心得
          </h1>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-white">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-stone-600 font-light text-lg leading-relaxed">
            心靈假期中，我們沒有固定行程，而是順著引導安住在當下，
          </p>
          <p className="text-stone-600 font-light text-lg leading-relaxed">
            每一個被好好經驗的片刻，都是一處風景。
          </p>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {testimonial.link ? (
                  <Link to={createPageUrl(testimonial.link)} className="block group">
                    <Quote className="w-8 h-8 text-emerald-200 mb-4" />
                    <h3 className="text-lg font-medium text-stone-800 mb-1 group-hover:text-emerald-700 transition-colors">{testimonial.title}</h3>
                    {testimonial.date && <p className="text-stone-400 text-xs mb-3 tracking-wider">{testimonial.date}</p>}
                    <p className="text-stone-600 font-light leading-relaxed text-sm mb-4">
                      {testimonial.content}
                    </p>
                    <span className="inline-flex items-center gap-2 text-emerald-700 text-sm group-hover:gap-3 transition-all">
                      閱讀更多 <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ) : (
                  <>
                    <Quote className="w-8 h-8 text-emerald-200 mb-4" />
                    <h3 className="text-lg font-medium text-stone-800 mb-1">{testimonial.title}</h3>
                    {testimonial.date && <p className="text-stone-400 text-xs mb-3 tracking-wider">{testimonial.date}</p>}
                    <p className="text-stone-600 font-light leading-relaxed text-sm">
                      {testimonial.content}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="py-20 px-6 bg-emerald-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "累積參加人次" },
              { number: "20+", label: "年服務經驗" },
              { number: "15000+", label: "累積教學時數" },
              { number: "∞", label: "回鍋參加者" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-light text-amber-200 mb-2">{stat.number}</p>
                <p className="text-emerald-100/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}