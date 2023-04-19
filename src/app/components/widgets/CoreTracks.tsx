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
    <section className="mt-48 mb-24 relative">
      <Wrapper>
        <div className="max-w-screen-xl">
          <h4 className= "text-teal-800 3xl:text-3xl font-semibold laptop:mt-10 laptop:text-lg tab:text-sm mobile:text-sm">
            PROGRAM OF STUDIES
          </h4>
          <h1 className="3xl:mt-5 3xl:text-7xl text-3xl laptop:mt-2 laptop:text-5xl laptop:text-left tab:text-left tab:text-3xl tab:mt-2 mobile:text-centre mobile:text-2xl mobile:mt-1 font-bold whitespace-pre-line">{header}</h1>
          <p className="3xl:mt-14 3xl:text-4xl laptop:mt-6 laptop:mr-12 tab:mt-2 text-md laptop:text-lg mobile:mr-6 mobile:mt-4 mobile:text-sm text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="flex 3xl:mb-12 3xl:mr-[1050px] 3xl:mt-10 mobile:scale-75 mobile:justify-center laptop:mt-6 tab:mt-6 mobile:mt-6">
            <Button text="Learn More" />
          </div>
        </div>
        <div className="flex 3xl:gap-x-8 my-8 mobile:flex-col tab:flex-col lg:flex-row laptop:flex-row justify-items-stretch gap-x-8 gap-y-4">
              {CoreTracksData.map((item, i) => (
                <Boxes
                  key={i}
                  description={item.description}
                  header={item.header}
                  number={i + 1}
                  haveBorder={true}
                />
              ))}
            </div>
      </Wrapper>
      <div className="img absolute -z-10 -top-10 mobile:scale-50 laptop:scale-100"></div>
    </section>
  );
};

export default CoreTracks;
