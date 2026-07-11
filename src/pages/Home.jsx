import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sun, Moon, Mountain, Sparkles } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function Home() {
  const programs = [
    {
      title: "一日放空行",
      subtitle: "Day Retreat",
      description: "在自然中深呼吸，讓身心回歸平靜",
      image: "https://spiritvacation.wordpress.com/wp-content/uploads/2024/03/img_7582.jpeg",
      link: "OneDayRetreat",
      icon: Sun
    },
    {
      title: "二日放空營",
      subtitle: "Weekend Escape",
      description: "兩天一夜的心靈充電之旅",
      image: "https://spiritvacation.wordpress.com/wp-content/uploads/2024/03/line_album_240313_12.jpg",
      link: "TwoDayRetreat",
      icon: Moon
    },
    {
      title: "蛻變篇",
      subtitle: "Silent Retreat",
      description: "在寧靜中與內在自我對話",
      image: "https://spiritvacation.wordpress.com/wp-content/uploads/2024/02/s__381304862_0.jpg",
      link: "SilentRetreat",
      icon: Mountain
    },
    {
      title: "僻靜篇",
      subtitle: "Invitation Only",
      description: "由心靈導遊邀請，為您量身打造的身心靈旅程",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698fc983574e659f561934f1/9c4e700ba_IMG_20220923_150004.jpg",
      link: "InvitationRetreat",
      icon: Sparkles
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // JSON-LD structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "心靈假期",
    "alternateName": "心靈假期 Mental Getaway",
    "url": "https://spiritvacation-561934f1.base44.app"
  };

  const siteNavigationData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteLinksSearchBox",
        "url": "https://spiritvacation-561934f1.base44.app"
      }
    ]
  };

  const siteNavElements = [
    { name: "常見問題", url: "https://spiritvacation-561934f1.base44.app/FAQ", description: "心靈假期常見問題解答，包括報名、詛程內容、飲食住宿等詳細資訊" },
    { name: "旅程介紹", url: "https://spiritvacation-561934f1.base44.app/Programs", description: "提供一日、二日放空篳、蔹變篳與僻靜篳等多種身心靈退修旅程" },
    { name: "一日放空篳", url: "https://spiritvacation-561934f1.base44.app/OneDayRetreat", description: "一日放空篳，走出一方斗室，來到郊外步道跟著大自然和呼吸" },
    { name: "僻靜篳", url: "https://spiritvacation-561934f1.base44.app/InvitationRetreat", description: "僻靜篳，來到人煙稀少的山海邊，悠遊於無邊際的意識海洋" },
    { name: "心靈專欄", url: "https://spiritvacation-561934f1.base44.app/Guide", description: "心靈導遊丁靜如，在身心靈成長領域深工作二、三十年" },
    { name: "初心緣起", url: "https://spiritvacation-561934f1.base44.app/About", description: "心靈假期的緣起與理念，十多年行程足跡" }
    ];

  const siteNavStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "心靈假期網站導覽",
    "itemListElement": siteNavElements.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "url": item.url,
      "description": item.description
    }))
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
    "description": "好好生活，找回心靈寧靜的綠洲。提供一日、二日放空營及僻靜篇等身心靈退修旅程。",
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
        title="好好生活，找回心靈寧靜的綠洲"
        description="心靈假期 Mental Getaway — 好好生活，回到寧靜心靈的綠洲。提供一日放空篇、二日放空營、僻靜篇等身心靈退修旅程，讓您在大自然中重拾內在平靜與力量。"
        keywords="心靈假期, Mental Getaway, 身心靈退修, 靜心旅程, 一日放空, 僻靜篇, 自然療癒, mindfulness retreat"
        image="https://media.base44.com/images/public/698fc983574e659f561934f1/701f6988b_IMG_6964.jpg"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavStructuredData) }}
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Desktop background - new image, no overlay */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://media.base44.com/images/public/698fc983574e659f561934f1/8e5f19195_.png')",
          }}
        />
        {/* Mobile background - original image, no overlay, shifted left */}
        <div
          className="md:hidden absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://media.base44.com/images/public/698fc983574e659f561934f1/ba6a76fb1_LINE_NOTE_260711_1.jpg')",
            backgroundPosition: "left 30% center",
          }}
        />

        {/* Text - mobile only */}
        <motion.div
          className="md:hidden relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
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
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Leaf className="w-8 h-8 text-emerald-700/60 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-12 tracking-wide">
              我們的理念
            </h2>
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

      {/* Programs Section */}
      <section className="py-24 md:py-32 px-6 bg-stone-100/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-emerald-700/80 tracking-[0.3em] text-sm mb-4">2026 PROGRAMS</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-wide">
              心靈假期篇章
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Link 
                  to={createPageUrl(program.link)}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <program.icon className="w-6 h-6 text-amber-200/80 mb-3" />
                      <p className="text-amber-200/80 text-sm tracking-widest mb-2">{program.subtitle}</p>
                      <h3 className="text-2xl text-white font-light">{program.title}</h3>
                    </div>
                  </div>
                  <p className="text-stone-600 font-light leading-relaxed px-2">
                    {program.description}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-700 mt-4 px-2 group-hover:gap-4 transition-all">
                    <span className="text-sm tracking-wider">了解更多</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-amber-200 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-200 blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto text-center relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
            準備好踏上心靈之旅了嗎？
          </h2>
          <p className="text-emerald-100/80 text-lg font-light mb-10 leading-relaxed">
            讓我們一起，在大自然中找回內心的平靜與力量
          </p>
          <Link 
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-emerald-900 rounded-full hover:bg-amber-50 transition-all duration-300 group"
          >
            <span className="tracking-wider font-medium">聯繫我們</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}