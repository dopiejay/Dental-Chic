import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './Icons';

const doctorImage = 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600';

export default function TeamPreview() {
  return (
    <section id="team" className="bg-paper px-6 py-24">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Meet the dentist</p>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium">The hand behind your smile</h2>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl border border-stone bg-white md:grid-cols-[280px_1fr]">
        {/* Photo */}
        <div className="relative h-full min-h-[300px] overflow-hidden">
          <img
            src={doctorImage}
            alt="Dr. Shabana Yusuf — Lead Dentist at Dental Chic"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
        </div>

        {/* Info */}
        <div className="p-8 text-center md:text-left">
          <h3 className="mb-1.5 font-display text-2xl font-medium">Dr. Shabana Yusuf</h3>
          <p className="mb-3.5 text-sm font-bold text-chic-green-deep">Lead Dentist · Cosmetic &amp; General Dentistry</p>
          <p className="mb-4.5 text-slate leading-relaxed">
            Leads Dental Chic&apos;s clinical work with a specialist interest in cosmetic dentistry,
            offering minimally invasive general care alongside orthodontics and minor oral surgery
            for patients across Blantyre.
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
    </section>
  );
}
