import { Footer, Navbar } from '../sections/partials';
import HeroSection from '../sections/HeroSection';

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
