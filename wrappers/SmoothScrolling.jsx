'use client';

import { ReactLenis } from 'lenis/react';

export default function SmoothScrolling({ children, root = true }) {
  return (
    <ReactLenis
      root={root}
      options={{
        lerp: 0.75,
        duration: 1.5,
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
