import PageHero from "@/components/PageHero";
import { Heart, Shield, Star, Users, Lightbulb, GraduationCap } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Equity and Access",
    desc: "Ensuring that every child, regardless of their background, has the opportunity to learn.",
  },
  {
    icon: Users,
    title: "Community Ownership",
    desc: "Working alongside local families and leaders to build solutions that are sustainable and meaningful.",
  },
  {
    icon: Star,
    title: "Quality Education",
    desc: "Not just in content, but in delivery — ensuring that children receive an experience that truly nurtures both knowledge and confidence.",
  },
  {
    icon: Heart,
    title: "Inclusivity",
    desc: "With a strong focus on supporting vulnerable groups, including refugee children and marginalized families.",
  },
  {
    icon: Lightbulb,
    title: "Innovation and Growth",
    desc: "Constantly seeking better ways to improve learning and expand our impact.",
  },
  {
    icon: GraduationCap,
    title: "Dignity and Respect",
    desc: "Recognizing the worth of every child and every community we serve.",
  },
];

const About = () => (
  <div>
    <PageHero
      image="/pics/about-hero.jpg"
      title="About Us"
      subtitle="A grassroots movement born from lived experience"
    />

    {/* Our Story */}
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2 font-body">Our Story</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Born as a Response to a Crisis
          </h2>
          <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
            <p>
              In the heart of Kabaale Sub-County, Hoima District, thousands of children wake up every day with dreams but no classroom to walk into. For too many, education is not a guarantee. It is a distant hope.
            </p>
            <p>
              In this community, one public primary school serves over 2,000 learners. Where children are even able to make the journey — often a long, arduous and unsafe walk for youngsters — they find classrooms are overwhelmed, often holding more than 200 children with a single teacher struggling to be heard. Beyond this, local government estimates that there are over 4,000 children who remain completely out of school; not because they do not want to learn, but because there is simply no space for them.
            </p>
            <p>
              Some parents, desperate to give their children a chance, gather them under trees where untrained individuals attempt to teach. When it rains, learning stops. When conditions become unsafe, children are sent home.
            </p>
            <p>
              This is the reality that gave birth to Elimu Bright Schools.
            </p>
            <p>
              Elimu Bright Schools was not just started as a school; it was born as a response to a crisis. A response to exclusion. A response to a system that has left thousands of children behind.
            </p>
            <p className="font-semibold text-foreground">
              We exist to bring education closer to the children who need it most — to create safe spaces for learning, restore dignity, and open pathways to opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Who We Are */}
    <section className="py-20" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2 font-body">Who We Are</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Part of the Community We Serve
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Elimu Bright Schools is a community-based organization rooted in the realities of the people it serves. We are not an external solution imposed on a community — we are part of the community. We understand its challenges because we live them. We understand its needs because they are our own.
              </p>
              <p>
                Our work is centred on expanding access to education for marginalized children while creating a learning environment that is safe, inclusive, and culturally relevant.
              </p>
              <p>
                But we go beyond the classroom. We believe that education must be holistic. A child cannot learn effectively when they are hungry, when they lack basic school supplies, or when they return home to conditions that do not support their growth or wellbeing.
              </p>
              <p>
                That is why our approach integrates education with community empowerment — working with families, supporting livelihoods, and creating environments where children can truly thrive.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/pics/children-engaged-class.jpg"
              alt="Children attentively listening in class at Elimu Bright Schools"
              className="w-full h-[420px] object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card rounded-lg p-10 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              To deliver quality, culturally relevant education to marginalized communities. We are committed not only to teaching children how to read and write, but also to helping them understand who they are, where they come from, and what they are capable of becoming.
            </p>
          </div>
          <div className="bg-primary rounded-lg p-10 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Our Vision</h3>
            <p className="text-primary-foreground/85 font-body leading-relaxed">
              A future where every child in underserved communities has access to safe, inclusive, and empowering education that enables them to thrive and build self-reliant lives.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Goals */}
    <section className="py-20" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Our Goals</h2>
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p>
              At Elimu Bright Schools, our goals are driven by urgency, yet guided by long-term impact.
            </p>
            <p>
              We are working to <strong className="text-foreground">expand access to education</strong> by creating more learning spaces for children who are currently excluded. We aim to reduce overcrowding and replace unsafe learning environments with structured, supportive classrooms where every child is seen, heard, and supported.
            </p>
            <p>
              We are committed to delivering <strong className="text-foreground">quality education</strong> that is both academically strong and culturally relevant — ensuring that children grow with a strong sense of identity and confidence.
            </p>
            <p>
              We are also focused on <strong className="text-foreground">holistic development</strong>. This means addressing not only education, but also nutrition, emotional well-being, and family support systems — because we understand that a child's success is shaped by their environment.
            </p>
            <p>
              Our goal is to build a <strong className="text-foreground">sustainable model of education</strong> that can be replicated across other underserved communities, creating long-term impact across regions.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-12">
          At the heart of Elimu Bright Schools are values that guide every decision we make.
        </p>
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

    {/* Founder */}
    <section className="py-20" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/pics/founder.jpg"
              alt="Samuel Usabuwera, Founder of Elimu Bright Schools"
              className="w-full h-[500px] object-cover object-top"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2 font-body">The Founder</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Samuel Usabuwera</h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Samuel Usabuwera's story is not one of privilege. It is a story of survival, resilience, and purpose.
              </p>
              <p>
                Samuel is a 19-year-old Rwandan refugee, born and raised in Kyangwali Refugee Settlement in Uganda, after his parents fled the 1994 Rwanda Genocide. He grew up in a world where opportunities were limited. Classrooms were overcrowded. Education, though deeply desired, was often out of reach.
              </p>
              <p>
                He sat in those overcrowded classrooms. He experienced the struggle of trying to learn in an environment that was never designed to support him. He saw children like himself slowly lose hope.
              </p>
              <p>
                But instead of accepting this as the norm, Samuel chose a different path. Together with his peers, Moses Kasereka and Mugisa Latif — who also share similar lived experiences as refugees — they came together with a shared vision: if the system could not create space for these children, they would.
              </p>
              <p>
                Starting with almost nothing but vision, courage, and community support, they began building a school where it was needed most. Since early 2026, <strong className="text-foreground">36 children who once had no access to education are now in school</strong>. They are learning, growing, and beginning to dream again.
              </p>
              <p>
                Samuel's leadership has gained international recognition. He was selected to the <strong className="text-foreground">Mastercard Foundation Youth Advisory Council</strong>, where he represents the voices of refugee and host community youth across Africa. He was also admitted to the <strong className="text-foreground">African Leadership Academy in South Africa</strong>, an institution that identifies and develops the continent's most promising young leaders.
              </p>
              <p>
                Yet despite these achievements, the mission remains clear: to ensure that children growing up in the same conditions they faced are given a chance to learn, to grow, and to build a better future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Board of Directors */}
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2 font-body">Our Team</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Board of Directors</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { name: "Samuel Usabuwera", role: "CEO", image: "/pics/board/Samuel_Usabuwera-CEO.jpg" },
            { name: "Moses Kasereka", role: "Finance Officer", image: "/pics/board/Moses_Kasereka-Finance_Office.jpg" },
            { name: "Mugisa Latif", role: "Programs Manager", image: "/pics/board/Mugisa_Latif-Programs_Manager.jpg" },
            { name: "Esther Mugisha", role: "Public Relations Manager", image: "/pics/board/Esther_Mugisha-Public_Relations_Manager.jpg" },
            { name: "Isaac Felecian", role: "Fundraising Assistant", image: "/pics/board/Isaac_Felecian-Fundraising_Assistant.jpg" },
          ].map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="relative w-full rounded-xl overflow-hidden shadow-md mb-4" style={{ paddingBottom: "120%" }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display font-semibold text-foreground text-base leading-snug">{member.name}</h3>
              <p className="text-secondary text-sm font-body mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
