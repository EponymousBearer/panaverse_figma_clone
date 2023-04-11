import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import outcome from "@/app/assets/images/programsection.png";


const outcomePoints = ["Product Ownership", "Freelancing", "abc", "abcd"];

const ProgramOutcome = () => {
  return (
    <section className="mt-16 md:mt-28">
      <Wrapper>
        <div className="flex gap-x-8 items-center flex-col-reverse md:flex-row">
          {/* {Left - Image} */}
          <div className="flex-1">
            <Image src={outcome} alt="program outcome" />
          </div>
          {/* {Right - Content} */}
          <div className="flex-1">
            <h2 className="font-bold text-5xl">The outcome for participation</h2>
            <p className="mt-4 text-slate-600 text-lg">As a graduate</p>
            <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4">
                {outcomePoints.map((item, i) => (
                    <div key={i} className="flex items-center gap-x-2">
                        {/* SVG */}
                        <h3 className="font-medium text-lg"></h3>
                    </div>
                ) )}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ProgramOutcome;
