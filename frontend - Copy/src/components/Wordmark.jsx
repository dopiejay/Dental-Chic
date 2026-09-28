import { Link } from 'react-router-dom';
import ToothIcon from './ToothIcon';

export default function Wordmark({ light = false }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2 font-display text-xl font-medium ${light ? 'text-white' : 'text-ink'}`}
    >
      <ToothIcon className="text-chic-teal" size={26} />
      <span>
        Dental<em className="not-italic text-chic-green">Chic</em>
      </span>
    </Link>
  );
}
