import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "報名相關",
      questions: [
        {
          q: "如何報名參加心靈假期？",
          a: "您可以透過我們的活動表單報名及匯款，或直接透過官方 LINE 帳號與我們聯繫。報名後，我們將於 24 小時內回覆確認。"
        },
        {
          q: "活動費用包含什麼？",
          a: "費用包含：全程課程引導、場地費用、餐食費用（依行程而定）、保險費用。住宿型行程另含住宿費用。交通費用請自理，但我們會提供交通指引。"
        },
        {
          q: "可以取消或更改日期嗎？",
          a: "活動前 14 天可免費取消或更改日期；活動前 7-13 天取消，收取 30% 手續費；活動前 1-6 天取消，收取 50% 手續費；活動當天取消，恕不退費。建議提早規劃以保有彈性。"
        }
      ]
    },
    {
      category: "行程內容",
      questions: [
        {
          q: "需要有冥想或瑜伽基礎嗎？",
          a: "完全不需要！我們的課程設計適合所有程度的參加者，包括完全沒有經驗的初學者。引導老師會根據參加者的狀況調整節奏。"
        },
        {
          q: "體力不好也可以參加嗎？",
          a: "當然可以！我們的健行路線都是精心挑選的，難度適中，步調緩慢。重點不在於距離或速度，而是享受過程中與自然的連結。如有特殊身體狀況，請事先告知。"
        },

      ]
    },
    {
      category: "飲食與住宿",
      questions: [
        {
          q: "有特殊飲食需求可以配合嗎？",
          a: "可以的。我們提供素食選項，也可配合過敏原避免。請在報名時告知您的飲食需求，我們會盡力滿足。"
        },
        {
          q: "住宿環境如何？",
          a: "我們精選的住宿場地都位於自然環境中，乾淨舒適。房型以雙人房或多人房為主，如需單人房請提前告知（可能需加價）。"
        },
        {
          q: "需要自己帶什麼？",
          a: "建議攜帶：舒適的運動服裝、防曬用品、防蚊液、個人藥品、水壺、輕便外套。詳細的行前準備清單會在報名確認後提供給您。"
        }
      ]
    },
    {
      category: "其他問題",
      questions: [
        {
          q: "天氣不好活動會取消嗎？",
          a: "小雨照常舉行（會調整室內課程比例），如遇颱風或豪雨等不可抗力因素，我們會提前通知並協助改期或全額退費。"
        },
        {
          q: "可以帶朋友一起參加嗎？",
          a: "非常歡迎！結伴參加可以彼此支持，也能在活動後分享心得。部分場次提供團報優惠，詳情請洽詢。"
        },
        {
          q: "活動後會有後續支持嗎？",
          a: "是的。參加者可以加入我們的官方LINE(ID: @467wrtjj)，我們會不定期舉辦各類活動，幫助您將所學融入日常生活。"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80')"
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
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">FAQ</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            常見問題
          </h1>
        </motion.div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p 
            className="text-center text-stone-500 font-light max-w-2xl mx-auto mb-16 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            找不到答案？歡迎直接聯繫我們
          </motion.p>

          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-xl font-medium text-stone-800 mb-6 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-emerald-600" />
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const index = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-stone-50 transition-colors"
                      >
                        <span className="font-medium text-stone-700 pr-4">{faq.q}</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-5">
                              <p className="text-stone-600 font-light leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}