import { AwardIcon, MapPinIcon, LayersIcon } from './Icons';
const aboutImage = 'images/destist.jpg';

export default function TrustIntro() {
  return (
    <section className="bg-paper px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        {/* Image side */}
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={aboutImage}
            alt="Dental care at Dental Chic"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-chic-green-deep/30 to-transparent" />
          {/* Floating badge */}
          <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
            <p className="text-[0.72rem] font-bold tracking-wider text-chic-green-deep uppercase">Trusted since</p>
            <p className="font-display text-2xl font-medium text-ink">2013</p>
          </div>
        </div>

        {/* Text side */}
        <div>
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">
            Welcome to Dental Chic
          </p>
          <h2 className="mb-5 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium">
            More than treatment.<br />A better dental experience.
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
