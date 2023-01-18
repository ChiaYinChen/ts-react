import Item from "./Item";

const Story: React.FC = () => {

  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      <Item name="carolchen" avatar="/images/avatars/a1.png"/>
    </div>
  );
};

export default Story;
