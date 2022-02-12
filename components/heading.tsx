import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    tag?: string;
}

const Heading: FC<Props> = ({ children, tag }) => {
    const Tag = tag || 'h2';

    return (<Tag>{ children }</Tag>)
};

export default Heading;
