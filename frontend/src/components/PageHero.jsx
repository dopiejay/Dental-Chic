import { Link } from 'react-router-dom';

export default function PageHero({ eyebrow, title, crumb }) {
  return (
    <section className="border-b border-stone bg-stone/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 flex items-center gap-2 text-[0.8rem] font-semibold text-slate">
          <Link to="/" className="hover:text-ink">
            Home
          </Link>
          <span>/</span>
          <span className="text-ink">{crumb}</span>
        </p>
        {eyebrow && (
          <p className="mb-2 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">{eyebrow}</p>
        )}
        <h1 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-medium">{title}</h1>
      </div>
    </section>
  );
}
