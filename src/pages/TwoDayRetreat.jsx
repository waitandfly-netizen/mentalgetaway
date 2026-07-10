import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Moon, Clock, Users, MapPin, Check, ArrowRight, Calendar, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function TwoDayRetreat() {
  const schedule = {
    day1: [
      { time: "10:00", activity: "安頓身心、卸下疲累", description: "" },
      { time: "12:30", activity: "享用午餐", description: "" },
      { time: "14:00", activity: "靜心冥想、身心紓壓", description: "" },
      { time: "18:30", activity: "共煮、共食", description: "" },
      { time: "20:00", activity: "心靈派對", description: "" }
    ],
    day2: [
      { time: "06:30", activity: "晨間靜心、品茗時光", description: "" },
      { time: "08:00", activity: "享用早餐", description: "" },
      { time: "09:30", activity: "靜心冥想、身心淨化", description: "" },
      { time: "12:00", activity: "享用午餐", description: "" },
      { time: "13:30", activity: "交流分享、打包收穫", description: "" },
      { time: "16:00", activity: "賦歸", description: "" }
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
            二日放空營
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
                「二日放空營」是我們最受歡迎的旅程之一。
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-stone-800 text-center mb-16">
            行程導覽
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "放鬆引導｜芳香療癒",
              "直覺慢食｜獨處漫步",
              "晨間站樁｜品茶冥想",
              "舞動身心｜舒緩瑜伽"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-center text-center"
              >
                <span className="text-stone-700 font-light">▪︎ {item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Includes */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-stone-800 mb-8 text-center">費用包含</h2>
            <ul className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {includes.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="text-stone-600">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-stone-400 text-sm text-center">
              * 交通費用請自理，可協助安排共乘
            </p>
          </div>

          {/* Sessions */}
          <h2 className="text-3xl font-light text-stone-800 mb-10 text-center">2026 梯次與費用</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Session 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-indigo-300" />
                <p className="text-indigo-200 text-sm tracking-wider">第一梯次</p>
              </div>
              <h3 className="text-2xl font-light mb-1">08/08 ~ 08/09</h3>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-indigo-300" />
                <p className="text-indigo-200 text-sm">宜蘭場</p>
              </div>

              <div className="space-y-2 mb-6 border-t border-indigo-700 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200 text-sm">原價</span>
                  <span className="text-indigo-200 line-through text-sm">NT$ 6,800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">早鳥優惠 <span className="text-indigo-300 text-xs font-normal">（7/19前）</span></span>
                  <span className="text-white font-medium text-xl">NT$ 6,500</span>
                </div>

              </div>

              <a href="https://forms.gle/6q2nmZ8anrPKFN5F8" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-white text-indigo-800 hover:bg-amber-50 py-6 rounded-xl">
                  <span className="flex items-center gap-2">
                    立即報名
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </a>
            </motion.div>

            {/* Session 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-emerald-300" />
                <p className="text-emerald-200 text-sm tracking-wider">第二梯次</p>
              </div>
              <h3 className="text-2xl font-light mb-1">12/12 ~ 12/13</h3>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-emerald-300" />
                <p className="text-emerald-200 text-sm">南投場</p>
              </div>

              <div className="space-y-2 mb-6 border-t border-emerald-700 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200 text-sm">原價</span>
                  <span className="text-emerald-200 line-through text-sm">NT$ 6,800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">早鳥優惠 <span className="text-emerald-300 text-xs font-normal">（10/31前）</span></span>
                  <span className="text-white font-medium text-xl">NT$ 5,800</span>
                </div>

              </div>

              <a href="https://forms.gle/6q2nmZ8anrPKFN5F8" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-white text-emerald-800 hover:bg-amber-50 py-6 rounded-xl">
                  <span className="flex items-center gap-2">
                    立即報名
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}