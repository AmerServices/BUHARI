// app/components/OurServices.tsx
import OurServicesCard from '@/app/components/OurServicesCard';
import { ourServicesContent, mainServiceCards } from '@/app/data/home';
import CTAButton from '@/app/components/CTAButton';
import AnimateInView from '@/app/components/Animate';

export default function OurServices() {
  const { heading, subheading, buttons, icon } = ourServicesContent;
  const selectedService = mainServiceCards.slice(0, 5);

  return (
    <section className="w-full bg-white py-10 xlg:py-20 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48" aria-labelledby="our-services-heading">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <AnimateInView direction="up">
          <div className="flex flex-col lg:items-center gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ">{heading}</h1>
            <div className="w-24 h-1 bg-gn" aria-hidden="true"></div>
            <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto">{subheading}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton label={buttons.viewAll} href="/services" icon={icon} type="primary" />
              <CTAButton label={buttons.applyOnline} href="/apply-online" icon={icon} type="primary" />
            </div>
          </div>
        </AnimateInView>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center " role="list">
          {selectedService.map((service, index) => (
            <AnimateInView key={service.id} direction="up" delay={index * 0.1}>
              <div role="listitem" className="w-full">
                <OurServicesCard service={service} />
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
