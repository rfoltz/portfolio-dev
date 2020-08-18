import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { Link } from 'gatsby'

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Robert and I’m a Software Engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Skills</h1>
          <p>I've work on many projects and areas and thanks to working in a Start Up I've been able to work in many areas; Customer integrations, Customer Support, Client facing applications.</p>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Python</li>
            <li>Microsoft Azure</li>
          </ul>
          <Link to='/tools'>See the tech tools I use?</Link>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
