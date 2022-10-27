import { CSSProperties, HTMLAttributes } from 'react';

export interface CssType {
  direction?: CSSProperties['flexDirection'];
  wrap?: CSSProperties['flexWrap'];
  basis?: CSSProperties['flexBasis'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
  gap?: CSSProperties['gap'];
}

export interface BoxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, CssType {}
