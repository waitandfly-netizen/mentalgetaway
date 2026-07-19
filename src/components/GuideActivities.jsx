import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const categories = [
  {
    label: '工作坊',
    accent: 'emerald',
    activities: [
      '助人者心靈澄靜',
      '助人者自在力',
      '生命愛歡笑',
      '與內在小孩共舞',
      '我和我的各種面具',
      '邁向6D',
    ],
    reflections: [
      '在活動中，覺察變得清晰，體會到不同的動態活動，享受到一段完全屬於自己的時光。',
      '九印和鮮活樁的體驗，很快可以進入放鬆和自我覺察，會想要帶入生活中，儲備自在力水庫，讓自己可以處於氣定神閒的狀態。',
      '愛自己這件事更爲具體，適時覺察自己的感受很重要。',
    ],
  },
  {
    label: '講座',
    accent: 'amber',
    activities: [
      '靜心如來小講堂',
      '從情緒覺察開始認識自己',
      '在人際互動裡洞見自己',
      '認出親密關係裡的內在小孩',
      '從情緒談愛與自由',
      '愛與自由的親密對話',
    ],
    reflections: [
      '放下期待的過程就像一場認知矯正，更能敏銳地覺察到情緒被引發的瞬間。',
      '用較大視野來看職場角色與責任，似乎可以不必那麼壓迫自己。',
      '當需要價值感的自己被看見後，牽動的情緒變少了，心也安定了。',
    ],
  },
  {
    label: '課程',
    accent: 'teal',
    activities: [
      '身心靈自主能力',
      '分享樁行動禪',
      '舞動療癒綻放',
      '睡眠瑜珈',
      '放鬆與冥想',
      '動感笑瑜珈',
    ],
    reflections: [
      '回家嘗試睡前半小時放下3C，單純地和自己窩在一起。躺在床上，讓身體的重量慢慢沉下去，呼吸變得柔和而深長，不知不覺就滑進了睡眠。沒想到在家也能找回那份久違的香甜睡意，很驚喜～',
      '在舞蹈中很被觸動的是，不管如何我都有把自己愛回來的能力，而且持續在增進中。',
      '在笑的時候，感覺肚臍跟生命能量、感覺和愛合在一起震動著，喜樂和歡笑是生命本然的存在。',
    ],
  },
];

const accentMap = {
  emerald: {
    text: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    dot: 'bg-emerald-400',
    pill: 'bg-emerald-50 text-emerald-800 border-emerald-100',
    bar: 'bg-emerald-500',
  },
  amber: {
    text: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    dot: 'bg-amber-400',
    pill: 'bg-amber-50 text-amber-800 border-amber-100',
    bar: 'bg-amber-500',
  },
  teal: {
    text: 'text-teal-700',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    dot: 'bg-teal-400',
    pill: 'bg-teal-50 text-teal-800 border-teal-100',
    bar: 'bg-teal-500',
  },
};

export default function GuideActivities() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-700/70 tracking-[0.25em] text-xs mb-4">WORKSHOPS · TALKS · COURSES</p>
          <h2 className="text-2xl md:text-3xl font-light text-stone-800 leading-relaxed">
            生命曾讓我們交會的地方……
          </h2>
        </motion.div>

        <div className="space-y-10">
          {categories.map((cat, ci) => {
            const a = accentMap[cat.accent];
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: ci * 0.1 }}
                className="relative bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${a.bar}`} />
                <div className="p-8 md:p-10 pl-10 md:pl-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${a.pill} border`}>
                      {cat.label}
                    </span>
                    <span className="h-px flex-1 bg-stone-100" />
                  </div>

                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {cat.activities.map((act) => (
                      <span
                        key={act}
                        className={`inline-flex items-center px-3.5 py-1.5 rounded-lg text-sm font-light ${a.bg} ${a.text} border ${a.border}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${a.dot} mr-2`} />
                        {act}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {cat.reflections.map((r, ri) => (
                      <div key={ri} className={`flex gap-3 ${a.bg} rounded-xl p-4 md:p-5`}>
                        <Quote className={`w-5 h-5 ${a.text} flex-shrink-0 mt-0.5 opacity-60`} />
                        <p className="text-stone-600 font-light leading-relaxed text-[15px]">
                          {r}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}