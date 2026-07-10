import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Sun, Clock, Users, MapPin, Check, ArrowRight, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function OneDayRetreat() {
  const schedule = [
    { time: "09:00", activity: "集合" },
    { time: "10:00", activity: "開場引導" },
    { time: "10:30", activity: "森林健行-站樁體驗" },
    { time: "12:00", activity: "午餐休憩" },
    { time: "13:30", activity: "放空練習" },
    { time: "15:30", activity: "賦歸" }
  ];

  const includes = [
    "全程心靈導遊專業帶領",
    "活動行政費"
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80')"
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
            <Sun className="w-4 h-4 text-amber-200" />
            <span className="text-white/90 text-sm tracking-wider">DAY RETREAT</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide mb-4">
            一日放空行
          </h1>
          <p className="text-xl text-stone-200/90 font-light">
            在自然中深呼吸，讓身心回歸平靜
          </p>
        </motion.div>
      </section>

      {/* Quick Info */}
      <section className="py-12 px-6 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "時長", value: "約 8 小時" },
              { icon: Users, label: "人數", value: "6-12 人" },
              { icon: MapPin, label: "地點", value: "台北近郊山區" },
              { icon: Calendar, label: "梯次", value: "每月開團" }
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

      {/* Description */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-stone mx-auto"
          >
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12">
              關於這趟旅程
            </h2>
            <div className="text-stone-600 font-light leading-loose space-y-6">
              <p>
                為忙碌的都市人設計的輕旅程。
                在這一天裡，我們將暫時放下手機、放下工作、放下煩惱，
                全然地投入大自然的懷抱。
              </p>
              <p>
                在心靈導遊的引領下，
                好好地呼吸和放空，讓身體重新找到穩定軸心。
              </p>
              <p>
                你會發現～
                原來真正的放鬆，不必做很多事，只需要讓自己在當下。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-light text-stone-800 text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            行程安排
          </motion.h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-emerald-200 hidden md:block" />
            
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-16 flex-shrink-0 text-right hidden md:block">
                    <span className="text-emerald-700 font-medium">{item.time}</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-emerald-500 border-4 border-emerald-100 flex-shrink-0 mt-1 hidden md:block" />
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                    <span className="text-emerald-700 font-medium md:hidden">{item.time}</span>
                    <h3 className="font-medium text-stone-800">{item.activity}</h3>
                    {item.description && <p className="text-stone-500 font-light text-sm mt-1">{item.description}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
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
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-stone-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <p className="mt-8 text-stone-400 text-sm">
                * 交通費用請自理，我們會提供詳細的交通指引
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-2xl p-8 text-white"
            >
              <p className="text-emerald-200 text-sm mb-2">費用</p>
              <p className="text-4xl font-light mb-3">NT$ 1,200<span className="text-lg text-emerald-200">/人</span></p>
              <div className="mb-4">
                <p className="text-emerald-200 text-sm mb-1">場次</p>
                <p className="text-white font-light">7/24（五）｜8/28（五）</p>
              </div>
              
              <a href="https://forms.gle/KCYzFjRnw8CuoYKT6" target="_blank" rel="noopener noreferrer">
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