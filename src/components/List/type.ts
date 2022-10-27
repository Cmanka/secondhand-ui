import { ReactElement } from 'react';

export interface CssType {
  width?: string;
  height?: string;
}

export interface ListProps<T> extends CssType {
  data: T[];
  emptySection?: ReactElement;
  children: (data: T, index: number) => ReactElement<T>;
}
