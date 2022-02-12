import ContactInfo from "../../components/contact-info";

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    return data ? {
        props: {
            contact: data
        }
    } : {
        notFound: true
    }
}

const Contact = ({ contact }) => {
    return (
        <ContactInfo contact={ contact } />
    )
}

export default Contact;
