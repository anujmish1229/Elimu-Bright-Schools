import PageHero from "@/components/PageHero";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <div>
    <PageHero
      image="/pics/about-hero.jpg"
      title="Contact Us"
      subtitle="We'd love to hear from you"
    />

    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Whether you want to donate, partner, volunteer, or simply learn more — we're here and eager to connect.
            </p>
            <div className="space-y-6">
              <a
                href="mailto:elimubrightschools@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground font-body">Email</p>
                  <p className="text-muted-foreground text-sm font-body">elimubrightschools@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+256761258092"
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground font-body">Phone</p>
                  <p className="text-muted-foreground text-sm font-body">+256 761258092</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground font-body">Location</p>
                  <p className="text-muted-foreground text-sm font-body">
                    Hoima District, Kabaale Sub-county<br />Western Uganda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1 font-body">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1 font-body">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1 font-body">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="How would you like to help?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity font-body"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
