import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { MainServiceCard } from '../interface/service';
import ClientImage from './ClientImage';

const OurServicesCard = ({ service }: { service: MainServiceCard }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="bg-white group m-auto relative overflow-hidden flex flex-col justify-between gap-4 p-4 w-full md:h-[290px] border-2 rounded-2xl border-white transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gn opacity-0 group-hover:opacity-100 transition-all duration-500 origin-bottom-left scale-0 group-hover:scale-100 z-0 rounded-xl" style={{ transformOrigin: 'bottom left' }}></div>

      {/* Content */}
      <div className="relative z-10 flex md:flex-col gap-4">
        <ClientImage
          src={service.icon}
          height={80}
          width={80}
          alt={service.title}
          loading="lazy"
        />

        <h6 className="text-2xl font-extrabold text-gray-800 group-hover:text-white transition-colors duration-300 no-scrollbar">
          {service.title.split(' ').slice(0, 2).join(' ')}
        </h6>
      </div>

      <div className="relative z-10 flex flex-col justify-end md:h-[140px]">
        <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300 line-clamp-3">
          {service.summary}
        </p>
        <p className="flex items-center gap-1 text-gn group-hover:text-white text-xs w-fit mt-2 transition-colors duration-300">
          {service.linkText} <FaChevronRight />
        </p>
      </div>
    </Link>
  );
};

export default OurServicesCard;
