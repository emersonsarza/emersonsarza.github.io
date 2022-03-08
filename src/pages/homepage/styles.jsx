import styled, { css } from 'styled-components';

import { DEVICES } from '../../constants/media-size';
import { BACKGROUND_COLORS } from '../../constants/theme';

const MEDIA_SIZE = css`
  @media ${DEVICES.tablet} { 
    width: 600px;
  }

  @media ${DEVICES.laptop} { 
    width: 900px;
  }

  @media ${DEVICES.laptopL} { 
    width: 1300px;
  }
  
  @media ${DEVICES.desktop} { 
    width: 2000px;
  }
`;

export const Container = styled.div`
  height: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: radial-gradient(
    farthest-corner at 0% 0%,
    ${BACKGROUND_COLORS.BLUE_GRAY} 0%,
    ${BACKGROUND_COLORS.DARK} 100%
  );
`;

export const Body = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;

  ${MEDIA_SIZE}
`;

export const Left = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 530px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 50vw;
  height: 100%;
  @media screen and (max-width: 530px) {
    width: 100%;
  }
`;

export const FooterContainer = styled.div`
  height: 100px;
`;
