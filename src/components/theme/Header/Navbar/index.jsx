import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import logo from 'assets/illustrations/logo.svg';
import { Wrapper, Brand, Logo } from './styles';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        <Logo theme={theme}>
          <img src={logo} alt="I’m John and I’m a Backend & Devops engineer!" theme={theme} />
        </Logo>
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
