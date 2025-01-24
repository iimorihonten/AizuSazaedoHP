import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { content } from "../constants/content";
import { NewsCard } from "../components/NewsCard";
import { ScrollArea } from "../components/ui/scroll-area";
import { newsData } from "../constants/newsData";

const News = () => {
  const [language, setLanguage] = useState<"ja" | "en">("ja");

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header language={language} setLanguage={setLanguage} content={content[language]} />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className={`text-3xl font-bold mb-6 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
          {language === "ja" ? "お知らせ" : "News"}
        </h1>
        
        <ScrollArea className="h-[600px] rounded-lg bg-white p-4">
          <div className="space-y-4">
            {newsData.map((item) => (
              <NewsCard key={item.id} news={item} language={language} />
            ))}
          </div>
        </ScrollArea>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default News;