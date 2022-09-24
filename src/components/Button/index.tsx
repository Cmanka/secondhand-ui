import React, { forwardRef } from 'react';
import { ButtonProps } from './type';
import { ButtonStyled } from './styled';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, img, label, ...props }, ref) => {
  return (
    <ButtonStyled ref={ref} {...props}>
      {img && <img src={img} />}
      {label && <span>{label}</span>}
      {children}
    </ButtonStyled>
  );
});

export { Button };
