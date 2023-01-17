import React from "react";

type Props = {
  children: React.ReactNode; // 👈️ type children
};

const Container: React.FC<Props> = (props: Props) => {
  return (
    <div className="w-full lg:max-w-[1024px] lg:my-0 lg:mx-auto">
      {props.children}
    </div>
  )
}

export default Container;
