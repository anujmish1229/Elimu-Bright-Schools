import PageHero from "@/components/PageHero";
import { Link } from "react-router";
import { ArrowRight, School, BookOpen, Globe, GraduationCap, Wrench } from "lucide-react";

const milestones = [
  {
    year: "2026–2027",
    title: "Building the Foundation",
    icon: School,
    active: true,
    items: [
      "Construct a permanent 4-classroom block (3 classrooms + 1 cultural studies & crafts room)",
      "Accommodate approximately 150 learners",
      "Develop a fully established school farm to support the feeding program sustainably",
      "Give learners practical agricultural skills and deeper community connections",
    ],
    detail: "Our immediate focus is to create a safe and structured learning environment for the children we currently serve and those still waiting for access.",
  },
  {
    year: "By 2028",
    title: "Strengthening Primary Education",
    icon: BookOpen,
    items: [
      "Construct an additional 4-classroom block for upper primary learners",
      "Ensure continuity in education — no disruption for children who begin with us",
      "Evolve into a fully established primary school offering a complete learning pathway",
    ],
    detail: "As enrolment grows and demand increases, our next step is to expand into upper primary education, ensuring children can progress without interruption.",
  },
  {
    year: "By 2040",
    title: "Expanding Impact Across Communities",
    icon: Globe,
    items: [
      "Establish 5 fully operational primary schools across underserved communities in the region",
      "Each school built on principles of access, quality, cultural relevance, and community ownership",
      "Bring quality education closer to thousands of children who would otherwise remain excluded",
    ],
    detail: "Our long-term vision extends beyond a single school. The need for education in these communities is not isolated — it is widespread.",
  },
  {
    year: "Future",
    title: "Creating Continuity Through Secondary Education",
    icon: GraduationCap,
    items: [
      "Establish a central multi-stream secondary school serving graduates from the 5 primary schools",
      "Multi-stream classrooms (e.g. S1 A, S1 B, S1 C) to prevent overcrowding",
      "Leadership development, life skills training, and deeper cultural learning",
      "Academic preparation for higher education and independent learning skills",
    ],
    detail: "Access to primary education is only the beginning. This secondary school ensures that no child's journey ends at primary level due to lack of access or opportunity.",
  },
  {
    year: "Future",
    title: "Empowering Futures Through Skills Development",
    icon: Wrench,
    items: [
      "Establish a vocational skills training center for graduates and the wider community",
      "Training in carpentry & construction, tailoring, agriculture & agribusiness, basic technology",
      "Entrepreneurship, financial literacy, and work readiness programs",
      "Support learners into employment, self-employment, or further technical training",
    ],
    detail: "Not every learner will follow a traditional academic path. That is expected and valued. This center ensures no young person is left without a pathway.",
  },
];

const Roadmap = () => (
  <div>
    <PageHero
      image="/pics/children-school-exterior.jpg"
      title="Our Vision Roadmap"
      subtitle="From 36 learners today to thousands tomorrow"
      imagePosition="object-top"
    />

    {/* Intro */}
    <section className="py-16 md:py-24 bg-[hsl(38_32%_93%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-12 md:gap-16 items-start">
        <p className="md:col-span-5 font-display text-3xl md:text-4xl font-bold leading-tight text-foreground">
          This vision is not just about buildings.
        </p>
        <p className="md:col-span-7 md:pt-2 font-body text-lg md:text-xl leading-relaxed text-muted-foreground max-w-prose">
          It is about expanding access where none exists, creating continuity where it is missing, and building opportunity where it is needed most. Step by step, we are working toward a future where no child is left behind, and every young person has the opportunity to learn, grow, and thrive.
        </p>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-16">
            {milestones.map((m, i) => (
              <div key={`${m.year}-${m.title}`} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-secondary bg-background -translate-x-1/2 mt-1 z-10" />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 ${
                    m.active ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {m.year}
                  </span>
                  <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <m.icon className="text-primary shrink-0" size={20} />
                    <h3 className="font-display text-2xl font-bold text-foreground">{m.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-body italic mb-3 leading-relaxed">{m.detail}</p>
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

      </div>
    </section>

    {/* Bigger Picture */}
    <section className="tone-forest py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-12 items-end">
        <div className="md:col-span-7">
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-6">The Bigger Picture</h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-prose">
            This journey cannot be achieved alone. Every classroom built, every child supported, and every opportunity created is made possible through partnership. We invite you to stand with us — to invest in education, to believe in potential, and to be part of a movement that is enlightening young minds and transforming communities.
          </p>
        </div>
        <div className="md:col-span-5">
          <p className="font-display italic text-2xl md:text-3xl text-primary leading-snug mb-8">
            Together, we can change the story for thousands of children.
          </p>
          <Link to="/donate" className="btn btn-gold btn-lg">
            Join Us <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Roadmap;
