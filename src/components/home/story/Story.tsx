import Item from "./Item";
import Loading from "components/loading/Loading";

import { useGetStoiesQuery } from "services/home.api";

const Story: React.FC = () => {
  const { data, isLoading } = useGetStoiesQuery("all");
  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {isLoading && (
        <div className="flex justify-center w-full">
          <Loading />
        </div>
      )}
      {!isLoading &&
        data?.map((item) => {
          const { id, name, avatar } = item;
          return <Item key={id} name={name} avatar={avatar} />;
        })
      }
    </div>
  );
};

export default Story;
