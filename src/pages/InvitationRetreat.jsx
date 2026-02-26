import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Users, MapPin, Check, ArrowRight, Calendar, Heart, Compass, Leaf, Hand } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function InvitationRetreat() {
  const features = [
    {
      icon: Heart,
      title: "洗滌身心靈",
      description: "在僻靜中深度清理與釋放，重新找回內在平靜"
    },
    {
      icon: Compass,
      title: "靜心冥想",
      description: "每日多次的冥想練習，深化覺察與覺知"
    },
    {
      icon: Leaf,
      title: "淨化飲食",
      description: "清淡純淨的飲食安排，讓身體獲得深層休息"
    },
    {
      icon: Hand,
      title: "心靈導遊從旁支持",
      description: "資深心靈導遊全程陪伴與個別引導"
    }
  ];

  const includes = [
    "心靈導遊全程帶領",
    "全程住宿",
    "活動期間全部餐食",
    "靜心活動與課程",
    "一對一引導時間",
    "旅遊平安保險"
  ];

  const schedule = [
    { time: "06:00", activity: "起床、盥洗" },
    { time: "06:30", activity: "晨間靜心" },
    { time: "07:30", activity: "輕柔伸展/身體覺察" },
    { time: "08:30", activity: "早餐（正念飲食）" },
    { time: "10:00", activity: "主題靜心活動" },
    { time: "11:30", activity: "自由時間/自然漫步" },
    { time: "12:30", activity: "午餐" },
    { time: "14:00", activity: "午休/個人時間" },
    { time: "16:00", activity: "下午靜心活動" },
    { time: "17:30", activity: "傍晚散步/自由時間" },
    { time: "18:30", activity: "晚餐" },
    { time: "20:00", activity: "晚間分享/靜心" },
    { time: "21:30", activity: "就寢" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/9c4e700ba_IMG_20220923_150004.jpg')"
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
            <Sparkles className="w-4 h-4 text-violet-200" />
            <span className="text-white/90 text-sm tracking-wider">INVITATION ONLY</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide mb-4">
            僻靜篇
          </h1>
          <p className="text-xl text-stone-200/90 font-light">
            由心靈導遊邀請，為您量身打造的身心靈旅程
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
              { icon: Calendar, label: "舉辦", value: "不定期邀請制" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-6 h-6 text-violet-600 mx-auto mb-2" />
                <p className="text-sm text-stone-400 mb-1">{item.label}</p>
                <p className="font-medium text-stone-800">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-violet-900 text-white">
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
                <item.icon className="w-8 h-8 text-violet-300 mx-auto mb-4" />
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-violet-200/80 text-sm">{item.description}</p>
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
                「僻靜篇」是一趟特別的旅程。這不是開放報名的行程，
                而是由心靈導遊依據參加者的身心狀態，量身規劃的免費靜修體驗。
              </p>
              <p>
                每個人的生命歷程都是獨特的，有時我們需要的不是標準化的課程，
                而是一段完全屬於自己的時光。心靈導遊會根據您當下的需求與狀態，
                設計最適合您的行程內容與節奏。
              </p>
              <p>
                在這段僻靜時光中，您將有機會深度地洗滌身心靈，
                透過靜心冥想、淨化飲食、以及與大自然的連結，
                讓累積已久的疲憊與壓力得到釋放。心靈導遊會全程從旁支持，
                在您需要的時候提供引導與陪伴。
              </p>
              <p>
                這趟旅程不定期舉辦，如果您被邀請參加，
                那代表這正是您需要的時刻。請給自己這個機會，
                在花東的寧靜場地中，好好與自己相處。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-stone-800 text-center mb-4">
            每日作息參考
          </h2>
          <p className="text-center text-stone-500 mb-16">實際行程將依個人狀態彈性調整</p>

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
                <span className="text-violet-700 font-medium text-sm w-14">{item.time}</span>
                <span className="text-stone-600 text-sm">{item.activity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Invitation Info */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-12 text-center"
          >
            <Sparkles className="w-12 h-12 text-violet-600 mx-auto mb-6" />
            <h2 className="text-3xl font-light text-stone-800 mb-6">
              邀請制行程說明
            </h2>
            <div className="text-stone-600 font-light leading-loose space-y-4 max-w-2xl mx-auto">
              <p>
                僻靜篇採邀請制，由心靈導遊主動邀請合適的參加者。
                行程完全免費，時間與內容將依據個人狀態量身規劃。
              </p>
              <p className="text-sm text-violet-700 font-normal">
                若您對此行程有興趣，歡迎先參加我們其他的旅程體驗，
                與心靈導遊建立連結。當時機成熟，邀請自然會到來。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-stone-800 mb-12">行程包含</h2>
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
                <Check className="w-4 h-4 text-violet-600" />
                <span className="text-stone-600 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-violet-700 font-medium">
            ✨ 本行程完全免費
          </p>
          <p className="mt-2 text-stone-400 text-sm">
            * 交通費用請自理，可協助安排花東接駁
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-violet-900 text-white">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-light mb-6">
            想了解更多關於心靈假期？
          </h2>
          <p className="text-violet-100/80 mb-10">
            歡迎先體驗我們的其他旅程，或直接與我們聯繫
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Programs")}>
              <Button className="bg-white text-violet-800 hover:bg-violet-50 px-10 py-6 rounded-xl">
                查看其他旅程
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-violet-800 border-2 border-white text-white hover:bg-violet-700 px-10 py-6 rounded-xl">
                <span className="flex items-center gap-2">
                  聯繫我們
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}