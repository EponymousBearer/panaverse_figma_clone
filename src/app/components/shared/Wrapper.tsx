import { FC, ReactNode } from "react";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className=" justify-between max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto px-6">{children}</div>;
};

export default Wrapper;
