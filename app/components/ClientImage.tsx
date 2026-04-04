"use client";

import { CldImage, CldImageProps } from 'next-cloudinary';

export default function ClientImage(props: CldImageProps) {
  return <CldImage {...props} />;
}