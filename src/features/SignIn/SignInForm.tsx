import { z } from 'zod';

// * components
import Form from '../../components/Form';
import Button from '../../components/Button';
import InputField from '../../components/Form/InputField';
import Checkbox from '../../components/Checkbox';
import Link from '../../components/Link';
import Card from '../../components/Card';
import ThemeSwitch from '../../components/ThemeSwitch';

// * schemas
const schema = z.object({
  email: z.string().email('invalid email address'),
  password: z
    .string()
    .min(1, 'required - must include uppercase, and numeric characters')
    .min(8, 'must contain at least 8 characters')
    .superRefine((pass, ctx) => {
      if (!/(\d|[A-Z])/g.test(pass)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'must include uppercase, and numeric characters',
        });
      }

      if (!/\d/g.test(pass)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'must include numbers',
        });
      }

      if (!/[A-Z]/g.test(pass)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'must include uppercase letters',
        });
      }
    }),
  keepLoggedIn: z.boolean().optional(),
});

// * types
type SignInData = {
  email: string;
  password: string;
  keepLoggedIn?: boolean;
};

const SignInForm = () => {
  const submitHandler = (data: SignInData) => {
    console.log(data);
  };

  return (
    <Card
      darkModeClassName='dark:bg-d-primary-dark'
      className='sign-in-form justify-center md:h-screen w-full max-w-[420px] md:max-w-none md:w-1/2 md:fixed inset-0 md:overflow-y-auto'
    >
      <div className='content-wrap flex flex-col gap-y-4'>
        <Link
          href='/'
          size='none'
          variant='none'
          className='flex text-xs text-neutral items-center gap-x-2 font-medium'
        >
          <i className='fa-solid fa-chevron-left fa-xs mt-0.5' />
          Back to dashboard
        </Link>
        <div className='form-wrap grow flex flex-col justify-center gap-y-4 w-full max-w-[400px]'>
          <header className='form-header flex justify-between'>
            <h1 className='page-title text-primary dark:text-white text-3xl font-bold capitalize'>
              Sign In
            </h1>
            <ThemeSwitch className='flex sm:hidden bg-gradient-to-br from-[#868CFF] to-primary-light text-white' />
          </header>
          <span className='text-neutral text-sm -mt-2 mb-3'>
            Enter your email and password to sign in!
          </span>
          <Button
            variant='none'
            className='flex items-center justify-center gap-x-2 bg-light dark:bg-d-light text-primary dark:text-white font-semibold py-3'
          >
            <img src='/google.png' alt='google icon' className='w-5' />
            Sign in with Google
          </Button>
          <div className='icons-8-link flex items-center gap-x-0.5 text-neutral text-xs -mt-3'>
            <a
              target='_blank'
              rel='noreferrer noopener'
              className='text-primary-light dark:text-white font-medium underline'
              href='https://icons8.com/icon/17949/google'
            >
              Google
            </a>
            icon by
            <a
              target='_blank'
              rel='noreferrer noopener'
              className='text-primary-light dark:text-white font-medium underline'
              href='https://icons8.com'
            >
              Icons8
            </a>
          </div>
          <div className='separator flex items-center justify-between my-3'>
            <div className='line w-full h-[0.5px] bg-gray-400/30' />
            <span className='text-neutral text-xs px-4'>or</span>
            <div className='line w-full h-[0.5px] bg-gray-400/30' />
          </div>
          <Form<SignInData, typeof schema>
            schema={schema}
            onSubmit={submitHandler}
            className='w-full'
            options={{ defaultValues: { keepLoggedIn: true } }}
          >
            {({ register, setValue, formState: { errors } }) => {
              const keepLoggedInToggler = (checked: boolean) =>
                setValue('keepLoggedIn', checked);

              return (
                <>
                  <InputField
                    label='email*'
                    placeholder='mail@simmmple.com'
                    registeration={register('email')}
                    error={errors.email}
                  />
                  <InputField
                    label='password*'
                    placeholder='Min. 8 Characters'
                    registeration={register('password')}
                    error={errors.password}
                  />
                  <div className='controls flex justify-between -my-3'>
                    <label className='flex items-center gap-x-1 text-xs dark:text-white cursor-pointer'>
                      <Checkbox
                        defaultChecked={true}
                        onCheckChange={keepLoggedInToggler}
                      />
                      Keep me logged in
                    </label>
                    <Link
                      href='#'
                      size='none'
                      variant='transparent'
                      className='text-primary-light dark:text-white text-xs capitalize'
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <Button
                    type='submit'
                    size='sm'
                    style={{ paddingBlock: '0.8rem' }}
                  >
                    Sign In
                  </Button>
                  <div className='flex items-center text-xs dark:text-neutral -mt-2'>
                    Not registered yet?
                    <Link
                      href='#'
                      size='none'
                      variant='none'
                      className='text-primary-light dark:text-white font-semibold ml-1'
                    >
                      Create an Account
                    </Link>
                  </div>
                </>
              );
            }}
          </Form>
        </div>
        <p className='copyright-desktop hidden md:inline max-w-[400px] text-neutral text-xs text-center'>
          &copy; 2023 Horizon UI. All Rights Reserved. Made with love by
          Simmmple &amp; Sina Bayandorian!
        </p>
      </div>
    </Card>
  );
};

export default SignInForm;
