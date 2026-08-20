import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialLoveSelf() {
  const paragraphs = [
    "參加心靈假期之前，一直有個疑惑：一個靈魂不斷回到這個世界，經歷各種滋味是為了什麼？當時我只知道於我而言是和愛有關的功課，但是這個愛還很模糊，只停留在我渴望被愛、被他人被接納、害怕被討厭等。",
    "",
    "帶著這個疑惑，在假期中，聽到一句話讓我很有感，我們的靈魂生生世世都要來愛自己，但是我們都忘記了，一直在愛別人，為別人愛…",
    "",
    "那個當下我的靈魂聽到了，有種沈睡已久終於甦醒過來的感覺。原來我的靈魂要修煉的是如何真的愛到自己，只是一直被蓋住了。",
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-emerald-900">
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">TESTIMONIAL</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            靈魂真實的需要是甚麼？
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2026.8月宜蘭二日放空營(學員A)</p>
        </motion.div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to={createPageUrl('Testimonials')}
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>返回參加者心得</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center md:justify-end"
            >
              <img
                src="https://media.base44.com/images/public/698fc983574e659f561934f1/245bfb060_A.jpg"
                alt="2026.8月宜蘭二日放空營(學員A)"
                className="max-w-[19rem] w-full md:h-full rounded-xl object-cover md:object-top"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-stone max-w-none"
            >
              {paragraphs.map((p, i) =>
                p === "" ? (
                  <div key={i} className="h-4" />
                ) : (
                  <p key={i} className={`text-stone-600 font-light leading-loose text-lg ${i === paragraphs.length - 1 ? '' : 'mb-4'}`}>
                    {p}
                  </p>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}