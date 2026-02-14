import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Clock, ArrowRight, BookOpen, Quote, ChevronLeft } from 'lucide-react';

export default function Guide() {
  const [activeArticle, setActiveArticle] = useState(null);

  const articles = [
    { 
      title: "踏上靜心成長的路", 
      content: `這裡來說說當年我的社工生涯和到底是怎麼踏上靜心成長的路～

那時在台北某知名社福基金會裡做個小主管，加上在紐約累積了三年的社工實務經驗，充滿著熱情和鬥志要為受虐兒童做些什麼，結果⋯⋯從紐約回來台灣也不過兩三年⋯⋯怎麼就搞到只剩下一個「累」字。

1999年世紀大地震，機構要派一組人下災區，我看著電視裡殘屋破瓦前哭泣的小孩，心中一慟隔天就去申請帶隊下災區，在重建區從頭開始做著不太擅長的社區工作，還真的做出了一些些成果，但代價是我只剩下39公斤，身心的疲累不在話下。

現在回想，有許多的波折起伏和疲累，其實都是跟自己的孩子氣有關！（還好沒有涉及法律問題）

因緣際會的天意使然，帶著懷疑加好奇報名了一個可能是「怪力亂神」的活動，因為當時的我仍是個中規中矩的基督徒。（那其實也是某種程度的制約）

後面的結果太可怕！

原來，神可以住在你我內在裡面。
原來，打開制約就可以遇見神。
原來，神不是從外面找，而是進到內在去探尋。

那些本來以為的怪力亂神活動，竟然都跌破眼鏡地意外美好！印象深刻的是玩得開心、飯吃得香、覺睡得好，整個人精氣神飽滿，還有種「有什麼事難得倒我！」的壯闊。

真是開了眼界，當社工不一定總要累死自己，那段時間在工作崗位上，還真的有種「自在」不斷地打心底冒出來！

後面的二十年，不論是在學校或者是其他的自由工作，我開始以引導人學會享受自在為工作目標。

自在是一種財富，帶到任何場域都可以享用，我自認這仍然是社會工作，只是對象更廣了。最重要的是，我相當自在地樂在其中～～～`
    },
    { 
      title: "ego與self之不同", 
      content: `ego是自我，是人為的，是從社會製造出來的，是self的替代品，是一個假的實體。

我們會需要自我(ego)是因為我們不知道真實的自己(self)所以需要找到一個人造的中心，才有辦法在生活中安身立命。

自我是從「比較」建構而成，自我總是在比較；而真實的自己是我們本然的存在，不需要比較，既不比任何人差勁也不比任何人優越，就只是自己罷了。

所有靜心方法都是用來認識真實的自己的一種設計，真實的自己本來就在那裡，只是需要被發現、被認出來。

一個人一旦認出真實的自己，不再有群眾心理，不會再盲從迷信，不可能被剝削利用，也不可能被命令和指使，而是依著自己的光去活，依著自己內在的精神去活，生命變得完整而美麗。

我們的意識有如浩瀚無垠的海洋，也是最危險的海洋，因為當我們開始往內走，會進入空無之中，這時會有恐懼升起，怕失去控制、怕失去身份認同、怕手上的好處消失⋯⋯

這種時候，會有種清楚明白，原來過去緊抓著的其實是幻影，必然會困惑、害怕、不安⋯⋯因為假的正在消失，而真的尚未來到⋯⋯

親愛的～這就是靈性成長的一部分！為了得到真的，必須先失去假的。

在這個關鍵的斷層地帶需要前輩或朋友給你支持，告訴你：不必害怕～這個虛無將會過去，到時你會感覺到自己是充滿的，會滿而溢出，只是需再多一點愛和耐心。

親愛的～如果你是清晰的，如果你的覺知沒有被雲霧遮蔽，如果你的洞察力已從自性中升起，你將會知道此岸就是彼岸！

於是我們會因為知道這個真相而笑出來，生命竟如此荒謬！我們早就已經擁有我們所渴望的東西了！寶藏一直在自己身上，我們卻到處奔波尋覓！

不需要再去創造更多的自我，因為我們內在俱足著超凡的自己。`
    },
    { 
      title: "一封來自存在的信", 
      content: `收件人是助人工作者

親愛的你：

不管是誤打誤撞還是自小立志成為助人工作者，下面的內容請你認真看一看。

那些你所在意的專業認同和助人技巧，只要願意投入時間、精神，假以時日一定會有成果，這就是吸引力法則。

這裡想告訴你的是：

助人工作跟愛有絕對的關係～

也許你單純只是見不得別人受苦⋯⋯

或者你是自己的某個階段因為受到幫助脫離困苦，進而期待自己也成為那個可以幫助別人的人！

更可能是冥冥之中有個驅力，不管你做什麼，總是疊上愛人、關心人、幫助人的軌道！

這樣你看懂了嗎？原來一直都是「愛」引導著我們走上助人者的道路。

我知道你在長時間的付出與承擔中，漸漸感到疲憊、消耗，甚至懷疑自己是否還適合這條路！

其實疲累感和消耗感的出現，是一種訊號，提醒著你重新跟自己對焦：

「我的初心還在嗎？」
「我每天是為著什麼在工作？」
「維持生存？展現價值？還是想活出生命意義？」
「我忙著幫助別人，是不是我也需要一點幫助呢？！」

愛，沒有離開過，是你不小心把人家弄丟了⋯⋯😌

From ✨存在✨`
    }
  ];

  const credentials = [
    "美國紐約州立大學社會工作碩士 MSW",
    "美國紐約州合格認證社工師 CSW"
  ];

  const currentRoles = [
    "國立暨南國際大學通識教育中心兼任講師",
    "國立暨南國際大學抒心社指導老師",
    "身心靈成長工作者",
    "心願學校校長"
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://spiritvacation.wordpress.com/wp-content/uploads/2025/09/3.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-stone-900/40" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">SOUL GUIDE</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            心靈導遊
          </h1>
        </motion.div>
      </section>

      {/* Guide Introduction */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://spiritvacation.wordpress.com/wp-content/uploads/2026/02/583618912_10237580030657715_8289364465581566650_n-1.jpg" 
                alt="丁靜如老師"
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-light text-stone-800 mb-2">心靈導遊</h2>
              <p className="text-2xl text-emerald-700 font-medium mb-6">丁靜如</p>
              
              <p className="text-stone-600 font-light leading-relaxed mb-8">
                在身心靈成長領域深工作二、三十年，深知一個人的生命能量與心理健康，攸關其一生的幸福走向。當內在逐漸清明、建立正知正見，生命的方向與價值也會自然浮現。
              </p>
              
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                <Quote className="w-6 h-6 text-emerald-300 mb-3" />
                <p className="text-stone-700 italic leading-relaxed">
                  擅長用靈敏的幽默感，陪伴人走進那些不容易說出口的苦，重新看見困境中的可能性，開啟更寬廣、柔軟的心靈視野。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 px-6 bg-stone-100/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-medium text-stone-800">學經歷</h3>
              </div>
              <ul className="space-y-3">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span className="text-stone-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Current Roles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-medium text-stone-800">現任</h3>
              </div>
              <ul className="space-y-3">
                {currentRoles.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span className="text-stone-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Experience Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-emerald-600" />
              <span className="text-stone-700">身心靈活動帶領經驗</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-light text-emerald-700">20+</p>
                <p className="text-stone-500 text-sm">年經驗</p>
              </div>
              <div>
                <p className="text-4xl font-light text-emerald-700">15,000+</p>
                <p className="text-stone-500 text-sm">累積教學時數</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <BookOpen className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl font-light text-stone-800">心靈專欄</h2>
          </motion.div>

          <div className="space-y-4">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="group bg-stone-50 hover:bg-emerald-50 rounded-xl p-6 transition-colors cursor-pointer flex items-center justify-between">
                  <span className="text-stone-700 group-hover:text-emerald-800 font-medium transition-colors">
                    {article.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Image */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.img 
            src="https://spiritvacation.wordpress.com/wp-content/uploads/2025/12/e696b0e5a29ee6a899e9a18c-2-3.jpg"
            alt="心靈假期"
            className="w-full rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />
        </div>
      </section>
    </div>
  );
}