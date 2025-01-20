import { useState } from "react";
import { content } from "@/constants/content";
import heroImage from "@/assets/a338b15d-845e-46e5-b409-6a7e79b38d2a.png";

interface HeroProps {
  language: "ja" | "en";
  content: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export const Hero = () => {
  const [language, setLanguage] = useState<"ja" | "en">("ja");

  return (
    <section className="mb-12">
      <div className="relative aspect-square rounded-lg overflow-hidden bg-black max-w-3xl mx-auto">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="会津さざえ堂の外観"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl mb-6 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
            {content.subtitle}
          </h2>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl mb-4 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
            {content.title}
          </h1>
          <p className={`text-xl md:text-2xl lg:text-3xl max-w-3xl ${language === "ja" ? "font-yugothic" : "font-noto"}`}>
            {content.description}
          </p>
          <button 
            onClick={() => setLanguage(language === "ja" ? "en" : "ja")}
            className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            {language === "ja" ? "English" : "日本語"}
          </button>
        </div>
      </div>
    </section>
  );
};