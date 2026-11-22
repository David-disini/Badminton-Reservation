import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './partials.css';

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/#about' },
      { label: 'Menu', href: '/#menu' },
      { label: 'Store', href: '/#store' },
      { label: 'News', href: '/#news' },
    ],
  },
  {
    title: 'Visit',
    links: [
      { label: 'Reserve a table', href: '/#contact' },
      { label: 'Our space', href: '/#about' },
      { label: 'Seasonal menu', href: '/#menu' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
];

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
];

export default function Footer() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-footer-animate]',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.07, ease: 'power3.out' },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={rootRef} className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />
      <div className="site-footer__inner">
        <div className="site-footer__brand" data-footer-animate>
          <div className="site-footer__logo">
            <span>Maison Neige</span>
          </div>
          <p>
            A quiet corner for slow mornings, careful coffee, and the kind of pastry that makes you stay a little longer.
          </p>
          <div className="site-footer__socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="site-footer__column" data-footer-animate>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="site-footer__contact" data-footer-animate>
          <h3>Contact</h3>
          <a href="mailto:bonjour@maisonneige.cafe">bonjour@maisonneige.cafe</a>
          <a href="tel:+62123456789">+62 1234 5678 9</a>
          <p>12 Rue des Flocons, Bandung</p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Maison Neige Café. All rights reserved.</span>
        <div>
          <a href="/#privacy">Privacy</a>
          <a href="/#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
