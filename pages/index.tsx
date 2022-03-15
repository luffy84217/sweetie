import type { NextPage } from 'next';
import { useState } from 'react';
import Footer from '../components/Footer';
import CTASection from '../components/LandingPage/CTASection';
import FeatureSection from '../components/LandingPage/FeatureSection';
import HeroSection from '../components/LandingPage/HeroSection';
import Navbar from '../components/LandingPage/Navbar';
import SignUpModal from '../components/LandingPage/SignUpModal';

const IndexPage: NextPage = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <>
      <div className="w-full h-full bg-white dark:bg-black">
        <header className="fixed top-0 right-0 left-0 z-10">
          <Navbar onSignUpClick={() => setIsSignUpModalOpen(true)} />
        </header>
        <main>
          <HeroSection />
          <FeatureSection />
          <CTASection />
        </main>
        <Footer />
      </div>
      <SignUpModal isOpen={isSignUpModalOpen} onClose={() => setIsSignUpModalOpen(false)} />
    </>
  )
};

export default IndexPage;
