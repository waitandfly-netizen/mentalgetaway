import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Clock, Quote } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

export default function Guide() {
  const credentials = [
    "美國紐約州立大學社會工作碩士 MSW",
    "美國紐約州合格認證社工師 CSW"
  ];

  const currentRoles = [
    "國立暨南國際大學通識教育中心兼任講師",
    "國立暨南國際大學抒心社指導老師",
    "身心靈成長工作者",
    "心願學校校長"
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <SEOHead
        title="心靈導遊 — 心靈假期"
        description="心靈導遊丁靜如老師，在身心靈成長領域深作二、三十年，陪伴你走進內在的寧靜與覺察。"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('https://media.base44.com/images/public/698fc983574e659f561934f1/f2cde3b63_banner.png')",
            backgroundPosition: "center 60%"
          }}
        />
        
        <motion.div 
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">SPIRITUAL GUIDE</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            心靈導遊
          </h1>
        </motion.div>
      </section>

      {/* Guide Introduction */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/325984cb6_BF23888F-18F5-4CBC-967A-C6BF097C7E21.jpg" 
                alt="丁靜如老師"
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-light text-stone-800 mb-2">心靈導遊</h2>
              <p className="text-2xl text-emerald-700 font-medium mb-6">丁靜如</p>
              
              <p className="text-stone-600 font-light leading-relaxed mb-8">
                在身心靈成長領域深工作二、三十年，深知一個人的生命能量與心理健康，攸關其一生的幸福走向。當內在逐漸清明、建立正知正見，生命的方向與價值也會自然浮現。
              </p>
              
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                <Quote className="w-6 h-6 text-emerald-300 mb-3" />
                <p className="text-stone-700 italic leading-relaxed">
                  擅長用靈敏的幽默感，陪伴人走進那些不容易說出口的苦，重新看見困境中的可能性，開啟更寬廣、柔軟的心靈視野。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 px-6 bg-stone-100/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-medium text-stone-800">學經歷</h3>
              </div>
              <ul className="space-y-3">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span className="text-stone-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Current Roles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-medium text-stone-800">現任</h3>
              </div>
              <ul className="space-y-3">
                {currentRoles.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span className="text-stone-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Experience Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-emerald-600" />
              <span className="text-stone-700">身心靈活動帶領經驗</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-light text-emerald-700">20+</p>
                <p className="text-stone-500 text-sm">年經驗</p>
              </div>
              <div>
                <p className="text-4xl font-light text-emerald-700">15,000+</p>
                <p className="text-stone-500 text-sm">累積教學時數</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}