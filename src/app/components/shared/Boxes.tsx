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
      <div className={`mx-auto mobile:px-2 mobile:py-10 tab:px-2 tab:py-10 laptop:px-8 laptop:py-14 3xl:px-12 3xl:py-20 relative  ${haveBorder && "border-4"}`}>
        <h1 className="font-semibold laptop:text-2xl 3xl:text-[34px] mobile:text-xl">{header}</h1>
        <p className="text-slate-600 3xl:mt-1 3xl:text-[28px] 3xl:leading-[34px] laptop:text-lg laptop:mt-2 tab:text-sm mobile:text-[13px]">{description}</p>
        <span className="3xl:text-[240px] absolute top-0 right-7 mobile:text-7xl tab:text-8xl laptop:text-[160px] font-bold opacity-20 -z-10">
          {number}
        </span>
        <div> {haveBorder} </div>
      </div>
    </div>
  );
};

export default Boxes;
