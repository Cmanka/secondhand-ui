import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

export interface CssProps {
  border: CSSProperties['border'];
  color: CSSProperties['color'];
  margin: CSSProperties['margin'];
  padding: CSSProperties['padding'];
  background: CSSProperties['background'];
}

export interface ButtonProps extends PropsWithChildren, Omit<HTMLAttributes<HTMLButtonElement>, 'color'>, CssProps {
  img?: string;
  label?: string;
  disabled?: boolean;
}
