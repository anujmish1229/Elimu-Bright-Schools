import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { BookOpen, Building, ShoppingBag, Utensils, Palette, Globe, Sun, GraduationCap, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Access to Quality Education",
    subtitle: "Giving Every Child a Place to Learn",
    desc: "In communities where thousands of children are locked out of school, access to education becomes the first and most urgent intervention. In Uganda, access to education has improved, but quality and completion remain major challenges. According to UNICEF, 8 out of 10 children are enrolled in primary school, yet many children are unable to achieve basic literacy and numeracy.",
    detail: "In Kabaale Sub-county, the situation is more severe. One government school serves over 2,000 learners. Classrooms often exceed 200 children with one teacher. More than 4,000 children in the area remain out of school. At Elimu Bright Schools, we provide structured learning at nursery and primary levels, ensuring that children receive foundational education in a safe and supportive environment. Our classrooms are more than just spaces — they are places where children rediscover hope, build confidence, and begin to see possibilities for their future.",
    why: "Without access to quality education, children are trapped in cycles of poverty. By expanding access to safe and structured learning environments, we are contributing to national education priorities and long-term development.",
    cta: "Support this program by sponsoring a child or supporting classroom expansion.",
    image: "/pics/hero-home.jpg",
  },
  {
    icon: Building,
    title: "School Construction & Infrastructure Development",
    subtitle: "Building Safe Spaces for Learning",
    desc: "One of the biggest barriers to education in our community is the lack of adequate infrastructure. Overcrowded classrooms and unsafe learning environments make it difficult for children to learn effectively.",
    detail: "We are actively working to construct permanent, fully equipped classrooms that will replace temporary structures and accommodate more learners. Our current priority includes building additional classrooms, establishing a cultural studies and crafts room, and expanding capacity to serve more learners. By investing in infrastructure, we are laying the foundation for long-term, sustainable education.",
    why: "A child cannot learn in an environment that is overcrowded, unsafe, or unstable. Classrooms create dignity, structure, and consistency.",
    cta: "Partner with us to build classrooms and transform learning environments.",
    image: "/pics/children-school-doorway.jpg",
  },
  {
    icon: ShoppingBag,
    title: "Provision of School Essentials",
    subtitle: "Removing Barriers to Attendance",
    desc: "For many families, failing to secure the cost of basic school items is enough to keep children out of school. We support learners by providing school uniforms, bags and shoes, books and stationery.",
    detail: "These essentials may seem small, but they make a life-changing difference. They restore dignity, increase attendance, and allow children to fully participate in school.",
    why: "No child should miss out on education because they lack a uniform or a notebook.",
    cta: "Sponsor a child's school kit and help them stay in school.",
    image: null,
  },
  {
    icon: Utensils,
    title: "School Feeding Program",
    subtitle: "Ensuring No Child Learns on an Empty Stomach",
    desc: "Hunger is one of the biggest barriers to learning. Many children in our community come to school without having eaten, making it difficult to concentrate, participate, or retain information.",
    detail: "Our school feeding program is designed to ensure that every child receives at least one nutritious meal per day, which will improve both attendance and academic performance. As part of our sustainability strategy, we plan to establish a school farm that will support this program long-term.",
    why: "A hungry child cannot learn. Feeding programs improve both education outcomes and overall well-being.",
    cta: "Support our feeding program and help children learn with dignity.",
    image: "/pics/children-at-desks.jpg",
  },
  {
    icon: Palette,
    title: "After-School & Skills Development Programs",
    subtitle: "Preparing Children for the Future",
    badge: "Coming Soon",
    desc: "Education must go beyond the classroom. Elimu Bright Schools is working toward introducing after-school programs that equip learners with practical, creative, and life skills needed for the future.",
    detail: "These programs will include computer literacy and coding, music, arts, and creative expression, mentorship and life skills, and sports and physical education to promote health and wellbeing. The school has already taken steps in this direction — a team of older youth from the community currently uses the school pitch for football, creating a safe and structured space for engagement, teamwork, and discipline.",
    why: "Children need practical skills, confidence, and healthy lifestyles to succeed. After-school programs support well-rounded development, improve learning outcomes, strengthen social skills, and promote discipline and teamwork.",
    cta: "Partner with us to expand our after-school and skills development programs.",
    image: "/pics/children-at-board.jpg",
  },
  {
    icon: Globe,
    title: "Cultural Learning & Identity Program",
    subtitle: "Embracing Heritage, Building Confidence",
    desc: "We integrate cultural studies into our curriculum to help learners develop a strong sense of identity, confidence, and belonging. Through creative arts, storytelling, and community engagement, children are encouraged to embrace their heritage and take pride in who they are.",
    detail: "We intentionally weave cultural learning throughout our teaching because we want every child to be proud of who they are and where they come from. By embracing their heritage and roots, our learners begin to understand that success does not mean leaving their communities behind — it means growing from within them, contributing to them, and becoming agents of positive change for them.",
    why: "When children understand and value who they are, they grow with confidence, purpose, and direction. A strong sense of identity empowers them to succeed not by leaving their communities behind, but by contributing positively to them.",
    cta: "Support us to establish a cultural and crafts room and develop a powerful cultural program.",
    image: "/pics/children-class-attentive.jpg",
  },
  {
    icon: Sun,
    title: "Community Empowerment Program",
    subtitle: "Strengthening Families to Support Children",
    desc: "We believe that a child's success is deeply connected to their home environment. That is why we work beyond the classroom to support families and communities.",
    detail: "Our community empowerment initiatives focus on providing solar lamps or panels to support learning at home, supporting families with economic empowerment opportunities, offering adult literacy and numeracy programs, and promoting holistic child development within households. Through adult literacy and numeracy programs, parents and caregivers are empowered with the skills they need to support their children's learning and engage more confidently in their education.",
    why: "Education does not end at school. A supportive home environment is critical for long-term success. When parents are empowered with basic skills, they are better able to guide, support, and encourage their children.",
    cta: "Support community empowerment initiatives and transform entire households.",
    image: "/pics/founder-community.jpg",
  },
  {
    icon: GraduationCap,
    title: "Refugee Support & Inclusion Program",
    subtitle: "Leaving No Child Behind",
    desc: "Elimu Bright Schools was founded by a refugee and we remain deeply committed to supporting refugee children and youth. This program focuses on providing scholarships and sponsorships to refugee learners, offering mentorship and guidance to youth adapting to new environments, and promoting inclusion and equal opportunity.",
    detail: "We understand the unique challenges faced by refugee communities, and we are committed to ensuring that they are not left behind.",
    why: "Refugee children are among the most vulnerable, yet they hold immense potential.",
    cta: "Sponsor a refugee child and help them access education and opportunity.",
    image: "/pics/founder-with-children.jpg",
    imagePosition: "object-bottom",
  },
];

const Programs = () => (
  <div>
    <PageHero
      image="/pics/children-school-outside.jpg"
      title="Our Programs"
      subtitle="Transforming lives through holistic education"
      imagePosition="object-top"
    />

    {/* Intro */}
    <section className="py-16 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-muted-foreground font-body leading-relaxed text-lg">
          At Elimu Bright Schools, we believe that education goes beyond the classroom. It is about shaping confident, capable, and self-reliant individuals. Our programs are designed to address not only the lack of access to education, but also the deeper challenges that prevent children from thriving — including poverty, hunger, and limited opportunities.
        </p>
      </div>
    </section>

    {/* Programs */}
    <section className="pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {programs.map((program, i) => (
            <div
              key={program.title}
              className={`grid md:grid-cols-2 gap-10 items-stretch ${i % 2 === 1 ? "" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                {program.badge && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-secondary/20 text-secondary mb-3">
                    {program.badge}
                  </span>
                )}
                <div className="flex items-center gap-3 mb-2">
                  <program.icon className="text-primary shrink-0" size={28} />
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{program.title}</h2>
                </div>
                <p className="text-secondary font-semibold text-sm mb-4 font-body italic">{program.subtitle}</p>
                <div className="space-y-3 text-muted-foreground font-body leading-relaxed">
                  <p>{program.desc}</p>
                  <p>{program.detail}</p>
                </div>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm font-body text-foreground/80">
                    <strong>Why This Matters:</strong> {program.why}
                  </p>
                </div>
                <p className="mt-3 text-sm text-secondary font-semibold font-body">{program.cta}</p>
              </div>
              <div className={`relative rounded-lg overflow-hidden shadow-lg min-h-[280px] ${i % 2 === 1 ? "md:order-1" : ""}`}>
                {program.image ? (
                  <img
                    src={program.image}
                    alt={program.title}
                    className={`absolute inset-0 w-full h-full object-cover ${program.imagePosition ?? "object-top"}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <program.icon className="text-muted-foreground/30" size={64} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Approach & CTA */}
    <section className="py-20" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Approach</h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-6">
          What makes Elimu Bright Schools unique is our holistic approach. We do not treat education as a standalone solution. Instead, we address the interconnected challenges that affect children's ability to learn — from hunger and poverty to lack of infrastructure and community support.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Community-driven", "Culturally relevant", "Sustainable", "Scalable"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm font-body">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-4">Be Part of the Impact</h3>
        <p className="text-muted-foreground font-body mb-8">
          Every program at Elimu Bright Schools is an opportunity to change a life. Whether you choose to support education, infrastructure, feeding, or community empowerment, your contribution directly impacts children who need it most.
        </p>
        <Link
          to="/get-involved"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Get Involved <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default Programs;
