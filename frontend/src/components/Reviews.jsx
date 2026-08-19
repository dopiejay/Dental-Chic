import { StarIcon } from './Icons';

const reviews = [
  {
    quote: 'Absolutely fantastic experience! The team made me feel so comfortable and the results exceeded my expectations. Highly recommend Dental Chic.',
    author: 'Grace M.',
    rating: 5,
  },
  {
    quote: 'My children actually look forward to their dental visits now. Dr. Yusuf is incredibly patient and gentle with kids. We love this clinic.',
    author: 'Chimwemwe K.',
    rating: 5,
  },
  {
    quote: 'Professional, modern, and genuinely caring. The digital X-ray was quick and the whole process was seamless. Best dental experience in Blantyre.',
    author: 'Thandizo P.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ink px-6 py-24 text-white">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green uppercase">Patient Testimonials</p>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium text-white">
          Real experiences. Real smiles.
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
        {reviews.map((r, i) => (
          <blockquote key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6.5">
            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: r.rating }).map((_, j) => (
                <StarIcon key={j} size={14} className="text-chic-green" filled />
              ))}
            </div>
            <p className="mb-3.5 text-[0.95rem] italic text-white/90">&ldquo;{r.quote}&rdquo;</p>
            <cite className="text-[0.82rem] text-chic-teal not-italic">— {r.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
