import React from 'react';

import { Container, Text } from './styles';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Text>Built with Github Pages, Styled Components, and React</Text>
      <Text>© {year} Emerson Sarza. All rights reserved. </Text>
    </Container>
  );
};

export default Footer;
