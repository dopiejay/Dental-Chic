import { Link } from 'react-router-dom';

export default function PageHero({ eyebrow, title, crumb }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink via-chic-teal/20 to-ink px-6 py-20 text-center text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-chic-teal/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-chic-green/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <nav className="mb-4 text-[0.78rem] text-white/50">
          <Link to="/" className="transition-colors hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">{crumb}</span>
        </nav>
        <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green uppercase">{eyebrow}</p>
        <h1 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-tight text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
