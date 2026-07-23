import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    label: '工作坊',
    labelEn: 'Workshops',
    accent: 'emerald',
    groups: [
      {
        label: '安定與寧靜',
        items: [
          {
            reflection: '在活動中，覺察變得清晰，體會到不同的動態活動，享受到一段完全屬於自己的時光。',
            activity: '心靈澄靜工作坊',
          },
          {
            reflection: '九印和鮮活樁的體驗，很快可以進入放鬆和自我覺察，會想要帶入生活中，儲備自在力水庫，讓自己可以處於氣定神閒的狀態。',
            activity: '助人者自在力工作坊',
          },
        ],
      },
      {
        label: '身心充電',
        items: [
          {
            reflection: '體會到與自己連結的重要性，時時覺察自己的狀態，用實際可操作的方法，休息充電。',
            activity: '身心自癒的八堂入門課',
          },
          {
            reflection: '學習透過身體的動作與自己連結，將思緒回到當下，感受到真正放鬆。',
            activity: '抒壓工作坊',
          },
          {
            reflection: '回家後，迫不及待把重反力運用在生活中，感覺到腳底熱熱的，有覺知的做事，人就變得安靜了。',
            activity: '臍脈無極印',
          },
          {
            reflection: '那些年被自己陰而受的委屈像潮水般湧出，在站樁中看著，然後這些感覺慢慢變得輕鬆、透明汽化。',
            activity: '與內在小孩共舞工作坊',
          },
          {
            reflection: '畫出煩惱時，有個距離看著，⾝⼼的埃點⼀坨在那，常⽤意我的個性、經驗去努⼒撫平，反⽽少了空間讓埃點的感覺流動。這次很純粹的體驗從⾝識放鬆、放空，讓⾝⼼靈恢復排序和彈性。',
            activity: '身心靈自主能力',
          },
          {
            reflection: '在活動中練習垂直和⽔平的律動時，教練提醒⾃⼰不要只顧著先動，要注意⾳樂、試著投入⾃⼰的感情下去玩，我才意識到⾃⼰很想⽤慣性帶動⾃⼰。',
            activity: '心靈新視界',
          },
        ],
      },
      {
        label: '意識覺醒',
        items: [],
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
    groups: [
      {
        label: '親密療癒',
        items: [
          {
            reflection: '回家嘗試睡前半小時放下3C，單純地和自己窩在一起。躺在床上，讓身體的重量慢慢沉下去，呼吸變得柔和而深長，不知不覺就滑進了睡眠。沒想到在家也能找回那份久違的香甜睡意，很驚喜～',
            activity: '放鬆與冥想',
          },
          {
            reflection: '在舞蹈中很被觸動的是，不管如何我都有把自己愛回來的能力，而且持續在增進中。',
            activity: '舞動療癒冥想',
          },
          {
            reflection: '在笑的時候，感覺肚臍跟生命能量、感覺和愛合在一起震動著，喜樂和歡笑是生命本然的存在。',
            activity: '生命愛歡笑',
          },
        ],
      },
      {
        label: '意識更新',
        items: [
          {
            reflection: '一開始的幾首音樂貼到那癡癡等待卻等不到的心情，在始未動上感覺到這時的妄作很想找慰藉、找投靠，貼著埃點和那份孤獨，音樂很像在身體裡繞圈，一圈接著一圈，然後身體隨著埃點劃開來，有種釋然的自由感在單獨裡發生⋯⋯',
            activity: '動感笑瑜伽',
          },
          {
            reflection: '在那瞬間肚子笑進去，哭出來，突然有一股力量浮現，感覺像是我的願，頭腦還不知道是什麼，但那篤定的感覺很踏實！',
            activity: '無菜單心靈派對',
          },
          {
            reflection: '在工作與生活的壓力下，常常要把自己ㄍㄧㄥ得很堅強。進到睡眠瑜伽裡，那些武裝、堅強竟自己悄悄剝落......，隨著帶領者溫柔的聲音，重新觸碰到內在那塊柔軟、安靜又真實的地方。',
            activity: '睡眠瑜伽',
          },
        ],
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

function ReflectionItem({ item, index, accent }) {
  const a = accentMap[accent];
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative pl-8 md:pl-10"
    >
      {/* vertical thread */}
      <span className="absolute left-0 top-1.5 bottom-0 w-px bg-stone-200" />
      <span className={`absolute left-0 top-1.5 w-px h-8 ${a.line}`} />

      <div className="flex items-baseline gap-4 mb-3">
        <span className="text-stone-300 text-xs tracking-widest font-light">
          {String(index + 1).padStart(2, '0')}
        </span>
        {item.keyword && (
          <h4 className={`text-xl md:text-2xl font-light tracking-wide ${a.text}`}>
            {item.keyword}
          </h4>
        )}
      </div>

      <p className="text-stone-600 font-light leading-loose text-[15px] md:text-base">
        {item.reflection}
      </p>

      <p className={`mt-4 text-sm tracking-wide font-medium ${a.name}`}>
        《{item.activity}》
      </p>
    </motion.article>
  );
}

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
          <p className="mt-4 text-stone-500/80 font-light tracking-[0.15em] text-sm">
            不同活動參加者收到的生命禮物
          </p>
        </motion.div>

        <div className="space-y-24">
          {categories.map((cat) => {
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

                {cat.groups ? (
                  <div className="space-y-16">
                    {cat.groups.map((group) => (
                      <div key={group.label}>
                        {/* Subcategory header */}
                        <div className="flex items-center gap-3 mb-8">
                          <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                          <h4 className={`text-base md:text-lg font-light tracking-wide ${a.text}`}>
                            {group.label}
                          </h4>
                          <span className="flex-1 h-px bg-stone-200/70" />
                        </div>
                        {group.items.length > 0 ? (
                          <div className="space-y-10">
                            {group.items.map((item, ri) => (
                              <ReflectionItem key={ri} item={item} index={ri} accent={cat.accent} />
                            ))}
                          </div>
                        ) : (
                          <p className="pl-8 md:pl-10 text-stone-400 font-light text-sm italic">
                            敬請期待
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-10">
                    {cat.items.map((item, ri) => (
                      <ReflectionItem key={ri} item={item} index={ri} accent={cat.accent} />
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}