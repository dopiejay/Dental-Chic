import { Link } from 'react-router-dom';
import { StethoscopeIcon, SparklesIcon, SyringeIcon, ScanLineIcon, BabyIcon, WrenchIcon } from './Icons';

const services = [
  { icon: StethoscopeIcon, title: 'General Dentistry', desc: 'Routine dental care and preventive treatment — check-ups, cleanings, and fillings that keep small problems from becoming big ones.', color: 'from-chic-teal/20 to-chic-green/10', iconColor: 'text-chic-teal bg-chic-teal/10' },
  { icon: SparklesIcon, title: 'Cosmetic Dentistry', desc: "Enhance the appearance of your smile with veneers, whitening, and full smile makeovers — Dr. Yusuf's specialist focus.", color: 'from-amber-100/60 to-orange-50/40', iconColor: 'text-amber-600 bg-amber-100/60' },
  { icon: SyringeIcon, title: 'Orthodontics', desc: 'Straighter teeth and improved alignment with fixed and aligner braces, for children and adults, tracked visit by visit.', color: 'from-blue-100/60 to-sky-50/40', iconColor: 'text-blue-600 bg-blue-100/60' },
  { icon: WrenchIcon, title: 'Crowns & Bridges', desc: 'Zirconia and E-max restorations built to match your natural bite and shade.', color: 'from-purple-100/60 to-pink-50/40', iconColor: 'text-purple-600 bg-purple-100/60' },
  { icon: BabyIcon, title: "Children's Dentistry", desc: 'Gentle care designed for younger patients in a comfortable environment.', color: 'from-pink-100/60 to-rose-50/40', iconColor: 'text-pink-600 bg-pink-100/60' },
  { icon: ScanLineIcon, title: 'Digital X-Ray', desc: 'Modern, on-site diagnostic imaging for faster and more accurate diagnosis — no separate referral needed.', color: 'from-emerald-100/60 to-teal-50/40', iconColor: 'text-emerald-600 bg-emerald-100/60' },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">What we offer</p>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium">
          Dental care for every <span className="italic text-chic-teal">stage</span> of your smile.
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <article
              key={s.title}
              className={`group relative overflow-hidden rounded-3xl border border-stone/80 bg-gradient-to-br ${s.color} p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-chic-teal/5`}
            >
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-white/40 blur-2xl transition-all group-hover:scale-150" />
              <div className="relative z-10">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${s.iconColor}`}>
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 font-display text-[1.15rem] font-medium text-ink">{s.title}</h3>
                <p className="mb-5 flex-1 text-[0.9rem] text-slate leading-relaxed">{s.desc}</p>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-chic-green-deep transition-colors group-hover:text-chic-teal"
                >
                  Book This Service <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
