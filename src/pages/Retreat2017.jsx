import RetreatRecordPage from '@/components/RetreatRecordPage';

export default function Retreat2017() {
  return (
    <RetreatRecordPage
      title="2017年旅程"
      year="2017"
      category="二日放空營"
      heroImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
      showIntroHeading={false}
      intro="助人工作需要長時間陪伴他人，也容易忽略自己的需要。\n我們希望透過兩天一夜，在自然裡重新找回身體與生活的節奏。"
      location="新竹 山中"
      groupSize="25人"
      activities={[
        {
          emoji: "🌿",
          title: "草地放鬆",
          description: "在自然裡慢慢走，\n把注意力放回身體。",
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
        },
        {
          emoji: "🍵",
          title: "品茗靜心",
          description: "享受茶氣，\n讓內在的安定慢慢累積。",
          image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=800&q=80"
        },
        {
          emoji: "🧘",
          title: "舒緩瑜伽",
          description: "身體放鬆了，\n心也比較容易安靜。",
          image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
        },
        {
          emoji: "🌙",
          title: "心靈派對",
          description: "跟著心靈導遊引導，\n享受身心全然敞開的遼闊。",
          image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80"
        }
      ]}
      reflections={[
        {
          content: "我感受到整個活動的氛圍很輕松自在，加上大自然豐沛能量的支持，我的身心都得到放松，靈魂也非常愉快，才知道原來人生可以這么樂活，從此就愛上心靈假期~"
        },
        {
          content: "心靈假期讓我放下內外壓力，在短短時光裡享受到萬物與我同在的好滋味，同時也讓心~安放在自己身上。"
        },
        {
          content: "有一個小小的彈性空間在那裡，只需静静的等著下個片刻的到來，松松的~偶爾就突然蹦出有趣的新滋味~食物也很新鮮、順口~身體裡外不經意的就被補到了，一些深藏的疲憊也悄悄卸下。"
        }
      ]}
    />
  );
}