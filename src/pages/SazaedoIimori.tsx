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
        title: "さざえ堂と飯盛家",
        content: "山主飯盛本家当主　飯盛正日（いいもりまさにち）"
      },
      {
        title: "飯盛家と飯盛山正宗寺",
        content: "私が幼少の頃、伯父叔母などから\n「このさざえ堂は二百年になったら必ず国宝になる。」\nと言われたことが強く記憶に残っていたが、\n果して建立二百年目（寛政八年1796）に当たる\n昨年平成七年六月に、\n国重要文化財に指定された。\nこのことは、我が生涯にとって最大の感激である。\n\n飯盛家の現住居は、旧飯盛山正宗寺（しょうそうじ）\nそのものであり、さざえ堂よりも五十年ほど古いとされている。\nもともと飯盛山正宗寺は、歴代の領主より宗像神社\n（現厳島神社/いつくしまじんじゃ）の別当として、\n飯盛山霊域を拝領し、神仏混合によって\n守護し続けてきたものである。\n正宗寺最後の住職は私の曾祖父に当たる\n僧宗潤（そうじゅん）であり、\n後に名を飯盛正隆（まさたか）と改めた。\n\n戊辰戦争に下級武士として従軍した、\n祖父佐藤正信（まさのぶ/湊町大字原在住の\n元藩医佐藤青龍の次男で白川戦線にて負傷）は、\n妻きん（滝沢字坂下在住の渡部しんの娘で正隆の姪）と共に、\n戦後正隆の養子となった。\n明治初年の神仏分離令に際し、檀家のない寺でもあったので、\n廃寺して神道をとり、正信は厳島神社初代の宮司となった。\n\nこれにより、仏殿は神殿となり、本尊彌陀仏、さざえ堂三十三観音像、\n庭前の唐金大仏（一丈六尺）等は、他寺院に移転された。\nまた、飯盛山の所領は新政府から地券により購入、\n登記を受けるためには大なる資金が必要となった。\nこの資金を調達するため、\n我家は貧窮を極めた由であるが、\n円通三匝堂（えんつうさんそうどう/通称さざえ堂）、\n宇賀神堂は本宅の付属の建物として、\n境内は宅地として所有管理することとなったのである。\nまた厳島神社は郷社の社格を与えられその境内は\n村役場の管理する所となった。\n第二次大戦後、本神社は、宗教法人神社庁の系列下で、\n滝沢部落の崇敬人総代以下が守護管理している。"
      },
      {
        title: "戊辰敗戦後の飯盛家と飯盛山",
        content: "祖父正信は、家計を助けるため一時単身\n沼尻（ぬまじり）硫黄鉱山の帳場に職を求め、\n明治二十一年（1888）の磐梯山大噴火に際会したが、\n命拾いして帰宅したそうである。\n祖母きんは、さざえ堂脇に茶店（現飯盛本店の原点）を営み、\n家族は農耕蓄養に従事する等、第二次大戦後の生活建て\n直しにも似た様相であった。\nしかし、飯盛山の参詣客も会津以外の地からだんだん\n増加することにより、社堂の管理、店舗の経営を主とする\n家業を確立していった。\n\nその間に、正信長男正利（まさとし）は郡役所に奉職、\n次男正光（まさみつ）は家に残り農耕、\n牛馬の飼育に、三男正成（まさなり）は陸軍士官に、\n四男正章（まさあきら）は鉱山技師にと志を立てた。\n\n戊辰戦争以来、さざえ堂は顧みる人も少なく、\n屋根の修理もままならず狐狸の巣と形容せられるまでに\n荒れ果てた由である。\n\nついでながら、飯盛山の白虎隊墓所は、\n治四年（1871）に仮埋葬の地妙国寺（みょうこくじ）から\n自刃の地飯盛山に改葬された時に、\n祖父正信が松平公に約二反歩を献上寄附したものである。\nさらに、昭和三年の拡張に際しては、\n先々代伯父正利が約二反歩を追加献上寄附した。\nいずれも、地租は飯盛家が第二次大戦終戦まで納めていたが、\n戦後、財産税などの関係から財団法人弔霊義会に移管せられた。"
      },
      {
        title: "明治二十三年のさざえ堂大修理",
        content: "明治二十三年（1890）には冨田治作（とみたじさく）氏をはじめとする\n会津有志の方々が発起人となり、広く寄附を集めて、\n白虎隊士合葬の墓を自刃十九士銘々の墓に改葬された。\nこれと同時に、荒廃したさざえ堂にも大修理が施され窮状を\n脱することができた。\n\nこの時、堂内には観音像なきあと、旧藩士出身彫刻家\n大橋知伸（おおはしちしん）田中治八（たなかじはち）両氏の手による\n虎隊十九士の霊像が祀られ、\n拝観者が堂内を巡って参拝できるようにした。\nしかし、明治三十七年（1904）に至り、\n参拝客がさざえ堂の入場者のみに限定せられる不利を解消するため、\n霊像は隣接する宇賀神堂（うがじんどう/厳島神社の傍社として\n五穀の神を祭った二間四方のお堂。\n寛文年間〈1661〜1677〉建立）内に並立合祀せられた。\nそして、さざえ堂内には、\n替って会津藩子弟の道徳教本として\n第八代容敬（かたたか）公の命により編纂された\n「皇朝二十四孝」（こうちょうにじゅうしこう）の絵額が\n掲げられ今日にいたっている。"
      },
      {
        title: "大正年間と昭和初期",
        content: "大正四年（1915）には屋根葺替（ふきかえ）工事がなされた。\n大正七年祖父正信没後、その長男正利が跡を継いだが、\n昭和四年地元一箕村長在職中に死去した。\nその跡は三男である私の父正成が継ぐことになった。\n正成は、陸軍中佐退役後大阪市役所十年間の奉職を経て、\n昭和六年（1931）に帰郷してその事業に当たった。\nこの際本家は、従来病人続出（結核等）の弊を防ぐため、\n正宗寺以来の曲屋（まがりや）を取り除き現状のように改築した。\n\n昭和七年には、さざえ堂従来のこけら葺き屋根の上に\n銅板を重ねて葺き、耐久を図り面目を一新した。"
      },
      {
        title: "大東亜戦争後",
        content: "昭和二十八年（1953）には、永年経過のため傾斜が\n甚だしくなった堂宇の引起し工事を、\n地元の金田作四郎（かねださくしろう）大工の手に依り行った。\n補強材、金具締め等により傾斜はほぼ復旧し、\n昭和三十九年の新潟地震（会津地方は震度四〜五）にも\nよく耐え凌いだ。"
      },
      {
        title: "昭和四十年の学術調査",
        content: "さざえ堂が世界的に認められたのは、昭和四十年（1965）\n日本大学理工学部教授故小林文次（こばやしぶんじ）博士の\n学術実測調査によってである。\n当時文部技官であった現日本大学工学部教授\n佐藤平（さとうひとし）工学博士が、\n小林教授に会津さざえ堂の情報を提供したことが発端となった。\n小林教授は、この二重らせんスロープ構造の建築に魅せられて、\n実測調査をはじめとし、国内のさざえ堂、\nさらに世界のらせん形建築について研究を拡め、\nこれを学会に発表された。\nそして、会津さざえ堂は\n「世界唯一の二重らせんスロープを持つ木造建築」であり、\n「模倣ではなく天才的な創造」と評価されたのである。\n\nこの実測調査は、当初市当局に持ちかけられたが、\n予算の関係で当家が進んでお願いした。\nこの年の夏期休暇に、教授以下研究室ＯＢで\n当時文化庁建造物課勤務の丸山時男技官はじめ\n四〜五名の研究室の学生が二十日間当家に合宿し、\n寝食を共にして作業に専念した。\n当時私は自衛官存職中で不在であったが、\n家内が本店経営の傍ら、\n中学生の娘二人を手伝わせて食事宿泊の一切を世話した。\n今でも当時を思い出しては、先生や学生の皆さんに、\n手料理を喜んでもらったことが忘れられないと語っている。\n\nちなみに、学術調査の翌昭和四十一年には、\n会津鶴ヶ城の再建大工事が竣工し、\n飯盛本店新館（展望台約七五坪）も落成した。"
      },
      {
        title: "小林文次博士の推論と評価",
        content: "博士は推論として、「さざえ堂二重らせんの発想は、\n日本の仏堂建築の伝統から突如として異質の構想が生まれたとは\n考えられない。\n享保五年（1721）の洋書解禁によりオランダから\n輸入された洋書の中に、\n秋田藩主で画家であった佐竹曙山（さたけしょざん）の\nスケッチ帳にある二重らせん階段の原図がある。\nこれはロンドン出版のモクソン（1627〜1700）著の写しであり、\nこれを通じて一部に知られている事実があった。\nこれは遠くダビンチにまでつながっているものであり、\nこれらとさざえ堂とのつながりはさだかではない。\nしかし、西欧の例が単なる通路であったのに対し、\n中心部に観音像を配し、\nあたかもライトのグーゲンハイム美術館を思わせるような\n会津さざえ堂は単なる模倣ではなく天才的な創造と見るべきである。」\nと述べられている。\n\nなお、私等が先々代伯父正利、先代父正成から伝えられた説によれば、\n考案者郁堂（いくどう）和尚は、\n当時江戸をはじめ諸国にあったさざえ堂にならい、\n建立の構想を練っていた時、或夜二重紙縒り（にじゅうこより）の夢を見て\n「これだ」とこの構造を思いついたという。\n私の小学生の頃（昭和初期）でも、\n紙縒りは手工の時間に実習させられたものであり、\n二重、多重の紙縒りも教えられたことを思えば、\nあながち不自然な発想ではないと感じている。\n\n昭和五十八年（1983）に教授が病を得て六五歳にて\n早世されたことは返す返すも残念である。"
      },
      {
        title: "昭和五十年屋根大修理",
        content: "昭和四十五年（1970）、私は、\n自衛官生活18年間で定年退職、帰郷して家業に戻った。\n\n昭和四十七年から三ヶ年に亘り大屋根、庇屋根、\n向拝（こうばい/玄関にあたる。）屋根の抜本的修理を行った。\nすなわち、垂木（たるき）の交換追加補強、\n野地板更新、銅板総葺替え等である。\n湊町柄澤（みなとまちへざわ）の\n渡部丑吉（わたなべうしきち）大工、\n花春町の渡部守男（わたなべもりお）屋根職の手に依ったが、\n従来のように、台風ごとに屋根銅板が吹き飛ばされるような\n心配はなくなった。"
      },
      {
        title: "昭和五十七年県重要文化財指定",
        content: "昭和五十六年にわが滝沢部落にある国重文の旧会津藩滝沢本陣横山家住宅\n（通称御本陣。昭和四十六年〈1971〉指定。）が解体修理を受け、\nその完成後、文化庁文部技官がさざえ堂を訪れ視察されたが、\n特に沙汰はなかった。\n\n昭和五十七年（1982）一月には、\n県重要文化財指定申請書を提出した。\nその添付書類の殆どは小林文治博士の\n作成された図面及び論文であった。\n\n同年三月三十日、県重要文化財としての\n正式指定書が交付された。"
      },
      {
        title: "平成六年擬宝殊落下事故",
        content: "平成六年（1994）二月二十二日にさざえ堂擬宝珠（ぎぼし）石の\n落下事故があった。当日は前日から暴風雪であった。\n午後五時頃一大突風により、\nさざえ堂南側台上にある弔霊義会二階建て展望休憩所の\nトタン屋根南半分（約六坪）が剥落した。\nそれが、連結したまま飛来してさざえ堂頂上部に覆い被さり、\n風圧を受け、擬宝珠石約250kgが脱落、\n大屋根に二回弾んで向拝前方に大音響とともに落下した。\nトタン屋根に覆われたまま50cmの積雪下に沈んだため当日は判らず、\n翌朝頂上を眺めて脱落を知った。屋根には落下点に径約30cmの穴が空き、\n次の衝突点には60cm平方の陥没を生じた。\n運良く堂内に貫通を免れ大被害を受けなかったことは\n不幸中の幸いであったが、\n先年の屋根修理に際して垂木の倍加補強が有効であったと\n思われる。\n\nこれが復旧工事については種々検討したが、\n先ず屋根を修理した後、辛うじて小型のクレーン車を\n石鳥居（旧参道中間）の下を潜り抜け推進できたので、\n江川組の手に依り吊上げ復旧作業が完成し、\n一同胸を撫で下ろした。"
      },
      {
        title: "文化庁正式調査",
        content: "平成六年十一月、さざえ堂の国重要文化財指定を前提に\n文化庁の調査が行われることになり、三日間実施された。\n調査官は女性若手の栗林久美子文部技官であった。\n\n初日十一月十六日は、午後から調査官が県及び市の文化課員立ち会いの上\n取り敢えず一巡したが、私の案内説明により天井裏を上り\n擬宝珠の直下の小窓まで、\nまた床下の土台石まで積極的に見分された。\n県、市の職員も随行が大儀のようであった。\n第二日は、昭和五十年修理担当渡部丑吉老大工や\n屋根除雪担当玉川久光（たまがわひさみつ）\n林業職を呼び寄せ説明を受け、\n特に安全ロープを身につけ、ブーツ履きで玉川氏と\n一緒に頂上小窓から急勾配の大屋根上に出て\n修理箇所を実見されたことには驚嘆した。\n私は勿論、県、市の職員もいささか疲労気味で\nただ見守るだけのうちに、女性技官の毅然果敢な\n職責遂行には流石と敬服の他なかった。\nかくして精密な計測調査の後、帰京された。"
      },
      {
        title: "平成七年国重要文化財指定とさざえ堂周辺の整備",
        content: "平成七年（1995）五月十九日、国重要文化財指定が\n内定したことが新聞報道され、六月二十七日付にて\n公式指定、官報に掲載された。\n\n与謝野文部大臣の正式の重要文化財指定書は、\n平成八年七月十三日、県文化課を通じて送付せられ受領した。\nこの報とともに、親族各位から早速に祝意と祝金が寄せられた。\nたまたま平成五年から七年初めにかけて、\n膨大な寄附を受けて白虎隊士墓前及び参道石垣大修理を完成した\n飯盛山白虎隊霊域整備委員会（会長は弔霊議会理事長、\n筆者は副会長の一人）の工事に対応して、\n私もさざえ堂周辺環境整備工事を計画していたので、\nこの基金を有り難く戴きこれに充てた。\nすなわち、本堂境内地の拡張と、\n飯盛山本（旧）参道上弔霊義会用地\nとの境にある七段の石段を廃し、\n安全な坂道への改良工事などを\n施工することができたことは幸せであった。"
      },
      {
        title: "終りに",
        content: "本堂は畏くも\n大正天皇　　　明治四十一年九月十日\n昭和天皇　　　大正十三年八月二十日\n今上天皇陛下　昭和四十三年八月二日\nそれぞれ皇太子に在わしますとき、\n三代に亘り親しく御登臨の栄に浴したのである。\n\n今回、国重要文化財指定を受けたことは、\n飯盛家一族の名誉であり、その責任の重さに\n身が引き締まる思いである。\n今後の保存、整備、運営については、\n全力を尽くして献身し、\n国はじめ県、市御当局竝びに地元の方々の\n御指導御支援をいただき、\nその御期待に背くことのないよう\n覚悟している所である。\n\n平成八年八月十四日"
      }
    ],
    en: [
      {
        title: "Sazaedo and the Iimori Family",
        content: "By Masanichi Iimori, Head of the Iimori Main Family"
      },
      {
        title: "The Iimori Family and Shosoji Temple on Mt. Iimori",
        content: "In my childhood, my uncles and aunts would often say,\n‘When this Sazaedo reaches 200 years, it will surely become a National Treasure.’\nIn June 1995, the two-hundredth year since its construction in 1796 (Kansei 8),\nit was designated as an Important Cultural Property.\nThis has been the greatest joy of my life.\n\nThe current residence of the Iimori family is the former Shosoji Temple on Mt. Iimori,\nwhich is said to be about fifty years older than Sazaedo.\nHistorically, Shosoji served as the betto (custodian priest) of Munakata Shrine\n(now Itsukushima Shrine), receiving the sacred grounds of Mt. Iimori from successive lords\nand protecting them through the syncretism of Shinto and Buddhism.\nThe last chief priest of Shosoji was Sojun, my great-grandfather,\nwho later changed his name to Masataka Iimori.\n\nMy grandfather, Masanobu Sato (second son of former domain doctor Seiryu Sato\nfrom Minato-machi Ohara, wounded on the Shirakawa front),\nwith his wife Kin (daughter of Shin Watanabe of Takizawa Sakashita and niece of Masataka),\nbecame Masataka’s adopted son after the war.\nDuring the early Meiji Separation of Shinto and Buddhism, as there were no parishioners,\nthe temple was abolished in favor of Shinto, and Masanobu became\nthe first chief priest of Itsukushima Shrine.\n\nAs a result, the Buddha hall became a Shinto shrine hall, and the principal image of Amida Buddha,\nthe thirty-three Kannon statues of Sazaedo, and the large bronze Buddha statue in the garden\n(about 4.8 meters) were transferred to other temples.\nTo acquire title deeds and register the lands of Mt. Iimori under the new government,\na large amount of capital was required.\nTo raise these funds, our family fell into great hardship,\nbut Entsu Sanso-do (commonly known as Sazaedo) and Ugajin-do\nwere retained as auxiliary buildings of our residence,\nand the precincts were maintained as residential land.\nLater, Itsukushima Shrine was granted the status of a village shrine,\nand its grounds came under the administration of the village office.\nSince World War II, the shrine has been protected and managed under the Shrine Agency system\nby local parishioners led by the heads of the Takizawa community."
      },
      {
        title: "After the Boshin War: The Iimori Family and Mt. Iimori",
        content: "To support the family, my grandfather Masanobu temporarily worked alone\nat the office of the Numajiri Sulfur Mine,\nand narrowly escaped death during the 1888 eruption of Mt. Bandai.\nMy grandmother Kin ran a tea shop beside Sazaedo (the origin of today’s Iimori Honten),\nand the family engaged in farming and animal husbandry,\nresembling postwar reconstruction.\nAs worshippers to Mt. Iimori gradually increased from beyond Aizu,\nwe established a family business centered on temple management and shop operations.\n\nDuring that time, the eldest son Masatoshi worked at the county office;\nthe second son Masamitsu stayed home to farm and raise livestock;\nthe third son Masanari became an Army officer;\nand the fourth son Masaakira aspired to be a mining engineer.\n\nSince the Boshin War, few paid attention to Sazaedo;\nroof repairs were neglected and it decayed to the point of being called a fox’s den.\n\nFor reference, when the Byakkotai grave site on Mt. Iimori was moved in 1871\nfrom the temporary burial site at Myokokuji to Mt. Iimori where they died,\nmy grandfather Masanobu donated about two tanbu (approx. 0.2 hectares) to Lord Matsudaira.\nDuring the expansion in 1928, my great-uncle Masatoshi donated an additional two tanbu.\nLand taxes were paid by the Iimori family until the end of World War II,\nafter which ownership was transferred to the Choreigikai Foundation due to tax reasons."
      },
      {
        title: "The 1890 Major Restoration of Sazaedo",
        content: "In 1890, led by Mr. Tomita Jisaku and other Aizu volunteers,\ndonations were widely collected to convert the mass grave of the Byakkotai\ninto individual graves for the nineteen youths who took their own lives.\nAt the same time, major repairs were carried out on the dilapidated Sazaedo,\nhelping it overcome its dire condition.\n\nAt that time, in place of the removed Kannon statues,\nspirit images of the nineteen Byakkotai warriors—created by sculptors\nOhashi Chishin and Tanaka Jihachi, both former domain retainers—were enshrined,\nallowing visitors to circumambulate the hall in worship.\nHowever, in 1904, to avoid restricting worshippers only to those entering Sazaedo,\nthese images were moved to the adjacent Ugajin-do\n(a small four-tatami hall dedicated to the god of harvests, established in the Kanbun era, 1661–1677).\nSince then, Sazaedo has displayed framed illustrations from\n“Kōchō Nijūshikō” (Twenty-Four Filial Exemplars of the Imperial Dynasty),\ncompiled by the 8th lord, Matsudaira Katataka, as a moral textbook for Aizu youth."
      },
      {
        title: "Taisho Era and Early Showa",
        content: "In 1915, the roof was re-covered. After my grandfather Masanobu passed away in 1918,\nhis eldest son Masatoshi succeeded him but died in 1929 while serving as mayor of Ikki Village.\nHis position was inherited by my father, Masashige, the third son.\nAfter retiring as an Army Lieutenant Colonel and serving ten years at Osaka City Hall,\nhe returned home in 1931 to manage affairs.\nTo prevent frequent illnesses (such as tuberculosis),\nour main house was rebuilt from the curved house style inherited from Shosoji\ninto its current form.\n\nIn 1932, copper plates were laid over the traditional wooden shingles\nof Sazaedo’s roof to improve durability and refresh its appearance."
      },
      {
        title: "Post–World War II",
        content: "In 1953, due to severe tilting from age, Sazaedo underwent a straightening project\ncarried out by local carpenter Kaneda Sakushiro.\nThrough reinforcements and metal fittings, the tilt was largely corrected,\nand the structure withstood the 1964 Niigata earthquake (Intensity 4–5 in Aizu)."
      },
      {
        title: "The 1965 Academic Survey",
        content: "Sazaedo gained international recognition through the measured survey\nconducted in 1965 by the late Dr. Bunji Kobayashi, Professor at Nihon University.\nPrompted by information provided by Dr. Hitoshi Sato (then a technical official at the Agency for Cultural Affairs),\nProfessor Kobayashi became fascinated by the double-helix slope structure,\nconducted surveys, expanded research to spiral architecture worldwide,\nand presented his findings to academic societies.\nHe evaluated Aizu Sazaedo as\n‘the world’s only wooden building with a double-helix slope,’\nand ‘not a mere imitation but a work of genius.’\n\nThe survey was initially proposed to the city authorities,\nbut due to budget constraints, our family volunteered to host it.\nDuring the summer break, Professor Kobayashi, alumni, and several students\nstayed at our home for twenty days and dedicated themselves to the work.\nAlthough I was away on Self-Defense Force duty, my wife, with help from our two daughters,\nmanaged all meals and lodging.\n\nThe following year, 1966, saw the completion of the major reconstruction of Aizu Tsuruga Castle,\nand the new annex of the Iimori Main Store (about 250 square meters with an observation deck) was completed."
      },
      {
        title: "Dr. Kobayashi’s Theory and Evaluation",
        content: "Dr. Kobayashi theorized that the idea of Sazaedo’s double helix\nwas unlikely to have emerged suddenly from Japan’s Buddhist architectural tradition.\nFollowing the 1721 lifting of the ban on Western books,\nforeign works imported via the Netherlands included drawings of double spiral staircases\nin the sketchbook of Satake Shozan, the Akita lord and painter—\nwhich themselves were copies of works by Moxon (1627–1700) published in London.\nWhile direct links to Sazaedo are uncertain,\nWestern examples were merely passageways,\nwhereas Aizu Sazaedo enshrined Kannon statues at the center,\nresembling Wright’s Guggenheim Museum and representing not imitation\nbut creative genius.\n\nSadly, Dr. Kobayashi passed away in 1983 at the age of 65."
      },
      {
        title: "Major Roof Repairs in the 1970s",
        content: "In 1970, after retiring from 18 years of service in the Self-Defense Forces,\nI returned home. From 1972 over three years,\nwe undertook fundamental repairs to the main, eaves, and entrance porch roofs,\nincluding reinforcing and replacing rafters, renewing roof boards,\nand fully re-covering with copper sheets.\nThanks to the craftsmanship of master carpenter Ushikichi Watanabe\nand roofer Morio Watanabe, the recurrent typhoon damage to copper roofing ceased."
      },
      {
        title: "1982: Designated as a Prefectural Important Cultural Property",
        content: "In 1981, the nationally designated Important Cultural Property,\nYokoyama Residence (Takizawa Honjin), underwent dismantling repairs.\nAfter its completion, cultural property officials visited Sazaedo,\nbut no action followed.\nIn January 1982, we submitted an application for designation as a Prefectural Important Cultural Property,\nprimarily supported by Dr. Kobayashi’s drawings and papers.\nOn March 30 of the same year, we received the official designation certificate."
      },
      {
        title: "1994: Finial (Giboshi) Stone Fall Accident",
        content: "On February 22, 1994, during a blizzard from the previous day,\na massive gust around 5 PM peeled off the southern half of the tin roof\nof the two-story observation rest house of the Choreigikai on the south platform.\nThe sheet flew as a whole, covered the top of Sazaedo, and under wind pressure\nabout 250 kg of the finial stone detached, bounced twice on the main roof,\nand fell with a thunderous crash before the entrance.\nBuried under 50 cm of snow beneath the tin sheet,\nthe loss was only noticed the next morning when looking up at the summit.\nA hole about 30 cm in diameter and a 60 cm square depression marked the impacts.\nFortunately, it did not penetrate inside and major damage was avoided—\nlikely thanks to the doubled rafter reinforcements made in earlier repairs.\n\nAfter various considerations, we first repaired the roof,\nthen, by carefully advancing a small crane under the stone torii (midway on the old approach),\nEgawa-gumi lifted and reinstated the finial, completing the restoration."
      },
      {
        title: "Official Survey by the Agency for Cultural Affairs",
        content: "In November 1994, a three-day survey was conducted\nas a prerequisite for designation as a National Important Cultural Property.\nThe investigator was Ms. Kumiko Kuribayashi, a young technical official.\n\nOn the first day (Nov 16), after an initial tour with prefectural and city staff,\nshe ascended to the attic just beneath the finial and inspected the foundation stones,\nencouraged by my guidance.\nOn the second day, she questioned the veteran carpenter in charge of the 1970s repair,\nand the forestry worker responsible for roof snow removal.\nEquipped with safety ropes and boots, she even stepped onto the steep main roof\nthrough the small attic window to examine the repair sites firsthand—\na remarkable display of professional resolve.\nAfter precise measurements, she returned to Tokyo."
      },
      {
        title: "1995: National Important Cultural Property and Site Improvements",
        content: "On May 19, 1995, newspapers reported the pending designation\nas a National Important Cultural Property;\nformal designation was published in the Official Gazette on June 27.\nThe official certificate signed by Minister of Education Yosano\narrived via the prefectural cultural division on July 13, 1996.\n\nAlong with congratulatory messages and gifts from relatives,\nour Byakkotai Sanctuary Improvement Committee had just completed\nmajor repairs to the graves and stone walls thanks to generous donations.\nUsing these funds, we also implemented environmental improvements around Sazaedo:\nexpanding the main hall precincts, removing a seven-step stair boundary\nwith Choreigikai land along the old approach,\nand replacing it with a safer slope."
      },
      {
        title: "Conclusion",
        content: "This hall has been honored by imperial visits when they were Crown Princes:\nEmperor Taisho (Sept 10, 1908)\nEmperor Showa (Aug 20, 1924)\nThe current Emperor (Aug 2, 1968).\n\nWith the National Important Cultural Property designation,\nwe feel both honor and the weight of responsibility.\nWe are determined to devote ourselves to preservation, maintenance, and operation,\nwith guidance and support from national, prefectural, and city authorities,\nas well as local residents, so as not to betray their expectations.\n\nAugust 14, 1996"
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
