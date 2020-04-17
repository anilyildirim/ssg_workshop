import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Waves from '../components/waves';
import '../styles/index.scss';
import SEO from '../components/seo';


export default () => {
  return (
    <>
      <Layout>
        <SEO pageTitle="about" pageDescription="about description" />
        <h1>About me</h1>
        <p>This is about page!</p>
        <Link to="/">to homepage</Link>
        <Waves />
      </Layout>  
    </>
  );
};