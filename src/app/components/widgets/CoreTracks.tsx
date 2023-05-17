import Boxes from "../shared/Boxes";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";

const CoreTracksData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: "Quarter II",
    description: "CS-102: Object-Oriented Programming using TypeScript",
    number: 2,
  },
  {
    header: "Quarter III",
    description: "CS-103: Object-Oriented Programming using TypeScript",
    number: 3,
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
          <div className="mt-6 flex flex-col gap-y-3 md:flex-row gap-x-3">
            {CoreTracksData.map((track, index) => (
              <Boxes
                key={index}
                header={track.header}
                description={track.description}
                number={track.number}
              />
            ))}
          </div>
        </div>
      </Wrapper>
      <div className="img absolute -z-10 -top-10 mobile:scale-50 laptop:scale-100"></div>
    </section>
  );
};

export default CoreTracks;
