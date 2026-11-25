import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const pages = [
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/roadmap", label: "Our Vision" },
  { to: "/contact", label: "Contact" },
];

const linkClass =
  "text-foreground/80 hover:text-primary underline-offset-4 hover:underline transition-colors";

const Footer = () => (
  <footer className="bg-[hsl(38_32%_91%)] text-foreground border-t border-border overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
      <div className="grid gap-12 md:grid-cols-12">
        {/* Crest and motto */}
        <div className="md:col-span-5 flex items-start gap-5">
          <img
            src="/brand/crest.png"
            alt="Elimu Bright Schools crest"
            width={177}
            height={200}
            className="w-20 md:w-24 h-auto shrink-0"
            loading="lazy"
          />
          <div>
            <p className="font-display italic text-2xl md:text-3xl text-primary leading-tight">
              Lighting young minds.
            </p>
            <p className="mt-3 text-sm text-muted-foreground font-body leading-relaxed max-w-xs">
              Quality, culturally relevant education for marginalized communities in Western Uganda.
            </p>
            <Link
              to="/donate"
              className="mt-5 inline-flex items-center gap-1.5 font-body font-semibold text-primary border-b-2 border-secondary pb-0.5 hover:border-primary transition-colors"
            >
              Support a child's education <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Link columns */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm font-body">
          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-4">Explore</h2>
            <ul className="space-y-2.5">
              {pages.map((page) => (
                <li key={page.to}>
                  <Link to={page.to} className={linkClass}>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-4">Find us</h2>
            <address className="not-italic text-foreground/80 leading-relaxed">
              Kabaale Sub-county
              <br />
              Hoima District
              <br />
              Western Uganda
            </address>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h2 className="font-display text-base font-semibold text-foreground mb-4">Reach us</h2>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:info@elimubrightschools.org" className={linkClass}>
                  info@elimubrightschools.org
                </a>
              </li>
              <li>
                <a href="tel:+256761258092" className={linkClass}>
                  +256 761258092
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <p
        aria-hidden="true"
        className="mt-16 md:mt-24 font-display font-bold text-primary leading-none pb-[0.12em] tracking-[-0.03em] whitespace-nowrap select-none text-[clamp(2rem,9vw,7.75rem)]"
      >
        Elimu Bright Schools
      </p>

      <div className="mt-6 py-6 border-t border-foreground/15 flex flex-col sm:flex-row gap-2 sm:justify-between text-xs text-muted-foreground font-body">
        <p>© {new Date().getFullYear()} Elimu Bright Schools. All rights reserved.</p>
        <p>A community-based education charity in Uganda</p>
      </div>
    </div>
  </footer>
);

export default Footer;
