import { FC } from 'react';
import Heading from './heading';

import { ContactType } from '../types';

type Props = {
    contact: ContactType;
}

const ContactInfo: FC<Props> = ({ contact }) => {
    const { name, email, address } = contact || {};
    const { street, suite, city, zipcode } = address || {};

    if (!contact) {
        return <Heading tag='h3'>Has no information</Heading>
    }

    return (
        <>
            <Heading tag='h3'>
                 { name }
            </Heading>
            <p>
                <strong>Email:</strong>
                { email }
            </p>
            <p>
                <strong>Address:</strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </p>
        </>
    );
}

export default ContactInfo;
