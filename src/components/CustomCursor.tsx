import { useState, useEffect, memo } from 'react';
import { m, useMotionValue, useSpring } from 'motion/react';

const CustomCursor = memo(function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is a touch device / mobile
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch, { passive: true });
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isTouchDevice) return; // Completely bypass on mobile

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      
      // Hide cursor if over an iframe (like YouTube)
      const shouldBeVisible = target.tagName !== 'IFRAME';
      setIsVisible(prev => prev !== shouldBeVisible ? shouldBeVisible : prev);

      const isPointerElement = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('.cursor-pointer') !== null ||
        target.getAttribute('role') === 'button';

      setIsPointer(prev => prev !== isPointerElement ? isPointerElement : prev);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <m.div
      className="custom-cursor-container hidden md:flex fixed top-0 left-0 rounded-full bg-white/70 border border-black/20 pointer-events-none z-[9999] items-center justify-center mix-blend-difference w-6 h-6"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
        willChange: 'transform, opacity'
      }}
      animate={{ 
        scale: isPointer ? 1.666 : 1
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
    >
      <div className={`rounded-full bg-black/50 ${isPointer ? 'w-[4.8px] h-[4.8px]' : 'w-2 h-2'}`}></div>
    </m.div>
  );
});

export default CustomCursor;
