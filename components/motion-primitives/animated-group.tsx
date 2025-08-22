'use client';
import { ReactNode, useRef, useState } from 'react';
import { motion, Variants, useInView, UseInViewOptions } from 'motion/react';
import React from 'react';

export type PresetType =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'blur'
  | 'blur-slide'
  | 'zoom'
  | 'flip'
  | 'bounce'
  | 'rotate'
  | 'swing';

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
  as?: React.ElementType;
  asChild?: React.ElementType;
  viewOptions?: UseInViewOptions;
  once?: boolean;
};

const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: {
    hidden: { y: 20 },
    visible: { y: 0 },
  },
  scale: {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  },
  blur: {
    hidden: { filter: 'blur(4px)' },
    visible: { filter: 'blur(0px)' },
  },
  'blur-slide': {
    hidden: { filter: 'blur(4px)', y: 20 },
    visible: { filter: 'blur(0px)', y: 0 },
  },
  zoom: {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  flip: {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  bounce: {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  },
  swing: {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: 'spring', stiffness: 300, damping: 8 },
    },
  },
};

// Merge helper that optionally includes default item opacity for item variants,
// but keeps container variants untouched to prevent unintended opacity 0.
const mergeVariants = (variants: Variants, includeDefaults = false) => ({
  hidden: {
    ...(includeDefaults ? defaultItemVariants.hidden : {}),
    ...variants.hidden,
  },
  visible: {
    ...(includeDefaults ? defaultItemVariants.visible : {}),
    ...variants.visible,
  },
});

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as = 'div',
  asChild = 'div',
  viewOptions,
  once,
}: AnimatedGroupProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);
  const [isViewed, setIsViewed] = useState(false);

  const containerVariants = mergeVariants(
    variants?.container || defaultContainerVariants,
    false
  );
  const itemVariants = mergeVariants(
    variants?.item || (preset ? presetVariants[preset] : {}),
    true
  );

  const MotionComponent = React.useMemo(
    () => motion(as as React.ElementType),
    [as]
  );
  const MotionChild = React.useMemo(
    () => motion(asChild as React.ElementType),
    [asChild]
  );

  // If once is true, we want the animation to play immediately on page load
  React.useEffect(() => {
    if (once) {
      // Set a small timeout to ensure the component is mounted
      const timer = setTimeout(() => {
        setIsViewed(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [once]);

  return (
    <MotionComponent
      ref={ref}
      initial='hidden'
      animate={(isInView || isViewed) ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <MotionChild key={index} variants={itemVariants} className="w-full h-full">
          {child}
        </MotionChild>
      ))}
    </MotionComponent>
  );
}

export { AnimatedGroup };
