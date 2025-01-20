import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  language: "ja" | "en";
  setLanguage: (lang: "ja" | "en") => void;
  content: {
    title: string;
    subtitle: string;
    menu: Record<string, string>;
  };
}

export const Header = ({ language, setLanguage, content }: HeaderProps) => {
  const navigate = useNavigate();

  const handleNavigation = (key: string) => {
    switch (key) {
      case "news":
        navigate("/news");
        break;
      case "about":
        navigate("/about");
        break;
      case "sazaedo-iimori":
        navigate("/sazaedo-iimori");
        break;
      case "visiting":
        navigate("/visiting");
        break;
      case "honten":
        navigate("/honten");
        break;
      case "contact":
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  return (
    <header className="bg-[#808000] text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-sm md:text-base mb-1">{content.subtitle}</div>
          <h1 
            className={`text-2xl md:text-3xl ${language === "ja" ? "font-yumin" : "font-playfair"} cursor-pointer`}
            onClick={() => navigate("/")}
          >
            {content.title}
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2 flex-wrap justify-center">
              {Object.entries(content.menu).map(([key, value]) => (
                <NavigationMenuItem key={key}>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                    onClick={() => handleNavigation(key)}
                  >
                    {value}
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button
            variant="outline"
            className="bg-white/10 text-white border-white hover:bg-white/20 hover:text-white"
            onClick={() => setLanguage(language === "ja" ? "en" : "ja")}
          >
            {language === "ja" ? "English" : "日本語"}
          </Button>
        </div>
      </div>
    </header>
  );
};