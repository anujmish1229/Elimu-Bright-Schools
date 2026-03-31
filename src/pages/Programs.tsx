import PageHero from "@/components/PageHero";
import { BookOpen, Building, ShoppingBag, Utensils, Palette, Globe, Sun, GraduationCap } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Access to Quality Education",
    desc: "Nursery and primary schooling with trained teachers, a structured curriculum, and a safe learning environment for 36 children — and growing.",
    image: "/pics/classroom.jpg",
  },
  {
    icon: Building,
    title: "School Construction",
    desc: "Building proper classrooms, a cultural room, and facilities to accommodate 100+ learners. No more learning under trees.",
    image: "/pics/construction.jpg",
  },
  {
    icon: ShoppingBag,
    title: "School Essentials",
    desc: "Providing uniforms, bags, shoes, and books — removing the barriers that keep children from attending school.",
    image: null,
  },
  {
    icon: Utensils,
    title: "Feeding Program",
    desc: "Daily meals so children can focus on learning, not hunger. A school farm is planned to make the program self-sustaining.",
    image: "/pics/feeding.jpg",
  },
  {
    icon: Palette,
    title: "After-School & Skills",
    desc: "Coding, arts, and life skills programs to prepare children for the modern world. Coming soon.",
    image: null,
    badge: "Coming Soon",
  },
  {
    icon: Globe,
    title: "Cultural Learning",
    desc: "Identity, heritage, and storytelling are woven into the curriculum — because education should honor who you are.",
    image: "/pics/cultural.jpg",
  },
  {
    icon: Sun,
    title: "Community Empowerment",
    desc: "Solar lamps for study after dark, family economic support, and community development initiatives.",
    image: "/pics/community.jpg",
  },
  {
    icon: GraduationCap,
    title: "Refugee Support",
    desc: "Scholarships, mentorship, and inclusion programs for refugee children — because displacement shouldn't end a child's education.",
    image: null,
  },
];

const Programs = () => (
  <div>
    <PageHero
      image="/pics/classroom.jpg"
      title="Our Programs"
      subtitle="8 interconnected programs to transform education and lives"
    />

    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {programs.map((program, i) => (
            <div
              key={program.title}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                {program.badge && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-secondary/20 text-secondary mb-3">
                    {program.badge}
                  </span>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <program.icon className="text-primary" size={28} />
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{program.title}</h2>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed text-lg">{program.desc}</p>
              </div>
              <div className={`rounded-lg overflow-hidden shadow-lg ${i % 2 === 1 ? "md:order-1" : ""}`}>
                {program.image ? (
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-[300px] object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-[300px] bg-muted flex items-center justify-center">
                    <program.icon className="text-muted-foreground/30" size={64} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Programs;
