import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const categories = [
  {
    label: '工作坊',
    accent: 'emerald',
    items: [
      {
        keyword: 'Clarity',
        reflection: '在活動中，覺察變得清晰，體會到不同的動態活動，享受到一段完全屬於自己的時光。',
        activity: '助人者心靈澄靜工作坊',
      },
      {
        keyword: 'Ease',
        reflection: '九印和鮮活樁的體驗，很快可以進入放鬆和自我覺察，會想要帶入生活中，儲備自在力水庫，讓自己可以處於氣定神閒的狀態。',
        activity: '助人者自在力工作坊',
      },
      {
        keyword: 'Embrace',
        reflection: '愛自己這件事更爲具體，適時覺察自己的感受很重要。',
        activity: '與內在小孩共舞',
      },
    ],
  },
  {
    label: '講座',
    accent: 'amber',
    items: [
      {
        keyword: 'Release',
        reflection: '放下期待的過程就像一場認知矯正，更能敏銳地覺察到情緒被引發的瞬間。',
        activity: '靜心如來小講堂：認出親密關係裡的內在小孩',
      },
      {
        keyword: 'Perspective',
        reflection: '用較大視野來看職場角色與責任，似乎可以不必那麼壓迫自己。',
        activity: '靜心如來小講堂：在人際互動裡洞見自己',
      },
      {
        keyword: 'Inner Peace',
        reflection: '當需要價值感的自己被看見後，牽動的情緒變少了，心也安定了。',
        activity: '愛與自由的親密對話講座',
      },
    ],
  },
  {
    label: '課程',
    accent: 'teal',
    items: [
      {
        keyword: 'Rest',
        reflection: '回家嘗試睡前半小時放下3C，單純地和自己窩在一起。躺在床上，讓身體的重量慢慢沉下去，呼吸變得柔和而深長，不知不覺就滑進了睡眠。沒想到在家也能找回那份久違的香甜睡意，很驚喜～',
        activity: '睡眠瑜珈',
      },
      {
        keyword: 'Bloom',
        reflection: '在舞蹈中很被觸動的是，不管如何我都有把自己愛回來的能力，而且持續在增進中。',
        activity: '舞動療癒綻放',
      },
      {
        keyword: 'Joy',
        reflection: '在笑的時候，感覺肚臍跟生命能量、感覺和愛合在一起震動著，喜樂和歡笑是生命本然的存在。',
        activity: '動感笑瑜珈',
      },
    ],
  },
];

const accentMap = {
  emerald: {
    text: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    pill: 'bg-emerald-50 text-emerald-800 border-emerald-100',
    bar: 'bg-emerald-500',
    name: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  },
  amber: {
    text: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    pill: 'bg-amber-50 text-amber-800 border-amber-100',
    bar: 'bg-amber-500',
    name: 'text-amber-700 bg-amber-50 border-amber-200',
  },
  teal: {
    text: 'text-teal-700',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    pill: 'bg-teal-50 text-teal-800 border-teal-100',
    bar: 'bg-teal-500',
    name: 'text-teal-700 bg-teal-50 border-teal-200',
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
          <p className="text-emerald-700/70 tracking-[0.25em] text-xs mb-4">PATHS WE'VE WALKED TOGETHER</p>
          <h2 className="text-2xl md:text-3xl font-light text-stone-800 leading-relaxed">
            我們一起走過的生命旅程
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
                  <div className="flex items-center gap-3 mb-8">
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${a.pill} border`}>
                      {cat.label}
                    </span>
                    <span className="h-px flex-1 bg-stone-100" />
                  </div>

                  <div className="space-y-6">
                    {cat.items.map((item, ri) => (
                      <div key={ri} className={`rounded-xl p-5 md:p-6 ${a.bg}`}>
                        <div className="flex items-baseline gap-3 mb-3">
                          <h3 className={`text-lg md:text-xl font-medium tracking-wide ${a.text}`}>
                            {item.keyword}
                          </h3>
                        </div>
                        <div className="flex gap-3">
                          <Quote className={`w-5 h-5 ${a.text} flex-shrink-0 mt-0.5 opacity-50`} />
                          <p className="text-stone-600 font-light leading-relaxed text-[15px]">
                            {item.reflection}
                          </p>
                        </div>
                        <div className="mt-4 pl-8">
                          <span className={`inline-block px-3 py-1 rounded-lg text-sm font-medium border ${a.name}`}>
                            《{item.activity}》
                          </span>
                        </div>
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