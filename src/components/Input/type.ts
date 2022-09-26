import { InputHTMLAttributes } from 'react';

export interface CssType {
  width?: string;
  height?: string;
}

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color'> {
  label?: string;
}
