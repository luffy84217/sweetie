import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import ProgressBar from '../../components/ProgressBar';
import { signupConfig } from '../../config/signup';
import { selectSignUpStep, selectSignUpType } from '../../features/signup';

const SignUpEmailPage: NextPage = () => {
  const type = useSelector(selectSignUpType);
  const stepIdx = useSelector(selectSignUpStep);
  const StepComponent = signupConfig[type].components[stepIdx];

  return (
    <Layout>
      <Header />
      <main>
        <Container.Narrow className="flex flex-col items-center">
          <StepComponent />
          <ProgressBar steps={signupConfig[type].steps} currentStepIdx={stepIdx} />
        </Container.Narrow>
      </main>
    </Layout>
  );
};

export default SignUpEmailPage;
