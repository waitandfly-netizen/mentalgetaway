import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Moon, Mountain, Clock, Users, MapPin, Sparkles } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: "一日放空行",
      subtitle: "Day Retreat",
      description: "適合忙碌的都市人，用一天的時間讓身心重新充電。在自然環境中進行輕度健行、呼吸練習。",
      features: ["半日健行體驗", "呼吸冥想練習", "自由探索時光"],
      duration: "約 8 小時",
      groupSize: "6-12 人",
      location: "台北近郊山區",
      image: "https://spiritvacation.wordpress.com/wp-content/uploads/2024/03/img_20191124_101304.jpg?w=1024",
      link: "OneDayRetreat",
      icon: Sun,
      color: "amber"
    },
    {
      title: "二日放空篇",
      subtitle: "Weekend Escape",
      description: "兩天一夜的深度休憩，遠離城市的喧囂，在寧靜的環境中重新連結自己。包含完整的身心課程與舒適住宿。",
      features: ["深度森林浴", "晨間冥想練習", "營養飲食調理", "星空下靜心"],
      duration: "2天1夜",
      groupSize: "8-15 人",
      location: "宜蘭山區民宿",
      image: "https://spiritvacation.wordpress.com/wp-content/uploads/2024/02/s__381296664.jpg?w=1024",
      link: "TwoDayRetreat",
      icon: Moon,
      color: "indigo"
    },
    {
      title: "蛻變篇",
      subtitle: "Silent Retreat",
      description: "三天至七天的深度僻靜體驗，在全然的寧靜中與內在自我對話。適合有冥想基礎或渴望深度轉化的夥伴。",
      features: ["靜默修習", "每日冥想課程", "輕食淨化飲食", "一對一引導"],
      duration: "3-7 天",
      groupSize: "4-8 人",
      location: "花東僻靜場地",
      image: "https://spiritvacation.wordpress.com/wp-content/uploads/2024/02/s__381304840_0.jpg?w=1024",
      link: "SilentRetreat",
      icon: Mountain,
      color: "emerald"
    },
    {
      title: "僻靜篇",
      subtitle: "Invitation Only",
      description: "由心靈導遊邀請合適對象，規劃符合身心狀態之免費行程，不定期舉辦。",
      features: ["洗滌身心靈", "靜心冥想", "淨化飲食", "心靈導遊從旁支持"],
      duration: "3-7 天",
      groupSize: "4-8 人",
      location: "花東僻靜場地",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/9c4e700ba_IMG_20220923_150004.jpg",
      link: "InvitationRetreat",
      icon: Sparkles,
      color: "violet"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80')"
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
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">OUR PROGRAMS</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            旅程介紹
          </h1>
        </motion.div>
      </section>

      {/* Programs List */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p 
            className="text-center text-stone-500 font-light max-w-2xl mx-auto mb-20 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            選擇適合您的方式，開始一段療癒身心的旅途
          </motion.p>

          <div className="space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  {program.link ? (
                    <Link to={createPageUrl(program.link)} className="block group">
                      <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                        <img 
                          src={program.image} 
                          alt={program.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
                        <div className="absolute top-6 left-6">
                          <div className={`w-12 h-12 rounded-full bg-white/90 flex items-center justify-center`}>
                            <program.icon className={`w-6 h-6 text-${program.color}-600`} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <div className={`w-12 h-12 rounded-full bg-white/90 flex items-center justify-center`}>
                          <program.icon className={`w-6 h-6 text-${program.color}-600`} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <p className="text-emerald-700/80 tracking-[0.2em] text-sm mb-2">{program.subtitle}</p>
                  <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">{program.title}</h2>
                  <p className="text-stone-600 font-light leading-relaxed mb-8">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-white rounded-xl">
                      <Clock className="w-5 h-5 text-stone-400 mx-auto mb-2" />
                      <p className="text-sm text-stone-600">{program.duration}</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl">
                      <Users className="w-5 h-5 text-stone-400 mx-auto mb-2" />
                      <p className="text-sm text-stone-600">{program.groupSize}</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl">
                      <MapPin className="w-5 h-5 text-stone-400 mx-auto mb-2" />
                      <p className="text-sm text-stone-600">{program.location}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-stone-500 mb-3">旅程亮點</p>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature) => (
                        <span 
                          key={feature}
                          className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {program.link && (
                    <Link 
                      to={createPageUrl(program.link)}
                      className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors group"
                    >
                      <span className="tracking-wider">查看詳細資訊</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}