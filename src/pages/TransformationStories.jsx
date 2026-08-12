import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Leaf, ChevronDown } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

export default function TransformationStories() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const stories = [
    {
      title: "從往外找尋意義到往內接近自己",
      author: "卉仙",
      summary: "工作耗竭、失戀後漸漸失去生活色彩，在心靈假期學會親密自己、讓情緒流動，走到對自己全然接納的愛。",
      content: [
        "剛踏入社會的那幾年，身心在日復一日的工作中逐漸耗竭，發現離自己越來越遙遠。經歷失戀的悲傷與工作的無力感，漸漸失去了生活原本的色彩。內在生命力渴求被喚醒，當時的我以為意義是追尋外在的人事物，只是這條路走著走著，一路上迷茫、遙遠。",
        "直到受到朋友的邀約，參加心靈假期，那時候單純想給自己一個機會嘗試不同的事物，看看能不能讓生活有些不一樣。",
        "一直以來，我都自認為是個很能夠獨處的人，不過也漸漸發現，我的獨處其實是逃避人群，認為只要不接觸就不會被影響或影響別人，久而久之內在的封閉，也讓我感到生命的不流動，總覺得缺少一塊。也因著這種卡住的感覺，放大了「親密自己」的不足，能夠獨處，不代表跟自己可以有品質的相處。",
        "靜心活動後通常是內在最安靜的時刻，到戶外獨處散步，讓自己在這個狀態中，與大自然連結，通常都會有令人驚喜的發生。",
        "當在每當下跟都自己很貼近時，眼睛看出去的風景格外鮮明和清晰，也會看見平常不會留意的細節，例如腳踩在地面上的感覺、鼻子吸進來的新鮮空氣、天空流動的雲朵。",
        "讓我回想平常生活中，在追求新鮮感的路上，大多是往外求，買更多的東西、吃更多的美食，從未想過在與自己連結後，那份平凡樸實的觸動，才是靈魂真正渴望的滋養。",
        "隨著一次次的回到內在的練習，我意識到讓情緒流動的重要性，情緒沒有好壞之分，端看我們能否接住當下的自己，而不是無止盡的壓抑、假裝和逃避。",
        "情緒發生的每個片刻，就像在解鎖一樣，問問自己：怎麼了？當可以和自己越來越靠近時，也發現和身邊的人的關係，似乎也開始有些不同，因為瞭解自己，也在那一瞬間理解對方，產生的是自然而然的共鳴，而不是防衛和對立。",
        "走到現在，也漸漸明白，愛自己的路沒有盡頭，只要願意繼續，總會有意想不到的風景，對生命的感謝油然而生，這份安然存在的踏實感，以及對自己全然接納的愛，原來可以如此篤定。"
      ],
      icon: Heart
    },
    {
      title: "在尋愛的路上，我慢慢回到自己",
      author: "佳宜",
      summary: "從小追尋愛，失戀後走進靜如老師的課，學會愛自己，在心靈假期被接住，瞥見一生追尋的那份愛。",
      content: [
        "因為家庭的關係，我很小就開始思考一個問題——\n什麼是愛？",
        "我試著在書裡找答案，也走進一段又一段關係裡。\n那些年，我經驗過忌妒、比較、交換、虛偽與幻象。\n關係裡偶爾也有美好，但總是和我心底真正渴望的「愛」，隔著一段距離。",
        "內在卻始終有一個聲音沒有停過。\n它對愛、對生命有著很深的渴望，也因此我走上了助人工作的道路。",
        "直到大學時，一場失戀幾乎把我整個人掏空。\n那不只是感情的結束，更像是我對「再一次找到愛」的全面失望。\n我以為自己已經無法再愛了。",
        "也是在那樣的狀態下，我誤打誤撞走進了靜如老師的通識課。",
        "她和我過去認識的任何一位老師都不一樣。\n她身上有一種很難形容的東西——像是滿滿的「愛」。\n我記得，那時候我甚至沒跟她說上幾句話，眼淚卻突然止不住地流下來。",
        "那一刻，就像一塊乾枯已久的土地，忽然被泉水灌溉。\n老師溫柔地對我說：先從愛自己開始。",
        "真正開始練習愛自己後，我才發現——\n原來，我和自己這麼不熟。\n我不知道自己喜歡什麼、不清楚什麼會讓我快樂，也第一次清楚看見了過去在關係裡的自己：\n卑微、渴求被愛、想被看見、委屈自己、習慣當拯救者。",
        "那個過程一點也不舒服。\n但我心裡有一個很確定的直覺：\n我想找的「愛」，就在這條路上。",
        "後來，我來到了心靈假期。\n在那裡，我經驗到被靜如老師、也被整個工作團隊無條件地接住與愛著。\n那些從小累積的「不被愛」、對人深深的不信任與防衛，開始一層一層地鬆動。",
        "我慢慢敞開，允許自己接受這一切。\n那一刻，我突然感覺——\n天地好大，而天地給我的愛，也好大。",
        "像是一滴小水滴，終於回到了大海。\n我瞥見了一點點，那個我一生都在尋找的愛。",
        "愛，就像一顆被種下的種子。\n它沒有立刻開花，卻在我的日常悄悄發芽。\n持續練習愛自己、練瑜伽、冥想，也固定進場「保養」😂\n而越走越發現，愛自己這件事，可以被無限地細緻對待——學無止盡，愛也沒有終點。",
        "我開始更感恩，也更加謙卑。\n在這條路上，我不是已經找到了所有答案，\n而是，終於知道，愛是可以慢慢活出來的。"
      ],
      icon: Sparkles
    },
    {
      title: "學習與自己同在",
      author: "朱雲",
      summary: "助人工作耗竭，在心靈假期學會親密真實的自己，從燃燒自己走到穩定而長久的流動。",
      content: [
        "大學畢業後踏入助人工作領域，懷抱著熱情，相信燃燒自己照亮他人，期待自己的力量可以為世界加分，然而隨著工作時間越長，身心的負荷也越來越大，開始懷疑到底為何而戰？也不確定存在的意義。",
        "直到職場來了一位新同事，一開始對她的印象是，這個人很奇怪，當大家都忙得焦頭爛額時，她簡單的幾句話，讓氛圍變得不太一樣，也因為她的輕鬆幽默，工作的過程變得不那麼負擔和艱鉅，在好奇心的驅使下接受她的邀請參加心靈假期，沒有想過的內在親密旅程就此展開。",
        "在大自然的洗滌下，那些不經意所累積的疲累、負擔漸漸變淡；跟著心靈導遊靜如的引導，為身心充電。逐漸看到原來助人的過程，消耗的不只是能量，也把自己弄丟了，能再透過親密把它找回來，不需再用力對抗或隨波逐流，只是好好和真實的自己在一起。",
        "已不記得參加多少次活動，每次都會有新的發現，也慢慢感受到所經驗到的體會，可以在生活中持續......",
        "｜放掉安全感·練習信任的勇氣\n某次心靈假期安排夜間散步，各自選路獨行，我沿著熟悉的路返程，途中遇見心靈導遊。她說，有預感會有人走這條路，所以在此等待。\n\n懷著不安，我跟著她穿越漆黑，走到草地中央，迎接我的，是一片廣闊天地，那一刻，恐懼被承接了，直到現在，每當熟悉的不安浮現、想退縮時，我都會想起那片天空，它仍在，支持我繼續前行。",
        "｜在樁上充電·隨時都是心靈假期\n因工作時常往返奔波。某次下班後擠在捷運車廂，沒有座位，我選擇一個能站穩的位置，隨著車廂晃動微調身體，慢慢找到平衡。那份與自己合拍的親密感，讓整個人清爽起來。\n\n就像在草地上進行心輪靜心，順著地面的起伏調整姿勢。當越靠近自己、越少控制，放鬆與舒適便自然浮現——彷彿為自己充電。",
        "從燃燒自己，到學會與自己親密；從害怕退縮，到願意信任未知；從奔波與疲累之中，慢慢找到屬於自己的平衡。",
        "心靈假期帶給我的，不只是幾次活動的感動，而是一種可以在生活裡持續發生的轉變，助人不再是消耗，而是一種穩定而長久的流動；也看到原來真正的力量，來自親密真實的自己。"
      ],
      icon: Leaf
    }
  ];

  const toggleStory = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <SEOHead
        title="蛻變故事"
        description="閱讀真實參與者的心靈旅程故事——從迷惘到找回自己，從疲憊到重新充電。每一段旅程，都是一次與自己相遇的機會。"
        keywords="心靈假期心得, 蛻變故事, 身心靈轉化, 靜心分享, retreat testimonials"
        image="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80"
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">TRANSFORMATION STORIES</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            蛻變故事
          </h1>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-white">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-stone-600 font-light text-lg leading-relaxed">
            每一段旅程，都是一次與自己相遇的機會。
          </p>
          <p className="text-stone-600 font-light text-lg leading-relaxed">
            這些真實的故事，記錄著生命轉化的痕跡。
          </p>
        </motion.div>
      </section>

      {/* Stories */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto space-y-8">
          {stories.map((story, index) => {
            const isOpen = expandedIndex === index;
            return (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleStory(index)}
                  className="w-full text-left p-6 md:p-10 flex items-start gap-4 md:gap-5 hover:bg-stone-50/60 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                    <story.icon className="w-6 h-6 md:w-7 md:h-7 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl md:text-2xl font-light text-stone-800 leading-snug">
                      {story.title}
                    </h2>
                    <p className="text-sm text-stone-400 mt-1">{story.author}</p>
                    <p className="text-stone-500 font-light leading-relaxed mt-3 text-sm md:text-base line-clamp-2">
                      {story.summary}
                    </p>
                  </div>
                  <ChevronDown
                    className={`flex-shrink-0 w-5 h-5 text-stone-400 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-10 pb-8 md:pb-12 pt-2 border-t border-stone-100">
                        <div className="max-w-none pt-6">
                          {story.content.map((paragraph, pIndex) => (
                            <p 
                              key={pIndex} 
                              className="text-stone-600 font-light leading-loose mb-6 whitespace-pre-line"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <div className="text-center mt-4">
                          <button
                            onClick={() => setExpandedIndex(null)}
                            className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 transition-colors"
                          >
                            <ChevronDown className="w-4 h-4 rotate-180" />
                            收合故事
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 px-6 bg-emerald-900 text-white">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-4">
            每個人的故事都獨一無二
          </p>
          <p className="text-emerald-100/80 font-light">
            屬於你的蛻變之旅，也正等待著開始
          </p>
        </motion.div>
      </section>
    </div>
  );
}