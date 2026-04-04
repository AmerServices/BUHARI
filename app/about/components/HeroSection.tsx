import ClientImage from '@/app/components/ClientImage';
import { heroContent } from '../../data/home';

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] bg-black text-white overflow-hidden" aria-label="About Hero Section">
      <ClientImage
        src={heroContent.image}
        alt="Dubai Skyline - Hero Background"
        fill
        className="object-cover object-center opacity-30"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6 max-w-7xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl xlg:text-7xl font-bold leading-snug">{heroContent.title}</h1>
          <p className="mt-4 text-lg sm:text-2xl">{heroContent.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
