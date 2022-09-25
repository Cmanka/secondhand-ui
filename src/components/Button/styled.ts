import styled from 'styled-components';
import { CssProps } from './type';

export const ButtonStyled = styled.button<CssProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
  font-size: ${({ fontSize }) => fontSize};

  & > img {
    width: ${({ imgWidth }) => imgWidth};
    height: ${({ imgHeight }) => imgHeight};
    object-fit: ${({ imgFit }) => imgFit};
  }
`;
