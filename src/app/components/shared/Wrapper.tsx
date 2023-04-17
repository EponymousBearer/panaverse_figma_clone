import { FC, ReactNode } from "react";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="justify-between mobile:max-w-screen-xl tab:max-w-screen-2xl laptop:max-w-screen-3xl laptop:mx-12 laptop:px-12 tab:mx-6 tab:px-6 mobile:mx-3 mobile:px-3">{children}</div>;
};

export default Wrapper;
