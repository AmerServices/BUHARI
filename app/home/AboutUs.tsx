import { aboutUsContent } from '../data/home';
import CTAButton from '../components/CTAButton';
import AnimateInView from '../components/Animate';
import ClientImage from '../components/ClientImage';

const AboutUs = () => {
  const { heading, description, buttonText, image, icon } = aboutUsContent;

  return (
    <section className="bg-white flex items-center overflow-x-hidden py-10 2xl:py-20 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48">
      <div className="grid lg:grid-cols-2 gap-6 2xl:gap-10 items-center w-full">

        {/* IMAGE */}
        <AnimateInView direction="left">
          <div className="lg:mt-0 rounded-2xl overflow-hidden shadow-lg order-1 relative h-[200px] md:h-[400px]">
            <ClientImage
              src={image.src}
              alt={image.alt}
              fill
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </AnimateInView>

        {/* RIGHT CONTENT */}
        <AnimateInView direction="right">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ">
              <span className="text-rd">{heading.title}</span>{' '}
              <span className="text-gn">{heading.highlight}</span>
            </h1>
            <h2 className="text-lg font-semibold text-black">{heading.subtitle}</h2>
            <div className="border-t-4 border-gn w-20 my-2"></div>
            <p className="text-gray-700 mt-2 text-sm lg:text-lg leading-relaxed">{description}</p>
            <CTAButton label={buttonText} href="/about" icon={icon} type="primary" className='mt-4' />
          </div>
        </AnimateInView>
        
      </div>
    </section>
  );
};

export default AboutUs;