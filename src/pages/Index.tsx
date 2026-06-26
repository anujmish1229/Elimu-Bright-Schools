import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, ArrowRight } from "lucide-react";

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      <img
        src="/pics/hero-home.jpg"
        alt="Children learning at Elimu Bright Schools"
        className="absolute inset-0 w-full h-full object-cover object-center"
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
            Education for Marginalized Children in Uganda{" "}
            <span className="text-secondary">Enlightening Young Minds in Underserved Communities</span>
          </h1>
          <p className="text-lg text-primary-foreground/85 mb-8 font-body leading-relaxed">
            In Kabaale Sub-county, Western Uganda, thousands of children grow up with the desire to learn but without access to a classroom. For many families, education is not a guarantee. It is a privilege they cannot reach.
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
            { value: "36", label: "Children Now in School" },
            { value: "4,000+", label: "Children Out of School" },
            { value: "200+", label: "Children Per Classroom (Gov't)" },
            { value: "2,000+", label: "Learners at Gov't School" },
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
                The national pupil-to-teacher ratio in Uganda's primary schools averages about <strong className="text-foreground">43:1</strong>, but this increases significantly in rural and underserved areas.
              </p>
              <p>
                The only government school in the area serves <strong className="text-foreground">over 2,000 learners</strong>. Classrooms often hold more than 200 children with a single teacher. Beyond this, <strong className="text-foreground">over 4,000 children</strong> remain completely out of school.
              </p>
              <p>
                Some children sit under trees, learning from untrained individuals. When it rains, any lessons stop. When conditions become unsafe, learning disappears.
              </p>
              <p>
                This is the reality Elimu Bright Schools is working to change.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/pics/child-at-chalkboard.jpg"
              alt="Child writing at the chalkboard at Elimu Bright Schools"
              className="w-full h-[350px] object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Who We Are */}
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/pics/team-with-children.jpg"
              alt="Founder and team with children at Elimu Bright Schools"
              className="w-full h-[400px] object-cover object-top"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2 font-body">Who We Are</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Community-Based Education Charity in Uganda Creating Change
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Elimu Bright Schools is a community-based nonprofit education organization in Uganda dedicated to expanding access to quality, culturally relevant education.
              </p>
              <p>
                Founded to respond to a growing education crisis, the organization is creating safe learning spaces for children who would otherwise remain excluded from quality learning and from school.
              </p>
              <p>
                What began as a small initiative is now a growing movement, restoring access to education, dignity, and opportunity for underserved children.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:underline"
            >
              Read Our Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Founder */}
    <section className="py-20" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/pics/founder.jpg"
              alt="Samuel Usabuwera, Founder of Elimu Bright Schools"
              className="w-full h-[400px] object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2 font-body">A Story Behind This Education Initiative in Uganda</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Samuel Usabuwera
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Elimu Bright Schools was founded by Samuel Usabuwera, a 19-year-old Rwandan refugee, and his peers Moses Kasereka and Mugisa Latif. Having experienced overcrowded classrooms and limited access to education firsthand, he understood the barriers that prevent children from learning.
              </p>
              <p>
                Instead of accepting this reality, they chose to respond to it. Today, his work is helping provide education for marginalized and refugee children in Uganda, starting with his own community.
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

    {/* What We Are Building */}
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What We Are Building</h2>
        <p className="text-muted-foreground font-body max-w-3xl mx-auto mb-12">
          Our work focuses on addressing the root causes of limited access to education. We are developing safe classrooms, supporting learners with essential school materials, and working toward sustainable solutions such as school feeding programs and community empowerment initiatives.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Quality Education",
              desc: "Nursery and primary schooling in a safe, supportive environment. We intentionally integrate cultural studies into our curriculum so every child grows with a strong sense of identity and belonging.",
            },
            {
              icon: Heart,
              title: "Feeding Program",
              desc: "Daily meals so children can focus on learning, not hunger. A school farm is planned to make the program self-sustaining and give learners practical agricultural skills.",
            },
            {
              icon: Users,
              title: "Community Empowerment",
              desc: "Solar lamps, family economic support, adult literacy programs, and refugee scholarships — because a child's success is deeply connected to their home environment.",
            },
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

    {/* Why It Matters */}
    <section className="py-20" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Supporting Education in Uganda Matters
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            Access to education is one of the most powerful tools for breaking cycles of poverty. When you choose to support education in Uganda, you are helping:
          </p>
          <ul className="text-left space-y-3 text-muted-foreground font-body max-w-md mx-auto mb-10">
            {[
              "Provide children with learning opportunities",
              "Build confidence and future employment pathways",
              "Strengthen communities and promote self-reliance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground font-body font-semibold">
            Education does not just change one life; it can transform entire communities.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-24 overflow-hidden">
      <img
        src="/pics/children-school-outside.jpg"
        alt="Children at Elimu Bright Schools"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Help Children Go to School in Uganda
        </h2>
        <p className="text-lg text-primary-foreground/85 mb-4 font-body">
          There are still thousands of children in Kabaale and surrounding communities who are waiting for access to education.
        </p>
        <ul className="text-primary-foreground/80 font-body mb-8 space-y-1">
          <li>More classrooms are needed.</li>
          <li>More resources are required.</li>
          <li>More children are ready to learn.</li>
        </ul>
        <p className="text-primary-foreground/85 mb-8 font-body">
          Whether through donations, partnerships, or sponsorship, you can be part of a solution that is already making a difference.
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
