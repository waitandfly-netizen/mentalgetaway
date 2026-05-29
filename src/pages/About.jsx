import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sun, Moon, Mountain, Sparkles, Heart } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
export default function About() {

  const values = [
    { icon: Heart, title: "真誠連結", description: "與自然、與自己、與他人建立真實的連結" },
    { icon: Leaf, title: "自然療癒", description: "透過大自然的力量，讓身心重新找回平衡" },
    { icon: Sun, title: "內在光明", description: "喚醒每個人內在本有的智慧與光芒" },
    { icon: Mountain, title: "穩定扎根", description: "在變動的世界中，建立穩固的內在力量" }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "心靈假期",
    "alternateName": "心靈假期 Mental Getaway",
    "url": "https://spiritvacation-561934f1.base44.app"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "心靈假期 Mental Getaway",
    "url": "https://spiritvacation.base44.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://media.base44.com/images/public/698fc983574e659f561934f1/701f6988b_IMG_6964.jpg",
      "width": 512,
      "height": 512
    },
    "description": "好好生活，找回心靈寧靜的綠洲。提供一日、二日放空篇及僻靜篇等身心靈退修旅程。",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "taipei.circlelounge@gmail.com"
    },
    "sameAs": ["https://line.me/ti/p/@467wrtjj"]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <SEOHead
        title="初心緣起"
        description="心靈假期的故事從20多年前開始，一群年輕學子在暨南大學遇到一位奇特有趣的通識課老師，開展了各自獨一無二的心靈旅程。了解我們的初心與理念。"
        keywords="心靈假期緣起, 圓滿心靈花園, 靜如老師, 身心靈成長, 心靈旅程"
        image="https://media.base44.com/images/public/698fc983574e659f561934f1/701f6988b_IMG_6964.jpg"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/60" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="mb-8">
            <Sparkles className="w-10 h-10 text-amber-200/80 mx-auto mb-4" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">
            心靈假期
          </h1>
          <div className="space-y-6 text-left inline-block">
            <p className="text-xl md:text-2xl text-stone-100/90 font-light tracking-widest leading-relaxed">
              <span className="block">好好生活，</span>
              <span className="block pl-8">回到寧靜心靈的綠洲</span>
            </p>
            <p className="text-xl md:text-2xl text-stone-200/80 font-light tracking-widest leading-relaxed">
              <span className="block">真實旅程，</span>
              <span className="block pl-8">一趟美好滋養的出走</span>
            </p>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} className="mt-12">
            <Link
              to={createPageUrl("Programs")}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/20 transition-all duration-500 group"
            >
              <span className="tracking-wider">探索旅程</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center" initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
            <Leaf className="w-8 h-8 text-emerald-700/60 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-12 tracking-wide">我們的理念</h2>
            <div className="space-y-8 text-stone-600 text-lg md:text-xl leading-relaxed font-light">
              <p>享受既敞開內在的歡愉，又能深入獨處保有寧靜自在</p>
              <div className="w-12 h-px bg-emerald-700/30 mx-auto my-10" />
              <p>品嚐在地優質原型食物，滿足身體對營養真正的需要</p>
              <div className="w-12 h-px bg-emerald-700/30 mx-auto my-10" />
              <p>讓真實，而美好的旅程，成為滋養生命的安定與養分</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <Sparkles className="w-8 h-8 text-amber-500/60 mx-auto mb-8" />
            <h2 className="text-3xl font-light text-stone-800 mb-4 tracking-wide">我們的故事</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
            <div className="space-y-8 text-stone-600 font-light leading-loose text-center md:text-left">
              <p>故事是從20多年前開始的～</p>
              <p>一群年輕學子在台灣中部美麗山城最高學府—暨南大學，遇到一位奇特有趣的通識課老師。</p>
              <p>她長年引導著一屆又一屆的年輕學子，從迷惘人生中認識自己、找到方向，過程中發現許多人並不缺乏努力，反而是努力過頭了，無法真正的放鬆、覺察、愛自己。</p>
              <p>這位老師擅用好山好水的大自然能量，進行身心放鬆活動，讓許多年輕人體會成長這件事不但有趣好玩而且能夠在生活裏有實質的效果。</p>
              <p>接著發生的是，大家就此展開了各自獨一無二的心靈旅程。</p>
              <p>多年下來，他們和老師之間除了建立起亦師亦友的情誼，更是有心想把生命中品嚐到的美好讓更多人知道，於是在校內成立了「抒心社」，畢業後一起在台北築起工作室，如今名為「圓滿心靈花園」，是小小社會企業下的一個單位。</p>
              <p>「心靈假期」是心靈花園中的一個重磅活動，起源於十多年前老師領著大家開始構思，試圖建立一種特別的形式，讓人輕鬆快樂地成長身心靈，而不是以抽離的態度逃避痛苦。</p>
              <p>於是<span className="text-emerald-700 font-medium">「以渡假的方式體驗身心靈成長的美好」</span>定調了。</p>
              <p>在心靈假期中，我們試著為那些無法消化的情緒找到出口，為疲憊已久的身心安頓重置，不勉強做任何改變，只是放心地回到原廠設定的完整如新，讓改變自動發生。</p>
              <p>過去十多年來，心靈假期已超過 <span className="text-emerald-700 font-medium">1000人次</span>參與，當中有許多人不斷回鍋。</p>
              <p>有人找回了久違的深度睡眠與放鬆，有人重新聽見內在模糊的聲音，也有人在迷霧中看見自己可以前進的道路。</p>
              <p className="text-lg text-stone-700 bg-white p-6 rounded-xl border-l-4 border-emerald-600">
                如果你嚮往一種不靠努力修煉，以完全自然與平衡的方式覺醒，或許這趟旅程正是為你而準備的。
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-16">
            <img
              src="https://spiritvacation.wordpress.com/wp-content/uploads/2026/02/486750893_24060591246862331_2505797623539679779_n.jpg?w=1024"
              alt="心靈假期團隊"
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <p className="text-emerald-700/80 tracking-[0.3em] text-sm mb-4">OUR VALUES</p>
            <h2 className="text-3xl font-light text-stone-800 tracking-wide">核心價值</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15, duration: 0.6 }} className="bg-stone-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
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

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <p className="text-emerald-700/80 tracking-[0.3em] text-sm mb-4">OUR JOURNEY</p>
            <h2 className="text-3xl font-light text-stone-800 tracking-wide">旅程足跡</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-emerald-100" />
            {[
              { year: "2013", tag: "萌芽", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/cf8310c37_2013.jpg", content: "心靈假期從暨南大學開始，用好山好水的大自然能量，進行身心放鬆活動。", detail: "3月、4月、6月、8月、9月、11月，共計六場次2天1夜的旅程。" },
              { year: "2014", tag: "累積", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/2f2c96e27_2014.png", content: "為了提供更優質的充電品質，尋覓日月潭合適地點辦理心靈假期。", detail: "2月、4月、6月、10月、12月，共辦理5場次。" },
              { year: "2015", tag: "累積", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/7cb0185cc_2015.jpg", content: "持續於日月潭蓄積，辦理尊榮等級的心靈假期，深度淨化身心靈，享受高品質充電。", detail: "3月、9月辦理2場尊榮級；6月、12月暨南大學場次。" },
              { year: "2016", tag: "走向更廣的自然", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/da69f3d59_2016.png", content: "第一次離開埔里，來到宜蘭外澳海邊，將大海獨有的鮮活能量分享給參加者。", detail: "4月宜蘭外澳、7月暨大、10月埔里松濤園，共計3場次。" },
              { year: "2017", tag: "支持助人者", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/a0ca90560_2017.png", content: "支持辛勞的助人者，辦理專屬場次，讓自我照顧能有新選擇，享受完整的充電與還原。", detail: "3月、8月宜蘭場、5月、11月埔里暨大場，共計4場次。" },
              { year: "2018–2021", tag: "自然健行", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/484e267b5_2018-2021.jpg", content: "推出一日健行，用最簡單可親的方式，為生活按下暫停鍵，享受大自然的洗滌。", detail: "暖東峽谷、大湖親山步道、中正山、魚路古道，共辦理5場次。" },
              { year: "2021–2022", tag: "陪伴", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/c6b90576d_2021.png", content: "疫情停辦，用粉專陪伴大家。", detail: "" },
              { year: "2023", tag: "重新出發", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/9475c6f06_2023.jpg", content: "疫情過後重新出發，在宜蘭與南投的好山好水中，撫平疫情帶來的負擔。", detail: "5月宜蘭外澳、9月暨南大學，共計2場次。" },
              { year: "2024–2025", tag: "新的階段", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/bfd0d0688_2024-2025.jpg", content: "將假期階梯化，以一日放空篇、二日放空篇、蛻變篇、僻靜篇接引不同需要的旅人。", detail: "2024年5月、12月淡水場二日放空篇，以及 7月一日放空篇(陽明山)。\n\n2025年 4月陽明山一日放空篇。5月淡水場、8月南投日月潭場、11月宜蘭場二日放空篇；4月陽明山一日放空篇。" },
              { year: "2026 →", tag: "待續", img: null, content: "旅程繼續，故事未完……", detail: "" }
            ].map((item, index) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07, duration: 0.6 }} className="relative flex gap-8 mb-16">
                <div className="flex-shrink-0 w-10 flex justify-center pt-1 relative z-10">
                  <div className="w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow ring-2 ring-emerald-100" />
                </div>
                <div className="flex-1 bg-stone-50 rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                  {item.img && <img src={item.img} alt={item.year} className="w-full h-auto" />}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-2xl font-light text-emerald-800">{item.year}</span>
                      <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 tracking-wide">{item.tag}</span>
                    </div>
                    <p className="text-stone-600 font-light text-base leading-relaxed mb-2">{item.content}</p>
                    {item.detail && (
                      <div className="space-y-1">
                        {item.detail.split('\n\n').map((line, i) => (
                          <p key={i} className="text-stone-400 text-sm leading-relaxed">🌱 {line}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute rounded-full bg-amber-200/10 blur-3xl" style={{ width: 400, height: 400, top: '-20%', left: '-10%' }} />
          <div className="absolute rounded-full bg-emerald-400/10 blur-3xl" style={{ width: 350, height: 350, bottom: '-15%', right: '-5%' }} />
        </div>
        <motion.div
          className="max-w-xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-emerald-200/70 tracking-[0.3em] text-xs mb-6">BEGIN YOUR JOURNEY</p>
          <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-wide leading-relaxed">
            準備好踏上心靈之旅了嗎？
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={createPageUrl("Programs")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-emerald-900 rounded-full hover:bg-amber-50 transition-all duration-300 group"
            >
              <span className="tracking-wider font-medium">探索旅程</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <span className="tracking-wider">聯繫我們</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}