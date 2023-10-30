import React from 'react';

import { ReactComponent as TSLogo } from '../../assets/icons/ts.svg';

import Code from '../../components/code/Code';

const ReadMe = () => {
  return (
    <div>
      <Code type='header'>
        Hello <Code type='variable' value='{visitorName}' />
      </Code>
      <Code type='text'>
        My name is <Code type='text' variant='strong'>Emerson</Code>
      </Code>
      <p>
        <Code type='text'>
          *<i>React Frontend Developer</i>* <br />
          Happy, free, confused and lonely at the same time.<TSLogo /><br />
          More about me at the links below.
        </Code>
      </p>
      <div>
        <Code type='subheader' value='Professional profiles' />
        <Code type='link' value='TopTal' link='https://bit.ly/3pK1n8D' />
        <Code type='link' value='Stack Overflow' link='https://bit.ly/3hHwAFa' />
        <Code type='link' value='Linkedin' link='https://bit.ly/35woQUa' />
      </div>
      <div>
        <Code type='subheader' value='Personal profiles' />
        <Code type='link' value='Personal GitHub' link='https://bit.ly/3tE3lbI' />
        <Code type='link' value='HackerRank' link='https://bit.ly/3pI9r9W' />
        <Code type='link' value='Twitter' link='https://bit.ly/376uVr8' />
        <Code type='link' value='Email' link='mailto:emersonsarza@gmail.com' />
      </div>
      <div>
        <Code type='subheader' value='Personal project' />
        <Code type='link' value='Dota 2' link='https://bit.ly/3yb0aMV' />
      </div>
      <div>
        <Code type='subheader' value='Professional project' />
        <Code type='link' value='RealtyTrac Resources Page' link='https://bit.ly/497yRD0' />
      </div>
    </div>
  );
};

export default ReadMe;
