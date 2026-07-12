import RetreatRecordPage from '@/components/RetreatRecordPage';

export default function Retreat2014() {
  return (
    <RetreatRecordPage
      title="2014年旅程"
      year="2014"
      category="二日放空營"
      heroImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80"
      intro="2014年，第一屆二日放空營在山間展開。我們帶著簡單的行囊，走進遠離城市的地方，學習放下手機，學習與自己安靜相處。這是心靈假期的起點，也是許多人第一次體驗到「什麼都不做」的力量。"
      location="南投 山中"
      groupSize="15人"
      gallery={[
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
        "https://images.unsplash.com/photo-1455218873509-8097305ee378?w=800&q=80",
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&q=80",
      ]}
      reflections={[
        {
          title: "第一次的放空實驗",
          content: "說來慚愧，我們一開始也不確定「放空」能不能被安排成活動。但當大家把手機收進信封袋的那一刻，空氣中似乎有什麼鬆開了。第一個晚上，有人說這是她十年來第一次在沒有手機的情況下入睡。"
        },
        {
          title: "山間的晨間靜坐",
          content: "第二天清晨，我們在霧氣中靜坐。沒有人說話，只有鳥鳴和遠處的溪水聲。二十分鐘後睜開眼睛，山嵐就在眼前緩緩流動。那一刻，許多人的眼眶濕潤了——原來寧靜是這樣的感覺。"
        },
        {
          title: "從此，每年回來",
          content: "這趟旅程結束後，有人說：「我想要每年都回來。」於是，二日放空營成了心靈假期的年度傳統。每一次都有新的面孔，也有熟悉的老朋友，我們在山裡找到了一個可以安放自己的地方。"
        }
      ]}
    />
  );
}