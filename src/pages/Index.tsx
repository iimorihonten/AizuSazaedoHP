import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickAccess } from "@/components/QuickAccess";
import { content } from "@/constants/content";

const Index = () => {
  const [language, setLanguage] = useState<"ja" | "en">("ja");

  return (
    <div className="min-h-screen bg-stone-50">
      <Header language={language} setLanguage={setLanguage} content={content[language]} />
      <main className="container mx-auto px-4 py-8">
        <Hero language={language} content={content[language]} />
        <QuickAccess language={language} content={content[language].quickAccess} />
      </main>
      <footer className="bg-[#808000] text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2025 {content[language].title}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;