import Layout from "../components/layout";
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
)

export default MyApp
