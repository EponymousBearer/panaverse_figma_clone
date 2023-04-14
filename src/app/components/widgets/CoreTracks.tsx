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
          <h4 className="text-teal-800 font-semibold text-md tab:text-lg">
            PROGRAM OF STUDIES
          </h4>
          <h1 className="text-3xl tab:text-4xl font-bold mt-3 md:text-5xl whitespace-pre-line">{header}</h1>
          <p className="mt-3 tab:mt-6 tab:text-sm text-lg text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="flex mt-4">
            <Button text="Learn More" />
          </div>
        </div>
        <div className="my-10 flex tab:flex-col md:flex-row flex-col item-stretch gap-x-8 gap-y-4 ">
          {CoreTracksData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col flex-1 justify-center border rounded-md px-8 py-16 relative"
            >
              <h1 className="font-bold text-lg mt-4">{item.header}</h1>
              <p className="text-slate-600 mt-2 z-0">{item.description}</p>
              <div className="absolute -top-8 right-10 text-[150px] font-bold opacity-20 -z-10">
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
      <div className="img absolute -z-10 -top-10"></div>
    </section>
  );
};

export default CoreTracks;
