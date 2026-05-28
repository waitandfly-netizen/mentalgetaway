import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Leaf, ArrowRight, RotateCcw } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: "最近的你，比較常是？",
    options: [
      { key: 'A', text: '每天都很忙，好像一直停不下來。' },
      { key: 'B', text: '身體有點累，但休息也恢復不了。' },
      { key: 'C', text: '生活沒特別不好，但總覺得少了些什麼。' },
      { key: 'D', text: '很久沒有真正留時間給自己。' },
    ],
  },
  {
    id: 2,
    text: "如果突然多出半天自由時間，你最想做的是？",
    options: [
      { key: 'A', text: '找個安靜地方待著，不想被打擾。' },
      { key: 'B', text: '去自然裡走走。' },
      { key: 'C', text: '和舒服的人慢慢聊天。' },
      { key: 'D', text: '不知道，好像很久沒有想過自己想做什麼。' },
    ],
  },
  {
    id: 3,
    text: "最近比較常出現的是？",
    options: [
      { key: 'A', text: '腦袋一直轉，很難真正放鬆。' },
      { key: 'B', text: '肩頸緊、身體累、睡不飽。' },
      { key: 'C', text: '容易煩躁、心裡卡卡的。' },
      { key: 'D', text: '提不起勁，好像少了點活力。' },
    ],
  },
  {
    id: 4,
    text: "當生活壓力變大時，你比較容易？",
    options: [
      { key: 'A', text: '一直做事，讓自己不要停下來。' },
      { key: 'B', text: '用吃東西、滑手機、追劇讓自己放鬆。' },
      { key: 'C', text: '想很多，但不知道怎麼整理。' },
      { key: 'D', text: '假裝沒事，繼續撐。' },
    ],
  },
  {
    id: 5,
    text: "你現在最想找回的是？",
    options: [
      { key: 'A', text: '安定感。' },
      { key: 'B', text: '放鬆感。' },
      { key: 'C', text: '和自己的連結。' },
      { key: 'D', text: '一些新的力量與方向。' },
    ],
  },
  {
    id: 6,
    text: "如果這趟旅程可以送給你一份禮物，你最希望是？",
    options: [
      { key: 'A', text: '真正休息。' },
      { key: 'B', text: '身體輕鬆一點。' },
      { key: 'C', text: '重新認識自己。' },
      { key: 'D', text: '找回生活的平衡。' },
    ],
  },
];

const results = {
  A: {
    emoji: '🌬️',
    title: '你需要的是：真正的停下來',
    desc: '你一直在運轉，身體和心都還來不及消化這一切。你不是不夠努力，而是需要一個安全的空間，讓自己真的停下來、喘口氣。\n\n推薦給你的旅程：一日放空行、二日放空篇，讓你在大自然中，慢慢找回內在的靜。',
    program: '一日放空行 / 二日放空篇',
    color: 'from-sky-50 to-blue-50',
    accent: 'text-sky-700',
    badge: 'bg-sky-100 text-sky-700',
  },
  B: {
    emoji: '🌿',
    title: '你需要的是：身體的深層休息',
    desc: '疲憊已經存進了身體裡，一般的休息已經不夠了。你的身體需要的不只是睡眠，而是真正被好好對待、滋養的感覺。\n\n推薦給你的旅程：二日放空篇，從好好吃一頓飯、睡一場覺開始，讓身體慢慢鬆開。',
    program: '二日放空篇',
    color: 'from-emerald-50 to-green-50',
    accent: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  C: {
    emoji: '🪞',
    title: '你需要的是：和自己好好相處',
    desc: '生活表面運作正常，但內心有一層說不清楚的東西卡在那裡。你或許不需要解決什麼，只是需要一個空間，讓自己有機會聽見自己。\n\n推薦給你的旅程：蛻變篇（靜默退修），在寧靜中重新連結內在。',
    program: '蛻變篇',
    color: 'from-violet-50 to-purple-50',
    accent: 'text-violet-700',
    badge: 'bg-violet-100 text-violet-700',
  },
  D: {
    emoji: '🌱',
    title: '你需要的是：重新找回方向感',
    desc: '你不太確定自己現在想要什麼，也有一段時間沒有為自己做選擇了。這不是問題，這正是一個重新認識自己的時機。\n\n推薦給你的旅程：一日放空行，輕鬆開始，讓旅程帶你慢慢打開。',
    program: '一日放空行',
    color: 'from-amber-50 to-yellow-50',
    accent: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-700',
  },
};

function getResult(answers) {
  const count = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((k) => { if (count[k] !== undefined) count[k]++; });
  return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
}

export default function SoulQuiz({ onClose }) {
  const [step, setStep] = useState(0); // 0 = intro, 1-6 = questions, 7 = result
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);

  const currentQ = questions[step - 1];
  const isIntro = step === 0;
  const isResult = step === 7;
  const resultKey = isResult ? getResult(answers) : null;
  const result = resultKey ? results[resultKey] : null;

  function handleSelect(key) {
    setSelected(key);
  }

  function handleNext() {
    if (isIntro) { setStep(1); setSelected(null); return; }
    if (selected) {
      setAnswers((prev) => ({ ...prev, [step]: selected }));
      if (step === 6) { setStep(7); } else { setStep(step + 1); setSelected(null); }
    }
  }

  function handleReset() {
    setStep(0);
    setAnswers({});
    setSelected(null);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-4 flex-shrink-0">
          <div className="flex items-center gap-2 text-emerald-700">
            <Leaf className="w-5 h-5" />
            <span className="text-sm tracking-widest font-light">心靈小探索</span>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-stone-100 transition-colors">
            <X className="w-5 h-5 text-stone-400" />
          </button>
        </div>

        {/* Progress bar */}
        {!isIntro && !isResult && (
          <div className="px-8 pb-2 flex-shrink-0">
            <div className="h-1 bg-stone-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 6) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <p className="text-xs text-stone-400 mt-1.5 text-right">{step} / 6</p>
          </div>
        )}

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-8 pb-8">
          <AnimatePresence mode="wait">
            {isIntro && (
              <motion.div key="intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                <h2 className="text-2xl font-light text-stone-800 mb-4 leading-snug">花 2 分鐘，<br />看看現在的自己。</h2>
                <p className="text-stone-500 font-light leading-relaxed text-sm mb-8">
                  這不是標準測驗，也沒有對錯。<br />只是一個小小的邀請，讓你停下來，看看此刻的自己，可能需要的是什麼。
                </p>
                <button
                  onClick={handleNext}
                  className="w-full py-4 bg-emerald-700 text-white rounded-2xl font-light tracking-wider hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 group"
                >
                  開始探索
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}

            {!isIntro && !isResult && currentQ && (
              <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.35 }}>
                <p className="text-xs text-stone-400 tracking-widest mb-3">問題 {step}</p>
                <h2 className="text-lg font-light text-stone-800 mb-6 leading-relaxed">{currentQ.text}</h2>
                <div className="space-y-3 mb-8">
                  {currentQ.options.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => handleSelect(opt.key)}
                      className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-200 text-sm font-light leading-relaxed ${
                        selected === opt.key
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                          : 'border-stone-200 hover:border-emerald-200 hover:bg-stone-50 text-stone-600'
                      }`}
                    >
                      <span className="font-medium mr-2 text-stone-400">{opt.key}.</span>
                      {opt.text}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={!selected}
                  className={`w-full py-4 rounded-2xl font-light tracking-wider flex items-center justify-center gap-2 group transition-all duration-200 ${
                    selected
                      ? 'bg-emerald-700 text-white hover:bg-emerald-600'
                      : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  {step === 6 ? '看看結果' : '下一題'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}

            {isResult && result && (
              <motion.div key="result" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className={`rounded-2xl bg-gradient-to-br ${result.color} p-6 mb-6`}>
                  <div className="text-4xl mb-3">{result.emoji}</div>
                  <span className={`text-xs tracking-widest px-3 py-1 rounded-full font-medium ${result.badge} mb-3 inline-block`}>
                    {result.program}
                  </span>
                  <h2 className={`text-xl font-medium ${result.accent} mb-4 leading-snug`}>{result.title}</h2>
                  <p className="text-stone-600 font-light text-sm leading-relaxed whitespace-pre-line">{result.desc}</p>
                </div>
                <p className="text-stone-400 text-xs text-center font-light mb-6 leading-relaxed">
                  這只是一個參考方向，每段旅程都歡迎你。<br />如有疑問，歡迎聯繫我們。
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="flex-1 py-3.5 border border-stone-200 text-stone-500 rounded-2xl font-light text-sm hover:bg-stone-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    再測一次
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 py-3.5 bg-emerald-700 text-white rounded-2xl font-light text-sm hover:bg-emerald-600 transition-colors"
                  >
                    了解旅程
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}