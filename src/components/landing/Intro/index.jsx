import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
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
            Hey there, I'm currently a Engineering Team Lead at Foodmaestro here in Toronto, Canada. I previously worked in the banking industry At Scotiabank working with Big Data and developing an internal reporting platform built in C#, CSS, HTML5, JQuery and plain old Javascript.
            More recently I have been working on client facing applications, API's, and data activation here at Foodmaestro with an emphasis enabling Retailers through data applications to help there customers with personalization, health, and wellness.
          </p>
          <Button as="a" href={'/documents/RF.Resume.pdf'}>
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
