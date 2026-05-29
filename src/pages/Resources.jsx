import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, X, Leaf, Coffee, PersonStanding, Mountain, CloudRain, Users } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const spots = [
  {
    id: 1,
    name: "擎天崗",
    emoji: "🌿",
    color: "bg-emerald-600",
    borderColor: "border-emerald-600",
    textColor: "text-emerald-700",
    bgLight: "bg-emerald-50",
    description: "遼闊草原，適合放空與深呼吸",
    time: "清晨／傍晚",
    type: "獨處點",
    detail: "擎天崗草原一望無際，微風拂來，是放空心靈的絕佳所在。清晨的薄霧與傍晚的金光，讓人忘卻城市的喧囂，只感受當下的呼吸與寧靜。",
    x: "42%",
    y: "18%"
  },
  {
    id: 2,
    name: "冷水坑",
    emoji: "♨️",
    color: "bg-orange-500",
    borderColor: "border-orange-500",
    textColor: "text-orange-600",
    bgLight: "bg-orange-50",
    description: "溫泉步道，氣氛靜謐，適合慢走與觀察身體",
    time: "上午",
    type: "慢走路線",
    detail: "冷水坑以溫泉與硫磺地形著名，步道輕緩，適合一邊走路一邊感受身體的每個步伐，讓思緒隨著腳步慢慢沉澱。",
    x: "62%",
    y: "28%"
  },
  {
    id: 3,
    name: "二子坪",
    emoji: "🌲",
    color: "bg-teal-600",
    borderColor: "border-teal-600",
    textColor: "text-teal-700",
    bgLight: "bg-teal-50",
    description: "平緩步道與自然景色，適合獨處與散心",
    time: "上午／平日",
    type: "獨處點",
    detail: "二子坪步道全程平緩無障礙，被茂密森林環繞。平日人少，非常適合一個人慢慢走，靜靜地與自己相處，聆聽鳥鳴與風聲。",
    x: "36%",
    y: "38%"
  },
  {
    id: 4,
    name: "夢幻湖",
    emoji: "🪷",
    color: "bg-violet-600",
    borderColor: "border-violet-600",
    textColor: "text-violet-700",
    bgLight: "bg-violet-50",
    description: "湖畔寧靜，適合靜心、寫日記或發呆",
    time: "平日／陰天",
    type: "獨處點",
    detail: "夢幻湖是台灣特有水生植物台灣水韭的家，湖面平靜如鏡。陰天時的夢幻湖更添神秘感，坐在湖畔，帶著日記，讓文字承接內心的流動。",
    x: "30%",
    y: "62%"
  },
  {
    id: 5,
    name: "小油坑",
    emoji: "🌋",
    color: "bg-amber-600",
    borderColor: "border-amber-600",
    textColor: "text-amber-700",
    bgLight: "bg-amber-50",
    description: "地熱景觀，適合感受大自然的力量",
    time: "上午",
    type: "眺望點",
    detail: "小油坑的噴氣孔與硫磺地形充滿原始力量，眺望台北盆地視野絕佳。在這裡感受地球的呼吸，讓自然的能量為你充電。",
    x: "62%",
    y: "52%"
  }
];

const categories = [
  { icon: Users, label: "獨處點", desc: "擎天崗、二子坪、夢幻湖" },
  { icon: Coffee, label: "喝茶點", desc: "草山行館、豆留森林、山上人家、山仔后咖啡" },
  { icon: PersonStanding, label: "慢走路線", desc: "冷水坑步道、擎天崗環線、二子坪步道" },
  { icon: Mountain, label: "眺望點", desc: "擎天崗、七星山步道、大屯山觀景台" },
  { icon: CloudRain, label: "雨天備案", desc: "草山行館、豆留森林、陽明山美軍宿舍群" },
];

export default function Resources() {
  const [activeSpot, setActiveSpot] = useState(null);

  return (
    <div className="min-h-screen bg-stone-50">
      <SEOHead
        title="資源分享 — 陽明山靜心地圖"
        description="心靈假期為你整理陽明山靜心地圖，放慢腳步，找到屬於你的安靜角落。"
      />

      {/* Hero */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-emerald-50 to-stone-50 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <Leaf className="w-8 h-8 text-emerald-600/60 mx-auto mb-6" />
          <p className="text-emerald-700/70 tracking-[0.35em] text-xs mb-3">RESOURCES</p>
          <h1 className="text-3xl md:text-5xl font-light text-stone-800 tracking-wide mb-4">資源分享</h1>
          <div className="w-8 h-px bg-emerald-600/40 mx-auto mb-6" />
          <p className="text-stone-500 font-light leading-relaxed">放慢腳步，找到屬於你的安靜角落</p>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light text-stone-800 text-center mb-3 tracking-wide"
          >
            陽明山靜心地圖
          </motion.h2>
          <p className="text-center text-stone-400 font-light text-sm mb-10">點擊地點標記，探索每個靜心角落</p>

          {/* Map with pins */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-100">
            <img
              src="https://media.base44.com/images/public/698fc983574e659f561934f1/9dc6a6e82_120A7A5D-5078-4A09-B9C8-33F33C47787E.png"
              alt="陽明山靜心地圖"
              className="w-full h-auto block"
            />

            {/* Interactive pins */}
            {spots.map((spot, i) => (
              <motion.button
                key={spot.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                onClick={() => setActiveSpot(activeSpot?.id === spot.id ? null : spot)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group`}
                style={{ left: spot.x, top: spot.y }}
              >
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative w-10 h-10 rounded-full ${spot.color} shadow-xl flex items-center justify-center text-white font-bold text-sm border-[3px] border-white`}
                  style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.25)' }}
                >
                  {spot.id}
                  {/* Outer glow ring */}
                  <span className={`absolute -inset-1 rounded-full border-2 border-white/60`} />
                  {/* Pulse ring */}
                  <span className={`absolute inset-0 rounded-full ${spot.color} opacity-30 animate-ping`} />
                </motion.div>
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-white rounded-xl shadow-md text-xs text-stone-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-stone-100">
                  {spot.name}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Spot Detail Panel */}
          <AnimatePresence>
            {activeSpot && (
              <motion.div
                key={activeSpot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className={`mt-6 ${activeSpot.bgLight} border ${activeSpot.borderColor} rounded-3xl p-6 md:p-8 relative`}
              >
                <button
                  onClick={() => setActiveSpot(null)}
                  className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${activeSpot.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                    {activeSpot.id}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className={`text-xl font-light ${activeSpot.textColor} tracking-wide`}>{activeSpot.name}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full bg-white/70 ${activeSpot.textColor} border ${activeSpot.borderColor} border-opacity-30`}>
                        {activeSpot.type}
                      </span>
                    </div>
                    <p className="text-stone-600 font-light leading-relaxed mb-4">{activeSpot.detail}</p>
                    <div className="flex items-center gap-2 text-stone-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>推薦時段：{activeSpot.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Spot Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
            {spots.map((spot, i) => (
              <motion.button
                key={spot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActiveSpot(activeSpot?.id === spot.id ? null : spot)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                  activeSpot?.id === spot.id
                    ? `${spot.bgLight} ${spot.borderColor} shadow-md`
                    : 'bg-white border-stone-100 hover:shadow-sm hover:border-stone-200'
                }`}
              >
                <div className={`w-9 h-9 rounded-2xl ${spot.color} flex items-center justify-center text-white font-bold text-sm mb-3 shadow-md`}
                  style={{ boxShadow: `0 3px 10px rgba(0,0,0,0.18)` }}>
                  {spot.id}
                </div>
                <p className="text-stone-800 font-light text-sm mb-1">{spot.name}</p>
                <p className="text-stone-400 text-xs leading-relaxed line-clamp-2">{spot.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-light text-stone-800 text-center mb-10 tracking-wide"
          >
            靜心地點分類
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-stone-50 rounded-2xl"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <cat.icon className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-stone-800 font-light mb-1">{cat.label}</p>
                  <p className="text-stone-400 text-xs leading-relaxed">{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-6 bg-emerald-50">
        <div className="max-w-2xl mx-auto text-center">
          <Leaf className="w-6 h-6 text-emerald-600/60 mx-auto mb-6" />
          <h2 className="text-2xl font-light text-stone-800 mb-8 tracking-wide">靜心小提醒</h2>
          <div className="space-y-4 text-stone-600 font-light leading-relaxed text-left max-w-md mx-auto">
            {[
              "帶一杯水、一件外套、一顆安靜的心",
              "手機調靜音，給自己一段不打擾的時間",
              "尊重自然，不打擾、不留下垃圾",
              "走得慢沒關係，重要的是感受"
            ].map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-emerald-500 mt-1">•</span>
                <span>{tip}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}