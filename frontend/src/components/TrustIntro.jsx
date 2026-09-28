import { Link } from 'react-router-dom';
import { StethoscopeIcon, ShieldIcon, ClockIcon } from './Icons';

const aboutImage = '/images/welcome.jpg';

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
        <Icon size={20} className="text-hope-accent" />
      </span>
      <div>
        <p className="font-display text-2xl font-medium text-ink">{value}</p>
        <p className="text-[0.78rem] text-slate">{label}</p>
      </div>
    </div>
  );
}

export default function TrustIntro() {
  return (
    <section className="bg-paper px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        {/* Image side */}
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={aboutImage}
            alt="Patient care at Hope Dental Surgery"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-hope-teal/30 to-transparent" />
          {/* Floating badge */}
          <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
            <p className="text-[0.72rem] font-bold tracking-wider text-hope-teal uppercase">Located at</p>
            <p className="font-display text-2xl font-medium text-ink">Chichiri Mall</p>
          </div>
        </div>

        {/* Text side */}
        <div>
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-hope-sky uppercase">
            Welcome to Hope Dental Surgery
          </p>
          <h2 className="mb-5 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-tight">
            A dental team built around <span className="italic text-hope-accent">your care.</span>
          </h2>
          <p className="mb-4 text-slate">
            Hope Dental Surgery is a private dental practice at Chichiri Shopping Centre in
            Blantyre, bringing dental treatments, tooth replacement and orthodontic care
            together in one accessible location.
          </p>
          <p className="mb-8 text-slate">
            From routine and preventive care to crowns, dentures and braces, our dedicated team
            of dentists and dental therapists keeps patient comfort at the heart of every visit.
          </p>

          <div className="mb-9 flex flex-wrap gap-10">
            <Stat icon={StethoscopeIcon} value="200+" label="Treatments" />
            <Stat icon={ShieldIcon} value="01" label="Central Clinic" />
            <Stat icon={ClockIcon} value="6+" label="Days Open" />
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-hope-teal"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
