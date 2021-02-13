import Layout from '../components/Layout';
import Overview from '../components/Overview';
import { JssProvider } from 'react-jss';
const Home = (props) => {
  return (
    <JssProvider id={{ minify: true }}>
      <Layout toggleDarkMode={props.toggleDarkMode}>
        <Overview />
      </Layout>
    </JssProvider>
  );
};

export default Home;
