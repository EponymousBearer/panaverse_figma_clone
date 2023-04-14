import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import outcome from "../../assets/images/programsection.png";
import polygon from "../../assets/images/polygon_icon.png";
import bgellipse from "../../assets/images/background-ellipse-left.png";

const outcomePoints = ["Product Ownership", "Freelancing", "Global Marketing by DAO", "Boosting Economy"];

const ProgramOutcome = () => {
  return (
    <section className="mt-16 md:mt-28 mb-28">
      <Wrapper>
        <div className="flex gap-x-8 items-center flex-col sm:flex-row">
          {/* {Left - Image} */}
          <div className="flex-1">
            <Image src={outcome} alt="program outcome" />
          </div>
          {/* {Right - Content} */}
          <div className="flex-1">
            <h2 className="font-bold text-5xl mt-8">
              The Outcome for Participants of the Program
            </h2>
            <p className="mt-6 text-slate-600 text-lg">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan's software exports.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4">
              {outcomePoints.map((item, i) => (
                <div key={i} className="flex items-center gap-x-2">
                  <div>
                    <Image src={polygon} alt="polygon icon" />
                  </div>
                  <h3 className="font-medium text-lg">{outcomePoints[i]}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <Image alt="PIAIC Logo" loading="lazy" width="437" height="600" decoding="async" data-nimg="1" 
        className="absolute top-1/2 -z-40 opacity-10 left-0 right-0 mx-auto bg-transparent" 
        src={bgellipse}/> */}
      </Wrapper>
    </section>
  );
};

export default ProgramOutcome;
