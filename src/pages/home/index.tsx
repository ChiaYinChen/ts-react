import Header from "components/header/Header";
import Container from "components/container/Container";
import Story from "components/story/Story";
import User from "components/user/User";

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
            <User avatar="/images/avatars/a2.png" size="medium" account="user1" location="Taipei" showFollow={true} isFollowing={true} />
          </div>
        </div>
      </Container>
      
    </>
  );
};

export default Home;
