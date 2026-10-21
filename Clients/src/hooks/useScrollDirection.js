import { useEffect, useState } from 'react';

export function useScrollDirection() {
  const [direction, setDirection] = useState('up');
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 8) return;
      setDirection(y > lastY ? 'down' : 'up');
      setLastY(y);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [lastY]);

  return direction;
}