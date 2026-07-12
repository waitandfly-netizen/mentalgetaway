import RetreatRecordPage from '@/components/RetreatRecordPage';

export default function Retreat2020WarmDong() {
  return (
    <RetreatRecordPage
      title="2020年暖東峽谷"
      year="2020"
      category="一日放空行"
      heroImage="https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1920&q=80"
      intro="2020年的秋天，我們走進了暖東峽谷。沿著溪谷而上，兩旁是蔥鬱的植被與陡峭的岩壁，水聲伴隨著每一步。這是一日的健行，卻是一段與自己對話的旅程。在峽谷的包圍中，城市的喧囂逐漸遠去，只剩下腳下的步伐與呼吸的節奏。"
      location="基隆 暖東峽谷"
      groupSize="20人"
      gallery={[
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
        "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&q=80",
        "https://images.unsplash.com/photo-1455218873509-8097305ee378?w=800&q=80",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
      ]}
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