import React from 'react';

import { ActualLink, Variable, Header, Link, SubHeader, Text, TextStrong } from './styles';

/**
 *
 * @param type
 */
const Code = ({ children, type, variant, value, link }) => {
  const content = value ?? children;

  if (type === 'variable') {
    return <Variable>`{content}`</Variable>;
  }
  if (type === 'header') {
    return <Header># {content}</Header>;
  }
  if (type === 'subheader') {
    return <SubHeader>## {content}</SubHeader>;
  }
  if (type === 'text') {
    if (variant === 'strong') {
      return <TextStrong>**{content}**</TextStrong>;
    }
    return <Text>{content}</Text>;
  }
  if (type === 'link') {
    return (
      <Text>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          - [<Variable>{content}</Variable>](<ActualLink>{link}</ActualLink>)
        </Link>
      </Text>
    );
  }
  return <></>;
};

export default Code;
