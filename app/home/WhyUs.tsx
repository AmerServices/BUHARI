import WhyUsCard from './WhyUsCard';
import { Features } from '../data/home';
import { whyUsSectionContent } from '../data/home';
import CTAButton from '../components/CTAButton';
import AnimateInView from '../components/Animate';

const WhyUs = () => {
  const selectedFeatures = Features.slice(0, 4);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-10 2xl:py-20 gap-10 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48 overflow-x-hidden">

      {/* LEFT TEXT SECTION */}
      <AnimateInView direction="left" className="lg:w-[40%] xl:w-[50%] flex flex-col gap-4">
        <div className='space-y-2'>
          <p className="text-sm">{whyUsSectionContent.intro}</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xlg:text-5xl font-bold ">
            {whyUsSectionContent.headingParts.map((part, index) => (
              <span key={index} className={part.className || ''}>
                {part.text}
              </span>
            ))}
          </h1>
          <p className="text-lg lg:text-xl xlg:text-2xl font-semibold">
            {whyUsSectionContent.subheading}
          </p>
          <CTAButton
            label={whyUsSectionContent.button.label}
            href="/about"
            icon={whyUsSectionContent.icon}
            type="primary"
          />
        </div>
      </AnimateInView>

      {/* RIGHT CARD SECTION */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex flex-col gap-4 justify-center ">
          <AnimateInView direction="up" delay={0.1}>
            <WhyUsCard feature={selectedFeatures[0]} />
          </AnimateInView>
          <AnimateInView direction="up" delay={0.2}>
            <WhyUsCard feature={selectedFeatures[1]} />
          </AnimateInView>
        </div>
        <div className="flex flex-col items-center gap-4 justify-center ">
          <AnimateInView direction="up" delay={0.3}>
            <WhyUsCard feature={selectedFeatures[2]} />
          </AnimateInView>
          <AnimateInView direction="up" delay={0.4}>
            <WhyUsCard feature={selectedFeatures[3]} />
          </AnimateInView>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
