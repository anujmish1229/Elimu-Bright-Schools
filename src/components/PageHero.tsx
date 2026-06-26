interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
  imagePosition?: string;
}

const PageHero = ({ image, title, subtitle, imagePosition = "object-center" }: PageHeroProps) => (
  <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
    <img src={image} alt={title} className={`absolute inset-0 w-full h-full object-cover ${imagePosition}`} />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="relative z-10 text-center px-4">
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto font-body">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
