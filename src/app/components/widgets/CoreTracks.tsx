import Boxes from "../shared/Boxes";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";

const CoreTracksData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: "1",
  },
];

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="laptop:mt-30 laptop:mb-30 mt-20 mb-20 relative">
      <Wrapper>
        <div className="max-w-screen-xl">
          <h4 className="text-teal-800 3xl:text-3xl font-semibold laptop:text-xl tab:text-sm mobile:text-sm">
            PROGRAM OF STUDIES
          </h4>
          <h1 className="3xl:mt-5 3xl:text-7xl laptop:mt-2 laptop:text-5xl laptop:text-left tab:text-left tab:text-3xl tab:mt-2 mobile:text-centre mobile:text-3xl mobile:mt-0 font-bold whitespace-pre-line">
            {header}
          </h1>
          <p className="3xl:mt-14 3xl:text-4xl laptop:mt-6 laptop:mr-12 tab:mt-2 laptop:text-2xl mobile:mr-6 mobile:mt-4 mobile:text-sm text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="flex 3xl:justify-center 3xl:mt-10 3xl:scale-90 mobile:scale-50 mobile:-mt-2 3xl:mb-12 3xl:mr-[1050px] mobile:justify-center laptop:mt-6 tab:mt-2">
            <Button text="Learn More" />
          </div>
        </div>
        <div className="flex max-w-screen-3xl items-center justify-center 3xl:gap-x-8 my-1 laptop:my-10 gap-x-8 gap-y-3 mobile:flex-col tab:flex-row">
          <div className=" mt-6 flex flex-col gap-y-3 md:flex-row gap-x-3">
            <div className="flex flex-col md:gap-y-5 rounded-md p-10 flex-1 relative border-2">
              <h2 className="text-base font-semibold">Quarter I</h2>
              <p className="text-lg text-slate-600">
                CS-101: Object-Oriented Programming using TypeScript
              </p>
              <div className="absolute top-0 md:top-10 right-10 text-9xl font-bold -z-10 text-gray-300">
                1
              </div>
            </div>
            <div className="flex flex-col md:gap-y-5 rounded-md p-10 flex-1 relative border-2">
              <h2 className="text-base font-semibold">Quarter II</h2>
              <p className="text-lg text-slate-600">
                W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud
                Apps and APIs using Next.js 13 and Cloud Development Kit (CDK)
                for Terraform
              </p>
              <div className="absolute top-0 md:top-10 right-10 text-9xl font-bold -z-10 text-gray-300">
                2
              </div>
            </div>
            <div className="flex flex-col md:gap-y-5 rounded-md p-10 flex-1 relative border-2">
              <h2 className="text-base font-semibold">Quarter III</h2>
              <p className="text-lg text-slate-600">
                $-101: Dollar Making Bootcamp - Full-Stack Template and API
                Product Development
              </p>
              <div className="absolute top-0 md:top-10 right-10 text-9xl font-bold -z-10 text-gray-300">
                3
              </div>
            </div>
          </div>
          ;
        </div>
      </Wrapper>
      <div className="img absolute -z-10 -top-10 mobile:scale-50 laptop:scale-100"></div>
    </section>
  );
};

export default CoreTracks;
