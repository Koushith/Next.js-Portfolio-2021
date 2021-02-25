import React from 'react';
import Layout from '../components/Layout';
import Blogs from '../components/blogs/Blogs';

function writing(props) {
  return (
    <Layout toggleDarkMode={props.toggleDarkMode}>
      <Blogs />
    </Layout>
  );
}

export default writing;
