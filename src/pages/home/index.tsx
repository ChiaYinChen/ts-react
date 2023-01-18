import Header from "components/header/Header";
import Container from "components/container/Container";
import Story from "components/story/Story";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex lg:justify-center">
          {/* left */}
          <div className="w-full lg:w-[600px]">
            <Story />
            left
          </div>
          {/* right */}
          <div className="hidden lg:block lg:w-[424px]">
            {/* <IGProfile /> */}
            right
          </div>
        </div>
      </Container>
      
    </>
  );
};

export default Home;
