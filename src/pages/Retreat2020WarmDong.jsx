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
          images: ['https://media.base44.com/images/public/698fc983574e659f561934f1/be139eda4_.jpg'],
          content: "原本走得氣喘吁吁，想跟上前面的腳步，練習把呼吸帶到腳底，感受到地面的反饋，意外的體會到輕鬆的感覺~"
        },
        {
          images: ['https://media.base44.com/images/public/698fc983574e659f561934f1/1e4fe5154_.jpg'],
          content: "爬陡坡時，一度很想放棄，但回到尊重身體的狀態，一步一步慢慢走，親密到當下的弱，反而有個踏實的感動。"
        }
      ]}
    />
  );
}