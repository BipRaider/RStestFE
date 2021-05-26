import styled from 'styled-components';
import { deviceMin, deviceMax, screen } from '../../../css/styledMedia';

export const Textarea = styled.textarea`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  width: 500px;
  min-height: 30px;

  padding: 0 10px 10px 10px;
  margin-left: 10px;

  font-size: 16px;
  font-family: 'Consolas', monospace;
  text-indent: 10px;
  color: #ece7dc;
  letter-spacing: 1px;
  line-height: 1.5;
  overflow-y: hidden;

  border: none;
  background-color: #3c4556;
  border-radius: 5px;

  ::placeholder {
    color: #ffffff;
  }

  @media ${(screen.s, deviceMax.tablet)} {
    width: 400px;
    margin-top: 5px;
    margin-left: 0;
  }

  @media ${(screen.s, deviceMin.mobileL, deviceMax.mobileL)} {
    margin-top: 5px;
    width: 350px;
  }
  @media ${(screen.s, deviceMin.mobileL, deviceMax.mobileM)} {
    margin-top: 5px;
    width: 300px;
  }
`;

export const Lable = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 5px;
  margin-left: 20px;
  font-weight: 600;
  @media ${(screen.s, deviceMax.tablet)} {
    flex-direction: column;
    margin-left: 0;
  }

  @media ${(screen.s, deviceMin.mobileL, deviceMax.mobileL)} {
    flex-direction: column;
    margin-left: 0;
  }
`;
