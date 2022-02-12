import Link from 'next/link';
import Heading from "../../components/heading";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return data ? {
        props: {
            contacts: data
        }
    } : {
        notFound: true
    }
}

const Contacts = ({ contacts }) => {
    return (
        <>
            <Heading>Contacts list:</Heading>
            { contacts && contacts.length !== 0 && (
                <ul>
                    { contacts.map(({ id, name }) => (
                        <li key={ id }>
                            <Link href={`/contacts/${id}`}>
                                <strong>{ name }</strong>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Contacts;
