import { Link } from 'react-router-dom';
import { StethoscopeIcon, SparklesIcon, SyringeIcon, ScanLineIcon, BabyIcon, WrenchIcon, CalendarIcon } from '../components/Icons';
import PageHero from '../components/PageHero';

const services = [
  { icon: StethoscopeIcon, title: 'General Dentistry', desc: 'Routine dental care and preventive treatment — check-ups, cleanings, and fillings that keep small problems from becoming big ones.' },
  { icon: SparklesIcon, title: 'Cosmetic Dentistry', desc: "Enhance the appearance of your smile with veneers, whitening, and full smile makeovers — Dr. Yusuf's specialist focus." },
  { icon: SyringeIcon, title: 'Orthodontics', desc: 'Straighter teeth and improved alignment with fixed and aligner braces, for children and adults, tracked visit by visit.' },
  { icon: WrenchIcon, title: 'Crowns & Bridges', desc: 'Zirconia and E-max restorations built to match your natural bite and shade.' },
  { icon: BabyIcon, title: "Children's Dentistry", desc: 'Gentle care designed for younger patients in a comfortable environment.' },
  { icon: ScanLineIcon, title: 'Digital X-Ray', desc: 'Modern, on-site diagnostic imaging for faster and more accurate diagnosis — no separate referral needed.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What we treat" title="Dental care for every stage of your smile." crumb="Services" />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="flex flex-col rounded-3xl border border-stone bg-paper p-8 transition-all hover:-translate-y-1 hover:border-chic-teal"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-chic-teal/10 text-chic-teal">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 font-display text-[1.2rem] font-medium">{s.title}</h3>
                <p className="mb-6 flex-1 text-[0.92rem] text-slate">{s.desc}</p>
                <Link to="/book" className="inline-flex items-center gap-1.5 text-sm font-bold text-chic-green-deep hover:underline">
                  Book This Service →
                </Link>
              </article>
            );
          })}
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
            to="/book"
            className="inline-flex items-center gap-2 rounded-full bg-chic-green px-8 py-4 text-base font-bold text-ink transition-all hover:-translate-y-px"
          >
            <CalendarIcon size={18} />
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
