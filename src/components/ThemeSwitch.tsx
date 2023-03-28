import { useEffect, useState } from 'react';
import clsx from 'clsx';

// * components
import Button from '../components/Button';

// * types
type ThemeSwitchProps = {
  className?: string;
};

type Theme = 'light' | 'dark';

const ThemeSwitch = ({ className = 'flex' }: ThemeSwitchProps) => {
  const defaultTheme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  const [theme, setTheme] = useState<Theme>('light');
  const themeToggler = () => {
    document.documentElement.classList.toggle('dark');
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme != null) {
      document.documentElement.classList.add(savedTheme);
      setTheme(savedTheme as Theme);
      return;
    }

    if (theme !== defaultTheme) {
      document.documentElement.classList.add(defaultTheme);
      localStorage.setItem('theme', defaultTheme);
      setTheme(defaultTheme);
    }
  }, []);

  return (
    <Button
      size='none'
      radius='pill'
      variant='none'
      onClick={themeToggler}
      className={clsx(
        'w-10 h-10 items-center justify-center text-sm',
        className
      )}
    >
      <i
        className={clsx('fa-solid', theme === 'light' ? 'fa-sun' : 'fa-moon')}
      />
    </Button>
  );
};

export default ThemeSwitch;
