import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { content } from "@/constants/content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const SazaedoIimori = () => {
  const [language, setLanguage] = useState<"ja" | "en">("ja");

  const sections = {
    ja: [
      {
        title: "はじめに",
        content: "山主飯盛本家五代当主　飯盛正日（いいもりまさにち）\n\n飯盛家と飯盛山正宗寺 　私が幼少の頃、伯父叔母などから「このさざえ堂は二百年になったら必ず国宝になる。」と言われたことが強く記憶に残っていたが、果して建立二百年目（寛政八年1796）に当たる昨年平成七年六月に、国重要文化財に指定された。このことは、我が生涯にとって最大の感激である。"
      },
      {
        title: "飯盛家の歴史",
        content: "飯盛家の現住居は、旧飯盛山正宗寺（しょうそうじ）そのものであり、さざえ堂よりも五十年ほど古いとされている。もともと飯盛山正宗寺は、歴代の領主より宗像神社（現厳島神社/いつくしまじんじゃ）の別当として、飯盛山霊域を拝領し、神仏混合によって守護し続けてきたものである。正宗寺最後の住職は私の曾祖父に当たる僧宗潤（そうじゅん）であり、後に名を飯盛正隆（まさたか）と改めた。\n\n戊辰戦争に下級武士として従軍した、祖父佐藤正信（まさのぶ/湊町大字原在住の元藩医佐藤青龍の次男で白川戦線にて負傷）は、妻きん（滝沢字坂下在住の渡部しんの娘で正隆の姪）と共に、戦後正隆の養子となった。明治初年の神仏分離令に際し、檀家のない寺でもあったので、廃寺して神道をとり、正信は厳島神社初代の宮司となった。"
      },
      {
        title: "明治以降の変遷",
        content: "これにより、仏殿は神殿となり、本尊彌陀仏、ざえ堂三十三観音像、庭前の唐金大仏（一丈六尺）等は、他寺院に移転された。また、飯盛山の所領は新政府から地券により購入、登記を受けるためには大なる資金が必要となった。この資金を調達するため、我家は貧窮を極めた由であるが、円通三匝堂（えんつうさんそうどう/通称さざえ堂）、宇賀神堂は本宅の付属の建物として、境内は宅地として所有管理することとなったのである。\n\n祖父正信は、家計を助けるため一時単身沼尻（ぬまじり）硫黄鉱山の帳場に職を求め、明治二十一年（1888）の磐梯山大噴火に際会したが、命拾いして帰宅したそうである。祖母きんは、さざえ堂脇に茶店（現飯盛本店の原点）を営み、家族は農耕蓄養に従事する等、第二次大戦後の生活建て直しにも似た様相であった。\n\n明治二十三年（1890）には冨田治作（とみたじさく）氏をはじめとする会津有志の方々が発起人となり、広く寄附を集めて、白虎隊士合葬の墓を自刃十九士銘々の墓に改葬された。これと同時に、荒廃したさざえ堂にも大修理が施され窮状を脱することができた。この時、堂内には観音像なきあと、旧藩士出身彫刻家大橋知伸（おおはしちしん）田中治八（たなかじはち）両氏の手による虎隊十九士の霊像が祀られ、拝観者が堂内を巡って参拝できるようにした。"
      },
      {
        title: "大正年間と昭和初期",
        content: "大正四年（1915）には屋根葺替（ふきかえ）工事がなされた。大正七年祖父正信没後、その長男正利が跡を継いだが、昭和四年地元一箕村長在職中に死去した。その跡は三男である私の父正成が継ぐことになった。正成は、陸軍中佐退役後大阪市役所十年間の奉職を経て、昭和六年（1931）に帰郷してその事業に当たった。この際本家は、従来病人続出（結核等）の弊を防ぐため、正宗寺以来の曲屋（まがりや）を取り除き現状のように改築した。\n\n昭和二十八年（1953）には、永年経過のため傾斜が甚だしくなった堂宇の引起し工事を、地元の金田作四郎（かねださくしろう）大工の手に依り行った。補強材、金具締め等により傾斜はほぼ復旧し、昭和三十九年の新潟地震（会津地方は震度四〜五）にもよく耐え凌いだ。"
      },
      {
        title: "昭和期の修繕",
        content: "昭和四十五年（1970）、私は、自衛官生活18年間で定年退職、帰郷して家業に戻った。昭和四十七年から三ヶ年に亘り大屋根、庇屋根、向拝（こうばい/玄関にあたる。）屋根の抜本的修理を行った。すなわち、垂木（たるき）の交換追加補強、野地板更新、銅板総葺替え等である。\n\n昭和五十七年（1982）一月には、県重要文化財指定申請書を提出した。その添付書類の殆どは小林文治博士の作成された図面及び論文であった。同年三月三十日、県重要文化財としての正式指定書が交付された。"
      },
      {
        title: "学術的評価",
        content: "さざえ堂が世界的に認められたのは、昭和四十年（1965）日本大学理工学部教授故小林文次（こばやしぶんじ）博士の学術実測調査によってである。当時文部技官であった現日本大学工学部教授佐藤平（さとうひとし）工学博士が、小林教授に会津さざえ堂の情報を提供したことが発端となった。\n\n博士は推論として、「さざえ堂二重らせんの発想は、日本の仏堂建築の伝統から突如として異質の構想が生まれたとは考えられない。享保五年（1721）の洋書解禁によりオランダから輸入された洋書の中に、秋田藩主で画家であった佐竹曙山（さたけしょざん）のスケッチ帳にある二重らせん階段の原図がある。これはロンドン出版のモクソン（1627〜1700）著の写しであり、これを通じて一部に知られている事実があった。」"
      },
      {
        title: "国指定重要文化財へ",
        content: "平成六年（1994）二月二十二日にさざえ堂擬宝珠（ぎぼし）石の落下事故があった。当日は前日から暴風雪であった。午後五時頃一大突風により、さざえ堂南側台上にある弔霊義会二階建て展望休憩所のトタン屋根南半分（約六坪）が剥落した。それが、連結したまま飛来してさざえ堂頂上部に覆い被さり、風圧を受け、擬宝珠石約250kgが脱落、大屋根に二回弾んで向拝前方に大音響とともに落下した。\n\n平成六年十一月、さざえ堂の国重要文化財指定を前提に文化庁の調査が行われることになり、三日間実施された。調査官は女性若手の栗林久美子文部技官であった。初日十一月十六日は、午後から調査官が県及び市の文化課員立ち会いの上取り敢えず一巡したが、私の案内説明により天井裏を上り擬宝珠の直下の小窓まで、また床下の土台石まで積極的に見分された。"
      },
      {
        title: "終わりに",
        content: "本堂は畏くも\n大正天皇　　　明治四十一年九月十日\n昭和天皇　　　大正十三年八月二十日\n今上天皇陛下　昭和四十三年八月二日\n\nそれぞれ皇太子に在わりますとき、三代に亘り親しく御登臨の栄に浴したのである。今回、国重要文化財指定を受けたことは、飯盛家一族の名誉であり、その責任の重さに身が引き締まる思いである。\n\n平成八年八月十四日"
      }
    ],
    en: [
      {
        title: "Introduction",
        content: "From Masanichi Iimori, the fifth head of the Sanushi Iimori family\n\nThe Iimori Family and Iimori-yama Shosoji Temple: In my childhood, I vividly remember my uncles and aunts saying, 'This Sazaedo will surely become a National Treasure when it reaches its 200th year.' Indeed, in 1995, corresponding to the 200th anniversary of its construction (1796), it was designated as an Important Cultural Property. This has been the greatest joy of my life."
      },
      {
        title: "History of the Iimori Family",
        content: "The current residence of the Iimori family is the former Iimori-yama Shosoji Temple itself, which is said to be about fifty years older than Sazaedo. Originally, Iimori-yama Shosoji Temple was granted the sacred grounds of Iimori-yama by successive feudal lords as the betto (head priest) of Munakata Shrine (now Itsukushima Shrine), and continued to protect it through the syncretism of Shinto and Buddhism. The last chief priest of Shosoji Temple was Sojun, my great-grandfather, who later changed his name to Iimori Masataka.\n\nMy grandfather, Sato Masanobu (the second son of former domain doctor Sato Seiryu from Minato-machi Ohara, who was wounded in the Shirakawa front), served as a low-ranking samurai during the Boshin War. Together with his wife Kin (daughter of Watanabe Shin from Takizawa Sakashita and niece of Masataka), he became Masataka's adopted son after the war. During the early Meiji period's separation of Shinto and Buddhism, as there were no parishioners, the temple was abolished in favor of Shinto, and Masanobu became the first chief priest of Itsukushima Shrine."
      },
      {
        title: "Changes After Meiji",
        content: "As a result, the Buddha hall became a Shinto shrine hall, and the principal image of Amida Buddha, the thirty-three Kannon statues of Sazaedo, and the large bronze Buddha statue (16 shaku tall) in the garden were transferred to other temples. To receive land rights and registration for the holdings of Iimori-yama from the new government, a large amount of capital was needed. Although our family fell into extreme poverty to raise these funds, the Entsu Sanso-do (commonly known as Sazaedo) and Ugajin-do were retained as auxiliary buildings of our residence, and the grounds were maintained as residential land.\n\nTo help with family finances, my grandfather Masanobu temporarily sought work alone at the Numajiri Sulfur Mine's office, and during the great eruption of Mt. Bandai in 1888, he had a close call but managed to return home safely. My grandmother Kin ran a tea shop beside Sazaedo (the origin of the current Iimori Main Store), and the family engaged in farming and animal husbandry, similar to the life reconstruction after World War II.\n\nIn 1890, led by Mr. Tomita Jisaku and other Aizu volunteers, donations were widely collected to renovate the mass grave of the Byakkotai warriors into individual graves for the nineteen who committed suicide. Simultaneously, the deteriorated Sazaedo underwent major repairs, helping to overcome its dire situation. At this time, with no Kannon statues remaining in the hall, spirit images of the nineteen Byakkotai warriors, created by sculptors Ohashi Chishin and Tanaka Jihachi, both former domain retainers, were enshrined, allowing visitors to circumambulate the hall in worship."
      },
      {
        title: "Taisho Era and Early Showa Period",
        content: "In 1915, the roof was re-thatched. After my grandfather Masanobu passed away in 1918, his eldest son Masatoshi succeeded him but died in 1929 while serving as the mayor of local Ikki Village. His position was then inherited by my father Masashige, his third son. After retiring as an Army Lieutenant Colonel and serving in the Osaka City Office for ten years, Masashige returned home in 1931 to take charge of operations. At this time, to prevent the continued occurrence of illness (such as tuberculosis), the curved house structure that had existed since the Shosoji Temple days was removed and rebuilt to its current state.\n\nIn 1953, due to significant tilting from years of aging, the hall underwent straightening work by local carpenter Kaneda Sakushiro. Through reinforcement materials and metal fittings, the tilting was largely corrected, and it withstood well during the 1964 Niigata Earthquake (intensity 4-5 in the Aizu region)."
      },
      {
        title: "Showa Period Repairs",
        content: "In 1970, after retiring from 18 years of service in the Self-Defense Forces, I returned home to take over the family business. From 1972, over three years, we carried out fundamental repairs to the main roof, eaves roof, and entrance porch (kohai) roof. This included replacing and reinforcing rafters, renewing the roof boards, and completely re-covering with copper sheets.\n\nIn January 1982, we submitted an application for designation as a Prefectural Important Cultural Property. Most of the attached documents were drawings and papers created by Dr. Kobayashi Bunji. On March 30th of the same year, we received the official designation certificate as a Prefectural Important Cultural Property."
      },
      {
        title: "Academic Evaluation",
        content: "Sazaedo gained worldwide recognition through the academic survey conducted by Dr. Bunji Kobayashi, a professor at the College of Science and Technology, Nihon University, in 1965. The survey was initiated when Dr. Hitoshi Sato, then a technical official at the Ministry of Education and now a professor at Nihon University's College of Engineering, provided information about Aizu Sazaedo to Professor Kobayashi.\n\nThe professor theorized, 'It is unlikely that the concept of Sazaedo's double helix suddenly emerged from Japan's traditional Buddhist temple architecture. After the lifting of the ban on Western books in 1721, there were Dutch imports containing original drawings of double spiral staircases in the sketchbook of Satake Shozan, the daimyo of Akita domain and an artist. These were copies from works by Moxon (1627-1700) published in London, and this fact was known to some extent through these sources.'"
      },
      {
        title: "Toward Designation as a National Important Cultural Property",
        content: "On February 22, 1994, there was an accident where the ornamental finial stone (giboshi) of Sazaedo fell. There had been a blizzard since the previous day. Around 5 PM, a strong gust of wind caused the southern half of the tin roof (about 6 tsubo) of the two-story observation rest house of the Choreigikai on the platform south of Sazaedo to peel off. It flew as one piece and covered the top of Sazaedo, and under the wind pressure, the approximately 250kg finial stone became detached, bounced twice on the main roof, and fell in front of the entrance porch with a loud crash.\n\nIn November 1994, a three-day investigation was conducted by the Agency for Cultural Affairs as a prerequisite for Sazaedo's designation as a National Important Cultural Property. The investigator was a young female technical official, Ms. Kuribayashi Kumiko. On the first day, November 16th, after making an initial tour in the afternoon with prefectural and city cultural department staff present, she actively examined the building under my guidance, climbing up to the small window directly below the finial in the attic and inspecting the foundation stones under the floor."
      },
      {
        title: "Conclusion",
        content: "This hall has been honored by imperial visits when they were Crown Princes:\nEmperor Taisho on September 10, 1908\nEmperor Showa on August 20, 1924\nThe current Emperor on August 2, 1968\n\nIt is a great honor for the Iimori family to have received these three generations of imperial visits. Now, with the designation as a National Important Cultural Property, we feel both the honor and the weight of responsibility that comes with it.\n\nAugust 14, 1996"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header language={language} setLanguage={setLanguage} content={content[language]} />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl mb-8 font-serif text-left">
            {language === "ja" ? "さざえ堂と飯盛家" : "Sazaedo and the Iimori Family"}
          </h1>
          <div className="w-full max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {sections[language].map((section, index) => (
                  <CarouselItem key={index} className="md:basis-full">
                    <Card className="bg-white h-full">
                      <CardContent className="p-6">
                        <h2 className={`text-2xl mb-4 ${language === "ja" ? "font-mincho" : "font-playfair"}`}>
                          {section.title}
                        </h2>
                        <div className={`prose max-w-none whitespace-pre-line text-base leading-relaxed ${language === "ja" ? "font-yugothic" : "font-noto"}`}>
                          {section.content}
                        </div>
                        <div className="mt-4 text-sm text-gray-500 text-center">
                          {index + 1} / {sections[language].length}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-4">
                <CarouselPrevious className="relative left-0 right-0 translate-x-0" />
                <CarouselNext className="relative left-0 right-0 translate-x-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default SazaedoIimori;
