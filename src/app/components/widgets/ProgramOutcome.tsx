import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import outcome from "../../assets/images/programsection.png";
import polygon from "../../assets/images/polygon_icon.png";
import bgellipse from "../../assets/images/background-ellipse-left.png";

const outcomePoints = ["Product Ownership", "Freelancing", "Global Marketing by DAO", "Boosting Economy"];

const ProgramOutcome = () => {
  return (
    <div className="">
    <section className="mb-10 mt-20 laptop:mt-40 laptop:mb-30 relative ">
      <Wrapper>
        <div className="flex gap-x-8 gap-y-1 items-center flex-col tab:flex-row">
          {/* {Left - Image} */}
          <div className="flex-1 3xl:scale-110 3xl:ml-36 mobile:scale-90 mobile:justify-center">
            <Image src={outcome} alt="program outcome" />
          </div>
          {/* {Right - Content} */}
          <div className="flex-1">
            <h2 className="font-bold 3xl:mt-5 3xl:text-7xl mobile:text-center mobile:text-3xl tab:text-left tab:text-3xl tab:mt-2 laptop:text-4xl">
              The Outcome for Participants of the Program
            </h2>
            <p className="3xl:mt-14 3xl:text-4xl laptop:text-2xl laptop:mt-4 mobile:text-justify mobile:mt-3 mobile:text-sm tab:text-justify text-slate-600">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan's software exports.
            </p>
            <div className="3xl:mt-14 mt-6 grid grid-cols-2 gap-x-2 gap-y-4">
              {outcomePoints.map((item, i) => (
                <div key={i} className="flex items-center gap-x-2">
                  <div className="3xl:mt-5 3xl:m-3 scale-100">
                    <Image src={polygon} alt="polygon icon" />
                  </div>
                  <h3 className="3xl:mt-5 3xl:m-3 3xl:text-3xl font-medium laptop:text-lg mobile:text-sm">{outcomePoints[i]}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="img2 absolute -z-10 -top-10 tab:-mt-14 tab:ml-[525px] mobile:ml-20 mobile:scale-50 laptop:ml-[1125px] mt-48 laptop:scale-100"></div>
    </section>
    </div>
  );
};

export default ProgramOutcome;
