import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Moon, Clock, Users, MapPin, Check, ArrowRight, Calendar, Sunrise, Wind, Leaf, Coffee, Star } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

/* ---------- 資料 ---------- */
const day1Schedule = [
  { time: "10:00", activity: "安頓身心・卸下疲累", desc: "放下手機，讓身體先感受到「抵達」。", icon: Wind },
  { time: "12:30", activity: "享用午餐", desc: "原型食材，慢慢品嚐。", icon: Coffee },
  { time: "14:00", activity: "靜心冥想・身心紓壓", desc: "透過引導，讓累積的緊繃慢慢釋放。", icon: Leaf },
  { time: "18:30", activity: "共煮・共食", desc: "一起動手，一起吃飯，一起放鬆。", icon: Star },
  { time: "20:00", activity: "心靈派對", desc: "在安全的空間裡，分享或傾聽都好。", icon: Moon },
];

const day2Schedule = [
  { time: "06:30", activity: "晨間靜心・品茗時光", desc: "迎著晨光，讓一天從寧靜開始。", icon: Sunrise },
  { time: "08:00", activity: "享用早餐", desc: "帶著清醒的身心，好好吃一頓飯。", icon: Coffee },
  { time: "09:30", activity: "靜心冥想・身心淨化", desc: "更深地進入自己，看見內在的風景。", icon: Leaf },
  { time: "12:00", activity: "享用午餐", desc: "最後一頓飯，細細回味這兩天。", icon: Star },
  { time: "13:30", activity: "交流分享・打包收穫", desc: "把這趟旅程帶回日常。", icon: Wind },
  { time: "16:00", activity: "賦歸", desc: "帶著一份不同的自己，回家。", icon: ArrowRight },
];

const includes = [
  "專業引導老師全程帶領",
  "住宿一晚",
  "活動期間全部餐食",
  "所有課程與活動費用",
  "旅遊平安保險",
];

const chapters = [
  {
    label: "緣起",
    title: "有時候，\n我們需要的不是休假\n而是真正的休息",
    body: "放假和放空，是不同的事。\n一日遊回來依然疲憊，不是你的問題。\n是身體需要更完整的時間。",
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1400&q=80",
    align: "left",
  },
  {
    label: "第一天",
    title: "讓身體\n先感受到抵達",
    body: "走進山裡，放下手機。\n傍晚，一起圍在桌邊煮一頓飯。\n夜裡，星空下有人陪你說話，也陪你沉默。",
    image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=1400&q=80",
    align: "right",
  },
  {
    label: "第二天",
    title: "用晨光\n重新認識自己",
    body: "清晨靜心、品茗、冥想。\n不是為了變得更好，\n而是允許自己，就是現在這樣。",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80",
    align: "left",
  },
];

const sessions = [
  {
    label: "第一梯次",
    dates: "08 / 08 ~ 08 / 09",
    location: "宜蘭場",
    original: "NT$ 7,200",
    earlyBird: "NT$ 6,200",
    earlyDeadline: "6/30 前",
    member: "NT$ 5,800",
    color: "indigo",
    link: "https://forms.gle/6q2nmZ8anrPKFN5F8",
  },
  {
    label: "第二梯次",
    dates: "12 / 12 ~ 12 / 13",
    location: "南投場",
    original: "NT$ 6,800",
    earlyBird: "NT$ 5,800",
    earlyDeadline: "10/31 前",
    member: "NT$ 5,000",
    color: "emerald",
    link: "https://forms.gle/6q2nmZ8anrPKFN5F8",
  },
];

/* ---------- 子組件 ---------- */
function ChapterBlock({ chapter, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const isRight = chapter.align === "right";

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isRight ? "md:flex-row-reverse" : "md:flex-row"} items-stretch min-h-[80vh]`}
    >
      <motion.div
        className="w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden"
        initial={{ opacity: 0, x: isRight ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={chapter.image}
          alt={chapter.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 px-10 md:px-16 py-16 flex flex-col justify-center bg-[#f5f0ea]"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
      >
        <p className="text-xs tracking-[0.35em] text-indigo-500 uppercase mb-4">{chapter.label}</p>
        <h2 className="text-3xl md:text-4xl font-light text-stone-800 leading-snug whitespace-pre-line mb-6">
          {chapter.title}
        </h2>
        <p className="text-stone-500 font-light leading-loose whitespace-pre-line text-base md:text-lg">
          {chapter.body}
        </p>
      </motion.div>
    </div>
  );
}

function ScheduleRow({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-start gap-5 p-5 rounded-2xl cursor-default transition-all duration-500 ${
        hovered ? "bg-indigo-900 shadow-xl" : "bg-white"
      }`}
    >
      <div className="flex-shrink-0 w-14 text-right pt-0.5">
        <span className={`text-xs font-medium transition-colors duration-500 ${hovered ? "text-indigo-300" : "text-indigo-600"}`}>
          {item.time}
        </span>
      </div>
      <div className={`flex-shrink-0 mt-1.5 w-px h-8 transition-colors duration-500 ${hovered ? "bg-indigo-500/40" : "bg-indigo-200"}`} />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Icon className={`w-4 h-4 transition-colors duration-500 ${hovered ? "text-amber-300" : "text-indigo-400"}`} />
          <h3 className={`text-sm font-medium transition-colors duration-500 ${hovered ? "text-white" : "text-stone-800"}`}>
            {item.activity}
          </h3>
        </div>
        <p className={`text-xs font-light transition-colors duration-500 ${hovered ? "text-indigo-100/70" : "text-stone-400"}`}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

function SessionCard({ session, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const isIndigo = session.color === "indigo";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15 }}
      className={`relative overflow-hidden rounded-3xl p-10 text-white ${
        isIndigo
          ? "bg-gradient-to-br from-indigo-800 to-indigo-950"
          : "bg-gradient-to-br from-emerald-800 to-emerald-950"
      }`}
    >
      {/* 背景裝飾 */}
      <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-2xl pointer-events-none ${
        isIndigo ? "bg-indigo-600/30" : "bg-emerald-600/30"
      }`} />
      <div className="absolute -bottom-8 -left-6 w-32 h-32 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className={`w-4 h-4 ${isIndigo ? "text-indigo-300" : "text-emerald-300"}`} />
          <p className={`text-xs tracking-widest uppercase ${isIndigo ? "text-indigo-300" : "text-emerald-300"}`}>
            {session.label}
          </p>
        </div>
        <h3 className="text-3xl font-light mb-2">{session.dates}</h3>
        <div className="flex items-center gap-1.5 mb-8">
          <MapPin className={`w-3.5 h-3.5 ${isIndigo ? "text-indigo-300" : "text-emerald-300"}`} />
          <p className={`text-sm ${isIndigo ? "text-indigo-200" : "text-emerald-200"}`}>{session.location}</p>
        </div>

        <div className={`space-y-3 border-t pt-6 mb-8 ${isIndigo ? "border-indigo-700/50" : "border-emerald-700/50"}`}>
          <div className="flex justify-between items-center">
            <span className={`text-sm ${isIndigo ? "text-indigo-300" : "text-emerald-300"}`}>原價</span>
            <span className={`line-through text-sm ${isIndigo ? "text-indigo-300" : "text-emerald-300"}`}>{session.original}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white font-medium text-sm">
              早鳥優惠
              <span className={`ml-1 text-xs font-normal ${isIndigo ? "text-indigo-300" : "text-emerald-300"}`}>（{session.earlyDeadline}）</span>
            </span>
            <span className="text-white font-medium text-xl">{session.earlyBird}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-amber-200 text-sm">協會優惠</span>
            <span className="text-amber-200 font-medium">{session.member}</span>
          </div>
        </div>

        <a
          href={session.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 w-full py-4 bg-white text-stone-800 rounded-2xl font-medium tracking-widest hover:bg-amber-50 transition-all duration-300 text-sm"
        >
          給自己這兩天
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </motion.div>
  );
}

/* ---------- 主頁 ---------- */
export default function TwoDayRetreat() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-[#f5f0ea]">
      <SEOHead
        title="二日放空篇 | 心靈假期"
        description="兩天一夜的心靈充電之旅，在宜蘭或南投山林間，給自己真正放空的時光。"
        image="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1200&q=80"
      />

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            y: heroY,
            backgroundImage: "url('https://images.unsplash.com/photo-1476673160081-cf065f5c1278?w=1920&q=80')",
            top: "-15%",
            bottom: "-15%",
            left: 0,
            right: 0,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/55 via-stone-900/30 to-[#f5f0ea]" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
            <Moon className="w-4 h-4 text-indigo-200" />
            <span className="text-white/90 text-xs tracking-[0.3em] uppercase">Weekend Escape</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wider mb-6 drop-shadow">
            二日放空篇
          </h1>
          <p className="text-stone-200/80 text-lg md:text-xl font-light tracking-widest">
            兩天一夜的心靈充電之旅
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="w-px h-14 bg-gradient-to-b from-white/0 via-white/60 to-white/0 mx-auto" />
        </motion.div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-14 px-6 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: "時長", value: "2 天 1 夜" },
            { icon: Users, label: "人數", value: "8–15 人" },
            { icon: MapPin, label: "地點", value: "宜蘭・南投" },
            { icon: Calendar, label: "梯次", value: "每月 1–2 梯" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="text-center group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-xs text-stone-400 mb-1 tracking-wider">{item.label}</p>
              <p className="font-medium text-stone-800">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 滾動敘事章節 ── */}
      <div>
        {chapters.map((chapter, i) => (
          <ChapterBlock key={i} chapter={chapter} index={i} />
        ))}
      </div>

      {/* ── 行程時間軸 ── */}
      <section className="py-28 px-6 bg-stone-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.35em] text-indigo-500 uppercase mb-3">Schedule</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800">這兩天的樣子</h2>
          </motion.div>

          {/* Day 1 */}
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <Moon className="w-4 h-4 text-indigo-600" />
              </div>
              <p className="text-sm tracking-widest text-indigo-600 font-medium">第一天</p>
            </motion.div>
            <div className="space-y-2">
              {day1Schedule.map((item, i) => (
                <ScheduleRow key={item.time} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                <Sunrise className="w-4 h-4 text-amber-600" />
              </div>
              <p className="text-sm tracking-widest text-amber-600 font-medium">第二天</p>
            </motion.div>
            <div className="space-y-2">
              {day2Schedule.map((item, i) => (
                <ScheduleRow key={item.time} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 費用包含 ── */}
      <section className="py-20 px-6 bg-[#f5f0ea]">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.35em] text-indigo-500 uppercase mb-3">Includes</p>
            <h2 className="text-3xl font-light text-stone-800">費用包含</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-3">
            {includes.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 group hover:bg-indigo-50 transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-6 h-6 rounded-full bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Check className="w-3.5 h-3.5 text-indigo-700" />
                </div>
                <span className="text-stone-600 font-light text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-center text-stone-400 text-xs mt-6 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            * 交通費用請自理，可協助安排共乘
          </motion.p>
        </div>
      </section>

      {/* ── 梯次與報名 ── */}
      <section className="py-28 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.35em] text-indigo-500 uppercase mb-3">2026 Sessions</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800">選擇你的出發時間</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sessions.map((session, i) => (
              <SessionCard key={session.label} session={session} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}