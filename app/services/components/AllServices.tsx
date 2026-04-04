import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import {MainServiceCard} from '@/app/interface/service';
import AnimateInView from '@/app/components/Animate';
import ClientImage from '@/app/components/ClientImage';

const AllServices = ({ cards }: { cards: MainServiceCard[] }) => {
  return (
    <section className="py-10 xlg:py-20 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48 bg-white">
        <h2 className="text-4xl font-bold text-center relative pb-6">
          Our Services <span className="block w-24 h-1 bg-gn mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-5">
          {cards.map((card: MainServiceCard) => (
            <AnimateInView key={card.id} direction="up" duration={0.6} delay={0}>
              <Link
                href={`/services/${card.slug ?? card.id}`} // assuming slug or id is available
                className="block h-full"
                aria-label={`Know more about ${card.title} service`}
              >
                <div
                  className="bg-cardBackground relative border border-primaryGreen rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col "
                >
                  <div className="flex flex-col justify-between gap-2 p-4 flex-grow h-full">
                    <div className='flex flex-col'>
                      {card.icon && (
                        <ClientImage
                          src={card.icon}
                          alt={`${card.title} Icon`}
                          width={120}
                          height={120}
                          className="mb-4"
                        />
                      )}
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-darkGray">
                        {card.title.split(' ').slice(0, 3).join(' ')}
                      </h3>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <p className="text-xs line-clamp-4">{card.summary}</p>
                      <div className="inline-block pb-1 text-gre transition-colors duration-300">
                        <p className="flex items-center text-xs gap-1 pl-1">
                          Know More <FaChevronRight />
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-gre transition-all duration-500 group-hover:w-full"></span>
                </div>
              </Link>
            </AnimateInView>
          ))}
        </div>
    </section>
  );
};

export default AllServices;
