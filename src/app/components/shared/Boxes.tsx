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
      <div className={`mobile:px-2 mobile:py-10 tab:px-2 tab:py-10 laptop:px-5 laptop:py-12 3xl:px-12 3xl:py-20 relative w-auto ${haveBorder && "border-4"}`}>
        <h1 className="font-semibold 3xl:text-5xl">{header}</h1>
        <p className="text-slate-600 3xl:mt-3 3xl:text-3xl laptop:text-md tab:text-sm mobile:text-[10px] laptop:mr-8">{description}</p>
        <span className="3xl:text-[200px] absolute top-0 right-7 mobile:text-7xl tab:text-8xl laptop:text-9xl font-bold opacity-20 -z-10">
          {number}
        </span>
        <div> {haveBorder} </div>
      </div>
    </div>
  );
};

export default Boxes;
