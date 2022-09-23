import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

export interface CssType {
  direction?: CSSProperties['flexDirection'];
  wrap?: CSSProperties['flexWrap'];
  basis?: CSSProperties['flexBasis'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  background: CSSProperties['background'];
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
  gap?: CSSProperties['gap'];
}

export interface BoxProps extends PropsWithChildren, Omit<HTMLAttributes<HTMLDivElement>, 'color'>, CssType {}
