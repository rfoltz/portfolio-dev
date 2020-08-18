import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details, Logo } from './styles';
import logo from 'assets/illustrations/logo.svg';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <Logo>
          <img className="logo" src={logo} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Logo>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          Robert Foltz
          and Theme from{' '}
          <a href="https://smakosh.com/" rel="noopener noreferrer" target="_blank">
            Smakosh
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
