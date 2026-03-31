import PageHero from "@/components/PageHero";
import { Heart, Shield, Star, Users, Lightbulb, GraduationCap } from "lucide-react";

const values = [
  { icon: Shield, title: "Equity", desc: "Every child, regardless of background, deserves quality education." },
  { icon: Users, title: "Community Ownership", desc: "We build with the community, not for the community." },
  { icon: Star, title: "Quality", desc: "Education that transforms lives — not just fills seats." },
  { icon: Heart, title: "Inclusivity", desc: "Refugee and host community children learn side by side." },
  { icon: Lightbulb, title: "Innovation", desc: "Creative solutions for real-world challenges." },
  { icon: GraduationCap, title: "Dignity", desc: "Education as a right, not a privilege." },
];

const About = () => (
  <div>
    <PageHero
      image="/pics/about-hero.jpg"
      title="About Us"
      subtitle="A grassroots movement born from lived experience"
    />

    {/* Founder Story */}
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/pics/founder.jpg"
              alt="Samuel Usabuwera"
              className="w-full h-[450px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2 font-body">The Founder</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Samuel Usabuwera</h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Samuel is a 19-year-old Rwandan refugee who grew up in Kyangwali Refugee Camp in Western Uganda. He watched children in his community grow up without access to a proper classroom — some learning under trees, others not learning at all.
              </p>
              <p>
                Rather than wait for change, he became the change. Samuel founded Elimu Bright Schools as a grassroots nonprofit in Kabaale Sub-county, Hoima District, now serving 36 children with plans to reach hundreds more.
              </p>
              <p>
                His leadership has been recognized internationally — Samuel is a <strong className="text-foreground">Mastercard Foundation Youth Advisory Council member</strong> and has been admitted to the <strong className="text-foreground">African Leadership Academy in South Africa</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card rounded-lg p-10 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              To deliver quality, culturally relevant education to marginalized communities — ensuring that every child has access to learning that honors their identity, builds their skills, and opens doors to opportunity.
            </p>
          </div>
          <div className="bg-primary rounded-lg p-10 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Our Vision</h3>
            <p className="text-primary-foreground/85 font-body leading-relaxed">
              A future where every child in underserved communities has access to safe, inclusive, and empowering education — regardless of their nationality, gender, or economic status.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-lg p-8 text-left shadow-sm">
              <v.icon className="text-secondary mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
