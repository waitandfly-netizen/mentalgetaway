import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      title: "【靈魂真實的需要是甚麼？】",
      date: "2026.08",
      content: "在假期中，聽到一句話讓我很有感，我們的靈魂生生世世都要來愛自己，但是我們都忘記了，一直在愛別人，為別人愛…",
      link: "TestimonialLoveSelf"
    },
    {
      title: "【臣服於天地之間】",
      date: "2026.08",
      content: "那時我感受到大自然的巨大與敬畏，突然覺得自己很渺小，好像什麼都不用做，只要安靜地存在、慢慢感受，也許就是一種臣服。",
      link: "TestimonialSurrender"
    },
    {
      title: "【一場與自己的親密練習】",
      date: "2026.08",
      content: "第一次發現，原來不需要那麼用力。原來，對待自己可以更細緻。我喜歡這種和自己親密的感覺，雖然還有些陌生。",
      link: "TestimonialIntimatePractice"
    },
    {
      title: "【好好陪伴自己，也是一種溫柔】",
      date: "2026.08",
      content: "假期結束後，時不時會浮現在有外澳點點滴滴的畫面。雖然活動中經歷了激烈和平靜的環節，但感覺心裡有一塊溫柔的部分被觸動了。",
      link: "TestimonialGentleCompanion"
    },
    {
      title: "【感受與自己、與世界的連結】",
      date: "2026.08",
      content: "連結不只有牽著一個人的手。有時是和愛的人連結，有時是和自己連結；有時，只是安靜地站在世界裡，而那一刻，我好像都感受到了。",
      link: "TestimonialConnection"
    },
    {
      title: "【一切都很好】",
      date: "2025.11.01",
      content: "「放空」並非停滯，而是高質量的「留白」，正是這份留白，讓身心得以重整，將山頂的靜、對陰晴的接納，融入每一天的生活。",
      link: "TestimonialAllIsWell"
    },
    {
      title: "【從「聽」開始】",
      date: "2017.03.27",
      content: "能夠放開來去聽，山、海、火車聲、鳥叫聲、鞭炮聲、音樂等，原來是很和諧、舒服的。能納入存在的種種，自己也就慢慢變大了。",
      link: "TestimonialFromHear"
    },
    {
      title: "【黑夜裡的自然律動】",
      date: "2017.04.04",
      content: "白色碎浪點綴在黑水上，慢慢相融，黑水白浪一來一往，我發現這就是太極。我必須跟著海水舞動，否則就會跌倒。音樂性、同頻共振，好像有點感覺了。",
      link: "TestimonialNightRhythm"
    },
    {
      title: "【接受自己的每個狀態】",
      date: "2017.09.15",
      content: "內在無拘無束的孩子完全被釋放，享受為自己而跳的迎賓舞，享受在海邊和夥伴打水仗，享受一起合作完成料理。沒有應該如何，不需小心翼翼，接受、滿足自己的每一個狀態。",
      link: "TestimonialAcceptSelf"
    },
    {
      title: "【真實的快樂】",
      date: "2016.04.24",
      content: "內在的自由度，如同大雁，翱翔於無涯邊際……一同慶祝歡笑、一同搭肩笑唱，很真實；全然的動，自然進入更深的靜，也很真實。我們一起玩過的畫面，印烙在心……",
      link: "TestimonialTrueHappiness"
    },
    {
      title: "【自然而然】",
      date: "2016.01.26",
      content: "不用頭腦去思考，而將一切交給身體交給心，感受意識在一握一放之間，那些在意的酸酸的，苦苦的事，漸漸都不重要了，僅是簡單的存在於天地，享受愉悅，清明。",
      link: "TestimonialNaturally"
    },
    {
      title: "【我的故鄉在這裡】",
      date: "2015.11.19",
      content: "不要問我從哪裡來～我的故鄉在這裡～我盡情地單獨與自己相處，躺在草地上，享受冬天裡難得的暖微風與陽光，讓身體休息，也讓心靈呼吸。",
      link: "TestimonialHometown"
    }
  ];



  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900" />
        
        <motion.div 
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">TESTIMONIALS</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            參加者心得
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
            心靈假期中，我們沒有固定行程，而是順著引導安住在當下，
          </p>
          <p className="text-stone-600 font-light text-lg leading-relaxed">
            每一個被好好經驗的片刻，都是一處風景。
          </p>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {testimonial.link ? (
                  <Link to={createPageUrl(testimonial.link)} className="block group">
                    <Quote className="w-8 h-8 text-emerald-200 mb-4" />
                    <h3 className="text-lg font-medium text-stone-800 mb-1 group-hover:text-emerald-700 transition-colors">{testimonial.title}</h3>
                    {testimonial.date && <p className="text-stone-400 text-xs mb-3 tracking-wider">{testimonial.date}</p>}
                    {testimonial.image && (
                      <div className="mb-4 overflow-hidden rounded-xl">
                        <img src={testimonial.image} alt={testimonial.title} className="w-full h-48 object-cover" />
                      </div>
                    )}
                    <p className="text-stone-600 font-light leading-loose text-base tracking-wide mb-4">
                      {testimonial.content}
                    </p>
                    <span className="inline-flex items-center gap-2 text-emerald-700 text-sm group-hover:gap-3 transition-all">
                      閱讀更多 <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ) : (
                  <>
                    <Quote className="w-8 h-8 text-emerald-200 mb-4" />
                    <h3 className="text-lg font-medium text-stone-800 mb-1">{testimonial.title}</h3>
                    {testimonial.date && <p className="text-stone-400 text-xs mb-3 tracking-wider">{testimonial.date}</p>}
                    {testimonial.image && (
                      <div className="mb-4 overflow-hidden rounded-xl">
                        <img src={testimonial.image} alt={testimonial.title} className="w-full h-48 object-cover" />
                      </div>
                    )}
                    <p className="text-stone-600 font-light leading-loose text-base tracking-wide whitespace-pre-line">
                      {testimonial.content}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="py-20 px-6 bg-emerald-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "累積參加人次" },
              { number: "20+", label: "年服務經驗" },
              { number: "15000+", label: "累積教學時數" },
              { number: "∞", label: "回鍋參加者" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-light text-amber-200 mb-2">{stat.number}</p>
                <p className="text-emerald-100/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}