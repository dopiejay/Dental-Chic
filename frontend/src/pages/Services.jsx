import { Link } from 'react-router-dom';
import { StethoscopeIcon, SparklesIcon, SyringeIcon, ScanLineIcon, BabyIcon, WrenchIcon, CalendarIcon } from '../components/Icons';
import PageHero from '../components/PageHero';

const services = [
  { icon: StethoscopeIcon, title: 'General Dentistry', desc: 'Routine dental care and preventive treatment — check-ups, cleanings, and fillings that keep small problems from becoming big ones.', color: 'from-chic-teal/20 to-chic-green/10', iconColor: 'text-chic-teal bg-chic-teal/10', img: '/images/general.jpg' },
  { icon: SparklesIcon, title: 'Cosmetic Dentistry', desc: "Enhance the appearance of your smile with veneers, whitening, and full smile makeovers — Dr. Yusuf's specialist focus.", color: 'from-amber-100/60 to-orange-50/40', iconColor: 'text-amber-600 bg-amber-100/60', img: '/images/cosmetic.jpg' },
  { icon: SyringeIcon, title: 'Orthodontics', desc: 'Straighter teeth and improved alignment with fixed and aligner braces, for children and adults, tracked visit by visit.', color: 'from-blue-100/60 to-sky-50/40', iconColor: 'text-blue-600 bg-blue-100/60', img: '/images/orthodontics.jpg' },
  { icon: WrenchIcon, title: 'Crowns & Bridges', desc: 'Zirconia and E-max restorations built to match your natural bite and shade.', color: 'from-purple-100/60 to-pink-50/40', iconColor: 'text-purple-600 bg-purple-100/60', img: '/images/crowns-bridges.jpg' },
  { icon: BabyIcon, title: "Children's Dentistry", desc: 'Gentle care designed for younger patients in a comfortable environment.', color: 'from-pink-100/60 to-rose-50/40', iconColor: 'text-pink-600 bg-pink-100/60', img: '/images/child.jpg' },
  { icon: ScanLineIcon, title: 'Digital X-Ray', desc: 'Modern, on-site diagnostic imaging for faster and more accurate diagnosis — no separate referral needed.', color: 'from-emerald-100/60 to-teal-50/40', iconColor: 'text-emerald-600 bg-emerald-100/60', img: '/images/xray.jpg' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What we treat" title="Dental care for every stage of your smile." crumb="Services" image="/images/general.jpg" />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className={`group relative overflow-hidden rounded-3xl border border-stone/80 bg-gradient-to-br ${s.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-chic-teal/5`}
              >
                {/* Service image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl ${s.iconColor} shadow-lg`}>
                    <Icon size={20} />
                  </div>
                </div>

                <div className="relative z-10 p-6">
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

      <section className="bg-gradient-to-r from-chic-green-deep to-chic-teal px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 font-display text-[clamp(1.7rem,3vw,2.3rem)] font-medium">
            Not sure which service you need?
          </h2>
          <p className="mb-8 text-white/80">
            Book a consultation and we&apos;ll recommend the right treatment for you.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-chic-green-deep transition-all hover:-translate-y-px hover:bg-white/90"
          >
            <CalendarIcon size={18} />
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
