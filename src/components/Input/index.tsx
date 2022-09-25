import React, { forwardRef } from 'react';
import { InputStyled, Wrapper } from './styled';
import { InputProps } from './type';

const Input = forwardRef<HTMLInputElement, InputProps>(({ id, label, ...props }, ref) => {
  return (
    <Wrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <InputStyled ref={ref} {...props} />
    </Wrapper>
  );
});

export { Input };
