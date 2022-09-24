import styled from 'styled-components';
import { CssProps } from './type';

export const ButtonStyled = styled.button<CssProps>`
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
`;
