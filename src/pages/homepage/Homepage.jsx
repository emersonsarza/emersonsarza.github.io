import React from 'react';

import Footer from '../../components/footer/Footer';
import ReadMe from './ReadMe';

import { Body, Container, FooterContainer, Left } from './styles';

const Homepage = () => {
  return (
    <Container>
      <Body>
        <Left>
          <ReadMe />
        </Left>
      </Body>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default Homepage;
