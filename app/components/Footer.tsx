'use client'

import React from 'react'
import Image from 'next/image'
import { FaChevronRight, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import Link from 'next/link'
import { footerContent } from '../data/other'
import CTAButton from './CTAButton'
import { AiFillMobile } from 'react-icons/ai'

const Footer = () => {
  const { company, contact, navigation, buttons, copyright } =
    footerContent

  return (
    <footer className="bg-gre text-white pt-10 pb-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left: Company Info & Contact */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6">
            <Image
              src={company.logoSrc}
              alt={`logo`}
              width={350}
              height={300}
              loading="lazy"
            />
          </div>

          <div className="mt-2 space-y-2 text-sm">
            {/* Address */}
            <p className="flex items-start gap-2">
              <MdLocationOn className="mt-1" />
              <Link
                href={contact.address.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label="Company Location"
              >
                {contact.address.lines.map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Link>
            </p>

            {/* Email */}
            <p className="flex items-center gap-2">
              <MdEmail />
              <Link
                href={contact.email.link}
                className="hover:underline"
                aria-label={`Email: ${contact.email.label}`}
              >
                {contact.email.label}
              </Link>
            </p>

            {/* Phone */}
            <p className="flex items-center gap-2">
              <FiPhone />
              <Link
                href={contact.phone.link}
                className="hover:underline"
                aria-label={`Call: ${contact.phone.label}`}
              >
                {contact.phone.label}
              </Link>
            </p>

            {/* Mobile */}
            <p className="flex items-center gap-2">
              <AiFillMobile />
              <Link
                href={contact.mobile.link}
                className="hover:underline"
                aria-label={`Call: ${contact.mobile.label}`}
              >
                {contact.mobile.label}
              </Link>
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <Link
              href={"https://www.facebook.com/share/1PJ3FVZRoE/"}
              className="hover:underline text-xl"
              aria-label={`Visit Facebook`}
            >
              <FaFacebook/>
            </Link>
            <Link
              href={"https://www.instagram.com/albuharidigital"}
              className="hover:underline text-xl"
              aria-label={`Visit Instagram`}
            >
              <FaInstagram/>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] bg-gray-300" />

        {/* Right: Navigation */}
        <nav
          className="flex flex-col justify-between md:p-10"
          aria-label="Footer Navigation"
        >
          <div className="flex flex-col sm:flex-row gap-10 text-sm">
            {/* Main Nav */}
            <div>
              <h4 className="font-semibold mb-2 text-lg">
                {navigation.headings.main}
              </h4>
              <ul className="space-y-1 text-gray-300">
                {navigation.main.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Services */}
            <div>
              <h4 className="font-semibold mb-2 text-lg">
                {navigation.headings.popular}
              </h4>
              <ul className="space-y-1 text-gray-300">
                {navigation.popular.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Services */}
            <div>
              <h4 className="font-semibold mb-2 text-lg">
                {navigation.headings.others}
              </h4>
              <ul className="space-y-1 text-gray-300">
                {navigation.others.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row mt-10 items-center justify-center gap-6">
            <CTAButton href='/apply-online' label={buttons.applyOnline} icon={FaChevronRight} type='secondary'/>
            <CTAButton href='https://wa.me/+971501113815' label={buttons.messageUs} icon={FaWhatsapp} type='secondary'/>
          </div>
        </nav>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-xs flex items-center justify-between flex-col lg:flex-row gap-4">
        <p className='order-2 lg:order-1'>{copyright}</p>
        <div className='flex justify-center items-center gap-4 order-1 lg:order-2'>
          <Link href='/terms-and-conditions'>Terms and Conditions</Link>|
          <Link href={'/privacy-policy'}>Privacy Policy</Link>|
          <Link href={'/refund-policy'}>Refund Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
