import { complianceBadges, complianceCards } from "@/app/data/home";

export default function ComplianceSection() {
  return (
    <section className="bg-slate-50 py-10 xlg:py-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gn mb-4">
          Certificates & Compliance
        </h2>
        <div className="bg-rd h-1 w-40 my-2 xlg:my-4 mx-auto" aria-hidden="true"></div>
        <p className="text-slate-500 max-w-2xl mx-auto mb-10">
          We operate with full transparency, strict regulatory compliance, and trusted government authorization across all services.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {complianceBadges.map((badge, index) => (
            <span
              key={index}
              className={`text-sm px-4 py-1.5 rounded-full bg-gn text-white`}
            >
              {badge.label}
            </span>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {complianceCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-slate-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
