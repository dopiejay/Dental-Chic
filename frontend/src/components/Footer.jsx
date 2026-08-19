import { Link } from 'react-router-dom';
import Wordmark from './Wordmark';

const links = [
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/#book', label: 'Book' },
  { to: '/#find-us', label: 'Find Us' },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pt-15 pb-8 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-2 flex justify-center">
          <Wordmark light />
        </div>
        <p className="mb-6.5 font-display text-white/60 italic">Where beautiful smiles begin.</p>
        <div className="mb-6.5 flex flex-wrap justify-center gap-5.5 text-[0.88rem] font-semibold">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="opacity-80 hover:opacity-100">
              {l.label}
            </Link>
          ))}
        </div>
        <p className="text-[0.74rem] text-white/35">
          Concept design — not affiliated with or endorsed by Dental Chic. Prepared as a proposal.
        </p>
      </div>
    </footer>
  );
}
