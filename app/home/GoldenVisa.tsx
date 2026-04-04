'use client';

import { goldenVisaData } from "../data/home";
import CTAButton from "../components/CTAButton";
import AnimateInView from "../components/Animate";
import ClientImage from "../components/ClientImage";

const GoldenVisa = () => {
  return (
    <section className="relative bg-white py-5 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 2xl:gap-10">
        
        {/* LEFT TEXT SIDE */}
        <AnimateInView direction="left" className="flex flex-col gap-2 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#ad813c]">
            {goldenVisaData.title}
          </h2>
          <p className="text-sm lg:text-xl text-[#ad813c]">{goldenVisaData.description}</p>
          <ul className="list-disc text-sm lg:text-lg list-inside text-[#ad813c]">
            {goldenVisaData.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <CTAButton label={goldenVisaData.button.learnmore} href="/service/golden-visa-uae" icon={goldenVisaData.icon} type="golden" />
            <CTAButton label={goldenVisaData.button.applynow} href="https://api.whatsapp.com/send?phone=971501113815&text=Hello%2C%20I%20am%20interested%20in%20applying%20for%20the%20Golden%20Visa.%20Please%20share%20the%20details." icon={goldenVisaData.icon} external type="golden" />
          </div>
        </AnimateInView>

        {/* RIGHT IMAGE SIDE */}
        <AnimateInView direction="right" className="relative w-full h-[200px] lg:h-[400px] order-1 md:order-2">
          <ClientImage
            src={goldenVisaData.image}
            alt={goldenVisaData.title}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-bottom"
          />
        </AnimateInView>

      </div>
    </section>
  );
};

export default GoldenVisa;
