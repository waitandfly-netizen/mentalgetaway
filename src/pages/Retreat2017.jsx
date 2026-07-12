import RetreatRecordPage from '@/components/RetreatRecordPage';

export default function Retreat2017() {
  return (
    <RetreatRecordPage
      title="2017年旅程"
      year="2017"
      category="二日放空營"
      heroImage="https://media.base44.com/images/public/698fc983574e659f561934f1/42618884d_banner.jpg"
      heroOverlay={false}
      showIntroHeading={false}
      introSections={[
        {
          venue: "3月、8月宜蘭外澳場",
          content: "迎接日出,照亮第三眼;\n心輪靜心,打開全身氣脈。\n之後,静静安坐海底輪,\n享受與天地共鳴之美····"
        },
        {
          venue: "5月、11月埔里暨大場",
          content: "曁大一望無際的寬闊草原,\n迎接每位助人路上的旅人,\n可以恣意地放松、喘口氣,\n讓秋季的沉静帶走內心的疲憊,\n給心靈放個假,\n享受與自己相處的寧靜時光。"
        }
      ]}
      location="宜蘭外澳 / 埔里暨大"
      groupSize="25人"
      activities={[
        {
          emoji: "🌿",
          title: "草地放鬆",
          description: "在自然裡慢慢走，\n把注意力放回身體。",
          image: "https://media.base44.com/images/public/698fc983574e659f561934f1/c9890c584_.jpg"
        },
        {
          emoji: "🍵",
          title: "品茗靜心",
          description: "享受茶氣，\n讓內在的安定慢慢累積。",
          image: "https://media.base44.com/images/public/698fc983574e659f561934f1/2ace67291_.jpg"
        },
        {
          emoji: "🥑",
          title: "原形蔬食",
          description: "品嘗原形食物，\n減輕身心負擔。",
          image: "https://media.base44.com/images/public/698fc983574e659f561934f1/9b2e5d88c_.jpg"
        },
        {
          emoji: "🌙",
          title: "心靈派對",
          description: "跟著心靈導遊引導，\n享受身心全然敞開的遼闊。",
          image: "https://media.base44.com/images/public/698fc983574e659f561934f1/9b69b09de_.png"
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