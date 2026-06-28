import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const Contact = () => {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...fields }),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true));
  };

  return (
    <div>
      <PageHero
        image="/pics/about-hero.jpg"
        title="Contact Us"
        subtitle="Want to support, partner, or learn more? We'd love to hear from you."
      />

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Whether you want to donate, partner, volunteer, or simply learn more — we are here and eager to connect. Reach out to us directly and we will get back to you as soon as possible.
              </p>
              <div className="space-y-6">
                <a href="mailto:info@elimubrightschools.org" className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground font-body">Email</p>
                    <p className="text-muted-foreground text-sm font-body">info@elimubrightschools.org</p>
                  </div>
                </a>
                <a href="tel:+256761258092" className="flex items-start gap-4 group">
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

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                  <CheckCircle className="text-primary" size={48} />
                  <p className="font-display text-xl font-semibold text-foreground">Message sent!</p>
                  <p className="text-muted-foreground font-body text-sm">
                    Thank you for reaching out. We will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-4"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot — hidden from real users, catches bots */}
                  <p className="hidden">
                    <label>Don't fill this out: <input name="bot-field" /></label>
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1 font-body">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={fields.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1 font-body">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={fields.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1 font-body">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={fields.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="How would you like to get involved?"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-destructive font-body">
                      Something went wrong. Please email us directly at info@elimubrightschools.org.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity font-body"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
