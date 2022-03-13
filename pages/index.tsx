import type { NextPage } from 'next';
import Footer from '../components/Footer';
import CTASection from '../components/LandingPage/CTASection';
import FeatureSection from '../components/LandingPage/FeatureSection';
import HeroSection from '../components/LandingPage/HeroSection';
import Navbar from '../components/LandingPage/Navbar';

const IndexPage: NextPage = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-black">
      <header className="fixed top-0 right-0 left-0 z-10">
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <FeatureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
};

export default IndexPage;
