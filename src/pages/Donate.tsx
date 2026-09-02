import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Smartphone,
  Copy,
  Check,
  ExternalLink,
  Heart,
  ShoppingBag,
  Briefcase,
  Users,
  ArrowRight,
} from "lucide-react";

const otherWays = [
  {
    icon: ShoppingBag,
    title: "Give In-Kind Support",
    desc: "Donate essential items such as solar panels and lamps, uniforms and shoes, bags and books, or construction materials like iron sheets.",
  },
  {
    icon: Briefcase,
    title: "Partner With Us",
    desc: "We welcome collaboration with corporations, foundations, donors, and NGOs to help us scale our work and reach more children.",
  },
  {
    icon: Users,
    title: "Volunteer",
    desc: "Share your time and skills through teaching and mentorship, skills training, storytelling, or professional expertise.",
  },
];

const MOBILE_MONEY = {
  provider: "Mobile Money",
  name: "Samuel Usabuwera",
  number: "+256 761258092",
};

// TODO: replace with the real GoFundMe campaign URL (e.g. https://www.gofundme.com/f/your-campaign-slug).
const GOFUNDME_CAMPAIGN_URL = "https://www.gofundme.com/f/REPLACE-WITH-CAMPAIGN-SLUG";
const GOFUNDME_WIDGET_URL = `${GOFUNDME_CAMPAIGN_URL}/widget/large`;

const CopyField = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard access unavailable — the value is already visible for manual copying.
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 bg-background rounded-lg border border-border px-5 py-4">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground font-body mb-1">
          {label}
        </p>
        <p className="font-display text-lg sm:text-xl font-bold text-foreground truncate">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold font-body bg-primary/10 text-primary hover:bg-primary/15 transition-colors"
        aria-label={`Copy ${label.toLowerCase()}`}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

const Donate = () => {
  const [gofundmeOpen, setGofundmeOpen] = useState(false);

  return (
    <div>
      <PageHero
        image="/pics/children-laughing-class.jpg"
        title="Donate"
        subtitle="Your generosity gives children in Hoima District a place to learn."
      />

      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <p className="text-muted-foreground font-body leading-relaxed text-lg">
            Every gift — big or small — goes directly toward classrooms, teachers, and learning
            materials for children who would otherwise go without. Thank you for standing with us.
          </p>
        </div>

        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary: Mobile Money */}
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="h-1.5 w-full bg-primary" />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Smartphone className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground leading-tight">
                    Give via Mobile Money
                  </h2>
                  <p className="text-secondary text-sm font-semibold font-body">
                    Our preferred way to receive support
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <CopyField label="Name" value={MOBILE_MONEY.name} />
                <CopyField label="Number" value={MOBILE_MONEY.number} />
              </div>
            </div>
          </div>

          {/* Secondary: GoFundMe */}
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setGofundmeOpen(true)}
              className="text-sm font-semibold text-primary hover:underline font-body"
            >
              Can't use mobile money?
            </button>
          </div>
        </div>
      </section>

      <Dialog open={gofundmeOpen} onOpenChange={setGofundmeOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-display">Donate via GoFundMe</DialogTitle>
            <DialogDescription>
              Give securely online through our GoFundMe campaign.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-lg overflow-hidden border border-border" style={{ height: "70vh" }}>
            <iframe
              src={GOFUNDME_WIDGET_URL}
              title="GoFundMe donation widget"
              className="w-full h-full"
              frameBorder={0}
            />
          </div>

          <a
            href={GOFUNDME_CAMPAIGN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:underline font-body"
          >
            Open campaign in a new tab <ExternalLink size={14} />
          </a>
        </DialogContent>
      </Dialog>

      {/* Other Ways to Get Involved */}
      <section className="py-20" style={{ background: "var(--section-gradient)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Other Ways to Get Involved
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              More than 4,000 children are waiting — for a classroom, a teacher, a chance to learn.
              Beyond giving directly, here are other ways to stand with them.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherWays.map((way) => (
              <div
                key={way.title}
                className="bg-card rounded-xl p-6 shadow-sm border border-border text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <way.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{way.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{way.desc}</p>
                <Link
                  to="/contact"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all font-body"
                >
                  Get in touch <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank you */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="/pics/children-school-outside.jpg"
          alt="Children at Elimu Bright Schools"
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight flex items-center justify-center gap-3">
            <Heart size={32} /> Thank You
          </h2>
          <p className="text-primary-foreground/85 font-body leading-relaxed">
            Your support turns into classrooms built, teachers paid, and children given the
            chance to learn. We're grateful you're part of this.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donate;
