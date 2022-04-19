import type { NextPage } from 'next';
import { useState } from 'react';
import CTASection from '../components/LandingPage/CTASection';
import FeatureSection from '../components/LandingPage/FeatureSection';
import HeroSection from '../components/LandingPage/HeroSection';
import Navbar from '../components/LandingPage/Navbar';
import SignUpModal from '../components/overlays/SignInModal';
import Layout from '../components/Layout';

const IndexPage: NextPage = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <Layout className="w-full h-full bg-background dark:bg-background-dark">
      <header className="fixed top-0 right-0 left-0 z-10">
        <Navbar onSignUpClick={() => setIsSignUpModalOpen(true)} />
      </header>
      <main>
        <HeroSection />
        <FeatureSection />
        <CTASection />
      </main>
      <SignUpModal isOpen={isSignUpModalOpen} onClose={() => setIsSignUpModalOpen(false)} />
    </Layout>
  );
};

export default IndexPage;
