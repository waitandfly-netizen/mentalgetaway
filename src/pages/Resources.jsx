import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, X, Leaf, Coffee, PersonStanding, Mountain, CloudRain, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const spots = [
  {
    id: 1,
    name: "擎天崗",
    emoji: "🌿",
    color: "bg-emerald-600",
    borderColor: "border-emerald-600",
    textColor: "text-violet-700",
    bgLight: "bg-emerald-50",
    description: "",
    time: "清晨／傍晚",
    type: "獨處點",
    detail: "擎天崗草原一望無際，微風拂來，是放空心靈的絕佳所在。清晨的薄霧與傍晚的金光，讓人忘卻城市的喧囂，只感受當下的呼吸與寧靜。",
    x: "80%",
    y: "35%",
    mobileX: "78%",
    mobileY: "33%",
    photos: [
      "https://media.base44.com/images/public/698fc983574e659f561934f1/90bc9872c_7.png"
    ]
  },
  {
    id: 2,
    name: "大屯自然公園",
    emoji: "♨️",
    color: "bg-orange-500",
    borderColor: "border-orange-500",
    textColor: "text-violet-700",
    bgLight: "bg-orange-50",
    description: "",
    time: "上午",
    type: "慢走路線",
    detail: "冷水坑以溫泉與硫磺地形著名，步道輕緩，適合一邊走路一邊感受身體的每個步伐，讓思緒隨著腳步慢慢沉澱。",
    x: "15%",
    y: "30%",
    photos: [
      "https://media.base44.com/images/public/698fc983574e659f561934f1/a63d93181_10.png"
    ]
  },
  {
    id: 3,
    name: "二子坪",
    emoji: "🌲",
    color: "bg-teal-600",
    borderColor: "border-teal-600",
    textColor: "text-violet-700",
    bgLight: "bg-teal-50",
    description: "",
    time: "上午／平日",
    type: "獨處點",
    detail: "二子坪步道全程平緩無障礙，被茂密森林環繞。平日人少，非常適合一個人慢慢走，靜靜地與自己相處，聆聽鳥鳴與風聲。",
    x: "23%",
    y: "64%",
    mobileX: "20%",
    mobileY: "60%",
    photos: [
      "https://media.base44.com/images/public/698fc983574e659f561934f1/ca318d525_8.png"
    ]
  },
  {
    id: 4,
    name: "夢幻湖",
    emoji: "🪷",
    color: "bg-violet-600",
    borderColor: "border-violet-600",
    textColor: "text-violet-700",
    bgLight: "bg-violet-50",
    description: "",
    time: "平日／陰天",
    type: "獨處點",
    detail: "夢幻湖是台灣特有水生植物台灣水韭的家，湖面平靜如鏡。陰天時的夢幻湖更添神秘感，坐在湖畔，帶著日記，讓文字承接內心的流動。",
    x: "66%",
    y: "57%",
    mobileX: "66%",
    mobileY: "55%",
    photos: [
      "https://media.base44.com/images/public/698fc983574e659f561934f1/165bdf5c5_6.png"
    ]
  },
  {
    id: 5,
    name: "絹絲瀑布",
    emoji: "🌋",
    color: "bg-amber-600",
    borderColor: "border-amber-600",
    textColor: "text-violet-700",
    bgLight: "bg-amber-50",
    description: "",
    time: "上午",
    type: "眺望點",
    detail: "小油坑的噴氣孔與硫磺地形充滿原始力量，眺望台北盆地視野絕佳。在這裡感受地球的呼吸，讓自然的能量為你充電。",
    x: "77%",
    y: "82%",
    mobileX: "73%",
    mobileY: "80%",
    photos: [
      "https://media.base44.com/images/public/698fc983574e659f561934f1/ee4fb5c00_9.png"
    ]
  }
];

const sunMoonSpots = [
  {
    id: 1,
    name: "九龍口大平台",
    description: "",
    x: "10%",
    y: "30%",
    mobileX: "3%",
    mobileY: "25%",
    photos: [
      "https://media.base44.com/images/public/698fc983574e659f561934f1/e6e824c5c_2.png",
    ]
  },
  {
    id: 2,
    name: "朝霧碼頭",
    description: "",
    x: "12%",
    y: "48%",
    mobileX: "5%",
    mobileY: "45%",
    photos: [
      "https://media.base44.com/images/public/698fc983574e659f561934f1/bd9fa73f3_3.png",
    ]
  },
  {
    id: 3,
    name: "涵碧步道",
    description: "",
    x: "25%",
    y: "78%",
    mobileX: "18%",
    mobileY: "73%",
    photos: [
      "https://media.base44.com/images/public/698fc983574e659f561934f1/4906ab9e9_1.png",
    ]
  },
  {
    id: 4,
    name: "慈恩塔",
    description: "",
    x: "83%",
    y: "18%",
    mobileX: "75%",
    mobileY: "12%",
    photos: [
      "https://media.base44.com/images/public/698fc983574e659f561934f1/41bf7bf10_5.png",
    ]
  },
  {
    id: 5,
    name: "月牙灣",
    description: "",
    x: "79%",
    y: "62%",
    mobileX: "72%",
    mobileY: "62%",
    photos: [
      "https://media.base44.com/images/public/698fc983574e659f561934f1/b78aa0e4c_4.png",
    ]
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
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [activeSunMoonSpot, setActiveSunMoonSpot] = useState(null);
  const [currentSunMoonPhotoIndex, setCurrentSunMoonPhotoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setCurrentPhotoIndex(0);
  }, [activeSpot]);

  useEffect(() => {
    setCurrentSunMoonPhotoIndex(0);
  }, [activeSunMoonSpot]);

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
          <p className="text-emerald-700/70 tracking-[0.35em] text-xs mb-3">MINDFUL MAP</p>
          <h1 className="text-3xl md:text-5xl font-light text-stone-800 tracking-wide mb-4">靜心地圖</h1>
          <div className="w-8 h-px bg-emerald-600/40 mx-auto mb-6" />
          <p className="md:hidden text-stone-500 font-light leading-relaxed text-center">
            這份靜心地圖是個禮物，<br />
            希望陪伴每一個願意慢下來的人，<br />
            找到屬於自己的充電、安定方式～
          </p>
          <p className="md:hidden text-stone-500 font-light leading-relaxed text-center mt-6">
            歡迎空出一段時間，<br />
            利用這份地圖，<br />
            開啟你的靜心旅程。
          </p>
          <p className="hidden md:block text-stone-500 font-light leading-relaxed whitespace-pre-line">
            這份靜心地圖是個禮物，
            希望陪伴每一個願意慢下來的人，
            找到屬於自己的充電、安定方式～

            歡迎空出一段時間，利用這份地圖，
            開啟你的靜心旅程。
          </p>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Map with clickable hotspots */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-100">
            <img
              src="https://media.base44.com/images/public/698fc983574e659f561934f1/c85104ef8_.png"
              alt="陽明山靜心地圖"
              className="w-full h-auto block"
            />

            {/* Clickable hotspots */}
            {spots.map((spot, i) => {
              const isActive = activeSpot?.id === spot.id;
              return (
                <motion.button
                  key={spot.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  onClick={() => setActiveSpot(isActive ? null : spot)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="absolute z-10 cursor-pointer"
                  style={{ left: isMobile && spot.mobileX ? spot.mobileX : spot.x, top: isMobile && spot.mobileY ? spot.mobileY : spot.y, transform: 'translate(-50%, -50%)' }}
                >
                  <span
                    className={`block rounded-full font-medium tracking-wide transition-all duration-300 scale-[0.56] md:scale-100 origin-center whitespace-nowrap ${
                      spot.name === '大屯自然公園'
                        ? 'px-[0.867rem] py-[0.21675rem] text-[0.75888rem]'
                        : 'px-[0.85rem] py-[0.2125rem] text-[0.744rem]'
                    } ${
                      isActive
                        ? `${spot.color} text-white shadow-lg`
                        : `bg-white/70 ${spot.textColor} backdrop-blur-sm shadow-md hover:bg-white`
                    }`}
                  >
                    {spot.name}
                  </span>
                </motion.button>
              );
            })}

            {/* Floating photo popup */}
            <AnimatePresence>
              {activeSpot && (
                <motion.div
                  key={activeSpot.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveSpot(null)}
                  className="fixed inset-0 z-[60] flex items-center justify-center bg-stone-900/70 backdrop-blur-sm p-4"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveSpot(null)}
                      className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-stone-700 transition-colors shadow-md"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="relative">
                      <img
                        src={activeSpot.photos[currentPhotoIndex]}
                        alt={activeSpot.name}
                        onClick={() => setCurrentPhotoIndex((prev) => (prev + 1) % activeSpot.photos.length)}
                        className="w-full h-auto object-contain cursor-pointer max-h-[80vh]"
                      />
                      {activeSpot.photos.length > 1 && (
                        <>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentPhotoIndex((prev) => (prev - 1 + activeSpot.photos.length) % activeSpot.photos.length); }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-stone-700 transition-colors shadow-md"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentPhotoIndex((prev) => (prev + 1) % activeSpot.photos.length); }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-stone-700 transition-colors shadow-md"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                      {activeSpot.description && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <h3 className="text-white text-2xl font-light tracking-wide">{activeSpot.name}</h3>
                          <p className="text-white/80 text-sm font-light mt-1">{activeSpot.description}</p>
                        </div>
                      )}
                    </div>
                    {activeSpot.photos.length > 1 && (
                      <div className="flex gap-3 p-4 overflow-x-auto">
                        {activeSpot.photos.map((photo, i) => (
                          <img
                            key={i}
                            src={photo}
                            alt={`${activeSpot.name} ${i + 1}`}
                            onClick={() => setCurrentPhotoIndex(i)}
                            className={`w-24 h-24 rounded-lg object-cover flex-shrink-0 cursor-pointer transition-opacity ${
                              i === currentPhotoIndex ? 'ring-2 ring-violet-600 opacity-100' : 'opacity-60 hover:opacity-80'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>




        </div>
      </section>

      {/* Sun Moon Lake Illustration */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-100"
          >
            <img
              src="https://media.base44.com/images/public/698fc983574e659f561934f1/89ebeb461_.png"
              alt="日月潭靜心地圖"
              className="w-full h-auto block"
            />

            {/* Clickable hotspots */}
            {sunMoonSpots.map((spot, i) => {
              const isActive = activeSunMoonSpot?.id === spot.id;
              return (
                <motion.button
                  key={spot.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  onClick={() => setActiveSunMoonSpot(isActive ? null : spot)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="absolute z-10 cursor-pointer"
                  style={{ left: isMobile && spot.mobileX ? spot.mobileX : spot.x, top: isMobile && spot.mobileY ? spot.mobileY : spot.y, transform: 'translate(-50%, -50%)' }}
                >
                  <span
                    className={`block px-4 py-1 rounded-full text-sm font-medium tracking-wide transition-all duration-300 scale-[0.35] md:scale-100 origin-center whitespace-nowrap ${
                      isActive
                        ? 'bg-violet-600 text-white shadow-lg'
                        : 'bg-white/70 text-violet-700 backdrop-blur-sm shadow-md hover:bg-white'
                    }`}
                  >
                    {spot.name}
                  </span>
                </motion.button>
              );
            })}

            {/* Floating photo popup */}
            <AnimatePresence>
              {activeSunMoonSpot && (
                <motion.div
                  key={activeSunMoonSpot.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveSunMoonSpot(null)}
                  className="fixed inset-0 z-[60] flex items-center justify-center bg-stone-900/70 backdrop-blur-sm p-4"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveSunMoonSpot(null)}
                      className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-stone-700 transition-colors shadow-md"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="relative">
                      <img
                        src={activeSunMoonSpot.photos[currentSunMoonPhotoIndex]}
                        alt={activeSunMoonSpot.name}
                        onClick={() => setCurrentSunMoonPhotoIndex((prev) => (prev + 1) % activeSunMoonSpot.photos.length)}
                        className="w-full h-auto object-contain cursor-pointer max-h-[80vh]"
                      />
                      {activeSunMoonSpot.photos.length > 1 && (
                        <>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentSunMoonPhotoIndex((prev) => (prev - 1 + activeSunMoonSpot.photos.length) % activeSunMoonSpot.photos.length); }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-stone-700 transition-colors shadow-md"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentSunMoonPhotoIndex((prev) => (prev + 1) % activeSunMoonSpot.photos.length); }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-stone-700 transition-colors shadow-md"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                      {activeSunMoonSpot.description && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <h3 className="text-white text-2xl font-light tracking-wide">{activeSunMoonSpot.name}</h3>
                          <p className="text-white/80 text-sm font-light mt-1">{activeSunMoonSpot.description}</p>
                        </div>
                      )}
                    </div>
                    {activeSunMoonSpot.photos.length > 1 && (
                      <div className="flex gap-3 p-4 overflow-x-auto">
                        {activeSunMoonSpot.photos.map((photo, i) => (
                          <img
                            key={i}
                            src={photo}
                            alt={`${activeSunMoonSpot.name} ${i + 1}`}
                            onClick={() => setCurrentSunMoonPhotoIndex(i)}
                            className={`w-24 h-24 rounded-lg object-cover flex-shrink-0 cursor-pointer transition-opacity ${
                              i === currentSunMoonPhotoIndex ? 'ring-2 ring-violet-600 opacity-100' : 'opacity-60 hover:opacity-80'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
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

      {/* CTA Banner Image */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto relative">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://media.base44.com/images/public/698fc983574e659f561934f1/a11996aee_.png"
            alt="如果你想體驗不一樣的旅程"
            className="w-full h-auto block rounded-3xl shadow-lg border border-stone-100"
          />
          <Link
            to="/Programs"
            className="absolute bottom-[6%] left-[6%] px-6 py-2.5 rounded-full border border-stone-700/70 bg-white/30 backdrop-blur-sm text-stone-700 text-sm font-light tracking-wider hover:bg-stone-700 hover:text-white hover:border-stone-700 transition-colors duration-300 scale-[0.6] md:scale-100 origin-bottom-left"
          >
            看看有那些旅程
          </Link>
        </div>
      </section>
    </div>
  );
}