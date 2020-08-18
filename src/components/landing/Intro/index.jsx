import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>I’m Robert and I’m a Software Engineer!</h1>
          <p>
            Hey there, I'm currently a Lead Software Engineer at Foodmaestro here in Toronto, Canada. I previously worked in the banking industry At Scotiabank developing an internal reporting platform built in C#, CSS, HTML5, JQuery and plain old Javascript.
            More recently I have been working on client facing applications and API's here at Foodmaestro with an emphasis integrating with Retailers to help them inform their users about healthly foods.
          </p>
          <Button as={AnchorLink} href="#contact">
            Resume
          </Button>
          <Button as={AnchorLink} href="#contact">
            Get In Touch
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Robert and I’m a Software Engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
