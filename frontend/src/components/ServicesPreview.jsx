import { Link } from 'react-router-dom';

const services = [
  { icon: '🦷', title: 'General Dentistry', desc: 'Check-ups, cleanings, and fillings that keep small problems from becoming big ones.' },
  { icon: '✨', title: 'Cosmetic Dentistry', desc: "Veneers, whitening, and smile makeovers — Dr. Yusuf's specialist focus." },
  { icon: '🪥', title: 'Braces & Orthodontics', desc: 'Fixed and aligner braces for children and adults, tracked visit by visit.' },
  { icon: '🦴', title: 'Crowns & Bridges', desc: 'Zirconia and E-max restorations built to match your natural bite and shade.' },
  { icon: '🩻', title: 'Digital X-Ray', desc: 'On-site imaging for faster, more accurate diagnosis — no separate referral needed.' },
  { icon: '🔧', title: 'Minor Oral Surgery', desc: 'Extractions and minor procedures handled with minimally invasive technique.' },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="bg-white px-6 py-24">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">What we treat</p>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium">
          Complete dental care{' '}
          <span className="relative whitespace-nowrap">
            <span className="relative z-10">under one roof</span>
            <span className="absolute right-0 bottom-0.5 left-0 -z-0 h-2 rounded bg-chic-green/35" />
          </span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="rounded-2xl border border-stone bg-paper p-7.5 transition-all hover:-translate-y-1 hover:border-chic-teal"
          >
            <div className="mb-3.5 text-3xl">{s.icon}</div>
            <h3 className="mb-2 font-display text-[1.15rem] font-medium">{s.title}</h3>
            <p className="text-[0.92rem] text-slate">{s.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-7 py-3.5 text-sm font-bold transition-colors hover:bg-ink hover:text-white"
        >
          View All Services →
        </Link>
      </div>
    </section>
  );
}
