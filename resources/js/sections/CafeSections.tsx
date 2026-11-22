import './cafe.css';

const menu = [
  { name: 'Neige Latte', note: 'Honey, sea salt, slow-poured milk', price: '48k' },
  { name: 'Nocturne Espresso', note: 'Dark chocolate, brown sugar, quiet finish', price: '32k' },
  { name: 'Snow Butter Croissant', note: 'Laminated by hand, cultured butter', price: '42k' },
  { name: 'Cinnamon morning bun', note: 'Orange zest, raw sugar, warm spice', price: '46k' },
];

const news = [
  { date: '12 Nov 2026', title: 'Winter blend is back', excerpt: 'A softer, sweeter roast for the rainy season.' },
  { date: '02 Nov 2026', title: 'Slow Sunday sessions', excerpt: 'Vinyl, filter coffee, and no rush until 4pm.' },
];

export default function CafeSections() {
  return (
    <>
      <section id="about" className="cafe-section cafe-section--about">
        <div className="cafe-section__inner">
          <p className="cafe-section__eyebrow">01 — Our story</p>
          <h2>A little warmth when the world turns cold.</h2>
          <div className="cafe-section__grid">
            <p>
              Maison Neige began as a small counter with one grinder and a strict rule: never hurry a good cup. Today it is a quiet room of worn wood, soft light, and the steady sound of the kettle.
            </p>
            <p>
              We source seasonal beans, bake in small batches, and keep the menu short enough to care about every detail. Come for the coffee. Stay for the second cup.
            </p>
          </div>
        </div>
      </section>

      <section id="menu" className="cafe-section cafe-section--menu">
        <div className="cafe-section__inner">
          <p className="cafe-section__eyebrow">02 — The menu</p>
          <h2>Made slowly. Served simply.</h2>
          <div className="cafe-menu">
            {menu.map((item) => (
              <article key={item.name} className="cafe-menu__item">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.note}</p>
                </div>
                <span>{item.price}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="store" className="cafe-section cafe-section--store">
        <div className="cafe-section__inner">
          <p className="cafe-section__eyebrow">03 — Store</p>
          <h2>Take a little of the cold with you.</h2>
          <p>
            Bags of our seasonal roast, house-made granola, ceramic cups, and a small range of winter blends — available at the counter and online.
          </p>
          <a href="/#contact" className="cafe-section__link">Ask about today&apos;s selection →</a>
        </div>
      </section>

      <section id="news" className="cafe-section cafe-section--news">
        <div className="cafe-section__inner">
          <p className="cafe-section__eyebrow">04 — News</p>
          <h2>From the counter.</h2>
          <div className="cafe-news">
            {news.map((entry) => (
              <article key={entry.title}>
                <span>{entry.date}</span>
                <h3>{entry.title}</h3>
                <p>{entry.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="cafe-section cafe-section--contact">
        <div className="cafe-section__inner">
          <p className="cafe-section__eyebrow">05 — Visit us</p>
          <h2>Save yourself a seat.</h2>
          <p>Open daily, 07:00 — 19:00. 12 Rue des Flocons, Bandung.</p>
          <a href="mailto:bonjour@maisonneige.cafe" className="cafe-section__link">Reserve a table →</a>
        </div>
      </section>
    </>
  );
}
