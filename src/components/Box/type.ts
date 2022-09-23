import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

export type CssProps = Omit<CSSProperties, 'color' | 'translate'>;

export interface BoxProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement>, CssProps {}
