// src/components/ui/MagneticButton.jsx
// Magnetic hover effect — button follows cursor with spring physics

import { useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function MagneticButton({ children, className = '', strength = 0.35, as: Tag = 'button', ...props }) {
  const ref = useRef(null);

  const rawX = useSpring(0, { stiffness: 200, damping: 20 });
  const rawY = useSpring(0, { stiffness: 200, damping: 20 });

  const x = useTransform(rawX, v => v);
  const y = useTransform(rawY, v => v);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    rawX.set((e.clientX - cx) * strength);
    rawY.set((e.clientY - cy) * strength);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {Tag === 'a' ? (
        <a className={className} {...props}>{children}</a>
      ) : (
        <button className={className} {...props}>{children}</button>
      )}
    </motion.div>
  );
}
