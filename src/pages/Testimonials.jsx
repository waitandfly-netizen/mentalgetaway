import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "陳小姐",
      program: "二日放空篇",
      content: "這是我第一次參加心靈假期，原本只是想要逃離工作壓力，沒想到收穫遠超預期。在森林中漫步時，我感受到前所未有的平靜。主辦方準備的每一餐都非常用心，讓我重新認識到「吃」可以是一種療癒。",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
    },
    {
      name: "林先生",
      program: "僻靜篇（5日）",
      content: "五天的靜默修習，徹底改變了我對生活的看法。原本以為會很難熬，但在引導老師的帶領下，我學會了如何與寧靜共處。回到城市後，發現自己更能專注當下，面對壓力也更有彈性了。",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
    },
    {
      name: "王小姐",
      program: "一日放空篇",
      content: "平常週末都在補眠中度過，這次嘗試了一日放空，發現原來只要一天的時間，就能讓身心完全充電。健行的路線很適合初學者，而且沿途的風景美得令人屏息。已經在期待下一次了！",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
    },
    {
      name: "張先生",
      program: "二日放空篇",
      content: "身為一個長期焦慮的人，我嘗試過很多方法，但這次的體驗給我的幫助最大。不是因為課程內容多特別，而是整個環境、氛圍都讓人自然而然地放鬆下來。晚上躺在星空下的那一刻，我感動得幾乎落淚。",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
    },
    {
      name: "李小姐",
      program: "僻靜篇（3日）",
      content: "一直以來都是在照顧別人，這是我第一次真正為自己安排的旅程。三天的時間，我終於能夠好好地和自己對話。感謝心靈假期團隊創造了這麼安全、舒適的空間，讓我可以卸下所有的武裝。",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80"
    },
    {
      name: "吳先生",
      program: "一日放空篇",
      content: "原本是被朋友拉來的，沒有抱太大期待，結果發現這種「慢下來」的體驗非常珍貴。尤其是午餐時分，大家安靜地品味每一口食物的感覺，讓我重新體會到生活中被忽略的美好。",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80')"
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
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">TESTIMONIALS</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            參加者心得
          </h1>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p 
            className="text-center text-stone-500 font-light max-w-2xl mx-auto mb-16 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            聽聽參加過心靈假期的夥伴們怎麼說
          </motion.p>

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
                <Quote className="w-8 h-8 text-emerald-200 mb-4" />
                <p className="text-stone-600 font-light leading-relaxed mb-6">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-stone-800">{testimonial.name}</p>
                    <p className="text-sm text-emerald-600">{testimonial.program}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
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
              { number: "500+", label: "累積參加人數" },
              { number: "98%", label: "滿意度" },
              { number: "50+", label: "成功舉辦場次" },
              { number: "3", label: "年服務經驗" }
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