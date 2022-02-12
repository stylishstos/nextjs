import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Heading from "../components/heading";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);

    return (
        <>
            <Heading>404</Heading>
            <Heading tag='h3'>Something is going wrong....</Heading>
        </>
    )
}

export default Error;
