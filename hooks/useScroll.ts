import { useEffect, useState } from 'react';

export default function useScroll(callback?: () => void) {
  const [lastKnownScrollPosition, setLastKnownScrollPosition] = useState(0);
  const [ticking, setTicking] = useState(false);

  useEffect(() => {
    function scrollHandler(e: Event) {
      setLastKnownScrollPosition(window.scrollY);

      if (!ticking && callback) {
        window.requestAnimationFrame(function() {
          callback();
          setTicking(false);
        });

        setTicking(true);
      }
    }

    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return lastKnownScrollPosition;
};
