import React from 'react';
import { ListStyled } from './styled';
import { ListProps } from './type';

const List = <T extends {}>({ children, data, emptySection, ...props }: ListProps<T>) => {
  if (data.length) {
    return emptySection || null;
  }

  return <ListStyled {...props}>{data.map(children)}</ListStyled>;
};

export { List };
