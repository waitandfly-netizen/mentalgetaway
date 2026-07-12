import RetreatRecordPage from '@/components/RetreatRecordPage';

export default function Retreat2017() {
  return (
    <RetreatRecordPage
      title="2017年旅程"
      year="2017"
      category="二日放空營"
      heroImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
      intro="2017年的二日放空營，我們回到了熟悉的山林。三年間，這段旅程從陌生的嘗試，變成了許多人每年期待的約定。在靜默中，我們聽見了內在的聲音；在自然裡，我們找回了久違的節奏。"
      location="新竹 山中"
      groupSize="25人"
      gallery={[
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&q=80",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
      ]}
      reflections={[
        {
          title: "熟悉的山林，新的自己",
          content: "同樣的山徑，同樣的星空，但每一次走進來的都是不同的自己。有人今年帶著新的身分來——成為了母親、換了工作、結束了一段關係。山林不變，卻接住了所有改變後的我們。"
        },
        {
          title: "夜裡的圍爐對話",
          content: "第二天晚上，我們圍著營火分享。不談工作、不談成就，只談「最近你的心裡在想什麼」。火光映在每個人的臉上，那些平日裡不敢說的脆弱，在這裡被溫柔地接住。"
        },
        {
          title: "散步練習的啟發",
          content: "今年我們加入了「慢走練習」——用比平常慢三倍的速度走一段路。一開始大家覺得彆扭，但走著走著，開始注意到路邊的苔蘚、樹皮上的紋路、風吹過草地的形狀。慢下來，世界反而變寬了。"
        }
      ]}
    />
  );
}