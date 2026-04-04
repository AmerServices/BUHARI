'use client';
import Link from 'next/link';
import ClientImage from '@/app/components/ClientImage';
import { aboutUsContentMain } from '../../data/home';
import AnimateInView from '@/app/components/Animate';
import ComplianceSection from './ComplianceSection';

const AboutUs = () => {
  const { header, missionVision, experience, servicesOverview, expertise, values, gallery, tagline } =
    aboutUsContentMain;

  return (
    <section className="bg-white text-black overflow-hidden" aria-labelledby="about-us-heading">
      <div className="w-full mx-auto">
        {/* ── Header + Gallery ─────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-10 xlg:py-20 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48">
          <AnimateInView direction="left" className="lg:pr-8 lg:w-[50%]">
            <h2
              id="about-us-heading"
              className="text-3xl md:text-4xl xl:text-6xl font-bold text-gn"
            >
              {header.title}
            </h2>
            <div className="bg-rd h-1 w-40 my-2 xlg:my-4" aria-hidden="true"></div>
            <p className="mt-4 text-gray-800 leading-relaxed">{header.subtitle}</p>
            <h3 className="text-3xl md:text-4xl xl:text-6xl font-bold text-rd mt-4 lg:mt-10">
              {missionVision.title}
            </h3>
            <div className="bg-gn h-1 w-40 my-2 xlg:my-4" aria-hidden="true"></div>
            <p className="leading-relaxed mt-4 text-gray-800">{missionVision.text}</p>
          </AnimateInView>

          <AnimateInView
            direction="right"
            className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 auto-rows-fr h-[600px] md:h-[180px] lg:h-[450px] w-full lg:w-[50%]"
            aria-label="About us gallery"
          >
            {gallery.images.slice(0, 3).map((img, i) => (
              <div
                key={i}
                className={`relative rounded-lg overflow-hidden shadow-xl w-full h-full transform hover:scale-105 transition-transform duration-300 ${
                  i === 2 ? 'md:col-span-1 lg:col-span-2 self-center' : 'col-span-1 row-span-1'
                }`}
              >
                <ClientImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            ))}
          </AnimateInView>
        </div>

        {/* ── Experience & Founding Year Stats ────────────────────────────── */}
        <div className="bg-gn py-10 xlg:py-16 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48">
          <AnimateInView direction="up">
            <p className="text-white/80 text-sm md:text-base text-center mb-8 italic">
              {experience.tagline}
            </p>
          </AnimateInView>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {experience.stats.map((stat, index) => (
              <AnimateInView key={index} direction="up" delay={index * 0.1}>
                <div className="h-full flex flex-col items-center justify-center bg-white/10 border border-white/20 rounded-xl py-8 px-4 text-center">
                  <span className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                    {stat.value}
                  </span>
                  <span className="text-white/80 text-sm md:text-base font-medium tracking-wide">
                    {stat.label}
                  </span>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>

        {/* ── Services Overview ────────────────────────────────────────────── */}
        <div
          className="py-10 xlg:py-20 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48"
          aria-labelledby="services-overview-heading"
        >
          <AnimateInView direction="up">
            <div className="md:text-center mb-12">
              <h3
                id="services-overview-heading"
                className="text-3xl md:text-4xl xl:text-5xl font-bold text-gn mb-4"
              >
                {servicesOverview.title}
              </h3>
              <div className="bg-rd h-1 w-40 my-2 xlg:my-4 mx-auto" aria-hidden="true"></div>
              <p className="text-gray-700 text-base md:text-lg mt-4 md:w-[70%] mx-auto leading-relaxed">
                {servicesOverview.subtitle}
              </p>
            </div>
          </AnimateInView>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {servicesOverview.categories.map((cat, index) => (
              <AnimateInView key={index} direction="up" delay={index * 0.1}>
                <div className="flex flex-col h-full bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl" aria-hidden="true">{cat.icon}</span>
                    <h4 className="text-lg font-bold text-gn uppercase">{cat.heading}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{cat.description}</p>

                  {/* View all link */}
                  <Link
                    href={cat.slug}
                    className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-rd hover:underline"
                    aria-label={`View all ${cat.heading}`}
                  >
                    View all
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>

        <ComplianceSection />


        {/* ── Expertise ────────────────────────────────────────────────────── */}
        <div
          className="bg-gray-50 py-10 xlg:py-20 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48"
          aria-labelledby="expertise-heading"
        >
          <AnimateInView direction="up">
            <div className="md:text-center mb-12">
              <h3
                id="expertise-heading"
                className="text-3xl md:text-4xl xl:text-5xl font-bold text-rd mb-4"
              >
                {expertise.title}
              </h3>
              <div className="bg-gn h-1 w-40 my-2 xlg:my-4 mx-auto" aria-hidden="true"></div>
              <p className="text-gray-700 text-base md:text-lg mt-4 md:w-[65%] mx-auto leading-relaxed">
                {expertise.subtitle}
              </p>
            </div>
          </AnimateInView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.areas.map((area, index) => (
              <AnimateInView key={index} direction="up" delay={index * 0.1}>
                <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border-l-4 border-gn">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-gn flex-shrink-0" aria-hidden="true"></span>
                    <h4 className="text-base font-bold text-black">{area.heading}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{area.detail}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>

        {/* ── Why Choose Us (Values) ───────────────────────────────────────── */}
        <div
          className="bg-gray-100 py-10 xlg:py-20 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48"
          aria-labelledby="why-choose-us-heading"
        >
          <AnimateInView direction="up">
            <div className="md:text-center mb-12">
              <h3
                id="why-choose-us-heading"
                className="text-xl md:text-2xl font-bold text-black mb-4"
              >
                {values.title}
              </h3>
              <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4">
                <span className="text-gn">{values.promiseHighlight.split(',')[0]}</span>,{' '}
                <span className="text-red-600">{values.promiseHighlight.split(',')[1]}</span>, and{' '}
                <span className="text-gn">{values.promiseHighlight.split(',')[2]}</span>
              </p>
              <p className="text-base md:text-xl text-gray-700">{values.tagline}</p>
            </div>
          </AnimateInView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8">
            {values.items.map((item, index) => (
              <AnimateInView key={index} direction="up" delay={index * 0.1}>
                <div className="flex flex-col p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 group h-full">
                  <div className="relative mb-4 flex lg:flex-col items-center gap-4 justify-around">
                    {item.img && (
                      <ClientImage
                        src={item.img}
                        alt={item.heading}
                        width={64}
                        height={64}
                        loading="lazy"
                      />
                    )}
                    <h4 className="text-xl font-semibold text-black mb-2">{item.heading}</h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </div>
              </AnimateInView>
            ))}
          </div>

          <AnimateInView direction="up" delay={0.3}>
            <div className="md:text-center mt-6 xlg:mt-10 md:w-[60%] md:mx-auto">
              <p className="text-xs sm:text-base md:text-xl italic font-medium text-gray-800">
                {tagline}
              </p>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;