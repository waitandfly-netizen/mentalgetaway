import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Clock, Quote } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import GuideActivities from '@/components/GuideActivities';

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
            backgroundImage: "url('https://media.base44.com/images/public/698fc983574e659f561934f1/9a94b38b9_.jpg')",
            backgroundPosition: "center 75%"
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

      {/* Voices about the Guide */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-emerald-700/70 tracking-[0.25em] text-xs mb-4">VOICES ABOUT THE GUIDE</p>
            <h2 className="text-2xl md:text-3xl font-light text-stone-800 leading-relaxed">
              如果用一句話形容心靈導遊……
            </h2>
          </motion.div>

          <div className="space-y-10">
            {[
              '明明講了沉重的事情，但卻被幽默的氛圍融化，哭笑間變得輕鬆～',
              '每當心裡的坎過不去，她不急著幫我解答，而是給出空間陪伴、提供方向，終於跨過去時的喜悅更深刻',
              '常常都會有一種她比我自己還要更在乎生命的蛻變',
              '有時候覺得她的想法無俚頭，但那份自由卻讓人覺得舒服',
              '總是被她深刻的同理支持到，原來被理解是這樣的感覺',
            ].map((line, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, delay: i * 0.15 }}
                className="relative"
              >
                <span className="absolute -top-3 -left-1 text-emerald-200/70 text-4xl font-light leading-none select-none">“</span>
                <p className="pl-7 text-lg md:text-xl text-stone-700 font-light leading-loose tracking-wide">
                  {line}
                </p>
                {i < 4 && <span className="block mt-10 h-px bg-stone-200" />}
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Introduction */}
      <section className="py-24 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 md:sticky md:top-28"
            >
              <div className="relative">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/325984cb6_BF23888F-18F5-4CBC-967A-C6BF097C7E21.jpg"
                  alt="丁靜如老師"
                  className="w-full rounded-sm shadow-md"
                />
                <span className="absolute -bottom-3 -right-3 w-16 h-16 border-r border-b border-emerald-300/70" />
              </div>
            </motion.div>

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-7"
            >
              <p className="text-emerald-700/70 tracking-[0.3em] text-xs mb-3">SPIRITUAL GUIDE</p>
              <h2 className="text-2xl md:text-3xl font-light text-stone-800 tracking-wide">心靈導遊</h2>
              <p className="text-xl md:text-2xl text-emerald-700 font-light mt-1 mb-6">丁靜如</p>
              <span className="block w-12 h-px bg-emerald-300 mb-8" />

              <div className="space-y-6 text-stone-600 font-light leading-loose text-[15px] md:text-base">
                <p>
                  在身心靈成長領域深耕二、三十年，始終相信，一個人的生命能量與心理健康，攸關其一生的幸福走向。當內在逐漸清明、建立正知正見，生命的方向與價值，也會自然浮現。
                </p>
                <p>
                  年輕時曾在美國水牛城與紐約從事兒童遊戲治療與成人諮商工作，回國後持續於醫院精神科、社福基金會、各級學校及社區，進行個別與團體的陪伴與輔導。二十多年來，始終走在人與生命相遇的現場，看見許多人在迷惘、困頓與生命轉折中，重新找回自己的力量。
                </p>
                <p>
                  在自身修練與陪伴他人的歷程裡，深刻體會到，真正的平靜並非來自沒有風浪，而是在風浪之中，依然能安住於自己。因此，也將這份體悟化為生命的分享，希望陪伴更多人，慢慢走進心靈的探索，尋得內在安定的力量，品嚐寧靜喜悅的平和狀態。
                </p>
              </div>

              {/* Highlight pull-quote */}
              <div className="mt-10 relative pl-6 md:pl-8">
                <span className="absolute left-0 top-0 bottom-0 w-px bg-emerald-400/60" />
                <Quote className="w-7 h-7 text-emerald-300 mb-4" />
                <p className="text-stone-700 font-light leading-loose text-[15px] md:text-base">
                  擅長用靈敏的幽默感，陪伴人走進那些不容易說出口的苦，重新看見困境中的可能性，開啟更寬廣、柔軟的心靈視野。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities Led */}
      <GuideActivities />

      {/* Closing note before credentials */}
      <section className="pb-12 px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-stone-600 font-light leading-relaxed text-lg"
        >
          心靈假期外，靜如陪伴很多人，走過不同的生命旅程，也收穫了各式禮物，如果你對於這些活動有所好奇～可以參考
          <a
            href="https://www.facebook.com/profile.php?id=100083027147942&locale=zh_TW"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-medium hover:text-emerald-800 underline decoration-emerald-300 underline-offset-4"
          >
            「圓滿心靈花園粉絲專頁」
          </a>
        </motion.p>
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