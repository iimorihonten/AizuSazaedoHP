import { getImagePath } from "../constants/config";

interface HeroProps {
  language: "ja" | "en";
  content: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
}

export const Hero = ({ language, content }: HeroProps) => {
  return (
    <section className="mb-8">
      <div className="relative aspect-square max-w-[390px] md:max-w-[520px] lg:max-w-[650px] mx-auto overflow-hidden rounded-lg bg-black">
        <div className="absolute inset-0">
          <img
            src={content.image}
            alt={content.title}
            className="w-full h-full object-cover animate-[spin_40s_linear_infinite] opacity-80"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
            <div className="absolute top-10 md:top-20 lg:top-32 right-1/2 transform translate-x-1/2 z-10">
              <img
                src="images/sekai-yuiitsu.png"
                alt=""
                width={512}
                height={512}
                className="w-40 md:w-56 lg:w-72"
                style={{ 
                  objectFit: 'contain',
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                }}
              />
            </div>
            <h2 className={`text-2xl md:text-3xl lg:text-4xl mb-4 font-yumin mt-10 md:mt-16 lg:mt-24`}>
              {content.subtitle}
            </h2>
            <h1 className={`text-6xl md:text-7xl lg:text-8xl mb-5 font-yumin`}>
              {content.title}
            </h1>
            <p className={`text-2xl md:text-3xl lg:text-4xl max-w-3xl font-yumin`}>
              {content.description.split('\n').map((line, index) => (
                index === 1 ? (
                  <span key={index} className="block">
                    {line}
                  </span>
                ) : null
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};