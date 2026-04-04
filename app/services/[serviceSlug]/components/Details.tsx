import React from 'react';
import { FaRegEdit, FaWhatsapp } from 'react-icons/fa';
import AnimateInView from '@/app/components/Animate';
import CTAButton from '@/app/components/CTAButton';
import { ContentHeading, ContentHeadingWithList, ContentParagraph, Service } from '@/app/interface/service';

interface DetailsProps {
  subService: Service;
}

const Details: React.FC<DetailsProps> = ({ subService }) => {
  const renderContent = () => {
    return subService.content.map((block, index) => {
      if ('paragraph' in block && !('heading' in block)) {
        const paragraphBlock = block as ContentParagraph;
        return (
          <AnimateInView
            key={index}
            direction="up"
            duration={0.6}
            className="mb-4 text-justify"
          >
            <p dangerouslySetInnerHTML={{ __html: paragraphBlock.paragraph }} />
          </AnimateInView>
        );
      } else if ('heading' in block && 'list' in block) {
        const listBlock = block as ContentHeadingWithList;
        return (
          <AnimateInView
            key={index}
            direction="up"
            duration={0.7}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-darkGray mt-8 mb-4">{listBlock.heading}</h3>
            {listBlock.paragraph && <p className="mb-4 text-justify" dangerouslySetInnerHTML={{ __html: listBlock.paragraph }} />}
            {listBlock.list && (
              <ul className="list-disc list-inside ml-4 mt-2 text-mediumGray">
                {listBlock.list.map((item, liIndex) => (
                  <li 
                    key={liIndex} 
                    className="mb-2 text-justify"
                    dangerouslySetInnerHTML={{ 
                      __html: `<strong>${item.text}</strong> ${item.description}` 
                    }} 
                  />
                ))}
              </ul>
            )}
          </AnimateInView>
        );
      } else if ('heading' in block) {
        const headingBlock = block as ContentHeading;
        return (
          <AnimateInView
            key={index}
            direction="up"
            duration={0.7}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-darkGray mt-8 mb-4">{headingBlock.heading}</h3>
            {headingBlock.paragraph && <p className="mb-4 text-justify" dangerouslySetInnerHTML={{ __html: headingBlock.paragraph }} />}
          </AnimateInView>
        );
      }
      return null;
    });
  };

  return (
    <div className="bg-white py-10 xlg:py-20 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48">
      {renderContent()}
      <AnimateInView direction="up" duration={0.7} className="flex gap-4 ">
        <CTAButton href='/apply-online' label='Apply Online' icon={FaRegEdit} className='w-full max-w-[200px]'/>
        <CTAButton href='https://wa.me/+971501113815' label='Contact Us' icon={FaWhatsapp} className='w-full max-w-[200px]'/>
      </AnimateInView>
    </div>
  );
};

export default Details;
