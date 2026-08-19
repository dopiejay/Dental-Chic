export default function TrustIntro() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div aria-hidden="true" className="overflow-hidden rounded-3xl bg-stone">
          <svg viewBox="0 0 400 340" width="100%" height="100%">
            <rect width="400" height="340" fill="#EDEEEA" />
            <circle cx="150" cy="140" r="60" fill="#1B1F1D" opacity="0.08" />
            <circle cx="270" cy="220" r="90" fill="#5FBF4D" opacity="0.12" />
            <path
              d="M150 200c10-30 40-40 60-20s10 60-20 70-50-20-40-50z"
              fill="none"
              stroke="#2CB4C0"
              strokeWidth="3"
            />
          </svg>
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
            <Stat value="2013" label="Established" />
            <Stat value="1" label="Trusted Location" />
            <Stat value="6+" label="Services Offered" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <strong className="block font-display text-2xl">{value}</strong>
      <span className="text-[0.78rem] text-slate">{label}</span>
    </div>
  );
}
