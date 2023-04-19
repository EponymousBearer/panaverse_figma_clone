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
      <div className={`mx-auto mobile:px-2 mobile:py-10 tab:px-2 tab:py-10 laptop:px-5 laptop:py-12 3xl:px-12 3xl:py-20 relative  ${haveBorder && "border-4"}`}>
        <h1 className="font-semibold 3xl:text-[34px]">{header}</h1>
        <p className="text-slate-600 3xl:mt-1 3xl:text-[28px] 3xl:leading-[34px] laptop:text-md tab:text-sm mobile:text-[10px] laptop:mr-8">{description}</p>
        <span className="3xl:text-[240px] absolute top-0 right-7 mobile:text-7xl tab:text-8xl laptop:text-9xl font-bold opacity-20 -z-10">
          {number}
        </span>
        <div> {haveBorder} </div>
      </div>
    </div>
  );
};

export default Boxes;
