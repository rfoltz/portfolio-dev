import React, { useContext } from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail, Links } from './styles';
import { ThemeContext } from '../../../providers/ThemeProvider';
import social from '../../../data/social.json';


export const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return(
  <Wrapper as={Container} id="contact">
    <Details theme={theme}>
      <h1 theme={theme}>Contact</h1>
      <p>Want to get in touch? You can find me at my social links below or you can email be at: <a href="mailto:hello.rfoltz@gmail.com">hello.rfoltz@gmail.com</a></p>
      <Links theme={theme}>
        {social.reverse().map(({ id, name, link, icon }) => (
          <a theme={theme} key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="48" src={icon} alt={name} theme={theme}/>
          </a>
        ))}
      </Links>
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
)
};
