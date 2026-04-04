import React from 'react';
import Link from 'next/link';
import { Service } from '../../../interface/service';
import { FaChevronRight } from 'react-icons/fa';
import AnimateInView from '@/app/components/Animate';
import ClientImage from '@/app/components/ClientImage';

interface AllSubServicesProps {
  subServices: Service[];
  serviceSlug: string;
}

const AllSubServicesSection: React.FC<AllSubServicesProps> = ({ subServices }) => {
  return (
    <section className="bg-white">
      <div className="px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold md:text-center text-gn md:mb-8 relative pb-2">
          Our <span className="text-rd">Sub-Services</span>
          <span className="block w-24 h-1 bg-primaryRed mx-auto mt-2"></span>
        </h2>

        {/* FLEX version */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {subServices.map((subService, index) => (
            <AnimateInView key={index} direction="up" duration={0.6} delay={0} className="w-full">
              <Link
                href={`/services/${subService.slug}`}
                className="block h-full shadow-sm"
                aria-label={`Learn more about ${subService.title}`}
              >
                <div className="bg-white rounded-xl shadow-md border-l-4 border-gn hover:shadow-xl transition-all duration-300 p-4 h-full">
                  <div className="mb-4 h-40 w-full relative rounded-lg overflow-hidden">
                    <ClientImage
                      src={subService.image}
                      alt={subService.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg xl:text-xl xlg:text-2xl font-bold text-gray-800 mb-2">{subService.title}</h3>
                  <p className="text-gray-600 text-xs xl:text-sm line-clamp-3">{subService.description}</p>
                  <div className="mt-4 text-gn text-xs xl:text-sm font-semibold flex items-center">
                    Learn More <FaChevronRight className="ml-1" />
                  </div>
                </div>
              </Link>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllSubServicesSection;
