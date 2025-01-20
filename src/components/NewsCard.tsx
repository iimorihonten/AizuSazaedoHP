import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { NewsItem } from "@/constants/newsData";

interface NewsCardProps {
  news: NewsItem;
  language: "ja" | "en";
}

const getCategoryColor = (category: NewsItem["category"]) => {
  switch (category) {
    case "event":
      return "bg-blue-100 text-blue-800";
    case "maintenance":
      return "bg-orange-100 text-orange-800";
    case "important":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getCategoryText = (category: NewsItem["category"], language: "ja" | "en") => {
  const categories = {
    event: { ja: "イベント", en: "Event" },
    maintenance: { ja: "メンテナンス", en: "Maintenance" },
    important: { ja: "重要", en: "Important" },
    other: { ja: "その他", en: "Other" }
  };
  return categories[category][language];
};

export const NewsCard = ({ news, language }: NewsCardProps) => {
  const formattedDate = format(
    new Date(news.date), 
    language === "ja" ? "yyyy年MM月dd日" : "MMMM d, yyyy",
    { locale: language === "ja" ? ja : undefined }
  );
  
  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 rounded-full text-sm ${getCategoryColor(news.category)}`}>
            {getCategoryText(news.category, language)}
          </span>
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>
        <CardTitle className={language === "ja" ? "font-yumin" : "font-playfair"}>
          {language === "ja" ? news.title : (news.titleEn || news.title)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {news.imageUrl && (
          <div className="mb-4">
            <img
              src={news.imageUrl}
              alt={language === "ja" ? news.title : (news.titleEn || news.title)}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        )}
        <p className={`whitespace-pre-wrap ${language === "ja" ? "font-yugothic" : "font-noto"}`}>
          {language === "ja" ? news.content : (news.contentEn || news.content)}
        </p>
      </CardContent>
    </Card>
  );
};