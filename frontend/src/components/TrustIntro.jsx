import { AwardIcon, MapPinIcon, LayersIcon } from './Icons';

export default function TrustIntro() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-stone to-chic-teal/10 aspect-[4/3]">
          <div className="flex h-full w-full items-center justify-center">
            <svg viewBox="0 0 400 340" width="100%" height="100%" className="opacity-60">
              <circle cx="200" cy="170" r="110" fill="#5FBF4D" opacity="0.1" />
              <circle cx="150" cy="120" r="50" fill="#2CB4C0" opacity="0.15" />
              <g transform="translate(140,90)">
                <path
                  d="M60 4c-12 0-18 6-24 6s-9-3-15-3c-9 0-12 9-12 18 0 18 9 30 12 48 2 9 5 15 10 15 6 0 6-12 9-24 2-8 4-12 8-12s6 4 8 12c3 12 3 24 9 24 5 0 8-6 10-15 3-18 12-30 12-48 0-9-3-18-12-18-6 0-9 3-15 3s-12-6-24-6z"
                  fill="none"
                  stroke="#2CB4C0"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>

        <div>
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">
            Welcome to Dental Chic
          </p>
          <h2 className="mb-5 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium">
            More than treatment.
            <br />A better dental experience.
          </h2>
          <p className="mb-4 text-slate">
            Dental Chic has been part of Blantyre since 2013, offering general and specialised
            dental care for the whole family — minimally invasive dentistry, current materials,
            and a clinic that treats every visit like it matters.
          </p>
          <p className="mb-8 text-slate">
            Dr. Shabana Yusuf leads the practice with a particular focus on cosmetic dentistry,
            supported by digital X-ray facilities and orthodontic and minor oral surgery services
            on site.
          </p>

          <div className="flex gap-10">
            <Stat icon={<AwardIcon size={20} className="text-chic-teal" />} value="2013" label="Years of Experience" />
            <Stat icon={<MapPinIcon size={20} className="text-chic-teal" />} value="01" label="Trusted Location" />
            <Stat icon={<LayersIcon size={20} className="text-chic-teal" />} value="6+" label="Comprehensive Services" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div>
      <span className="mb-1 flex items-center gap-2">
        {icon}
        <strong className="block font-display text-2xl">{value}</strong>
      </span>
      <span className="text-[0.78rem] text-slate">{label}</span>
    </div>
  );
}
