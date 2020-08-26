import React from 'react';
import { Layout, SEO } from 'components/common';
import page_not_found from 'assets/illustrations/404.svg'
import { Wrapper } from './styles';

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <Wrapper>
      <h1>404 NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <img src={page_not_found} alt="404 page not found."></img>
    </Wrapper>
  </Layout>
);
