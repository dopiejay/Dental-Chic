import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './Icons';

export default function TeamPreview() {
  return (
    <section id="team" className="px-6 py-24">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Meet the dentist</p>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium">The hand behind your smile</h2>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 rounded-3xl border border-stone bg-white p-10 md:grid-cols-[220px_1fr]">
        <div className="mx-auto w-36 overflow-hidden rounded-full bg-gradient-to-br from-stone to-chic-teal/20 md:w-full aspect-square flex items-center justify-center" aria-hidden="true">
          <svg viewBox="0 0 200 200" width="100%" height="100%">
            <circle cx="100" cy="100" r="100" fill="#EDEEEA" />
            <circle cx="100" cy="80" r="34" fill="#1B1F1D" opacity="0.85" />
            <path d="M40 190c0-40 27-65 60-65s60 25 60 65" fill="#1B1F1D" opacity="0.85" />
          </svg>
        </div>

        <div className="text-center md:text-left">
          <h3 className="mb-1.5 font-display text-2xl font-medium">Dr. Shabana Yusuf</h3>
          <p className="mb-3.5 text-sm font-bold text-chic-green-deep">Lead Dentist · Cosmetic &amp; General Dentistry</p>
          <p className="mb-4.5 text-slate">
            Leads Dental Chic&apos;s clinical work with a specialist interest in cosmetic dentistry,
            offering minimally invasive general care alongside orthodontics and minor oral surgery
            for patients across Blantyre.
          </p>
          <div className="mb-5 flex flex-wrap justify-center gap-2.5 md:justify-start">
            {['Cosmetic Dentistry', 'Orthodontics', 'Minor Oral Surgery'].map((t) => (
              <span key={t} className="rounded-full bg-stone px-3.5 py-1.5 text-[0.8rem] font-semibold">
                {t}
              </span>
            ))}
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-bold text-chic-green-deep hover:underline"
          >
            Meet the full team <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
