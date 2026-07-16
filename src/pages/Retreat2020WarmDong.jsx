import RetreatRecordPage from '@/components/RetreatRecordPage';

export default function Retreat2020WarmDong() {
  return (
    <RetreatRecordPage
      title="一日放空行"
      subtitle="夏日旅程"
      year="2020"
      category=""
      heroImage="https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1920&q=80"
      heroVideo="https://media.base44.com/videos/public/698fc983574e659f561934f1/ef7d4219f_banner.mp4"
      intro="2020年的秋天，我們走進了暖東峽谷。沿著溪谷而上，兩旁是蔥鬱的植被與陡峭的岩壁，水聲伴隨著每一步。這是一日的健行，卻是一段與自己對話的旅程。在峽谷的包圍中，城市的喧囂逐漸遠去，只剩下腳下的步伐與呼吸的節奏。"
      introSections={[
        {
          venue: '2018 暖東峽谷',
          image: 'https://media.base44.com/images/public/698fc983574e659f561934f1/ed63cc177_1.jpg',
          imagePosition: 'left',
          content: '走進大自然中，透過健行來貼近身心～\n在緩慢中能感受到每一步與土地的連接，疲憊漸漸舒緩，\n而每一步也跟自己更親密，原來我們走進山裡的過程，\n也正是邁向內在的自己。'
        },
        {
          venue: '2024 陽明山-魚路古道',
          image: 'https://media.base44.com/images/public/698fc983574e659f561934f1/056716d8a_IMG_20210411_113026.jpg',
          imagePosition: 'right',
          content: '沿途綠蔭繚繞，溪流和瀑布，潺潺流水聲，\n豐富的負離子洗滌身心，\n透過跟土地的相印，找回和身體的連結，\n受把專注力留給自己的單獨時刻~'
        }
      ]}
      location="基隆 暖東峽谷"
      groupSize="20人"
      journeyVideo="https://media.base44.com/videos/public/698fc983574e659f561934f1/160e4fb5e_.mp4"
      gallery={[]}
      reflections={[
        {
          title: "走進峽谷，走進自己",
          content: "暖東峽谷步道沿著溪流蜿蜒，一路上水聲不斷。走在峽谷之中，被岩壁與綠意環繞，有一種被大自然擁抱的感覺。我們放慢腳步，不急著到達終點，而是感受每一個當下。"
        },
        {
          title: "在靜默中聽見彼此",
          content: "這次健行我們練習了一段時間的靜默行走。不說話，只專注於腳下的每一步。有趣的是，靜默反而讓我們更深刻地感受到了彼此的存在——一個眼神、一個微笑，都變得格外真實。"
        },
        {
          title: "溪畔的午餐時光",
          content: "中午我們在溪邊找了塊平坦的石頭坐下，簡單的飯糰配上山泉水的清涼，是城市裡吃不到的美味。大家分享著各自的感受，笑聲迴盪在峽谷間，那是一個溫暖而簡單的午後。"
        }
      ]}
    />
  );
}