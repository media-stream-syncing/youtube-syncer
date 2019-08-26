import React from 'react';
import Layout from '../../components/Layout';
import SignUpContainer from './signUpContainer';

const title = 'New User Registration';

function action() {
  return {
    chunks: ['register'],
    title,
    component: (
      <Layout>
        <SignUpContainer title={title} />
      </Layout>
    ),
  };
}

export default action;
