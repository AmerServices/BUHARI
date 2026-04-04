import React from 'react';
import { Service } from '@/app/interface/service';
import ClientImage from '@/app/components/ClientImage';

interface SubServiceHeroProps {
  subService: Service;
}

const SubServiceHeroSection: React.FC<SubServiceHeroProps> = ({ subService }) => {
  return (
    <section className="text-black py-10 xlg:py-20">
      <div className="flex flex-col sm:items-center justify-between relative z-10 sm:text-center">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl xlg:text-6xl font-bold text-gn">
          {subService.title}
        </h1>
      </div>
      <div className="relative h-96 w-full aspect-video lg:aspect-auto rounded-3xl my-6 lg:my-10 ">
        <ClientImage
          src={subService.image} // Using the specific image for the sub-service
          alt={subService.title}
          fill
          className="z-0 object-cover rounded-3xl"
        />
      </div>
    </section>
  );
};

export default SubServiceHeroSection;
