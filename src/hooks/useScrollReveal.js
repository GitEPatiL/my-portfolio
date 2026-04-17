import { useState, useEffect } from 'react';

/**
 * useScrollReveal — returns true once the target element enters the viewport.
 * @param {React.RefObject} ref       — ref attached to the element to observe
 * @param {number}          threshold — 0–1 fraction visible before triggering (default 0.2)
 */
export default function useScrollReveal(ref, threshold = 0.2) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // fire once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
}
