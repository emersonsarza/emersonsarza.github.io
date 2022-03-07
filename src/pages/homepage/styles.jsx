import styled from 'styled-components';

import { BACKGROUND_COLORS } from '../../constants/theme';

export const Container = styled.div`
  background: radial-gradient(
    farthest-corner at 0% 0%,
    ${BACKGROUND_COLORS.BLUE_GRAY} 0%,
    ${BACKGROUND_COLORS.DARK} 100%
  );
`;

export const Body = styled.div`
  height: calc(100vh - 100px);
  min-height: 700px;
  width: 100vw;
  min-width: 800px;
  display: flex;
`;

export const Left = styled.div`
  width: 50vw;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  width: 50vw;
  min-width: 400px;
`;

export const FooterContainer = styled.div`
  height: 100px;
`;
