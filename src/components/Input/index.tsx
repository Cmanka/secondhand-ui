import React, { forwardRef } from 'react';
import { InputProps } from './type';

const Button = forwardRef<HTMLInputElement, InputProps>(({ children, ...props }, ref) => {
  return <input ref={ref} {...props}></input>;
});

export { Button };
