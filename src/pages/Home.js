import Bests from "../components/bests/Bests";
import About from "../components/about/About";
import HomeTitle from "../components/Home-title/Home-title";
const Home = () => {
  return (
    <>
      <HomeTitle />
      <About aboutTitle="About Us" />
      <Bests />
    </>
  );
};

export default Home;
