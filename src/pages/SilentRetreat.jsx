import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Mountain, Clock, Users, MapPin, Check, ArrowRight, Calendar, Leaf, Wind, Droplet } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function SilentRetreat() {
  const features = [
    {
      icon: Leaf,
      title: "靜默修習",
      description: "在寧靜中與內在自我對話，體驗深度的自我觀察"
    },
    {
      icon: Wind,
      title: "呼吸與冥想",
      description: "每日多次的冥想練習，建立穩定的內在基礎"
    },
    {
      icon: Droplet,
      title: "輕食淨化",
      description: "簡單純淨的飲食，讓身體得到深層的休息"
    },
    {
      icon: Mountain,
      title: "一對一引導",
      description: "資深老師提供個人化的修習指導"
    }
  ];

  const options = [
    {
      duration: "3天2夜",
      price: "依該次行程公告",
      description: "適合初次體驗靜默修習的夥伴"
    }
  ];

  const includes = [
    "資深引導老師全程帶領",
    "全程住宿",
    "活動期間全部餐食",
    "靜心活動與課程",
    "一對一引導時間",
    "旅遊平安保險"
  ];

  const schedule = [
    { time: "05:30", activity: "起床、盥洗" },
    { time: "06:00", activity: "晨間冥想" },
    { time: "07:00", activity: "輕瑜伽/身體覺察" },
    { time: "08:00", activity: "早餐（正念飲食）" },
    { time: "09:30", activity: "主題冥想課程" },
    { time: "11:00", activity: "自由修習時間" },
    { time: "12:00", activity: "午餐" },
    { time: "14:00", activity: "休息/個人時間" },
    { time: "15:30", activity: "行禪/自然漫步" },
    { time: "17:00", activity: "晚間冥想" },
    { time: "18:00", activity: "晚餐" },
    { time: "19:30", activity: "法談/分享（特定日）" },
    { time: "21:00", activity: "就寢" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')"
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
            <Mountain className="w-4 h-4 text-emerald-200" />
            <span className="text-white/90 text-sm tracking-wider">SILENT RETREAT</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide mb-4">
            僻靜篇
          </h1>
          <p className="text-xl text-stone-200/90 font-light">
            在寧靜中與內在自我對話
          </p>
        </motion.div>
      </section>

      {/* Quick Info */}
      <section className="py-12 px-6 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "時長", value: "3-7 天" },
              { icon: Users, label: "人數", value: "4-8 人" },
              { icon: MapPin, label: "地點", value: "花東僻靜場地" },
              { icon: Calendar, label: "梯次", value: "季節性開團" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm text-stone-400 mb-1">{item.label}</p>
                <p className="font-medium text-stone-800">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-emerald-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-emerald-200/80 text-sm">{item.description}</p>
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
                「僻靜篇」是我們最深度的旅程。這是一趟向內探索的旅程，
                在遠離塵囂的環境中，透過靜默與冥想，與真實的自己相遇。
              </p>
              <p>
                在僻靜期間，我們將大幅減少語言的使用，讓心能夠真正地安靜下來。
                這不是壓抑或強迫，而是給予自己一個難得的空間，
                不需要回應他人，不需要扮演任何角色，只是單純地存在。
              </p>
              <p>
                每日的作息規律而簡單：晨起冥想、輕柔的身體活動、正念飲食、
                自然漫步、以及充足的個人修習時間。資深老師會全程陪伴，
                並提供一對一的引導，協助您面對過程中可能出現的各種狀況。
              </p>
              <p>
                這趟旅程適合渴望深度轉化、或是想要建立穩定冥想習慣的夥伴。
                無論您是否有冥想經驗，只要帶著開放的心，都能在這裡找到屬於自己的收穫。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-stone-800 text-center mb-4">
            每日作息
          </h2>
          <p className="text-center text-stone-500 mb-16">參考行程，依實際情況可能微調</p>

          <div className="grid md:grid-cols-2 gap-4">
            {schedule.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4"
              >
                <span className="text-emerald-700 font-medium text-sm w-14">{item.time}</span>
                <span className="text-stone-600 text-sm">{item.activity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-stone-800 text-center mb-4">
            選擇您的旅程
          </h2>
          <p className="text-center text-stone-500 mb-16">依您的時間與需求，選擇適合的天數</p>

          <div className="max-w-md mx-auto">
            {options.map((option, index) => (
              <motion.div
                key={option.duration}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-8 bg-emerald-900 text-white"
              >
                <h3 className="text-2xl font-light mb-2">{option.duration}</h3>
                <p className="text-sm mb-6 text-emerald-200">
                  {option.description}
                </p>
                <p className="text-2xl font-light mb-8">
                  {option.price}
                </p>
                <Link to={createPageUrl("Contact")}>
                  <Button className="w-full py-6 rounded-xl bg-white text-emerald-800 hover:bg-amber-50">
                    立即報名
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-stone-800 mb-12">費用包含</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {includes.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
              >
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-stone-600 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-stone-400 text-sm">
            * 交通費用請自理，可協助安排花東接駁
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-emerald-900 text-white">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-light mb-6">
            準備好踏上這趟內在之旅了嗎？
          </h2>
          <p className="text-emerald-100/80 mb-10">
            如有任何問題，歡迎隨時與我們聯繫
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button className="bg-white text-emerald-800 hover:bg-amber-50 px-10 py-6 rounded-xl">
              <span className="flex items-center gap-2">
                聯繫我們
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}