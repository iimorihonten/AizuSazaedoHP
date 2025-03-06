import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { content } from "@/constants/content";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Ticket, PawPrint } from "lucide-react";

const Visiting = () => {
  const [language, setLanguage] = useState<"ja" | "en">("ja");

  const visitingContent = {
    ja: {
      title: "ご拝観について",
      sections: {
        hours: {
          title: "拝観時間",
          content: "4月〜11月: 8:15 – 日没\n12月〜3月: 9:00 – 16:00"
        },
        fees: {
          title: "拝観料",
          content: "大人・・・・・・・400円\n大学・高校生・・・300円\n小学・中学生・・・200円"
        },
        access: {
          title: "アクセス",
          content: "バス\nハイカラさん・あかべぇ「飯盛山下」下車、徒歩5分\n自動車\n磐越自動車道　会津若松ICより約15分\n弊社での駐車場のご用意はございません。\n飯盛山入口周辺のお店の駐車場、もしくは",
          cityParkingLink: {
            text: "市営の駐車場",
            url: "https://www.city.aizuwakamatsu.fukushima.jp/docs/2007090600026/"
          },
          contentAfterLink: "をご利用の上お越しください。"
        },
        pets: {
          title: "ペット同伴での拝観について",
          content: "- ペット用の抱っこ紐は必ずご使用ください\n- お客様の安全を確保するために両手が塞がらない状態でペット抱えた上でのご拝観をお願いいたします\n- ペットの安全を守るために踏まれたりすることを防ぐためにもご協力をお願いいたします\n- 他の参拝者への配慮をお願いいたします\n- 皆様が快適にお過ごしいただけるよう、ご理解とご協力をお願い申し上げます\n\nどうぞ、心静かに拝観をお楽しみください。"
        }
      },
      address: "〒965-0003 福島県会津若松市一箕町八幡飯盛山"
    },
    en: {
      title: "Visiting Information",
      sections: {
        hours: {
          title: "Visiting Hours",
          content: "April-November: 8:15 AM - Sunset\nDecember-March: 9:00 AM - 4:00 PM"
        },
        fees: {
          title: "Admission Fees",
          content: "Adults: 400 yen\nUniversity/High School Students: 300 yen\nElementary/Junior High School Students: 200 yen"
        },
        access: {
          title: "Access",
          content: "By Bus:\nTake \"Haikara-san/Akabee\" bus to \"Iimoriyama-shita\" stop, 5-minute walk\nBy Car:\nAbout 15 minutes from Aizu Wakamatsu IC on Ban-etsu Expressway\nWe do not have our own parking lot.\nPlease use the parking lots of shops near the entrance of Mt. Iimoriyama\nor",
          cityParkingLink: {
            text: "the municipal parking lot",
            url: "https://www.city.aizuwakamatsu.fukushima.jp/docs/2007090600026/"
          },
          contentAfterLink: "."
        },
        pets: {
          title: "Guidelines for Visiting with Pets",
          content: "- Pet carriers are mandatory\n- Please ensure you have one hand free while visiting for your safety\n- For your pet's safety, we ask for your cooperation to prevent them from being stepped on\n- Please be considerate of other visitors\n- We appreciate your understanding and cooperation in maintaining a comfortable environment for everyone\n\nPlease enjoy your peaceful visit to our temple."
        }
      },
      address: "Iimori-yama, Yawata, Ikki-machi, Aizu Wakamatsu City, Fukushima Prefecture 965-0003"
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header language={language} setLanguage={setLanguage} content={content[language]} />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className={`text-3xl font-bold mb-6 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
          {visitingContent[language].title}
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-6 w-6 text-[#808000]" />
                <h2 className={`text-xl ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
                  {visitingContent[language].sections.hours.title}
                </h2>
              </div>
              <p className="whitespace-pre-line">
                {visitingContent[language].sections.hours.content}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Ticket className="h-6 w-6 text-[#808000]" />
                <h2 className={`text-xl ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
                  {visitingContent[language].sections.fees.title}
                </h2>
              </div>
              <p className="whitespace-pre-line">
                {visitingContent[language].sections.fees.content}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-[#808000]" />
                <h2 className={`text-xl ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
                  {visitingContent[language].sections.access.title}
                </h2>
              </div>
              <div className="whitespace-pre-line">
                <p>{visitingContent[language].sections.access.content}</p>
                <a 
                  href={visitingContent[language].sections.access.cityParkingLink.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#808000] hover:underline"
                >
                  {visitingContent[language].sections.access.cityParkingLink.text}
                </a>
                <span>{visitingContent[language].sections.access.contentAfterLink}</span>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm">{visitingContent[language].address}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <PawPrint className="h-6 w-6 text-[#808000]" />
                <h2 className={`text-xl ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
                  {visitingContent[language].sections.pets.title}
                </h2>
              </div>
              <p className="whitespace-pre-line">
                {visitingContent[language].sections.pets.content}
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Visiting;
