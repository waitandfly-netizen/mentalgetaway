import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

// Floating background image that drifts slowly
function FloatingImage({ src, className, delay = 0, drift = 15 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      animate={{
        y: [0, -drift, 0],
        x: [0, drift * 0.4, 0],
        rotate: [0, 1.5, 0],
      }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <img src={src} alt="" className="w-full h-full object-cover rounded-2xl opacity-80 shadow-2xl" />
    </motion.div>
  );
}

// Each paragraph fades in as it enters viewport
function FadeParagraph({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const paragraphs = [
  {
    lines: ["這個世界的資訊很多，", "有時多到讓人分不清方向，", "也總有一股莫名的躁動，推著我們不斷往前。"],
    type: "normal",
  },
  {
    lines: ["每天忙著工作、忙著生活，", "好不容易下了班、放了假，", "屬於自己的時間卻總是稍縱即逝。"],
    type: "normal",
  },
  {
    lines: ["還來不及真正放鬆，", "又回到日常的忙碌裡。"],
    type: "italic",
  },
  {
    lines: ["回憶小時候，", "一件簡單的小事，就能讓我們專注投入。"],
    type: "normal",
  },
  {
    lines: ["看天空、吹風、發呆、走路、玩耍。"],
    type: "highlight",
  },
  {
    lines: ["時間好像同樣的流逝，", "心卻很安定。"],
    type: "italic",
  },
  {
    lines: ["只是隨著進入社會，", "生活裡多了許多放不下的人事物，", "也慢慢忘了，該怎麼和自己好好相處。"],
    type: "normal",
  },
  {
    lines: ["如果你願意，"],
    type: "invite-lead",
  },
  {
    lines: ["無論是一個人前來，", "或是和 3–5 位好友一起，"],
    type: "normal",
  },
  {
    lines: ["我們將從平凡卻重要的日常開始——"],
    type: "normal",
  },
  {
    lines: ["好好吃一頓飯。", "好好睡一場覺。", "感受身體的節奏。", "走進自然裡，慢慢放下累積已久的疲憊。"],
    type: "list",
  },
  {
    lines: ["當身體真實的需要被看見，", "心，也會慢慢鬆開。"],
    type: "italic",
  },
  {
    lines: ["那些一直撐著的、忙著的、來不及感受的，", "也許會一點一點，重新回到平衡。"],
    type: "normal",
  },
  {
    lines: ["願這段旅程，陪你慢下來。"],
    type: "closing",
  },
  {
    lines: ["讓安定、寧靜與自在，", "", "慢慢回到生活裡。"],
    type: "final",
  },
];

export default function InvitationLetter() {
  return (
    <div className="relative overflow-hidden bg-stone-50">

      {/* Floating background images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top right */}
        <FloatingImage
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70"
          className="w-56 md:w-80 h-36 md:h-52 top-20 right-[-3rem] md:right-10 opacity-60"
          delay={0}
          drift={12}
        />
        {/* Mid left */}
        <FloatingImage
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=70"
          className="w-44 md:w-64 h-28 md:h-44 top-[38%] left-[-2rem] md:left-6 opacity-50"
          delay={2}
          drift={18}
        />
        {/* Lower right */}
        <FloatingImage
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=70"
          className="w-48 md:w-72 h-32 md:h-48 top-[62%] right-[-2rem] md:right-8 opacity-55"
          delay={4}
          drift={14}
        />
        {/* Bottom left */}
        <FloatingImage
          src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&q=70"
          className="w-40 md:w-60 h-28 md:h-40 bottom-32 left-[-1rem] md:left-12 opacity-45"
          delay={1.5}
          drift={16}
        />
      </div>

      {/* Gradient overlays to blend images into bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/30 via-stone-50/60 to-stone-50/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50/70 via-transparent to-stone-50/70" />
      </div>

      {/* Letter content */}
      <div className="relative z-10 max-w-xl mx-auto px-8 py-28 md:py-40">

        {/* Opening greeting */}
        <FadeParagraph className="mb-16 text-center">
          <span className="inline-block text-emerald-700/70 tracking-[0.3em] text-xs mb-6 uppercase">A Letter for You</span>
          <h1 className="text-2xl md:text-3xl font-light text-stone-700 tracking-wider leading-loose">
            給正在尋找安定、寧靜的你～
          </h1>
          <div className="w-8 h-px bg-emerald-600/40 mx-auto mt-8" />
        </FadeParagraph>

        {/* Body paragraphs */}
        <div className="space-y-10 text-stone-600 font-light leading-[2.2] text-[1.05rem] md:text-lg">
          {paragraphs.map((para, i) => (
            <FadeParagraph key={i} delay={0} className="">
              {para.type === "highlight" ? (
                <p className="text-center text-stone-500 tracking-widest text-base md:text-lg py-2">
                  {para.lines[0]}
                </p>
              ) : para.type === "italic" ? (
                <p className="text-stone-500 italic text-center tracking-wide">
                  {para.lines.map((line, j) => (
                    <React.Fragment key={j}>{line}{j < para.lines.length - 1 && <br />}</React.Fragment>
                  ))}
                </p>
              ) : para.type === "list" ? (
                <div className="pl-4 border-l-2 border-emerald-300/60 space-y-1.5">
                  {para.lines.map((line, j) => (
                    <p key={j} className="text-stone-600">{line}</p>
                  ))}
                </div>
              ) : para.type === "invite-lead" ? (
                <p className="text-xl md:text-2xl text-stone-700 font-light tracking-wider text-center py-4">
                  {para.lines[0]}
                </p>
              ) : para.type === "closing" ? (
                <p className="text-center text-stone-600 tracking-wider text-lg md:text-xl py-2">
                  {para.lines[0]}
                </p>
              ) : para.type === "final" ? (
                <div className="text-center pt-4 space-y-2">
                  {para.lines.map((line, j) => (
                    line === "" 
                      ? <div key={j} className="h-3" />
                      : <p key={j} className="text-xl md:text-2xl font-light text-emerald-800 tracking-widest">{line}</p>
                  ))}
                </div>
              ) : (
                <p>
                  {para.lines.map((line, j) => (
                    <React.Fragment key={j}>{line}{j < para.lines.length - 1 && <br />}</React.Fragment>
                  ))}
                </p>
              )}
            </FadeParagraph>
          ))}
        </div>

        {/* CTA */}
        <FadeParagraph className="mt-20 text-center" delay={0}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={createPageUrl("Programs")}
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-800 text-white rounded-full hover:bg-emerald-700 transition-all duration-500 group shadow-lg"
            >
              <span className="tracking-widest text-sm">探索旅程</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-3 px-8 py-4 border border-stone-300 text-stone-600 rounded-full hover:border-emerald-500 hover:text-emerald-700 transition-all duration-500"
            >
              <span className="tracking-widest text-sm">聯繫我們</span>
            </Link>
          </div>
        </FadeParagraph>
      </div>
    </div>
  );
}