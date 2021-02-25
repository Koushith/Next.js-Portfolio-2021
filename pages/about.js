import Layout from '../components/Layout';

import About from '../components/About';
const AboutPage = (props) => {
  return (
    <Layout toggleDarkMode={props.toggleDarkMode}>
      <About />
    </Layout>
  );
};

export default AboutPage;
