import React from 'react';

import Footer from '../../components/footer/Footer';
import ReadMe from './ReadMe';

import { Body, Container, FooterContainer, Left, Right } from './styles';

const Homepage = () => {
  return (
    <Container>
      <Body>
        <Left>
          <ReadMe />
        </Left>
        <Right></Right>
      </Body>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default Homepage;
