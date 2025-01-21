import { useState } from "react";
import { content } from "@/constants/content";

interface HeroProps {
  language: "ja" | "en";
  content: {
    title: string;
    description: string;
  };
}

export const Hero = ({ language, content }: HeroProps) => {
  return (
    <section className="mb-12">
      <div className="relative aspect-square rounded-lg overflow-hidden bg-black max-w-3xl mx-auto">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="会津さざえ堂の外観"
          src="/AizuSazaedoHP/sazaedo-hero.jpg"
          onError={(e) => {
            console.error("Hero image load error:", e);
            const img = e.target as HTMLImageElement;
            console.log("Failed URL:", img.src);
          }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl mb-6 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
            {content.title}
          </h2>
          <p className={`text-xl md:text-2xl lg:text-3xl max-w-3xl ${language === "ja" ? "font-yugothic" : "font-noto"}`}>
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
};