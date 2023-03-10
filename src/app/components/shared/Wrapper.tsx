import { FC, ReactNode } from "react";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="justify-between max-w-screen-xl mx-auto px-6">{children}</div>;
};

export default Wrapper;
