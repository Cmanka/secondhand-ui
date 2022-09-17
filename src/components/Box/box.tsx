import React, { FC, forwardRef } from 'react';
import { BoxProps } from './types';

const Box = forwardRef<HTMLDivElement, BoxProps>(({ backgroundColor, children }, ref) => {
  return (
    <div ref={ref} style={{ backgroundColor }}>
      {children}
    </div>
  );
});

export { Box };
