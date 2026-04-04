'use client';
import React, { useState } from 'react';
import { FAQ } from '../../../interface/service';
import AnimateInView from '@/app/components/Animate';

interface ServiceFaqsProps {
  faqs?: FAQ[];
}

const ServiceFaqs: React.FC<ServiceFaqsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48 max-w-5xl mx-auto py-10 xlg:py-20 bg-white">
      <AnimateInView direction="up" className="">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-4 lg:mb-8">
          <span className="text-gn">Frequently</span>{' '}
          <span className="text-rd">Asked Questions</span>
        </h2>

        <ul className="divide-y divide-gray-200">
          {faqs.map((faq, idx) => {
            const isOpen = idx === openIndex;
            return (
              <li key={idx} className="py-4">
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className={`w-full flex justify-between items-center text-left focus:outline-none ${
                    isOpen ? 'text-gn font-semibold border-b-2 border-gn pb-2' : 'text-gray-800'
                  } transition-colors duration-300`}
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 ml-3 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-gn' : 'text-gray-400'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`mt-2 text-gray-600 text-sm max-w-[95%] origin-top transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </li>
            );
          })}
        </ul>
      </AnimateInView>
    </section>
  );
};

export default ServiceFaqs;
