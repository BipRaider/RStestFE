import styled from 'styled-components';
import { deviceMin, deviceMax, screen } from '../../../css/styledMedia';

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  ::after {
    content: '';
    width: 200px;
    border-bottom: 2px #3c4556 solid;
  }
`;
export const Name = styled.p`
  width: 200px;
  font-size: 24px;
  font-family: 'Consolas', monospace;
  text-indent: 5px;
  color: #ece7dc;
  letter-spacing: 1px;
  line-height: 1.2;
  padding: 5px;
`;
export const Message = styled.p`
  width: 800px;
  font-size: 14px;
  font-family: 'Consolas', monospace;
  text-indent: 10px;
  color: #ece7dc;
  letter-spacing: 1px;
  line-height: 1.4;
  word-wrap: break-word;

  @media ${(screen.s, deviceMax.tablet)} {
    width: 400px;
  }

  @media ${(screen.s, deviceMin.mobileL, deviceMax.mobileL)} {
    width: 350px;
  }
  @media ${(screen.s, deviceMin.mobileL, deviceMax.mobileM)} {
    width: 300px;
  }
`;
// .item {
//   margin-bottom: 20px;
// }

// .item__name {
//   padding-left: 20px;
//   color: var(--name-font-color);
//   font-size: 20px;
//   line-height: 24px;
//   font-weight: 600;
//   margin-bottom: 5px;
// }

// .item__message {
//   padding-left: 60px;
//   padding-right: 60px;
//   font-size: 16px;
//   line-height: 20px;
// }
