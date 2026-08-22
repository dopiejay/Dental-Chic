import { Link } from 'react-router-dom';
import { StethoscopeIcon, SparklesIcon, SyringeIcon } from './Icons';

const services = [
  {
    icon: StethoscopeIcon,
    title: 'General Dentistry',
    desc: 'Routine dental care and preventive treatment — check-ups, cleanings, and fillings that keep small problems from becoming big ones.',
    color: 'from-chic-teal/20 to-chic-green/10',
    iconColor: 'text-chic-teal bg-chic-teal/10',
    img: '/images/general.jpg',
  },
  {
    icon: SparklesIcon,
    title: 'Cosmetic Dentistry',
    desc: "Enhance the appearance of your smile with veneers, whitening, and full smile makeovers — a clinic specialty led by Dr. Yusuf.",
    color: 'from-amber-100/60 to-orange-50/40',
    iconColor: 'text-amber-600 bg-amber-100/60',
    img: '/images/cosmetic.jpg',
  },
  {
    icon: SyringeIcon,
    title: 'Orthodontics',
    desc: 'Straighter teeth and improved alignment with fixed and aligner braces, for children and adults, tracked visit by visit.',
    color: 'from-blue-100/60 to-sky-50/40',
    iconColor: 'text-blue-600 bg-blue-100/60',
    img: '/images/orthodontics.jpg',
  },
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

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <article
              key={s.title}
              className={`group relative overflow-hidden rounded-3xl border border-stone/80 bg-gradient-to-br ${s.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-chic-teal/5`}
            >
              {/* Service image */}
              <div className="relative h-48 overflow-hidden">
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

      {/* View All button */}
      <div className="mt-12 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-8 py-4 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
        >
          View All Services →
        </Link>
      </div>
    </section>
  );
}
