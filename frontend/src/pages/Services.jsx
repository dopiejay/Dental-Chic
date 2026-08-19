import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const services = [
  {
    icon: '🦷',
    title: 'General Dentistry',
    desc: 'Routine dental care and preventive treatment — check-ups, cleanings, and fillings that keep small problems from becoming big ones.',
  },
  {
    icon: '✨',
    title: 'Cosmetic Dentistry',
    desc: "Enhance the appearance of your smile with veneers, whitening, and full smile makeovers — Dr. Yusuf's specialist focus.",
  },
  {
    icon: '😁',
    title: 'Orthodontics',
    desc: 'Straighter teeth and improved alignment with fixed and aligner braces, for children and adults, tracked visit by visit.',
  },
  {
    icon: '🦴',
    title: 'Crowns & Bridges',
    desc: 'Zirconia and E-max restorations built to match your natural bite and shade.',
  },
  {
    icon: '🔧',
    title: 'Oral Surgery',
    desc: 'Extractions and minor surgical procedures handled with minimally invasive technique.',
  },
  {
    icon: '🩻',
    title: 'Digital X-Ray',
    desc: 'Modern, on-site diagnostic imaging for faster and more accurate diagnosis — no separate referral needed.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What we treat" title="Dental care for every stage of your smile." crumb="Services" />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-3xl border border-stone bg-paper p-8 transition-all hover:-translate-y-1 hover:border-chic-teal"
            >
              <div className="mb-4 text-3xl">{s.icon}</div>
              <h3 className="mb-2 font-display text-[1.2rem] font-medium">{s.title}</h3>
              <p className="mb-6 flex-1 text-[0.92rem] text-slate">{s.desc}</p>
              <a
                href="/#book"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-chic-green-deep hover:underline"
              >
                Book This Service →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 font-display text-[clamp(1.7rem,3vw,2.3rem)] font-medium">
            Not sure which service you need?
          </h2>
          <p className="mb-8 text-white/70">
            Book a consultation and we&apos;ll recommend the right treatment for you.
          </p>
          <Link
            to="/#book"
            className="inline-flex items-center gap-2 rounded-full bg-chic-green px-8 py-4 text-base font-bold text-ink transition-all hover:-translate-y-px"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
