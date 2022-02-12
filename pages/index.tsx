import Heading from "../components/heading";
import Socials from "../components/socials";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials`);
  const data = await response.json();

  return data ? {
    props: {
      socials: data
    }
  } : {
    notFound: true
  }
}

const Home = ({ socials }) => {
  return (
      <>
        <Heading>Hello world!</Heading>
        <Socials socials={ socials }/>
      </>
  )
}

export default Home;
