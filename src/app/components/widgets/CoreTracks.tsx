import Boxes from "../shared/Boxes";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";

const CoreTracksData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: "1",
  },
  {
    header: "Quarter II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: "2",
  },
  {
    header: "Quarter III",
    description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: "3",
  },
];

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="mt-20 mb-20 relative">
      <Wrapper>
        <div className="max-w-screen-xl">
          <h4 className="text-teal-800 font-semibold laptop:mt-10 laptop:text-lg tab:text-sm mobile:text-sm">
            PROGRAM OF STUDIES
          </h4>
          <h1 className="text-3xl laptop:mt-2 laptop:text-5xl laptop:text-left tab:text-left tab:text-3xl tab:mt-2 mobile:text-centre mobile:text-2xl mobile:mt-1 font-bold mt-3 whitespace-pre-line">{header}</h1>
          <p className="laptop:mt-6 laptop:mr-12 tab:mt-2 text-md laptop:text-lg mobile:mr-6 mobile:mt-4 mobile:text-sm text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="flex mobile:scale-75 mobile:justify-center laptop:mt-6 tab:mt-6 mobile:mt-6">
            <Button text="Learn More" />
          </div>
        </div>
        <div className="my-8 flex mobile:flex-col tab:flex-col lg:flex-row laptop:flex-row item-stretch gap-x-8 gap-y-4 ">
          {CoreTracksData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col flex-1 justify-center mobile:px-2 mobile:py-10 border rounded-md laptop:px-6 laptop:py-14 py-16 px-8 relative tab:px-2 tab:py-10 w-auto"
            >
              <h1 className="font-semibold">{item.header}</h1>
              <p className="text-slate-600 laptop:text-md tab:text-sm mobile:text-[10px] laptop:mr-8">{item.description}</p>
              <div className="absolute top-0 right-7 mobile:text-7xl tab:text-8xl laptop:text-9xl font-bold opacity-20 -z-10">
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
      <div className="img absolute -z-10 -top-10 mobile:scale-50 laptop:scale-100"></div>
    </section>
  );
};

export default CoreTracks;
