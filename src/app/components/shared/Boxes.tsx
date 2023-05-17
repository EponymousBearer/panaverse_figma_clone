import { FC } from "react";

interface Iprops {
  header: string;
  description: string;
  number: number;
  haveBorder?: boolean;
}

const Boxes: FC<Iprops> = ({
  header,
  description,
  number,
  haveBorder = true,
}) => {
  return (
    <div className="flex flex-col md:gap-y-5 rounded-md p-10 flex-1 relative border-2">
      <h2 className="text-base font-semibold">{header}</h2>
      <p className="text-lg text-slate-600">{description}</p>
      <div className="absolute top-0 md:top-10 right-10 text-9xl font-bold -z-10 text-gray-300">
        {number}
      </div>
    </div>
    // <div className={`mx-auto mobile:px-2 mobile:py-10 tab:px-2 tab:py-10 laptop:px-8 laptop:py-14 3xl:px-12 3xl:py-20 relative  ${haveBorder && "border-4"}`}>
    //   <h1 className="font-semibold laptop:text-2xl 3xl:text-[34px] mobile:text-xl">{header}</h1>
    //   <p className="text-slate-600 3xl:mt-1 3xl:text-[28px] 3xl:leading-[34px] laptop:text-lg laptop:mt-2 tab:text-sm mobile:text-[13px]">{description}</p>
    //   <span className="3xl:text-[240px] absolute top-0 right-7 mobile:text-7xl tab:text-8xl laptop:text-[160px] font-bold opacity-20 -z-10">
    //     {number}
    //   </span>
    //   <div> {haveBorder} </div>
    // </div>
  );
};

export default Boxes;
