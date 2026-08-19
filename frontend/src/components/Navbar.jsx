import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, MessageCircleIcon, PhoneIcon, MapPinIcon, ClockIcon } from './Icons';
import Wordmark from './Wordmark';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === '/';
  const showBg = !isHome || scrolled;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function isActive(to) {
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  }

  return (
    <header
      className={`z-50 transition-all duration-300 ${
        showBg
          ? 'sticky top-0 border-b border-stone bg-paper/95 backdrop-blur-md'
          : 'absolute top-0 left-0 right-0 border-b-0 bg-transparent'
      }`}
    >
      {/* TopBar — hidden when transparent on hero */}
      {showBg && (
        <div className="border-b border-stone/60 bg-stone/30 text-[0.78rem] text-slate">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-6 py-2">
            <a href="tel:+265998951880" className="flex items-center gap-1.5 transition-colors hover:text-ink">
              <PhoneIcon size={13} />
              +265 998 95 18 80
            </a>
            <span className="hidden text-stone sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <ClockIcon size={13} />
              Mon – Sat
            </span>
            <span className="hidden text-stone sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <MapPinIcon size={13} />
              Blantyre, Malawi
            </span>
          </div>
        </div>
      )}

      {/* Main nav */}
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-4">
        <div className="mr-auto">
          <Wordmark light={!showBg} />
        </div>

        <nav aria-label="Primary" className="hidden gap-7 text-[0.92rem] font-semibold md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`transition-colors ${
                isActive(l.to)
                  ? showBg ? 'text-chic-green-deep' : 'text-chic-green'
                  : showBg ? 'opacity-75 hover:opacity-100 text-ink' : 'text-white/80 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href="https://wa.me/265998951880"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors ${
              showBg
                ? 'bg-stone text-ink hover:bg-[#e2e4dd]'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            <MessageCircleIcon size={15} />
            WhatsApp
          </a>
          <Link
            to="/book"
            className={`rounded-full px-5 py-3 text-sm font-bold transition-all hover:-translate-y-px ${
              showBg
                ? 'bg-ink text-white hover:bg-chic-green-deep'
                : 'bg-chic-green text-ink hover:bg-white hover:text-chic-green-deep'
            }`}
          >
            Book Appointment
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 p-1.5 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <XIcon size={24} className={showBg ? '' : 'text-white'} />
          ) : (
            <MenuIcon size={24} className={showBg ? '' : 'text-white'} />
          )}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-b border-stone bg-paper px-6 pb-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-semibold ${isActive(l.to) ? 'text-chic-green-deep' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/265998951880"
            className="flex items-center justify-center gap-2 rounded-full bg-stone px-5 py-3 text-sm font-bold"
          >
            <MessageCircleIcon size={15} />
            WhatsApp Us
          </a>
          <Link
            to="/book"
            className="rounded-full bg-ink px-5 py-3 text-center text-sm font-bold text-white"
            onClick={() => setOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
