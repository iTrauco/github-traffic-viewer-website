/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './layout.scss';
import './global.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'A website which shows a list of traffic graphs of your own GitHub repositories.',
            },
            { name: 'keywords', content: 'website, github, traffic, viewer' },
          ]}
        >
          <html lang="en" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
            type="text/css"
          />
        </Helmet>
        <div className="layout-container">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="layout-content">{children}</div>
          <Footer />
        </div>
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
