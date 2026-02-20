import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Moon, Clock, Users, MapPin, Check, ArrowRight, Calendar, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function TwoDayRetreat() {
  const schedule = {
    day1: [
      { time: "10:00", activity: "抵達與安頓", description: "認識環境，讓身心慢慢沉靜" },
      { time: "11:00", activity: "開場儀式", description: "團體介紹，設定意圖" },
      { time: "12:30", activity: "午餐時光", description: "享用在地食材製作的健康餐食" },
      { time: "14:00", activity: "森林浴體驗", description: "深度森林漫步，喚醒五感" },
      { time: "17:00", activity: "自由時間", description: "休息、閱讀或獨處" },
      { time: "18:30", activity: "晚餐", description: "溫暖的團體用餐時光" },
      { time: "20:00", activity: "星空分享", description: "在星空下分享故事與心情" }
    ],
    day2: [
      { time: "06:30", activity: "晨間冥想", description: "迎接新的一天（自由參加）" },
      { time: "08:00", activity: "早餐", description: "營養均衡的晨間能量" },
      { time: "09:30", activity: "身心覺察課程", description: "溫和的身體活動與呼吸練習" },
      { time: "12:00", activity: "午餐", description: "最後一餐的美好時光" },
      { time: "13:30", activity: "結束儀式", description: "整合收穫，帶著祝福回家" },
      { time: "15:00", activity: "賦歸", description: "滿載能量，回到日常" }
    ]
  };

  const includes = [
    "專業引導老師全程帶領",
    "住宿一晚",
    "活動期間全部餐食",
    "所有課程與活動費用",
    "旅遊平安保險"
  ];

  const highlights = [
    { icon: Star, title: "深度森林浴", desc: "專業引導的森林療癒體驗" },
    { icon: Moon, title: "星空時光", desc: "在自然中與星空對話" },
    { icon: Star, title: "精緻餐食", desc: "在地食材健康料理" },
    { icon: Star, title: "舒適住宿", desc: "精選自然環境民宿" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1476673160081-cf065f5c1278?w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/30 to-stone-900/60" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
            <Moon className="w-4 h-4 text-indigo-200" />
            <span className="text-white/90 text-sm tracking-wider">WEEKEND ESCAPE</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide mb-4">
            二日放空篇
          </h1>
          <p className="text-xl text-stone-200/90 font-light">
            兩天一夜的心靈充電之旅
          </p>
        </motion.div>
      </section>

      {/* Quick Info */}
      <section className="py-12 px-6 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "時長", value: "2天1夜" },
              { icon: Users, label: "人數", value: "8-15 人" },
              { icon: MapPin, label: "地點", value: "宜蘭山區民宿" },
              { icon: Calendar, label: "梯次", value: "每月 1-2 梯" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                <p className="text-sm text-stone-400 mb-1">{item.label}</p>
                <p className="font-medium text-stone-800">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6 bg-indigo-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-8 h-8 text-indigo-300 mx-auto mb-4" />
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-indigo-200/80 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12">
              關於這趟旅程
            </h2>
            <div className="text-stone-600 font-light leading-loose space-y-6">
              <p>
                「二日放空篇」是我們最受歡迎的旅程之一。
                透過兩天一夜的完整體驗，讓您有足夠的時間真正地「慢下來」。
              </p>
              <p>
                第一天，我們將透過深度的森林浴體驗，讓身心慢慢沉靜。
                傍晚時分，在溫暖的晚餐後，我們會在星空下分享彼此的故事。
                這是一個安全的空間，您可以選擇傾聽，也可以選擇分享。
              </p>
              <p>
                第二天清晨，我們邀請您一起迎接日出，進行溫和的冥想練習。
                早餐後的身心覺察課程，會帶領您更深入地認識自己的身體與情緒。
                在結束儀式中，我們將一起整合這趟旅程的收穫。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-stone-800 text-center mb-16">
            行程安排
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Day 1 */}
            <div>
              <h3 className="text-xl font-medium text-indigo-700 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-sm">1</span>
                第一天
              </h3>
              <div className="space-y-4">
                {schedule.day1.map((item, index) => (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-indigo-600 font-medium text-sm w-14 flex-shrink-0">{item.time}</span>
                      <div>
                        <h4 className="font-medium text-stone-800 text-sm">{item.activity}</h4>
                        <p className="text-stone-500 text-xs mt-1">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div>
              <h3 className="text-xl font-medium text-indigo-700 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-sm">2</span>
                第二天
              </h3>
              <div className="space-y-4">
                {schedule.day2.map((item, index) => (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-indigo-600 font-medium text-sm w-14 flex-shrink-0">{item.time}</span>
                      <div>
                        <h4 className="font-medium text-stone-800 text-sm">{item.activity}</h4>
                        <p className="text-stone-500 text-xs mt-1">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-stone-800 mb-8">費用包含</h2>
              <ul className="space-y-4">
                {includes.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span className="text-stone-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-8 text-stone-400 text-sm">
                * 交通費用請自理，可協助安排共乘
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-2xl p-8 text-white"
            >
              <p className="text-indigo-200 text-sm mb-2">費用</p>
              <p className="text-4xl font-light mb-4">NT$ 6,800<span className="text-lg text-indigo-200">/人</span></p>
              <p className="text-indigo-100/80 text-sm mb-2">早鳥優惠 NT$ 5,800（活動前30天報名）</p>
              <p className="text-indigo-100/80 text-sm mb-8">雙人同行 NT$ 6,200/人</p>
              
              <Link to={createPageUrl("Contact")}>
                <Button className="w-full bg-white text-indigo-800 hover:bg-amber-50 py-6 rounded-xl">
                  <span className="flex items-center gap-2">
                    立即報名
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}