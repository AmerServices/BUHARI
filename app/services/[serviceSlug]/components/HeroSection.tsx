// components/ServiceHeroSection.tsx
import React from 'react';
import { Service } from '../../../interface/service';
import { FaRegEdit, FaWhatsapp } from 'react-icons/fa';
import CTAButton from '@/app/components/CTAButton';
import ClientImage from '@/app/components/ClientImage';

interface ServiceHeroProps {
  service: Service;
}

const ServiceHeroSection: React.FC<ServiceHeroProps> = ({ service }) => {
  return (
    <section className= "flex flex-col md:flex-row justify-center py-10 xlg:py-20 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48 text-black">
      <div className="flex flex-col gap-5">
        <div className='flex flex-col md:flex-row items-center justify-start gap-5'>
          <div className='relative w-20 h-[100px] md:w-40 md:h-[200px]'>
            <ClientImage
              src={service.image}
              alt={service.title}
              fill
              className="object-contain "
            />
          </div>
          <h1 className="text-2xl lg:text-4xl xl:text-5xl xlg:text-6xl font-bold">
            {service.title}
          </h1>
        </div>
        <p className="text-sm md:text-lg font-medium">
          {service.heroExcerpt}
        </p>
        <p className="text-sm md:text-lg">
          {service.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href='/apply-online' label='Apply Online' icon={FaRegEdit}/>
            <CTAButton href='https://wa.me/+971501113815' label='Contact Us' icon={FaWhatsapp}/>
          </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;