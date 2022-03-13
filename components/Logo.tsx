import { ComponentProps, FC } from 'react';
import styles from '../styles/Logo.module.css';

interface LogoIconProps {
  color?: 'black' | 'white' | 'origin';
}

const LogoIcon: FC<ComponentProps<'svg'> & LogoIconProps> = ({ color, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 423 512" width="423" height="512" {...props}>
      <title>logo</title>
      <defs>
        <linearGradient id="g1" x1="-0.3" y1="511" x2="294.5" y2=".2" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff6490"/>
          <stop offset="1" stopColor="#ff1493"/>
        </linearGradient>
        <linearGradient id="g2" x1="214.5" y1="511.7" x2="421" y2="154" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffc090"/>
          <stop offset="1" stopColor="#ff6490"/>
        </linearGradient>
        <linearGradient id="g3" x1="213.5" y1="489.3" x2="213.5" y2="337.1" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff006c"/>
          <stop offset="1" stopColor="#ff486c"/>
        </linearGradient>
      </defs>
      <path id="fire-left" className={styles[`fire-left-${color}`]} d="m291.2 207.1c-9 67.1-58.5 110.2-78.7 129.9c-25.8-25.8-66-26-94 2c-25.2 25.2-24.9 66.1 1 92c21.6 21.5 38.4 39.8 55.6 57c18.7 18.7 11.2 23.2-12 23c-76.2-0.8-163.5-91.2-163.5-178.9c0-82.1 61.7-123.5 86.5-149.1c62.4-62.2 99.7-114 100-158c0-12.7-14.5-39.1 21-15c75.6 49.6 96.8 102.5 84.1 197.1z"/>
      <path id="fire-right" className={styles[`fire-right-${color}`]} d="m335.7 182.4c7.4-11.9 4.4-23.5 8.9-27.5c9.5-5.8 26.2 17.4 47.8 47.3c16.2 28.5 30.6 48.5 30.6 130.6c0 87.7-87.4 178.1-163.5 178.9c-23.2 0.3-30.7-4.3-12-23c17.2-17.2 34.5-33.4 56-55c26.3-26.3 26.3-68.7 1-94c-30.5-30.5-64-30.7-92-2.7c20.2-19.7 69.5-62.9 78.5-130c26.2-0.9 39-15 44.7-24.6z"/>
      <path id="heart" className={styles[`heart-${color}`]} d="m231.1 347.2c13.6-13.6 44.5-13.7 59.8 1.7c17.5 17.5 17.4 46.3 1.5 62.1c-30.9 30.9-37.9 39.5-66.4 68c-13.5 13.5-13.5 13.5-26 1c-29.7-29.7-36.6-37.6-67.9-69c-13.1-13.1-13.1-43.1 5.9-62.1c15.3-15.4 40.4-15.3 54-1.7c7.8 7.8 13.4 11.7 20.5 18.8c11.5-11.5 5.7-5.9 18.6-18.8z"/>
    </svg>
  );
};

LogoIcon.defaultProps = {
  color: 'origin',
};

interface LogoTextProps {
  color: 'black' | 'white';
}

const LogoText: FC<ComponentProps<'svg'> & LogoTextProps> = ({ color, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338 96" width="338" height="96" {...props}>
      <title>text</title>
      <path id="sweetie" className={styles[`${color}-text`]} d="m23.9 33.4c-12.9 0-20.8 6.8-20.8 15.5c0 7.9 5 13.1 15 16c9.3 2.6 10.8 3.6 10.8 7.1c0 3.1-2.8 4.8-7.4 4.8c-5 0-9.7-2-13.5-5l-7.4 8.2c5 4.6 12.5 7.6 21.3 7.6c12.7 0 22.6-6.2 22.6-16.8c0-9.1-5.6-13.3-15.7-16.2c-9.1-2.7-10.5-3.8-10.5-6.5c0-2.3 2.1-3.9 6.2-3.9c4.4 0 8.6 1.5 12.6 4l5.5-8.6c-4.7-3.8-11.3-6.2-18.7-6.2zm93 1.6h-14.5l-6.1 39.7l-7-39.7h-14.8l-8 39.7l-5.3-39.7h-15.3l10.8 51h18l6.7-37.4l6.8 37.4h18.2zm50.8 24.5c0-16.5-8.9-26.1-23.5-26.1c-15.4 0-23.8 12.1-23.8 27.3c0 16 8.7 26.9 25.7 26.9c8.2 0 14.7-3.1 19.8-7.1l-6.2-8.4c-4.4 3-8.1 4.5-12.2 4.5c-6.2 0-10.6-2.5-11.6-11.6h31.6c0.2-1.6 0.2-3.9 0.2-5.5zm-14.8-3.7h-17c0.6-9.1 3.6-12.4 8.7-12.4c6.1 0 8.2 4.8 8.3 11.8zm67.8 3.6c0-16.5-8.9-26.1-23.5-26.1c-15.4 0-23.8 12.1-23.8 27.4c0 15.9 8.7 26.8 25.6 26.8c8.3 0 14.8-3 19.9-7.1l-6.2-8.4c-4.4 3.1-8.1 4.5-12.2 4.5c-6.3 0-10.6-2.5-11.6-11.6h31.6c0.1-1.6 0.2-3.9 0.2-5.5zm-14.8-3.6h-17c0.6-9.2 3.6-12.4 8.7-12.4c6.1 0 8.2 4.8 8.3 11.7zm50.3 18.1c-2.1 1.2-3.8 1.7-5.5 1.7c-3.2 0-4.8-1.8-4.8-6.7v-23.4h10.1l1.6-10.5h-11.7v-12.8l-15.2 1.7v11.1h-7.2v10.5h7.2v23.6c0 12 5.5 18.4 16.7 18.5c4.6 0 10-1.4 13.9-4.1zm17.6-65.8c-5.3 0-8.9 3.7-8.9 8.6c0 4.9 3.6 8.7 8.9 8.7c5.3 0 9-3.8 9-8.7c0-4.9-3.7-8.6-9-8.6zm7.7 26.9h-15.2v50.9h15.2zm56.3 24.5c0-16.5-8.9-26.1-23.5-26.1c-15.4 0-23.8 12.1-23.8 27.4c0 15.9 8.7 26.8 25.7 26.8c8.2 0 14.7-3 19.8-7.1l-6.2-8.4c-4.4 3.1-8.1 4.5-12.2 4.5c-6.2 0-10.6-2.5-11.6-11.6h31.6c0.2-1.6 0.2-3.9 0.2-5.5zm-14.8-3.6h-17c0.6-9.2 3.6-12.4 8.7-12.4c6.1 0 8.2 4.8 8.3 11.7z"/>
    </svg>
  );
};

export { LogoIcon, LogoText };
