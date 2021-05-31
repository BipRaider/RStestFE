import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  padding: 0 10px;
`;

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		background: #3f3f3f;

		color: #fbfbef;
	}
	ul::-webkit-scrollbar {
		width: 1em;
	}

	ul::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	}

	ul::-webkit-scrollbar-thumb {
		background-color: #3c4556;
		outline: 1px solid slategrey;
	}
`;

export default GlobalStyle;
