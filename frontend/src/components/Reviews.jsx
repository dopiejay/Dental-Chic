const placeholders = [
  'Sample review placeholder — swap in a real patient quote before this goes live.',
  'Sample review placeholder — swap in a real patient quote before this goes live.',
  'Sample review placeholder — swap in a real patient quote before this goes live.',
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ink px-6 py-24 text-white">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green uppercase">Patients say</p>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium text-white">
          100% recommend rate on Facebook
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
        {placeholders.map((quote, i) => (
          <blockquote key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6.5">
            <p className="mb-3.5 text-[0.95rem] italic">&ldquo;{quote}&rdquo;</p>
            <cite className="text-[0.82rem] text-chic-teal not-italic">— Placeholder patient</cite>
          </blockquote>
        ))}
      </div>
      <p className="mt-7 text-center text-[0.78rem] text-white/50">
        * Sample copy for concept purposes — real reviews to be pulled from Facebook with permission.
      </p>
    </section>
  );
}
