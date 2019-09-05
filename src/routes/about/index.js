import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';

function action() {
  return {
    chunks: ['about'],
    title: about.title,
    component: (
      <Layout>
        <Page />
      </Layout>
    ),
  };
}

export default action;
