type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  asideTitle?: string;
  asideBody?: string;
  points?: string[];
};

export function PageHero({ eyebrow, title, description, asideTitle, asideBody, points }: PageHeroProps) {
  return (
    <section className="page-hero container-width">
      <p className="section-label">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="page-hero-bottom">
        <p>{description}</p>
        {asideTitle ? (
          <div className="page-hero-aside">
            <h2>{asideTitle}</h2>
            {asideBody ? <p>{asideBody}</p> : null}
            {points ? <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
