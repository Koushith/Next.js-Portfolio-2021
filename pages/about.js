import Layout from '../components/Layout';
import { JssProvider } from 'react-jss';
import About from '../components/About';
const AboutPage = (props) => {
  return (
    <JssProvider id={{ minify: true }}>
      <Layout toggleDarkMode={props.toggleDarkMode}>
        <About />
      </Layout>
    </JssProvider>
  );
};

export default AboutPage;
