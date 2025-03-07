import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { content } from "@/constants/content";
import { Card, CardContent } from "@/components/ui/card";

const Honten = () => {
  const [language, setLanguage] = useState<"ja" | "en">("ja");

  const shopContent = {
    ja: {
      title: "山主飯盛本店",
      description: [
        "宇賀神堂の御朱印や会津さざえ堂に関する商品などを取り扱っております。",
        "最新の情報は、山主飯盛本店のインスタグラムにて掲載しております。"
      ]
    },
    en: {
      title: "Iimori Honten Shop",
      description: [
        "We offer goshuin (temple stamps) from Ugajin-do and various items related to Aizu Sazaedo.",
        "For the latest information and updates, please follow us on Iimori Honten Shop's Instagram account."
      ]
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header language={language} setLanguage={setLanguage} content={content[language]} />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className={`text-3xl font-bold mb-6 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
          {shopContent[language].title}
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className={`space-y-4 ${language === "ja" ? "font-yugothic" : "font-noto"}`}>
                {shopContent[language].description.map((text, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {text}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardContent className="p-6">
              <iframe
                src="https://www.instagram.com/iimorihonten/embed"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                className="rounded-lg"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Honten;