import React, { useRef, ReactNode, useState, useEffect, memo } from 'react';
import { m, useMotionValue, useSpring } from 'motion/react';
import { playHoverSound, playClickSound } from '../hooks/useSFX';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const MagneticButton = memo(function MagneticButton({ children, className = "", onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const bounds = useRef({ width: 0, height: 0, left: 0, top: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
  }, []);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseEnter = () => {
    if (!isTouchDevice) playHoverSound();
    if (isTouchDevice) return;
    if (ref.current) {
      bounds.current = ref.current.getBoundingClientRect();
    }
  };

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = bounds.current;
    
    // Prevent calculation before bounds are set
    if (width === 0) return;
    
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const reset = () => {
    if (isTouchDevice) return;
    x.set(0);
    y.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    playClickSound();
    if (onClick) onClick();
  };

  return (
    <m.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onTouchEnd={reset}
      style={isTouchDevice ? {} : { x: xSpring, y: ySpring, willChange: 'transform' }}
      className={className}
      onClick={handleClick}
    >
      {children}
    </m.div>
  );
});

export default MagneticButton;
