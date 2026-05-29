import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Moon, Clock, Users, MapPin, Check, ArrowRight, Calendar, Sparkles, Wind, Coffee, Leaf } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

/* ---------- 資料 ---------- */
const includes = [
  "專業引導老師全程帶領",
  "住宿一晚",
  "活動期間全部餐食",
  "所有課程與活動費用",
  "旅遊平安保險",
];

const experiences = [
  { icon: Leaf, title: "深度森林浴", desc: "讓身體在林間慢慢甦醒，感受大地的支撐。" },
  { icon: Moon, title: "星空夜話", desc: "在繁星下，放下表演，說出真實的自己。" },
  { icon: Wind, title: "晨間靜心", desc: "迎接日出，在一天開始前先回到自己。" },
  { icon: Coffee, title: "直覺慢食", desc: "好好品嚐每一口，讓身體記住被好好對待的感覺。" },
];

const chapters = [
  {
    label: "Day 1",
    title: "放下，\n比你想像的容易",
    body: "抵達的那一刻，什麼都不用做。\n只是讓身體先安頓下來，讓眼睛慢慢習慣這裡的綠。",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=80",
    align: "left",
  },
  {
    label: "Day 1 傍晚",
    title: "你不需要解釋\n為什麼需要這趟旅程",
    body: "共煮、共食、圍坐。\n有人說話，有人沉默，都好。\n夜裡的星空，會把你說不出口的話，好好接住。",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=80",
    align: "right",
  },
  {
    label: "Day 2",
    title: "不一樣的早晨",
    body: "不是鬧鐘叫醒你，是光。\n晨間靜心、品茗、輕柔的身體練習。\n帶著整合後的自己，慢慢回到日常。",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1400&q=80",
    align: "left",
  },
];

/* ---------- 子組件 ---------- */
function ChapterBlock({ chapter }) {
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
        className="w-full md:w-1/2 px-10 md:px-16 py-16 flex flex-col justify-center bg-[#f0ece6]"
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

function ExperienceCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`p-8 rounded-2xl cursor-default transition-all duration-500 ${
        hovered ? "bg-indigo-900 shadow-xl" : "bg-white"
      }`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-5 transition-colors duration-500 ${
        hovered ? "bg-indigo-700" : "bg-indigo-50"
      }`}>
        <Icon className={`w-5 h-5 transition-colors duration-500 ${hovered ? "text-indigo-200" : "text-indigo-600"}`} />
      </div>
      <h3 className={`font-medium text-lg mb-2 transition-colors duration-500 ${hovered ? "text-white" : "text-stone-800"}`}>
        {item.title}
      </h3>
      <p className={`text-sm font-light leading-relaxed transition-colors duration-500 ${hovered ? "text-indigo-200/80" : "text-stone-400"}`}>
        {item.desc}
      </p>
    </motion.div>
  );
}

function SessionCard({ session }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: session.delay }}
      className={`rounded-3xl p-10 text-white relative overflow-hidden bg-gradient-to-br ${session.gradient}`}
    >
      <div className="absolute -top-8 -right-8 w-44 h-44 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-6 w-36 h-36 rounded-full bg-black/10 blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className={`w-4 h-4 ${session.accent}`} />
          <p className={`text-xs tracking-widest uppercase ${session.accent}`}>{session.label}</p>
        </div>
        <h3 className="text-3xl font-light mb-1">{session.dates}</h3>
        <div className="flex items-center gap-1 mb-8">
          <MapPin className={`w-3.5 h-3.5 ${session.accent}`} />
          <p className={`text-sm ${session.accent}`}>{session.location}</p>
        </div>

        <div className="space-y-3 mb-8 border-t border-white/20 pt-6">
          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm line-through">{session.original}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/80 text-sm">早鳥優惠 <span className="text-white/40 text-xs">（{session.earlyBirdDeadline}前）</span></span>
            <span className="text-white font-light text-2xl">{session.earlyBird}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-sm ${session.accent}`}>協會優惠</span>
            <span className={`font-medium ${session.accent}`}>{session.member}</span>
          </div>
        </div>

        <a
          href="https://forms.gle/6q2nmZ8anrPKFN5F8"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 w-full py-5 bg-white rounded-2xl font-medium tracking-widest hover:bg-amber-50 transition-all duration-300 text-base text-stone-800"
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

  const sessions = [
    {
      label: "第一梯次",
      dates: "08 / 08 ~ 08 / 09",
      location: "宜蘭場",
      original: "NT$ 7,200",
      earlyBird: "NT$ 6,200",
      earlyBirdDeadline: "6/30",
      member: "NT$ 5,800",
      gradient: "from-indigo-800 to-indigo-950",
      accent: "text-indigo-300",
      delay: 0,
    },
    {
      label: "第二梯次",
      dates: "12 / 12 ~ 12 / 13",
      location: "南投場",
      original: "NT$ 6,800",
      earlyBird: "NT$ 5,800",
      earlyBirdDeadline: "10/31",
      member: "NT$ 5,000",
      gradient: "from-emerald-800 to-emerald-950",
      accent: "text-emerald-300",
      delay: 0.12,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f0ece6]">
      <SEOHead
        title="二日放空篇 | 心靈假期"
        description="兩天一夜的心靈充電之旅，在宜蘭或南投山間，給自己一段真正慢下來的時光。"
        image="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80"
      />

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1476673160081-cf065f5c1278?w=1920&q=80"
            alt="二日放空篇"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/25 to-[#f0ece6]" />
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
            { icon: MapPin, label: "地點", value: "宜蘭／南投" },
            { icon: Calendar, label: "梯次", value: "每年 2 梯" },
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
                <item.icon className="w-5 h-5 text-indigo-500" />
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
          <ChapterBlock key={i} chapter={chapter} />
        ))}
      </div>

      {/* ── 體驗亮點 ── */}
      <section className="py-28 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.35em] text-indigo-500 uppercase mb-3">Experiences</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800">這兩天裡，你將體驗</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {experiences.map((item, i) => (
              <ExperienceCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 費用包含 ── */}
      <section className="py-20 px-6 bg-[#f0ece6]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.35em] text-indigo-500 uppercase mb-3">Includes</p>
            <h2 className="text-3xl font-light text-stone-800 mb-12">費用包含</h2>
          </motion.div>
          <ul className="grid sm:grid-cols-2 gap-4 text-left">
            {includes.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-7 h-7 rounded-full bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Check className="w-4 h-4 text-indigo-700" />
                </div>
                <span className="text-stone-600 font-light">{item}</span>
              </motion.li>
            ))}
          </ul>
          <p className="mt-8 text-stone-400 text-xs font-light">* 交通費用請自理，可協助安排共乘</p>
        </div>
      </section>

      {/* ── 梯次與報名 ── */}
      <section className="py-20 px-6 bg-stone-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.35em] text-indigo-400 uppercase mb-3">2026 Sessions</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">梯次與費用</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((session, i) => (
              <SessionCard key={i} session={session} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}