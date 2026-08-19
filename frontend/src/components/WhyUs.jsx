import { SmileIcon, ShieldIcon, ClockIcon, CreditCardIcon } from './Icons';

const features = [
  {
    icon: SmileIcon,
    title: 'Gentle Approach',
    desc: 'Minimally invasive technique designed around your comfort — every visit, every treatment.',
    color: 'bg-chic-teal/10 text-chic-teal',
  },
  {
    icon: ShieldIcon,
    title: 'Modern Equipment',
    desc: 'Digital X-ray, current materials, and on-site diagnostics — accurate and efficient.',
    color: 'bg-emerald-100/60 text-emerald-600',
  },
  {
    icon: ClockIcon,
    title: 'Convenient Hours',
    desc: 'Open Monday to Friday, 9am to 4pm, plus Saturday mornings for working patients.',
    color: 'bg-amber-100/60 text-amber-600',
  },
  {
    icon: CreditCardIcon,
    title: 'Transparent Pricing',
    desc: 'Clear costs upfront, no surprises — plus RESMAID scheme accepted.',
    color: 'bg-blue-100/60 text-blue-600',
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-stone px-6 py-24">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#1B1F1D" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Why Dental Chic</p>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium">
            A clinic that puts <span className="italic text-chic-teal">you</span> first.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative rounded-3xl bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-chic-teal/5"
              >
                <div className="absolute top-0 left-1/2 h-1 w-12 -translate-x-1/2 rounded-b-full bg-chic-teal/40 transition-all group-hover:w-20 group-hover:bg-chic-teal" />
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${f.color}`}>
                  <Icon size={26} />
                </div>
                <h3 className="mb-2 font-display text-lg font-medium text-ink">{f.title}</h3>
                <p className="text-[0.88rem] text-slate leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
