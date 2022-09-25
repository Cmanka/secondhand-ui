import { InputHTMLAttributes, PropsWithChildren } from 'react';

export interface CssType {
  width?: string;
  height?: string;
}

export interface InputProps extends PropsWithChildren, Omit<InputHTMLAttributes<HTMLInputElement>, 'color'> {
  label?: string;
}
