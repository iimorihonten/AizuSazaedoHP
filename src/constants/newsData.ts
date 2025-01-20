import newsImage from "@/assets/1698d386-50dd-44d9-a7f9-eca87d912f54.png";

export interface NewsItem {
  id: string;
  titleJa: string;
  titleEn?: string;
  contentJa: string;
  contentEn?: string;
  date: string;
  category: "event" | "maintenance" | "important" | "other";
  imageUrl?: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    titleJa: "会津さざえ堂の新しいウェブサイトを公開しました",
    titleEn: "New Aizu Sazaedo Website Launched",
    contentJa: "より使いやすく、見やすいデザインに一新しました。",
    contentEn: "We are pleased to announce the renewal of the Aizu Sazaedo official website.\n\nWe have redesigned the website to make it more visually appealing and user-friendly.\n\nThank you for your continued support of Aizu Sazaedo.",
    date: "2024-01-18",
    category: "important",
    imageUrl: newsImage
  }
];