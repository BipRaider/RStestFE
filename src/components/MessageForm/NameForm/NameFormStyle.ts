import styled from 'styled-components';

import { deviceMin, deviceMax, screen } from '../../../css/styledMedia';

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  width: 200px;
  min-height: 40px;
  max-height: 100%;
  margin-left: 30px;

  font-size: 16px;
  font-family: 'Consolas', monospace;
  text-indent: 10px;
  color: #ece7dc;
  line-height: 1;

  border: none;
  background-color: #3c4556;
  border-radius: 5px;

  ::placeholder {
    color: #ffffff;
  }

  @media ${(screen.s, deviceMax.tablet)} {
    margin-top: 5px;
    margin-left: 0;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 5px;
  margin-left: 20px;
  font-weight: 600;

  @media ${(screen.s, deviceMax.tablet)} {
    align-items: flex-start;
    flex-direction: column;
    margin-left: 0;
  }

  @media ${(screen.s, deviceMin.mobileL, deviceMax.mobileL)} {
    flex-direction: column;
    margin-left: 0;
  }
`;
