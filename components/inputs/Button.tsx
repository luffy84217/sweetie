import { useMemo } from 'react';

interface ButtonProps {
  textColor?: string;
  backgroundColor?: string;
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'; 
  startEnhancer?: React.ReactNode;
  endEnhancer?: React.ReactNode;
  round?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
}

const size2padding: { [size: string]: string } = {
  xs: 'px-2.5 py-1.5',
  sm: 'px-3 py-2',
  base: 'px-4 py-2',
  lg: 'px-4 py-2',
  xl: 'px-6 py-3',
};

const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  textColor: tc,
  backgroundColor: bgc,
  variant: v,
  size,
  startEnhancer,
  endEnhancer,
  round,
  children,
  ...props
}) => {
  const variant = useMemo(() => {
    switch (v) {
      case 'outlined':
        return `border border-${tc} text-${tc} bg-${bgc}`;
      case 'contained':
        return `text-${tc} bg-${bgc}`;
      case 'text':
      default:
        return `text-${tc}`;
    }
  }, [tc, bgc, v]);
  const classNames = useMemo(() => ({
    base: `inline-flex items-center ${size2padding[size as string]} text-${size} font-medium rounded${!round ? '' : `-${round}`} ${v === 'text' ? '' : 'shadow'} focus:outline-none`,
    variant,
  }), [tc, bgc, v, size, round]);

  return (
    <button className={Object.values(classNames).join(' ')} {...props}>
      {startEnhancer}
      {children}
      {endEnhancer}
    </button>
  );
};

Button.defaultProps = {
  textColor: 'color',
  backgroundColor: 'background',
  variant: 'text',
  size: 'base',
  startEnhancer: null,
  endEnhancer: null,
};

export default Button;
