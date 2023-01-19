import Header from "components/header/Header";
import Container from "components/container/Container";
import Story from "components/home/story/Story";
import PostList from "components/home/post/PostList";
import Profile from "components/home/profile/Profile";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex lg:justify-center">
          {/* left */}
          <div className="w-full lg:w-[600px]">
            <Story />
            <PostList />
          </div>
          {/* right */}
          <div className="hidden lg:block lg:w-[424px]">
            {/* <IGProfile /> */}
            <Profile />
          </div>
        </div>
      </Container>
      
    </>
  );
};

export default Home;
