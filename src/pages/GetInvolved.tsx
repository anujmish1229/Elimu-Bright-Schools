import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Heart, Building, Utensils, ShoppingBag, Users, Briefcase, GraduationCap } from "lucide-react";

const ways = [
  {
    icon: Heart,
    title: "Sponsor a Child",
    desc: "Cover a child's tuition, meals, and essentials. Give one child the gift of education and stability.",
  },
  {
    icon: Building,
    title: "Build a Classroom",
    desc: "Fund the construction of a proper classroom. No more learning under trees or in the rain.",
  },
  {
    icon: Utensils,
    title: "Support the Feeding Program",
    desc: "Ensure children receive daily meals so they can focus on their studies, not their stomachs.",
  },
  {
    icon: ShoppingBag,
    title: "Provide School Essentials",
    desc: "Donate uniforms, bags, shoes, and books — the basics that make attendance possible.",
  },
  {
    icon: Users,
    title: "Empower a Community",
    desc: "Support solar lamp distribution, family economic programs, and community development.",
  },
  {
    icon: Briefcase,
    title: "Corporate & NGO Partnerships",
    desc: "Partner with us for large-scale impact. We welcome collaborations with organizations that share our vision.",
  },
  {
    icon: GraduationCap,
    title: "Sponsor a Refugee Child",
    desc: "Provide scholarships and mentorship for refugee children who've lost access to education.",
  },
];

const GetInvolved = () => (
  <div>
    <PageHero
      image="/pics/community.jpg"
      title="Get Involved"
      subtitle="7 ways you can change a child's life today"
    />

    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ways.map((way) => (
            <div key={way.title} className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
              <way.icon className="text-secondary mb-4" size={32} />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{way.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{way.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary rounded-2xl p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-foreground/80 font-body max-w-xl mx-auto mb-8">
            Every contribution — no matter the size — brings us closer to a future where no child is left behind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#donate"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-secondary text-secondary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Donate Now <Heart size={20} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md border-2 border-primary-foreground/40 text-primary-foreground font-bold text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/60 font-body">
            Donation link coming soon. In the meantime, reach out to us directly.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default GetInvolved;
