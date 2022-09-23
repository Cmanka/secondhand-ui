import styled from 'styled-components';
import { CssProps } from './type';

export const BoxStyled = styled.div<CssProps>`
  background: ${({ background }) => background};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
`;
