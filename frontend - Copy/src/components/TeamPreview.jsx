import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './Icons';
const doctorImage = 'images/imagePlaceholder.jpg';

const teamRoles = [
  { title: 'Dental Assistants', desc: 'Chairside support across general, cosmetic, and orthodontic treatments.' },
  { title: 'Clinic Support', desc: 'Sterilisation, treatment prep, and everything behind a safe, smooth visit.' },
  { title: 'Front Desk Team', desc: 'Your first hello — appointments, reminders, and questions answered.' },
];

export default function TeamPreview() {
  return (
    <section id="team" className="bg-paper px-6 py-24">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Meet the team</p>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium">The hands behind your smile</h2>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl border border-stone bg-white md:grid-cols-[280px_1fr]">
        {/* Photo */}
        <div className="relative h-full min-h-[300px] overflow-hidden">
          <img
            src={doctorImage}
            alt="Dr. Shabana Yusuf — Founder and Lead Dentist at Dental Chic"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
        </div>

        {/* Info */}
        <div className="p-8 text-center md:text-left">
          <h3 className="mb-1.5 font-display text-2xl font-medium">Dr. Shabana Yusuf</h3>
          <p className="mb-3.5 text-sm font-bold text-chic-green-deep">Founder &amp; Lead Dentist · Cosmetic &amp; General Dentistry</p>
          <p className="mb-4.5 text-slate leading-relaxed">
            Founder of Dental Chic, she leads the clinical team with a specialist interest in
            cosmetic dentistry — offering minimally invasive general care alongside orthodontics
            and minor oral surgery for patients across Blantyre.
          </p>
          <div className="mb-5 flex flex-wrap justify-center gap-2.5 md:justify-start">
            {['Cosmetic Dentistry', 'Orthodontics', 'Minor Oral Surgery'].map((t) => (
              <span key={t} className="rounded-full bg-stone px-3.5 py-1.5 text-[0.8rem] font-semibold text-ink">
                {t}
              </span>
            ))}
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-bold text-chic-green-deep transition-colors hover:text-chic-teal"
          >
            Meet the full team <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-5 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
        {teamRoles.map((r) => (
          <div key={r.title} className="rounded-3xl border border-stone bg-white p-6 text-center">
            <h4 className="mb-1 font-display text-base font-medium text-ink">{r.title}</h4>
            <p className="text-[0.82rem] text-slate leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
