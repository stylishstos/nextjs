import PostInfo from "../../components/post-info";

export const getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    const paths = data.map(({ id }) => ({
        params: { id: id.toString() },
    }));

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    return data ? {
        props: {
            post: data
        }
    } : {
        notFound: true
    }
}

const Post = ({ post }) => {
    return (
        <PostInfo post={ post } />
    )
}

export default Post;
