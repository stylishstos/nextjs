import Link from "next/link";
import Heading from "../../components/heading";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return data ? {
        props: {
            posts: data
        }
    } : {
        notFound: true
    }
}

const Posts = ({ posts }) => {
    return (
        <>
            <Heading>Posts list:</Heading>
            { posts && posts.length !== 0 && (
                <ul>
                    { posts.map(({ id, title }) => (
                        <li key={ id }>
                            <Link href={`/posts/${id}`}>
                                <strong>{ title }</strong>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Posts;
