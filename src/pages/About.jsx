import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Sun, Mountain, Sparkles } from 'lucide-react';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const values = [
    {
      icon: Heart,
      title: "真誠連結",
      description: "與自然、與自己、與他人建立真實的連結"
    },
    {
      icon: Leaf,
      title: "自然療癒",
      description: "透過大自然的力量，讓身心重新找回平衡"
    },
    {
      icon: Sun,
      title: "內在光明",
      description: "喚醒每個人內在本有的智慧與光芒"
    },
    {
      icon: Mountain,
      title: "穩定扎根",
      description: "在變動的世界中，建立穩固的內在力量"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1920&q=80')"
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
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            初心緣起
          </h1>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <Sparkles className="w-8 h-8 text-amber-500/60 mx-auto mb-8" />
            <h2 className="text-3xl font-light text-stone-800 mb-12 tracking-wide">
              我們的故事
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="prose prose-lg prose-stone mx-auto"
          >
            <div className="space-y-8 text-stone-600 font-light leading-loose text-center md:text-left">
              <p>
                故事是從20多年前開始的～
              </p>
              
              <p>
                一群年輕學子在台灣中部美麗山城最高學府—暨南大學，遇到一位奇特有趣的通識課老師。
              </p>
              
              <p>
                她長年引導著一屆又一屆的年輕學子，從迷惘人生中認識自己、找到方向，過程中發現許多人並不缺乏努力，反而是努力過頭了，無法真正的放鬆、覺察、愛自己。
              </p>
              
              <p>
                這位老師擅用好山好水的大自然能量，進行身心放鬆活動，讓許多年輕人體會成長這件事不但有趣好玩而且能夠在生活裏有實質的效果。
              </p>
              
              <p>
                接著發生的是，大家就此展開了各自獨一無二的心靈旅程。
              </p>
              
              <p>
                多年下來，他們和老師之間除了建立起亦師亦友的情誼，更是有心想把生命中品嚐到的美好讓更多人知道，於是在校內成立了「抒心社」，畢業後一起在台北築起工作室，如今名為「圓滿心靈花園」，是小小社會企業下的一個單位。
              </p>
              
              <p>
                「心靈假期」是心靈花園中的一個重磅活動，起源於十多年前老師領著大家開始構思，試圖建立一種特別的形式，讓人輕鬆快樂地成長身心靈，而不是以抽離的態度逃避痛苦。
              </p>
              
              <p>
                於是<span className="text-emerald-700 font-medium">「以渡假的方式體驗身心靈成長的美好」</span>定調了。
              </p>
              
              <p>
                在心靈假期中，我們試著為那些無法消化的情緒找到出口，為疲憊已久的身心安頓重置，不勉強做任何改變，只是放心地回到原廠設定的完整如新，讓改變自動發生。
              </p>
              
              <p>
                過去十多年來，心靈假期已超過 <span className="text-emerald-700 font-medium">1000人次</span>參與，當中有許多人不斷回鍋。
              </p>
              
              <p>
                有人找回了久違的深度睡眠與放鬆，有人重新聽見內在模糊的聲音，也有人在迷霧中看見自己可以前進的道路。
              </p>
              
              <p className="text-lg text-stone-700 bg-stone-50 p-6 rounded-xl border-l-4 border-emerald-600">
                如果你嚮往一種不靠努力修煉，以完全自然與平衡的方式覺醒，或許這趟旅程正是為你而準備的。
              </p>
            </div>
          </motion.div>
          
          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16"
          >
            <img 
              src="https://spiritvacation.wordpress.com/wp-content/uploads/2026/02/486750893_24060591246862331_2505797623539679779_n.jpg?w=1024" 
              alt="心靈假期團隊"
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <p className="text-emerald-700/80 tracking-[0.3em] text-sm mb-4">OUR VALUES</p>
            <h2 className="text-3xl font-light text-stone-800 tracking-wide">
              核心價值
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="text-lg font-medium text-stone-800 mb-3">{value.title}</h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-emerald-900 text-white">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-5xl text-amber-200/30 mb-6">"</div>
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
            以渡假的方式體驗身心靈成長的美好
          </blockquote>
          <div className="w-16 h-px bg-amber-200/40 mx-auto" />
        </motion.div>
      </section>
    </div>
  );
}