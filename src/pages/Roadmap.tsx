import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const milestones = [
  {
    year: "2026–27",
    title: "Foundation",
    items: [
      "Build a 4-unit block: 3 classrooms + 1 cultural room",
      "Establish a school farm for the feeding program",
      "Serve approximately 145 learners",
    ],
    active: true,
  },
  {
    year: "2028",
    title: "Expansion",
    items: [
      "Add 4 more classrooms for upper primary",
      "Complete full primary school offering (P1–P7)",
      "Expand teacher training program",
    ],
  },
  {
    year: "By 2040",
    title: "Regional Impact",
    items: [
      "Build 5 primary schools across the region",
      "Thousands of children in quality education",
      "Self-sustaining community education model",
    ],
  },
  {
    year: "Future",
    title: "Beyond Primary",
    items: [
      "Launch secondary school",
      "Open a vocational training center",
      "Create pathways to higher education and employment",
    ],
  },
];

const Roadmap = () => (
  <div>
    <PageHero
      image="/pics/construction.jpg"
      title="Our Vision"
      subtitle="From 36 learners today to thousands tomorrow"
    />

    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-16">
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-secondary bg-background -translate-x-1/2 mt-1 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 ${
                    m.active ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {m.year}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{m.title}</h3>
                  <ul className={`space-y-2 text-muted-foreground font-body ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    {m.items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">Help Us Get There</h3>
          <p className="text-muted-foreground font-body mb-6">Every contribution brings this vision closer to reality.</p>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Get Involved <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Roadmap;
