import PixelSnow from '../components/PixelSnow/PixelSnow';

import './cafe.css';

export default function HeroSection() {
  return (
    <section className="cafe-hero">
      <PixelSnow
        color="#f6e7cf"
        variant="round"
        density={0.4}
        speed={0.55}
        wind={0.12}
        flakeSize={1}
        pixelSize={3}
        glow={0.55}
        mouseInteraction={true}
      />
      <div className="cafe-hero__content">
        <p className="cafe-hero__eyebrow">Café &amp; Slow Bar · Est. 2026</p>
        <h1 className="cafe-hero__title">
            Maison <em>Neige</em>
        </h1>
        <p className="cafe-hero__lede">
          Coffee poured with patience. Pastries made in small batches. A quiet room made for long conversations and slower mornings.
        </p>
        <div className="cafe-hero__actions">
          <a href="/#menu" className="cafe-hero__primary">Explore the menu</a>
          <a href="/#contact" className="cafe-hero__secondary">Reserve a table</a>
        </div>
      </div>
      <div className="cafe-hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="cafe-hero__scroll-line" />
      </div>
    </section>
  );
}
