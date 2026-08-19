import { ShieldIcon, SparklesIcon, HeartIcon, MonitorIcon } from './Icons';

const features = [
  { icon: ShieldIcon, title: 'Comprehensive Care', desc: 'Everything from routine checkups to specialised treatment — all under one roof.' },
  { icon: SparklesIcon, title: 'Cosmetic Specialty', desc: "Dr. Yusuf's particular focus, from whitening to full smile design." },
  { icon: HeartIcon, title: 'Patient-Centred Care', desc: 'Gentle, minimally invasive technique — treatment that puts you at ease first.' },
  { icon: MonitorIcon, title: 'Modern Dentistry', desc: 'Digital X-ray, current materials, and the latest techniques on site.' },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-stone px-6 py-24">
      <div className="mx-auto mb-16 max-w-xl text-center">
        <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Why patients choose Dental Chic</p>
        <h2 className="mb-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium">A modern clinic, a gentle hand</h2>
        <p className="text-[1.05rem] text-slate">
          Dental Chic has been part of Blantyre since 2013 — minimally invasive dentistry, current
          materials, and a clinic that treats every visit like it matters.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <svg
          className="pointer-events-none absolute -top-8 left-0 hidden w-full md:block"
          viewBox="0 0 900 120"
          preserveAspectRatio="none"
          height="120"
          aria-hidden="true"
        >
          <path d="M20 100 Q450 -20 880 100" fill="none" stroke="#D8DAD3" strokeWidth="2" />
        </svg>

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-2xl bg-white p-7">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-chic-teal/10 text-chic-teal">
                  <Icon size={20} />
                </div>
                <h4 className="mb-2 font-display text-[1.05rem] font-medium">{f.title}</h4>
                <p className="text-[0.9rem] text-slate">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
