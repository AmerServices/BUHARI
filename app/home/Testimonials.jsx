'use client';
import { useRef, useEffect } from 'react';
import { testimonialsData } from '../data/home';

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ review }) => (
  <div className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col gap-4 mx-3">
    {/* Top row: avatar + name + date */}
    <div className="flex items-center gap-3">
      <div
        className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${review.avatarColor}`}
        aria-hidden="true"
      >
        {review.avatar}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-black text-sm truncate">{review.name}</p>
        <p className="text-gray-400 text-xs">{review.date}</p>
      </div>
      {/* Google G logo */}
      <svg
        className="w-5 h-5 ml-auto flex-shrink-0"
        viewBox="0 0 24 24"
        aria-label="Google review"
        aria-hidden="true"
      >
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
    </div>

    {/* Stars */}
    <StarRating rating={review.rating} />

    {/* Feedback quote */}
    <p className="text-gray-700 text-sm leading-relaxed flex-1">
      &ldquo;{review.feedback}&rdquo;
    </p>

    {/* Service badge */}
    <span className="inline-block self-start text-xs font-medium px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-600">
      {review.service}
    </span>
  </div>
);

const MarqueeTrack = ({ reviews, direction = 'left', speed = 40 }) => {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      posRef.current += direction === 'left' ? -0.4 : 0.4;
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(posRef.current) >= halfWidth) posRef.current = 0;
      track.style.transform = `translateX(${posRef.current}px)`;
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);

    const pause = () => cancelAnimationFrame(animRef.current);
    const resume = () => { animRef.current = requestAnimationFrame(step); };
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animRef.current);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
    };
  }, [direction]);

  const doubled = [...reviews, ...reviews];

  return (
    <div className="overflow-hidden w-full py-1" aria-hidden="true">
      <div ref={trackRef} className="flex will-change-transform">
        {doubled.map((review, i) => (
          <TestimonialCard key={`${review.id}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const firstRow = [...testimonialsData, ...testimonialsData]

  return (
    <section
      className="bg-gray-50 py-10 xlg:py-20 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Header */}
      <div className="gap-10 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48 mb-10 md:text-center">
        <p className="text-sm font-semibold text-rd uppercase tracking-widest mb-2">
          Client Reviews
        </p>
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl xlg:text-6xl font-bold text-gn mb-4"
        >
          Trusted by Clients Across the UAE
        </h2>
        <div className="bg-rd h-1 w-40 my-2 xlg:my-4 mx-auto" aria-hidden="true"></div>
        <p className="text-gray-600 text-base md:text-lg mt-4 md:w-[60%] mx-auto leading-relaxed">
          Real experiences from real people - families, professionals, and businesses who trusted
          us to handle their most important government transactions.
        </p>

        {/* Aggregate rating pill */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-black font-bold text-lg">5.0</span>
          <span className="text-gray-500 text-sm">· Google Reviews</span>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-5 py-2">
        <MarqueeTrack reviews={firstRow} direction="left" />
      </div>
    </section>
  );
};

export default Testimonials
