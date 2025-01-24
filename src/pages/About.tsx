import React, { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { content } from "@/constants/content";
import { QuestionForm } from "@/components/QuestionForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const About = () => {
  const [language, setLanguage] = useState<"ja" | "en">("ja");

  const images = [
    {
      src: "/AizuSazaedoHP/lovable-uploads/2025a941-5f31-406e-8837-6b8a0f8ca3a2.png",
      alt: language === "ja" ? "冬の会津さざえ堂" : "Aizu Sazaedo in winter",
      season: language === "ja" ? "冬" : "Winter"
    },
    {
      src: "/AizuSazaedoHP/lovable-uploads/d9b564e9-1a79-4384-84bc-8d7a70d5c91a.png",
      alt: language === "ja" ? "春の会津さざえ堂" : "Aizu Sazaedo in spring",
      season: language === "ja" ? "春" : "Spring"
    },
    {
      src: "/AizuSazaedoHP/lovable-uploads/d48d85e3-d257-4a2a-a3d5-f3626b142cfd.png",
      alt: language === "ja" ? "夏の会津さざえ堂" : "Aizu Sazaedo in summer",
      season: language === "ja" ? "夏" : "Summer"
    },
    {
      src: "/AizuSazaedoHP/lovable-uploads/6d12c6c1-28cb-453c-ae2b-8565ba4bd240.png",
      alt: language === "ja" ? "秋の会津さざえ堂" : "Aizu Sazaedo in autumn",
      season: language === "ja" ? "秋" : "Autumn"
    }
  ];

  const plugin = useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );

  const jaContent = [
    {
      title: "会津さざえ堂について",
      content: "会津さざえ堂は、1796年福島県会津若松市の飯盛山に建立された、高さ16.5メートル、六角三層のお堂です。正式名称は「円通三匝堂」（えんつうさんそうどう）といいます。当時飯盛山には正宗寺（しょうそうじ）というお寺があり、その住職であった僧郁堂（いくどう）の考案した建物です。"
    },
    {
      title: "独特な構造",
      content: "その独特な2重らせんのスロープに沿って西国三十三観音像が安置され、参拝者はこのお堂をお参りすることで三十三観音参りができるという大変合理的なお堂です。また、上りと下りが全く別の通路になっていいる一方通行の構造により、たくさんの参拝者がすれ違うこと無く安全にお参りができるという世界にも珍しい建築様式を採用したことで、建築史上その特異な存在が認められ、平成7年に国重要文化財に指定されました。"
    },
    {
      title: "三匝堂の意味",
      content: "さざえ堂に入りますと、上りに一回転半、下りにまた一回転半、合計三回転することになりますが、三匝堂の「匝」は「めぐる（匝る）」という意味があり、三回めぐりながら観音様をお参りすることになります。"
    },
    {
      title: "建立の背景",
      content: "当時、会津より西日本方面に出かけて各地の札所をお参りするということは一般民衆には夢のような話でした。会津地方にも三十三観音札所が点在しますが、さらにコンパクトに一ケ所のお堂に集約したのです。"
    },
    {
      title: "他のさざえ堂との比較",
      content: "1780年代より、当時の民衆の観音信仰を背景に、江戸の羅漢寺をはじめ、関東を中心として全国各地にさざえ堂と呼ばれる建物が建てられました。やはりどちらのさざえ堂も観音像を安置し、一度にお参りするためのお堂です。有名なところでは群馬県太田市や埼玉県本庄市に現存しますが、会津さざえ堂の構造とは異なり、平面は方形で、中二階を用いた三階建てになっています。"
    },
    {
      title: "明治以降の変遷",
      content: "明治になり、正宗寺は廃寺され、神道を信仰しため神仏分離令によって三十三観音像は取り外されました。明治23年には堂内の観音像があった場所に白虎隊十九士の霊像が安置されましたが、のちに会津藩の道徳の教科書であった、第八代藩主松平容敬（かたたか）公の編纂された「皇朝二十四孝」の絵額が掲げられ、現在に至っています。"
    },
    {
      title: "近年の評価",
      content: "平成７年(1995) 国重要文化財 指定\n平成２８年(2016) 日本遺産 認定\n平成２８年(2016) ミシュラン・グリーンガイド・東北WEB版に★一つの評価を頂き、掲載"
    }
  ];

  const enContent = [
    {
      title: "About Aizu Sazaedo",
      content: "Aizu Sazaedo, built in 1796 on Mt. Iimori in Aizuwakamatsu City, Fukushima Prefecture, is a hexagonal three-story temple standing 16.5 meters tall. Its formal name is 'Entsu Sanso-do'. It was designed by Priest Ikudo of Shosoji Temple, which was located on Mt. Iimori at the time."
    },
    {
      title: "Unique Structure",
      content: "Along its unique double-helix slope, thirty-three Kannon statues were enshrined, allowing worshippers to complete a pilgrimage to thirty-three Kannon in one visit. Its one-way structure, with completely separate ascending and descending paths, enables many worshippers to safely visit without crossing paths. This rare architectural style was recognized for its uniqueness in architectural history and was designated as an Important Cultural Property in 1995."
    },
    {
      title: "Meaning of Sanso-do",
      content: "When entering Sazaedo, visitors make one and a half turns ascending and another one and a half turns descending, totaling three rotations. The 'Sanso' in its name means 'to circle', representing the three rotations made while worshipping the Kannon statues."
    },
    {
      title: "Historical Background",
      content: "At the time, traveling to pilgrimage sites in western Japan was a distant dream for common people. While there were thirty-three Kannon pilgrimage sites scattered throughout the Aizu region, this temple consolidated them into a single, compact location."
    },
    {
      title: "Comparison with Other Sazaedo",
      content: "From the 1780s, influenced by popular Kannon worship, buildings called Sazaedo were constructed throughout Japan, centered in the Kanto region, starting with Rakanji in Edo. These Sazaedo also enshrined Kannon statues for consolidated worship. Famous examples still exist in Ota City, Gunma Prefecture, and Honjo City, Saitama Prefecture, though their structure differs from Aizu Sazaedo, being square in plan with a mezzanine third floor."
    },
    {
      title: "Changes Since Meiji Era",
      content: "In the Meiji era, Shosoji Temple was abolished, and due to the separation of Buddhism and Shinto, the thirty-three Kannon statues were removed. In 1890, spirit images of the nineteen Byakkotai warriors were enshrined where the Kannon statues had been, later replaced by hanging scrolls of 'Kōchō Nijūshikō' (Twenty-four Filial Exemplars), a moral textbook compiled by the eighth domain lord Matsudaira Katahiro."
    },
    {
      title: "Recent Recognition",
      content: "1995: Designated as an Important Cultural Property\n2016: Recognized as Japan Heritage\n2016: Listed in Michelin Green Guide Tohoku web version with one star"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header language={language} setLanguage={setLanguage} content={content[language]} />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className={`text-3xl font-bold mb-6 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
          {language === "ja" ? "会津さざえ堂について" : "About Aizu Sazaedo"}
        </h1>

        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin]}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="flex flex-col items-center">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-1/4 h-auto rounded-lg shadow-lg"
                    />
                    <p className={`mt-2 text-sm text-gray-600 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
                      {image.season}
                    </p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {(language === "ja" ? jaContent : enContent).map((section, index) => (
                <CarouselItem key={index} className="md:basis-full">
                  <Card className="bg-white h-full">
                    <CardContent className="p-6">
                      <h2 className={`text-2xl mb-4 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
                        {section.title}
                      </h2>
                      <div className={`prose max-w-none whitespace-pre-line text-base leading-relaxed ${language === "ja" ? "font-yugothic" : "font-noto"}`}>
                        {section.content}
                      </div>
                      <div className="mt-4 text-sm text-gray-500 text-center">
                        {index + 1} / {(language === "ja" ? jaContent : enContent).length}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 mb-8">
          <h2 className={`text-2xl font-bold mb-6 text-center ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
            {language === "ja" ? "お問い合わせ" : "Contact Us"}
          </h2>
          <QuestionForm language={language} />
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default About;