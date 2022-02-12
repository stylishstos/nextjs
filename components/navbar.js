import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import LogoImg from '../public/logo.png';

import navbar from '../styles/navbar.module.scss';

const Navbar = () => {
    const { pathname } = useRouter();

    return (
        <nav className={ navbar.nav}>
            <div className={ navbar.logo }>
                <Image src={ LogoImg } width="110" height="60" alt="" placeholder="blur"/>
            </div>
            <div className={ navbar.links}>
                <Link href='/'>
                    <a className={ pathname === '/' ? navbar.active : null }>Home</a>
                </Link>
                <Link href='/posts'>
                    <a className={ pathname === '/posts' ? navbar.active : null }>Posts</a>
                </Link>
                <Link href='/contacts'>
                    <a className={ pathname === '/contacts' ? navbar.active : null }>Contacts</a>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
