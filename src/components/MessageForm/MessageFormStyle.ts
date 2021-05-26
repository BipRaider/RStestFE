import styled from 'styled-components';
import { deviceMin, deviceMax, screen } from '../../css/styledMedia';

export const Form = styled.form`
  display: flex;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 640px;
  margin: 20px 30px;

  @media ${(screen.s, deviceMax.tablet)} {
    align-items: flex-start;
    width: 400px;
  }

  @media ${(screen.s, deviceMin.mobileL, deviceMax.mobileL)} {
    width: 350px;
    margin: 20px 0;
  }
  @media ${(screen.s, deviceMin.mobileL, deviceMax.mobileM)} {
    width: 300px;
    margin: 20px 0;
  }
`;
