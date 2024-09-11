import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-cyan-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
          <Link to="/data-table" className="text-sm font-semibold leading-6 text-gray-900">Data Table</Link>
          <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">Login</Link>
        </div>
      </nav>
    </header>
  );
}