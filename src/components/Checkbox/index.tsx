import React, { forwardRef } from 'react';
import { Wrapper, ChecboxStyled } from './styled';
import { CheckboxProps } from './type';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ id, label, ...props }, ref) => {
  return (
    <Wrapper ref={ref}>
      <ChecboxStyled type="checkbox" ref={ref} {...props} />
      {label && <label htmlFor={id}>{label}</label>}
    </Wrapper>
  );
});

export { Checkbox };
