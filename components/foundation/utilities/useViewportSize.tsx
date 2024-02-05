import { useEffect, useState } from 'react';

export interface viewportSize {
  width: number;
  height: number;
}

export const useViewportSize = (): viewportSize => {
  const [viewportSize, setViewportSize] = useState({ height: window.innerHeight, width: window.innerWidth });

  useEffect(() => {
    const handleWindowResize = () => setViewportSize({ height: window.innerHeight, width: window.innerWidth });
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return viewportSize;
};
