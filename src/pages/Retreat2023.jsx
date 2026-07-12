import RetreatRecordPage from '@/components/RetreatRecordPage';

export default function Retreat2023() {
  return (
    <RetreatRecordPage
      title="2023年旅程"
      year="2023"
      category="二日放空營"
      heroImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80"
      intro="2023年，經歷了世界的動盪之後，我們再次相聚。這一次的二日放空營，多了許多新面孔，也多了更深的感悟。在山林之間，我們重新找回了彼此的連結與內在的平靜。經歷了隔離與不確定，能夠再次一起呼吸、一起靜默，格外珍貴。"
      location="苗栗 山中"
      groupSize="30人"
      gallery={[
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        "https://images.unsplash.com/photo-1455218873509-8097305ee378?w=800&q=80",
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
      ]}
      reflections={[
        {
          title: "重逢的珍貴",
          content: "經歷了幾年的距離與不確定，能夠再次走進山林、和一群人一起靜默，有一種難以言說的感動。報到那天，有人說：「我不知道有多需要這個週末。」我們都懂。"
        },
        {
          title: "在自然中重新校準",
          content: "遠離了螢幕和訊息通知，感官慢慢打開。我們聽見了風穿過樹梢的聲音，聞到了雨後泥土的氣息，看見了清晨露水在葉片上折射的光。這些一直都在，只是我們太久沒有停下來注意。"
        },
        {
          title: "三十個人的靜默",
          content: "三十個人一起靜默用餐，是這趟旅程最特別的畫面之一。没有交談聲，只有碗筷輕碰的聲音、咀嚼的聲音、窗外的蟲鳴。有人說，那是他吃過最安心的一頓飯——因為終於不需要表演「我過得很好」。"
        },
        {
          title: "帶回日常的練習",
          content: "旅程結束前，每個人寫下了一個要帶回日常的小練習。有人選擇每天早晨十分鐘不看手機，有人決定每週去公園走一圈，有人許願要好好吃一頓飯。改變不必很大，從一個小小的承諾開始就夠了。"
        }
      ]}
    />
  );
}