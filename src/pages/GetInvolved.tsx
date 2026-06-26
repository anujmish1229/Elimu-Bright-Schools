import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Users, Briefcase, ArrowRight, Check } from "lucide-react";

const ways = [
  {
    number: "01",
    icon: Heart,
    title: "Donate",
    subtitle: "Support Education Directly",
    desc: "Your financial contribution helps us respond to the most urgent needs across our programs — expanding classrooms, supporting learning, and strengthening school operations. Every donation creates measurable impact.",
    cta: "Make a donation today",
    accent: "bg-primary",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Give In-Kind Support",
    subtitle: "Provide What Children Need Most",
    desc: "You can support by donating essential items that directly improve learning conditions.",
    items: ["Solar panels and lamps", "School uniforms and shoes", "Bags, books, and learning materials", "Iron sheets and construction materials"],
    cta: "Donate essential items",
    accent: "bg-secondary",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "Partner With Us",
    subtitle: "Create Long-Term Impact",
    desc: "We work with partners committed to expanding access to education. We welcome collaboration with corporations, foundations and donors, and NGOs and development partners. Partnerships allow us to scale our work and reach more children.",
    cta: "Become a partner",
    accent: "bg-accent",
  },
  {
    number: "04",
    icon: Users,
    title: "Volunteer",
    subtitle: "Share Your Skills and Time",
    desc: "Volunteers play an important role in supporting our programs and growth. You can contribute through teaching and mentorship, skills training, communications and storytelling, and technical or professional expertise.",
    cta: "Join us as a volunteer",
    accent: "bg-primary",
  },
];

const impactItems = [
  "Bring children out of unsafe learning conditions under trees",
  "Reduce overcrowded classrooms currently holding over 200 learners",
  "Provide access to education for children currently out of school",
  "Support vulnerable and refugee children",
  "Build sustainable education systems for entire communities",
];

const GetInvolved = () => (
  <div>
    <PageHero
      image="/pics/classroom.jpg"
      title="Get Involved"
      subtitle="Be the reason a child goes to school"
    />

    {/* Urgency */}
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/15 text-secondary font-semibold text-sm font-body mb-8 uppercase tracking-widest">
          The need is urgent
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10 leading-tight">
          Right now, more than{" "}
          <span className="text-gradient-gold">4,000 children</span>{" "}
          are waiting.
        </h2>
        <div className="flex flex-col items-center gap-3 mb-10">
          {["Waiting for a classroom.", "Waiting for a teacher.", "Waiting for someone to believe in their future."].map((line) => (
            <p key={line} className="font-display text-xl md:text-2xl text-muted-foreground italic">
              {line}
            </p>
          ))}
        </div>
        <p className="text-muted-foreground font-body leading-relaxed text-lg max-w-2xl mx-auto">
          At Elimu Bright Schools, we are doing everything we can — but we cannot do it alone.
          Your support is not just a donation. It is a child's chance at education.
        </p>
      </div>
    </section>

    {/* Why Your Support Matters */}
    <section className="py-20" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Your Support Matters
          </h2>
          <p className="text-muted-foreground font-body">Your involvement directly helps us:</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {impactItems.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-sm border border-border"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center mt-0.5">
                <Check className="text-primary-foreground" size={16} strokeWidth={3} />
              </div>
              <p className="text-foreground font-body text-sm leading-relaxed">{item}</p>
            </div>
          ))}
          <div className="sm:col-span-2 lg:col-span-3 flex items-center justify-center bg-secondary/10 rounded-xl p-5 border border-secondary/20">
            <p className="text-foreground font-display text-lg font-semibold text-center">
              Every contribution creates real, measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Ways to Get Involved */}
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ways You Can Get Involved
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Whether you give time, resources, or expertise — there is a place for you in this movement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ways.map((way) => (
            <div
              key={way.title}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border"
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full ${way.accent}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <way.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground leading-tight">{way.title}</h3>
                      <p className="text-secondary text-sm font-semibold font-body">{way.subtitle}</p>
                    </div>
                  </div>
                  <span className="font-display text-4xl font-bold text-muted/60 select-none leading-none">
                    {way.number}
                  </span>
                </div>

                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{way.desc}</p>

                {way.items && (
                  <ul className="space-y-2 mb-4 pl-1">
                    {way.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                        <span className="text-secondary font-bold shrink-0 mt-0.5">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all font-body mt-2"
                >
                  {way.cta} <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-28 overflow-hidden">
      <img
        src="/pics/children-school-outside.jpg"
        alt="Children at Elimu Bright Schools"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
          Make Your Impact Today
        </h2>
        <p className="text-lg text-primary-foreground/85 font-body leading-relaxed mb-10 max-w-2xl mx-auto">
          Every action you take brings us closer to a future where no child is denied education,
          welcoming classrooms replace overcrowded spaces, and hope replaces uncertainty.
          Together, we can create lasting change.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-md bg-secondary text-secondary-foreground font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
        >
          Get in Touch <Heart size={20} />
        </Link>
      </div>
    </section>
  </div>
);

export default GetInvolved;
