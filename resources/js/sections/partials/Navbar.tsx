import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import './partials.css';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Store', href: '/#store' },
  { label: 'News', href: '/#news' },
  { label: 'Contact Us', href: '/#contact' },
];

export default function Navbar() {
  const rootRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-nav-animate]',
        { y: -18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: 'power3.out', delay: 0.15 },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header ref={rootRef} className="site-nav">
      <div className="site-nav__inner">
        <a href="/" className="site-nav__brand" data-nav-animate aria-label="Maison Neige home">
          <span className="site-nav__brand-name">Maison Neige</span>
          <span className="site-nav__brand-sub">Café &amp; Slow Bar</span>
        </a>

        <nav className="site-nav__links" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="site-nav__link" data-nav-animate>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-nav__actions" data-nav-animate>
          <a href="/#contact" className="site-nav__cta">
            Reserve a table
          </a>
          <button
            type="button"
            className="site-nav__menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <nav className={`site-nav__mobile${open ? ' is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
        {links.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
