import ClientImage from "@/app/components/ClientImage";
import { heroContent } from "../../data/other";

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] bg-black text-white overflow-hidden">
      <ClientImage
        src={heroContent.image}
        alt="Dubai Skyline"
        fill
        className="opacity-30 object-cover object-center"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center text-center max-w-7xl mx-auto px-6">
        <div className="animate-fadeInUp"> {/* Animation applied here */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl xlg:text-7xl font-bold">
            {heroContent.title}
          </h1>
          <p className="mt-4 text-lg sm:text-2xl">
            {heroContent.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
