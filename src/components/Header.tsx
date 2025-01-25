import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
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
    <header className="bg-[#808000] text-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="md:hidden absolute top-2 right-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 text-white border-white hover:bg-white/20 hover:text-white"
            onClick={() => setLanguage(language === "ja" ? "en" : "ja")}
          >
            {language === "ja" ? "English" : "日本語"}
          </Button>
        </div>
        <div className="flex flex-col md:flex-row justify-between h-64 md:h-20">
          <div className="flex flex-col items-center md:items-start justify-center pt-12 md:pt-0">
            <div className="text-sm md:text-base mb-1">{content.subtitle}</div>
            <h1 
              className={`text-xl md:text-3xl ${language === "ja" ? "font-yumin" : "font-playfair"} cursor-pointer`}
              onClick={() => navigate("/")}
            >
              {content.title}
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
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
              className="bg-white/10 text-white border-white hover:bg-white/20 hover:text-white hidden md:inline-flex"
              onClick={() => setLanguage(language === "ja" ? "en" : "ja")}
            >
              {language === "ja" ? "English" : "日本語"}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};