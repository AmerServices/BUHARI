import ClientImage from "@/app/components/ClientImage";

interface HeroSectionProps {
  title: string;
  description: string;
  tagline: string;
  imageUrl: string;
  imageAlt: string;
}

const HeroSection = ({ hero }: { hero: HeroSectionProps }) => {
  return (
    <section className="relative min-h-[500px] bg-black text-white overflow-hidden">
      <ClientImage
        src={hero.imageUrl}
        alt=""
        aria-hidden="true"
        fill
        className="object-cover object-center opacity-30"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center text-center max-w-7xl mx-auto px-6">
        <div className="animate-fadeInUp"> {/* <-- Animation class added here */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl xlg:text-7xl font-bold">
            {hero.title}
          </h1>
          <p className="mt-4 text-xs md:text-base lg">{hero.tagline}</p>
          <p className="mt-4 text-sm md:text-xl lg:w-[80%] mx-auto">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
