import React, { FC, forwardRef } from 'react';
import { BoxProps } from './type';
import { BoxStyled } from './styled';

const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, ...props }, ref) => {
  return (
    <BoxStyled ref={ref} {...props}>
      {children}
    </BoxStyled>
  );
});

export { Box };
