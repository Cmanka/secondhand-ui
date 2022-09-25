import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

export interface CssProps {
  direction?: CSSProperties['flexDirection'];
  border?: string;
  color?: string;
  margin?: string;
  padding?: string;
  background?: string;
  gap?: string;
  width?: string;
  height?: string;
  imgHeight?: string;
  imgWidth?: string;
  imgFit?: CSSProperties['objectFit'];
  fontSize?: string;
}

export interface ButtonProps extends PropsWithChildren, Omit<HTMLAttributes<HTMLButtonElement>, 'color'>, CssProps {
  img?: string;
  label?: string;
  disabled?: boolean;
}
