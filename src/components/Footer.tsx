import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">Elimu Bright Schools</h3>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            Quality, culturally relevant education for marginalized communities in Western Uganda.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {[
              { to: "/about", label: "About Us" },
              { to: "/programs", label: "Programs" },
              { to: "/roadmap", label: "Our Vision" },
              { to: "/donate", label: "Donate" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/80">
            <a href="mailto:info@elimubrightschools.org" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail size={16} /> info@elimubrightschools.org
            </a>
            <a href="tel:+256761258092" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone size={16} /> +256 761258092
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Hoima District, Kabaale Sub-county, Uganda
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Elimu Bright Schools. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
