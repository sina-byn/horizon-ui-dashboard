// * react-helmet-async
import { Helmet, HelmetProvider } from 'react-helmet-async';

// * components
import SignInForm from '../features/SignIn/SignInForm';
import SignInBanner from '../features/SignIn/SignInBanner';

const SignIn = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <main className='sign-in-page flex items-center justify-end md:flex-row transition-all duration-300 dark:bg-d-primary-dark px-4 md:px-0'>
        <SignInBanner>
          <SignInForm />
        </SignInBanner>
      </main>
    </HelmetProvider>
  );
};

export default SignIn;
