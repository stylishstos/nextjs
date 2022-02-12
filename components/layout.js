import Header from "./header";
import Footer from "./footer";
import layout from '../styles/layout.module.scss';

const Layout = ({ children }) => (
    <>
        <Header className={ layout.header }/>
            <main className={ layout.main }>
                { children }
            </main>
        <Footer className={ layout.footer }/>
    </>
);

export default Layout;
