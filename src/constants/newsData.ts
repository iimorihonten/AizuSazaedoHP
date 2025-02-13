import { getImagePath } from "./config";

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
    id: "4",
    title: "【営業再開のお知らせ】",
    titleEn: "【Resumption of Business】",
    content: `本日まで臨時休業とさせて頂き\n明日(2/14)12時より営業再開できるよう\n整備を進めております⛄️\n\n旧参道への立ち入りは一部解除し\n破損している鳥居左側の\n迂回路を解放しております⛩\n\nご利用予定の皆さまは\nどうぞお気をつけてお越しくださいませ`,
    contentEn: `We have been temporarily closed until today.\nWe are preparing to resume business from 12:00 tomorrow (2/14) ⛄️\n\nEntry to the old approach is partially lifted.\nWe have opened a detour on the left side of the damaged torii gate ⛩\n\nIf you are planning to visit, please be careful and come.`,
    date: "2025-02-13",
    category: "important",
  },
  {
    id: "2",
    title: "2月9日、10日の臨時休業について",
    titleEn: "Temporary Closure on February 9th and 10th",
    content: `ご心配おかけしております\n\n会津さざえ堂と飯盛本店の\n営業予定につきまして\n現段階では未定となっております\n\nさざえ堂の屋根に積もった大量の雪は\nまだ落ちずに残っており\n落雪が起きた際、十分な避難通路が\n確保できていない為\n敷地内への侵入が大変危険な状況です\n\n飯盛山旧参道は\n立ち入り禁止となっておりますが\n新参道からも さざえ堂には\nご足労なさいませんよう\nお願い申し上げます\n\nご利用予定のお客様には\n大変ご不便をおかけしますが\n何卒ご容赦くださいますようお願い申し上げます`,
    contentEn: `Thank you for your concern.\n\nThe business schedule of Aizu Sazaedo and Iimori Main Store is\ncurrently undecided.\n\nA large amount of snow piled up on the roof of Sazaedo\nstill remains without falling.\nBecause sufficient evacuation routes cannot be secured in the event of a snow fall,\nit is very dangerous to enter the premises.\n\nThe old Iimoriyama approach is\nprohibited, but please do not visit Sazaedo\nfrom the new approach as well.\n\nWe apologize for any inconvenience this may cause to customers who plan to visit,\nand we appreciate your understanding.`,
    date: "2025-02-09",
    category: "important",
  },
  {
    id: "1",
    title: "会津さざえ堂公式サイトリニューアルのお知らせ",
    titleEn: "Aizu Sazaedo Official Website Renewal",
    content: "令和7年（2025年）2月1日より、会津さざえ堂の公式サイトをリニューアルいたしました。\n\n今後とも会津さざえ堂をよろしくお願い申し上げます。",
    contentEn: "We are pleased to announce the renewal of the Aizu Sazaedo official website.\n\nThank you for your continued support of Aizu Sazaedo.",
    date: "2025-02-01",
    category: "important",
    imageUrl: getImagePath("/lovable-uploads/1698d386-50dd-44d9-a7f9-eca87d912f54.png")
  },
];