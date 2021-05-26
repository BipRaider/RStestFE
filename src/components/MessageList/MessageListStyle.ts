import styled from 'styled-components';
import { deviceMin, deviceMax, screen } from '../../css/styledMedia';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  @media ${(screen.s, deviceMax.tablet)} {
  }

  @media ${(screen.s, deviceMin.mobileL, deviceMax.mobileL)} {
  }
  @media ${(screen.s, deviceMin.mobileL, deviceMax.mobileM)} {
  }
`;
