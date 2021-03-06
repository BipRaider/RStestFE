import styled from 'styled-components';
import { deviceMin, deviceMax, screen } from '../../css/styledMedia';

export const Ul = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  overflow-y: auto;
  overflow-x: hidden;

  width: 100%;
  height: 60vh;

  @media ${(screen.s, deviceMax.tablet)} {
  }

  @media ${(screen.s, deviceMin.mobileL, deviceMax.mobileL)} {
  }
  @media ${(screen.s, deviceMin.mobileL, deviceMax.mobileM)} {
  }
`;
