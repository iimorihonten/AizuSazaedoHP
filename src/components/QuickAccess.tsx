import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Ticket } from "lucide-react";

interface QuickAccessProps {
  language: "ja" | "en";
  content: {
    title: string;
    hours: {
      title: string;
      content: string;
    };
    fees: {
      title: string;
      content: string;
    };
    access: {
      title: string;
      content: string;
    };
  };
}

export const QuickAccess = ({ language, content }: QuickAccessProps) => {
  return (
    <section className="mb-12">
      <h3 className={`text-2xl mb-6 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
        {content.title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-6 w-6 text-[#808000]" />
              <h4 className={`text-xl ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
                {content.hours.title}
              </h4>
            </div>
            <p className="whitespace-pre-line">
              {content.hours.content}
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Ticket className="h-6 w-6 text-[#808000]" />
              <h4 className={`text-xl ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
                {content.fees.title}
              </h4>
            </div>
            <p className="whitespace-pre-line">
              {content.fees.content}
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-[#808000]" />
              <h4 className={`text-xl ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
                {content.access.title}
              </h4>
            </div>
            <p className="whitespace-pre-line">
              {content.access.content}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};