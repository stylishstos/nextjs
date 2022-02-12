import Heading from "./heading";

const PostInfo = ({ post }) => {
    const { title, body } = post || {};

    if (!post) {
        return <Heading tag='h3'>Has no information</Heading>
    }

    return (
        <>
            <Heading tag='h3'>
                 { title }
            </Heading>
            <p>{ body }</p>
        </>
    );
}

export default PostInfo;
