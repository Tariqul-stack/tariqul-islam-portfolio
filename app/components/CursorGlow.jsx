'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MdZoomIn } from 'react-icons/md';

function TrailDot({ dotX, dotY, stiffness, damping, opacity, size, isVisible }) {
  const x = useSpring(dotX, { stiffness, damping });
  const y = useSpring(dotY, { stiffness, damping });

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full bg-[#2dd4bf] pointer-events-none z-[99990]"
      style={{
        width: size,
        height: size,
        opacity: isVisible ? opacity : 0,
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  );
}

export default function CursorGlow() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState('default');

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(-100, { stiffness: 150, damping: 18 });
  const ringY = useSpring(-100, { stiffness: 150, damping: 18 });

  const trailConfigs = [
    { stiffness: 110, damping: 20, opacity: 0.35, size: 4 },
    { stiffness: 95, damping: 22, opacity: 0.28, size: 4 },
    { stiffness: 85, damping: 24, opacity: 0.22, size: 4 },
    { stiffness: 72, damping: 26, opacity: 0.18, size: 4 },
    { stiffness: 60, damping: 28, opacity: 0.14, size: 4 },
    { stiffness: 50, damping: 30, opacity: 0.1, size: 4 },
  ];

  const ringScale = useTransform(
    () => (cursorState === 'interactive' ? 1.8 : cursorState === 'image' ? 2.5 : cursorState === 'text' ? 0.9 : 1)
  );
  const dotScale = useTransform(() => (cursorState === 'interactive' ? 2 : 1));
  const ringWidth = useTransform(() => (cursorState === 'text' ? 2 : 36));
  const ringHeight = useTransform(() => (cursorState === 'text' ? 28 : 36));
  const ringRadius = useTransform(() => (cursorState === 'text' ? 999 : 9999));
  const ringBorderColor = useTransform(() => (cursorState === 'interactive' ? '#6366f1' : '#2dd4bf'));
  const dotColor = useTransform(() => (cursorState === 'interactive' ? '#6366f1' : '#2dd4bf'));

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      setIsDesktop(desktop);
      if (!desktop) {
        setIsVisible(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = (e) => {
      if (e.relatedTarget === null) {
        setIsVisible(false);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      if (target.closest('img, [data-cursor="image"]')) {
        setCursorState('image');
        return;
      }

      if (target.closest('a, button, input, textarea, select, label, [role="button"]')) {
        setCursorState('interactive');
        return;
      }

      if (target.closest('p, h1, h2, h3, h4, h5, h6, span, li')) {
        setCursorState('text');
        return;
      }

      setCursorState('default');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [dotX, dotY, ringX, ringY]);

  if (!isDesktop) return null;

  return (
    <>
      {trailConfigs.map((trail, index) => (
        <TrailDot
          key={index}
          dotX={dotX}
          dotY={dotY}
          stiffness={trail.stiffness}
          damping={trail.damping}
          opacity={trail.opacity}
          size={trail.size}
          isVisible={isVisible}
        />
      ))}

      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999]"
        style={{
          width: 8,
          height: 8,
          backgroundColor: dotColor,
          opacity: isVisible ? 1 : 0,
          scale: dotScale,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[99998]"
        style={{
          width: ringWidth,
          height: ringHeight,
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: ringBorderColor,
          borderRadius: ringRadius,
          opacity: isVisible ? 0.6 : 0,
          scale: ringScale,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {cursorState === 'image' && <MdZoomIn className="text-sm text-[#2dd4bf]" />}
      </motion.div>
    </>
  );
}
