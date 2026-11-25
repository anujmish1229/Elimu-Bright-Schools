import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[88vh] min-h-[560px] flex items-end overflow-hidden">
      <img
        src="/pics/hero-home.jpg"
        alt="Children learning at Elimu Bright Schools"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.02] tracking-[-0.01em]">
            Education for Marginalized Children in Uganda
          </h1>
          <p className="mt-5 font-display italic text-xl md:text-2xl text-secondary">
            Enlightening Young Minds in Underserved Communities
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/donate"
              className="btn btn-gold"
            >
              Donate Now
            </Link>
            <Link
              to="/about"
              className="btn btn-outline-light"
            >
              Our Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* The Problem, with the figures behind it */}
    <section className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16 items-start">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Education Crisis is Real
            </h2>
            <p className="text-lg md:text-xl text-foreground font-body leading-relaxed max-w-prose mb-6">
              In Kabaale Sub-county, Western Uganda, thousands of children grow up with the desire to learn but without access to a classroom. For many families, education is not a guarantee. It is a privilege they cannot reach.
            </p>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed max-w-prose">
              <p>
                The national pupil-to-teacher ratio in Uganda's primary schools averages about <strong className="text-foreground">43:1</strong>, but this increases significantly in rural and underserved areas.
              </p>
              <p>
                The only government school in the area serves <strong className="text-foreground">over 2,000 learners</strong>. Classrooms often hold more than 200 children with a single teacher. Beyond this, <strong className="text-foreground">over 4,000 children</strong> remain completely out of school.
              </p>
              <p>
                Some children sit under trees, learning from untrained individuals. When it rains, any lessons stop. When conditions become unsafe, learning disappears.
              </p>
              <p className="text-foreground font-semibold">
                This is the reality Elimu Bright Schools is working to change.
              </p>
            </div>
          </div>
          <dl className="md:col-span-5 md:pt-2">
            {[
              { value: "4,000+", label: "Children Out of School" },
              { value: "2,000+", label: "Learners at Gov't School" },
              { value: "200+", label: "Children Per Classroom (Gov't)" },
              { value: "36", label: "Children Now in School", highlight: true },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline justify-between gap-6 border-t border-foreground/15 py-5 last:border-b"
              >
                <dt className="font-body text-sm text-muted-foreground order-2 text-right">{stat.label}</dt>
                <dd
                  className={`order-1 font-display text-4xl md:text-5xl font-bold lining-nums tabular-nums leading-none ${
                    stat.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

    {/* Who We Are */}
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/pics/team-with-children.jpg"
              alt="Founder and team with children at Elimu Bright Schools"
              className="w-full h-[400px] object-cover object-top"
              loading="lazy"
            />
          </div>
          <div>
            <p className="font-display italic text-lg text-primary mb-1">Who We Are</p>
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
          </div>
        </div>
      </div>
    </section>

    {/* Founder */}
    <section className="py-20 md:py-28 bg-maroon text-maroon-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 md:order-1 order-1">
            <p className="font-display italic text-lg text-secondary mb-1">A Story Behind This Education Initiative in Uganda</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-maroon-foreground mb-6">
              Samuel Usabuwera
            </h2>
            <div className="space-y-4 text-maroon-foreground/80 font-body leading-relaxed max-w-prose">
              <p>
                Elimu Bright Schools was founded by Samuel Usabuwera, a 19-year-old Rwandan refugee, and his peers Moses Kasereka and Mugisa Latif. Having experienced overcrowded classrooms and limited access to education firsthand, he understood the barriers that prevent children from learning.
              </p>
              <p>
                Instead of accepting this reality, they chose to respond to it. Today, his work is helping provide education for marginalized and refugee children in Uganda, starting with his own community.
              </p>
            </div>
            <ul className="mt-6 space-y-1 text-sm text-secondary font-semibold font-body">
              <li>Mastercard Foundation Youth Advisory Council Member</li>
              <li>Admitted to African Leadership Academy, South Africa</li>
            </ul>
            <Link
              to="/about"
              className="btn btn-outline-light mt-8"
            >
              Read Full Story <ArrowRight size={16} />
            </Link>
          </div>
          <div className="md:col-span-5 order-2 rounded-lg overflow-hidden shadow-2xl shadow-black/30">
            <img
              src="/pics/founder.jpg"
              alt="Samuel Usabuwera, Founder of Elimu Bright Schools"
              className="w-full h-[460px] object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* What We Are Building */}
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-end md:justify-between gap-12 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What We Are Building</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Our work focuses on addressing the root causes of limited access to education. We are developing safe classrooms, supporting learners with essential school materials, and working toward sustainable solutions such as school feeding programs and community empowerment initiatives.
            </p>
          </div>
          <Link
            to="/programs"
            className="btn btn-outline mt-6 md:mt-0 shrink-0"
          >
            See All Programs <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              image: "/pics/children-laughing-class.jpg",
              title: "Quality Education",
              desc: "Nursery and primary schooling in a safe, supportive environment. We intentionally integrate cultural studies into our curriculum so every child grows with a strong sense of identity and belonging.",
            },
            {
              image: "/pics/children-at-desks.jpg",
              title: "Feeding Program",
              desc: "Daily meals so children can focus on learning, not hunger. A school farm is planned to make the program self-sustaining and give learners practical agricultural skills.",
            },
            {
              image: "/pics/founder-community.jpg",
              title: "Community Empowerment",
              desc: "Solar lamps, family economic support, adult literacy programs, and refugee scholarships — because a child's success is deeply connected to their home environment.",
            },
          ].map((item) => (
            <article key={item.title}>
              <img
                src={item.image}
                alt=""
                className="w-full aspect-[4/3] object-cover rounded-lg mb-5"
                loading="lazy"
              />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Why It Matters */}
    <section className="py-20 md:py-28 bg-[hsl(152_48%_17%)] text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Why Supporting Education in Uganda Matters
            </h2>
            <p className="text-primary-foreground/75 font-body leading-relaxed text-lg">
              Access to education is one of the most powerful tools for breaking cycles of poverty. When you choose to support education in Uganda, you are helping:
            </p>
          </div>
          <div className="md:pt-2">
            <ul className="font-display text-2xl md:text-3xl text-primary-foreground">
              {[
                "Provide children with learning opportunities",
                "Build confidence and future employment pathways",
                "Strengthen communities and promote self-reliance",
              ].map((item) => (
                <li key={item} className="border-t border-primary-foreground/20 py-5 last:border-b">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-secondary font-display italic text-xl">
              Education does not just change one life; it can transform entire communities.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-12 items-end">
        <div className="md:col-span-7">
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
            Help Children Go to School in Uganda
          </h2>
          <p className="text-lg md:text-xl font-body leading-relaxed max-w-prose">
            There are still thousands of children in Kabaale and surrounding communities who are waiting for access to education.
          </p>
        </div>
        <div className="md:col-span-5">
          <ul className="font-display text-xl md:text-2xl font-semibold space-y-1 mb-6">
            <li>More classrooms are needed.</li>
            <li>More resources are required.</li>
            <li>More children are ready to learn.</li>
          </ul>
          <p className="font-body leading-relaxed mb-8 text-secondary-foreground/85">
            Whether through donations, partnerships, or sponsorship, you can be part of a solution that is already making a difference.
          </p>
          <Link to="/donate" className="btn btn-green btn-lg">
            Get Involved Today <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
