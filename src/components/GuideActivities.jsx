import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    label: '工作坊',
    labelEn: 'Workshops',
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
    labelEn: 'Talks',
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
    labelEn: 'Courses',
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
    line: 'bg-emerald-400',
    dot: 'bg-emerald-500',
    name: 'text-emerald-700',
    rule: 'border-emerald-200',
  },
  amber: {
    text: 'text-amber-700',
    line: 'bg-amber-400',
    dot: 'bg-amber-500',
    name: 'text-amber-700',
    rule: 'border-amber-200',
  },
  teal: {
    text: 'text-teal-700',
    line: 'bg-teal-400',
    dot: 'bg-teal-500',
    name: 'text-teal-700',
    rule: 'border-teal-200',
  },
};

export default function GuideActivities() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white via-stone-50/60 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="h-px w-12 bg-stone-300" />
            <span className="text-stone-400 tracking-[0.35em] text-[11px]">PATHS WE'VE WALKED TOGETHER</span>
            <span className="h-px w-12 bg-stone-300" />
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-stone-800 tracking-wide">
            我們一起走過的生命旅程
          </h2>
        </motion.div>

        <div className="space-y-24">
          {categories.map((cat, ci) => {
            const a = accentMap[cat.accent];
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-12">
                  <span className={`w-2 h-2 rounded-full ${a.dot}`} />
                  <h3 className={`text-sm tracking-[0.3em] font-medium ${a.text}`}>
                    {cat.label}
                  </h3>
                  <span className="text-stone-300 text-xs tracking-[0.2em]">{cat.labelEn.toUpperCase()}</span>
                  <span className="flex-1 h-px bg-stone-200" />
                </div>

                {/* Reflection items */}
                <div className="space-y-10">
                  {cat.items.map((item, ri) => (
                    <motion.article
                      key={ri}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: ri * 0.08 }}
                      className="relative pl-8 md:pl-10"
                    >
                      {/* vertical thread */}
                      <span className="absolute left-0 top-1.5 bottom-0 w-px bg-stone-200" />
                      <span className={`absolute left-0 top-1.5 w-px h-8 ${a.line}`} />
                      {/* index */}
                      <span className="absolute -left-0 top-1.5 -translate-x-1/2 hidden" />

                      <div className="flex items-baseline gap-4 mb-3">
                        <span className="text-stone-300 text-xs tracking-widest font-light">
                          {String(ri + 1).padStart(2, '0')}
                        </span>
                        <h4 className={`text-xl md:text-2xl font-light tracking-wide ${a.text}`}>
                          {item.keyword}
                        </h4>
                      </div>

                      <p className="text-stone-600 font-light leading-loose text-[15px] md:text-base">
                        {item.reflection}
                      </p>

                      <p className={`mt-4 text-sm tracking-wide font-medium ${a.name}`}>
                        《{item.activity}》
                      </p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}