import { getImagePath } from "../constants/config";

interface HeroProps {
  language: "ja" | "en";
  content: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export const Hero = ({ language, content }: HeroProps) => {
  return (
    <section className="mb-12">
      <div className="relative aspect-[4/3] md:aspect-square rounded-lg overflow-hidden bg-black max-w-3xl mx-auto">
        <img
          src="https://iimorihonten.github.io/AizuSazaedoHP/lovable-uploads/a338b15d-845e-46e5-b409-6a7e79b38d2a.png"
          alt={content.title}
          className="w-full h-full object-cover animate-[spin_40s_linear_infinite]"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
          <div className="absolute top-48 md:top-52 lg:top-56 right-1/2 transform translate-x-1/2 z-10">
            <img
              src="images/sekai-yuiitsu.png"
              alt=""
              width={512}
              height={512}
              className="w-56 md:w-64 lg:w-72"
              style={{ 
                objectFit: 'contain',
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
              }}
            />
          </div>
          <h2 className={`text-2xl md:text-3xl lg:text-4xl mb-6 font-yumin mt-32 md:mt-36 lg:mt-40`}>
            {content.subtitle}
          </h2>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl mb-4 font-yumin`}>
            {content.title}
          </h1>
          <p className={`text-xl md:text-2xl lg:text-3xl max-w-3xl font-yumin`}>
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
    </section>
  );
};