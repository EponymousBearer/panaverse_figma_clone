import { FC } from "react";

const button: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="text-4xl ring rounded-full px-5 py-6 align-middle bg-teal-700 text-white ring-teal-700 my-3
    hover:shadow-lg font-semibold hover:scale-105 duration-300">
      {text}
    </div>
  );
};

export default button;
