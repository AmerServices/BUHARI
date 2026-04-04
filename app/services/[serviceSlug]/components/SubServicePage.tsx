import { notFound } from 'next/navigation';
import { blogs } from '@/app/data/blogs';
import SubServiceHeroSection from '../components/SubServiceHeroSection';
import SubServiceSidebar from '../components/Sidebar';
import ServiceTypes from '../components/ServiceTypes';
import { getServiceBySlug } from '@/app/data/services';
import ServiceFaqs from '../components/ServiceFaqs';
import RelatedBlogs from '../../../components/RelatedBlogs';
import SubServiceDetails from '../components/SubServiceDetials';
import { Service } from '@/app/interface/service';


interface SubServicePageProps {
  subService: Service;
}

export default async function SubServicePage({ subService }: SubServicePageProps) {

  const parentService = getServiceBySlug(subService.parentslug || '');

  if (!parentService || !subService) {
    notFound();
  }

  const relatedBlogs = blogs.filter((b) => b.category === subService.category);
  const fallbackBlogs = blogs.filter((b) => b.slug !== subService.slug).slice(0, 3);
  const finalRelatedBlogs = relatedBlogs.length > 0 ? relatedBlogs : fallbackBlogs;

  return (
      <div className="flex flex-col py-10 xlg:py-20 px-4 sm:px-6 md:px-10 xl:px-28 xlg:px-48">
        <section>
          <SubServiceHeroSection subService={subService} />
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 lg:gap-6 gap-8 w-full">
          <div className="lg:col-span-1">
            <ServiceTypes service={subService.title} serviceType={subService.serviceTypes ?? []} />
          </div>
          <div className="lg:col-span-2 xl:col-span-3">
            <SubServiceDetails subService={subService} />
          </div>
          <div className="lg:col-span-1">
            <SubServiceSidebar
              currentSubServiceSlug={subService.slug}
              parentServiceSlug={parentService.slug}
              subServices={parentService.subServices || []}
            />
          </div>
        </section>
        {subService.faqs && (
          <section>
            <ServiceFaqs faqs={subService.faqs} />
          </section>
        )}
        <section>
          <RelatedBlogs blogs={finalRelatedBlogs} />
        </section>
      </div>
  );
}