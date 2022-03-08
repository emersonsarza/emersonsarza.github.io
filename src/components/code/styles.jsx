import styled from 'styled-components';

import { TEXT_COLORS } from '../../constants/theme';

export const Variable = styled.span`
  color: ${TEXT_COLORS.ORANGE};
`;

export const Header = styled.h1`
  color: ${TEXT_COLORS.BLUE};
  font-size: 25px;
  font-weight: bold;

  @media screen and (max-width: 530px) {
    font-size: 20px;
  }
`;

export const SubHeader = styled.h2`
  color: ${TEXT_COLORS.BLUE};
  font-size: 19px;
  font-weight: bold;

  @media screen and (max-width: 530px) {
    font-size: 14px;
  }
`;

export const Text = styled.p`
  color: ${TEXT_COLORS.WHITE};
  margin: 0;

  @media screen and (max-width: 530px) {
    font-size: 12px;
  }
`;

export const TextStrong = styled.span`
  color: ${TEXT_COLORS.BLUE};
  margin: 0;

  @media screen and (max-width: 530px) {
    font-size: 12px;
  }
`;

export const ActualLink = styled.span`
  color: ${TEXT_COLORS.TEAL};

  @media screen and (max-width: 530px) {
    font-size: 12px;
  }
`

export const Link = styled.a`
  color: ${TEXT_COLORS.WHITE};
  margin: 0;
  text-decoration: none;

  @media screen and (max-width: 530px) {
    font-size: 12px;
  }
  
  &: hover {
    ${ActualLink} {
      color: ${TEXT_COLORS.TEAL}cc;
    }
    ${Variable} {
      color: ${TEXT_COLORS.ORANGE}cc;
    }
  }
`;

