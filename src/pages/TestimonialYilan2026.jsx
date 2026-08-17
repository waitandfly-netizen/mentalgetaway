import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function TestimonialYilan2026() {
  const paragraphs = [
    "參加心靈假期之前，一直有個疑惑：一個靈魂不斷回到這個世界，經歷各種滋味是為了什麼？當時我只知道於我而言是和愛有關的功課，但是這個愛還很模糊，只停留在我渴望被愛、被他人被接納、害怕被討厭等。帶著這個疑惑，在假期中，聽到一句話讓我很有感，我們的靈魂生生世世都要來愛自己，但是我們都忘記了，一直在愛別人，為別人愛…",
    "那個當下我的靈魂聽到了，有種沈睡已久終於甦醒過來的感覺。原來我的靈魂要修煉的是如何真的愛到自己。",
    "",
    "從有意識以來，我一直在為了別人忙，為了讓別人喜歡我，而要求自己要做好，以至於我越來越害怕聽見自己的聲音，不論是睡覺時一定要伴隨外在的聲音，依靠外界的穩定來安定自己，又或是整理心得時越來越彆扭，更容易拖延，都是在避開最重要的聲音，我靈魂的聲音（現在還聽不到祂要說什麼，但是感覺到祂一直想跟我說話，只是一直被蓋住）。",
    "",
    "當自己的時間慢下來，變得細緻之後，看外界的動靜真的會很清晰，會聽見別人語言之外更加深的意圖，看見別人的無意識。對自己身體的感覺也會放大，可以很快感覺到自己有沒有坐正或站穩。",
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://media.base44.com/images/public/698fc983574e659f561934f1/245bfb060_A.jpg')"
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
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">TESTIMONIAL</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide">
            2026.8月宜蘭二日放空營(學員A)
          </h1>
          <p className="text-stone-200/70 text-sm mt-3 tracking-widest">2026.08</p>
        </motion.div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to={createPageUrl('Testimonials')}
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>返回參加者心得</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-stone max-w-none"
          >
            {paragraphs.map((p, i) =>
              p === "" ? (
                <div key={i} className="h-4" />
              ) : (
                <p key={i} className="text-stone-600 font-light leading-loose text-lg mb-4">
                  {p}
                </p>
              )
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}