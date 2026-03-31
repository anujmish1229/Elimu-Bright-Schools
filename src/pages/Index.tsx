import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, ArrowRight } from "lucide-react";

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      <img
        src="/pics/hero-home.jpg"
        alt="Children at Elimu Bright Schools"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4 font-body">
            Kabaale Sub-county · Hoima District · Uganda
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Every Child Deserves a Classroom,{" "}
            <span className="text-secondary">Not a Tree.</span>
          </h1>
          <p className="text-lg text-primary-foreground/85 mb-8 font-body leading-relaxed">
            Over 4,000 children in our community have no school. Some learn under trees — lessons stop when it rains.
            Elimu Bright Schools is changing that, one classroom at a time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Donate Now <Heart size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Our Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "36", label: "Children Served" },
            { value: "4,000+", label: "Out-of-School Kids" },
            { value: "200+", label: "Per Classroom (Gov't)" },
            { value: "1", label: "Founder's Age: 19" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-secondary">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70 mt-1 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* The Problem */}
    <section className="py-20" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Education Crisis is Real
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                In Kabaale Sub-county, one government school serves <strong className="text-foreground">over 2,000 learners</strong>. That's more than 200 children per classroom.
              </p>
              <p>
                Thousands more have <strong className="text-foreground">no school at all</strong>. They learn under trees, with untrained volunteer teachers. When it rains, class is cancelled.
              </p>
              <p>
                These aren't just numbers. They're children losing their futures — every single day.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/pics/classroom.jpg"
              alt="Children learning in a crowded classroom"
              className="w-full h-[350px] object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Founder */}
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/pics/founder.jpg"
              alt="Samuel Usabuwera, Founder"
              className="w-full h-[400px] object-cover"
              loading="lazy"
              width={800}
              height={1000}
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2 font-body">Meet the Founder</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Samuel Usabuwera
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                A 19-year-old Rwandan refugee from Kyangwali Refugee Camp, Samuel saw the crisis firsthand and decided to act.
              </p>
              <p>
                He built Elimu Bright Schools from the ground up — a grassroots response to a massive need.
              </p>
              <p className="text-sm text-accent font-semibold">
                Mastercard Foundation Youth Advisory Council Member · Admitted to African Leadership Academy, South Africa
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:underline"
            >
              Read Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="py-20" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What We're Building</h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-12">
          More than a school — a movement for dignity, identity, and opportunity.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: BookOpen, title: "Quality Education", desc: "Nursery & primary schooling with trained teachers and a real curriculum." },
            { icon: Heart, title: "Feeding Program", desc: "Daily meals so children can focus on learning, not hunger." },
            { icon: Users, title: "Community Empowerment", desc: "Solar lamps, family support, and refugee scholarships." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-lg p-8 text-left shadow-sm hover:shadow-md transition-shadow">
              <item.icon className="text-secondary mb-4" size={32} />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
            </div>
          ))}
        </div>
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          See All Programs <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-24 overflow-hidden">
      <img
        src="/pics/community.jpg"
        alt="Community"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          You Can Change This
        </h2>
        <p className="text-lg text-primary-foreground/85 mb-8 font-body">
          Every dollar builds a wall. Every partnership opens a door. Every sponsor gives a child their future back.
        </p>
        <Link
          to="/get-involved"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-secondary text-secondary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
        >
          Get Involved Today <Heart size={20} />
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
