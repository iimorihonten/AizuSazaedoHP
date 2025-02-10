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
    id: "3",
    title: "営業に関するお知らせ",
    titleEn: "Notice Regarding Business Operations",
    content: `会津さざえ堂、並びに飯盛本店は
2月13日(木)より
営業再開を予定しております⛄️

落雪の状況次第では延期もあり得ますので
その際は何卒ご容赦くださいますよう
お願い申し上げます

会津若松市内の道路状況も大変悪く
あちらこちらで渋滞や事故が発生しています

連日の除雪作業で
心身ともに
疲労が溜まってくる頃と思いますので
皆さまご無理なさいませんように`,
    contentEn: `Aizu Sazaedo and Iimori Main Store
plan to resume operations
from Thursday, February 13th ⛄️

Please note that this may be postponed
depending on the snow fall conditions.
We appreciate your understanding.

Road conditions in Aizu-Wakamatsu City are still very poor,
with traffic jams and accidents occurring in various locations.

As many people are likely becoming physically and mentally fatigued
from the continuous snow removal work,
please take care not to overexert yourselves.`,
    date: "2025-02-11",
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