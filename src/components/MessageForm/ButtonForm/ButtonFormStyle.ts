import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin: 0 auto;
  background-color: #000000;
  border-radius: 5px;
  border: none;

  color: #ffffff;
  font-size: 20px;
  line-height: 2;
  font-weight: 600;

  :hover,
  :focus,
  :active {
    background-color: #ffffff;
    color: #000000;
  }
`;
