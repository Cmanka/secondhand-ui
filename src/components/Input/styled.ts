import styled from 'styled-components';
import { CssType } from './type';

export const Wrapper = styled.div<CssType>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const InputStyled = styled.input``;
