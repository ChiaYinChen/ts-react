import Post from "./Post";
import Loading from "components/loading/Loading";

import { useGetPostsQuery } from "services/home.api";

const PostList: React.FC = () => {
  const { data, isLoading } = useGetPostsQuery("all");
  return <>
    {isLoading && (
        <div className="w-full flex justify-center mt-20">
          <Loading />
        </div>
      )}
    {!isLoading &&
      data?.map((item) => {
        const {id, location, account, avatar, photo, likes, description, hashTags, createTime} = item;
        return (
          <Post
            location={location}
            account={account}
            avatar={avatar}
            photo={photo}
            likes={likes}
            description={description}
            hashTags={hashTags}
            createTime={createTime}
            key={id}
          />
        );
      })
    }
  </>;
};

export default PostList;
