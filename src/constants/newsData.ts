export interface NewsItem {
  id: string;
  title: string;
  titleEn?: string;
  content: string;
  contentEn?: string;
  date: string;
  category: "event" | "maintenance" | "important" | "other";
  imageUrl?: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "会津さざえ堂公式サイトリニューアルのお知らせ",
    titleEn: "Aizu Sazaedo Official Website Renewal",
    content: "令和7年（2025年）2月1日より、会津さざえ堂の公式サイトをリニューアルいたしました。\n\nより見やすく、使いやすいウェブサイトとなるよう、デザインと機能を一新いたしました。\n\n今後とも会津さざえ堂をよろしくお願い申し上げます。",
    contentEn: "We are pleased to announce the renewal of the Aizu Sazaedo official website.\n\nWe have redesigned the website to make it more visually appealing and user-friendly.\n\nThank you for your continued support of Aizu Sazaedo.",
    date: "2025-02-01",
    category: "important",
    imageUrl: "./lovable-uploads/1698d386-50dd-44d9-a7f9-eca87d912f54.png"
  }
];