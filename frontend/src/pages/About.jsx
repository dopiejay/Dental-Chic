import { Link } from 'react-router-dom';
import { HeartIcon, AwardIcon, GemIcon, ArrowRightIcon, MessageCircleIcon } from '../components/Icons';
import PageHero from '../components/PageHero';

const philosophy = [
  { icon: HeartIcon, title: 'Comfort', desc: 'Gentle, minimally invasive technique — treatment that puts you at ease first.' },
  { icon: AwardIcon, title: 'Quality', desc: 'Current materials and digital diagnostics behind every treatment plan.' },
  { icon: GemIcon, title: 'Confidence', desc: 'A cosmetic specialty focus, because how your smile looks matters too.' },
];

const approach = ['Listen', 'Diagnose', 'Treat', 'Follow Up'];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our story" title="Care that puts you first." crumb="About Us" />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-stone to-chic-teal/10 aspect-[4/3]">
            <div className="flex h-full w-full items-center justify-center">
              <svg viewBox="0 0 400 340" width="100%" height="100%" className="opacity-60">
                <circle cx="200" cy="170" r="110" fill="#5FBF4D" opacity="0.1" />
                <circle cx="150" cy="120" r="50" fill="#2CB4C0" opacity="0.15" />
              </svg>
            </div>
          </div>
          <div>
            <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Since 2013</p>
            <h2 className="mb-5 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium">
              A Blantyre clinic built around gentle, modern care
            </h2>
            <p className="mb-4 text-slate">
              Dental Chic has been offering general and specialised dental care to families in
              Blantyre since 2013. From routine check-ups to cosmetic transformations, the practice
              is built on minimally invasive dentistry and current materials and technique.
            </p>
            <p className="text-slate">
              Located on Kidney Crescent, the clinic combines digital X-ray facilities with
              orthodontic and minor oral surgery services — everything a family needs under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone px-6 py-24">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Our philosophy</p>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium">What guides every visit</h2>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {philosophy.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="rounded-3xl bg-white p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-chic-teal/10 text-chic-teal">
                    <Icon size={26} />
                  </div>
                </div>
                <h3 className="mb-2 font-display text-xl font-medium">{p.title}</h3>
                <p className="text-[0.92rem] text-slate">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Our approach</p>
          <h2 className="mb-12 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium">
            A simple, consistent process
          </h2>
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            {approach.map((step, i) => (
              <div key={step} className="flex items-center gap-8">
                <span className="font-display text-lg font-medium text-ink">{step}</span>
                {i < approach.length - 1 && <span className="hidden text-chic-green sm:inline">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-stone px-6 py-24">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Meet the team</p>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium">The people behind your smile</h2>
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
              Leads Dental Chic&apos;s clinical work with a specialist interest in cosmetic
              dentistry, offering minimally invasive general care alongside orthodontics and minor
              oral surgery for patients across Blantyre.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 md:justify-start">
              {['Cosmetic Dentistry', 'Orthodontics', 'Minor Oral Surgery'].map((t) => (
                <span key={t} className="rounded-full bg-stone px-3.5 py-1.5 text-[0.8rem] font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-center text-[0.82rem] text-slate">
          More team profiles will be added here as the clinic grows.
        </p>
      </section>

      <section className="bg-ink px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 font-display text-[clamp(1.7rem,3vw,2.3rem)] font-medium">
            Come experience Dental Chic.
          </h2>
          <p className="mb-8 text-white/70">
            Professional, compassionate dental care designed around you.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-chic-green px-8 py-4 text-base font-bold text-ink transition-all hover:-translate-y-px"
            >
              Book an Appointment
            </Link>
            <a
              href="https://wa.me/265998951880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/30 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/10"
            >
              <MessageCircleIcon size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
