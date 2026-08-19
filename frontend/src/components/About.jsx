const steps = [
  { num: '01', title: 'Minimally invasive by default', desc: 'Modern technique first — we treat conservatively before we treat aggressively.' },
  { num: '02', title: 'Cosmetic specialty', desc: "Dr. Yusuf's particular focus, from whitening to full smile design." },
  { num: '03', title: 'Everything on site', desc: 'Digital X-ray, restorations, and orthodontics — no bouncing between clinics.' },
];

export default function About() {
  return (
    <section id="about" className="bg-stone px-6 py-24">
      <div className="mx-auto mb-16 max-w-xl text-center">
        <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Why families choose us</p>
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

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl bg-white p-7">
              <span className="mb-2.5 block font-display text-[1.4rem] text-chic-teal italic">{s.num}</span>
              <h4 className="mb-2 font-display text-[1.05rem] font-medium">{s.title}</h4>
              <p className="text-[0.9rem] text-slate">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
