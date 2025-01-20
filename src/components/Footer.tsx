interface FooterProps {
  language: "ja" | "en";
}

export const Footer = ({ language }: FooterProps) => {
  const content = {
    ja: {
      title: "会津さざえ堂",
      address: "〒965-0003 福島県会津若松市一箕町八幡飯盛山",
      tel: "TEL: 0242-22-3163",
      fax: "FAX: 0242-25-3419",
      hours: {
        title: "拝観時間",
        spring: "4月〜11月: 8:15 – 日没",
        winter: "12月〜3月: 9:00 – 16:00"
      }
    },
    en: {
      title: "Aizu Sazaedo",
      address: "Iimori-yama, Yawata, Ikki-machi, Aizu Wakamatsu City, Fukushima Prefecture 965-0003",
      tel: "Tel: +81-242-22-3163",
      fax: "Fax: +81-242-25-3419",
      hours: {
        title: "Opening Hours",
        spring: "April-November: 8:15 AM - Sunset",
        winter: "December-March: 9:00 AM - 4:00 PM"
      }
    }
  };

  return (
    <footer className="bg-[#808000] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
              {content[language].title}
            </h3>
            <div className={`text-sm space-y-2 ${language === "ja" ? "font-yugothic" : "font-noto"}`}>
              <p>{content[language].address}</p>
              <p>{content[language].tel}</p>
              <p>{content[language].fax}</p>
            </div>
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
              {content[language].hours.title}
            </h3>
            <p className={`text-sm ${language === "ja" ? "font-yugothic" : "font-noto"}`}>
              {content[language].hours.spring}<br />
              {content[language].hours.winter}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/20 text-center">
          <p className="text-sm text-white/80">© 2025 {content[language].title}</p>
        </div>
      </div>
    </footer>
  );
};