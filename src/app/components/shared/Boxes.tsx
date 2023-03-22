import { FC } from "react";

interface Iprops {
  header: string,
  description: string,
  number: number,
  haveBorder?: boolean
}

const Boxes: FC<Iprops> = ({header, description, number, haveBorder = true}) => {
  return (
    <div>
      <div className={`px-5 py-12 relative w-auto ${haveBorder && "border"}`}>
        <h1 className="font-semibold">{header}</h1>
        <p className="text-slate-600">{description}</p>
        <span className="absolute top-0 right-7 text-9xl font-bold opacity-20 -z-10">
          {number}
        </span>
      </div>
    </div>
  );
};

export default Boxes;
