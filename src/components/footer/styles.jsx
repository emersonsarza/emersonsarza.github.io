import styled from 'styled-components';
const TEXT_WHITE = '#dadcd8';

export const Container = styled.footer`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  color: ${TEXT_WHITE};
`;

export const Text = styled.p`
  padding: 6px 0;
  margin: 0;
`;
