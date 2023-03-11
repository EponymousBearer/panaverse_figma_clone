import { FC } from "react";

const Boxes: FC<{ heading: string; subheading: string; num: number }> = ({
  heading,
  subheading,
  num,
}) => {
  return (
    <div>
      <div className="border px-5 py-12 relative w-auto">
        <h1 className="font-semibold">{heading}</h1>
        <p className="text-slate-600">{subheading}</p>
        <span className="absolute top-0 right-7 text-9xl font-bold opacity-20 -z-10">
          {num}
        </span>
      </div>
    </div>
  );
};

export default Boxes;
