import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import heroposterimage from "../../assets/images/hero-image2.png";

// components
import Button from "../../components/shared/Button";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex mt-16 mb-40 items-center mobile:flex-col laptop:flex-row laptop:justify-center tab:flex-row laptop:gap-x-48">
          <div className="flex-auto ">
            {/* left side */}
            <h1 className="text-teal-800 3xl:text-3xl font-semibold laptoplg:text-xl laptop:mt-10 laptop:text-lg tab:text-sm mobile:text-sm">
              Presidential Initiative For Artificial Intelligance and Computing
              (PIAIC)
            </h1>
            <h4 className="3xl:mt-5 font-bold 3xl:text-8xl laptop:mt-4 laptop:-mr-52 laptop:text-6xl laptop:text-left tab:text-left tab:text-3xl tab:mt-2 mobile:text-centre mobile:text-2xl mobile:mt-3 text-center">
              Certified Web 3.0 and Metaverse Developer
            </h4>
            <p className="3xl:mt-14 3xl:mr-20 3xl:text-4xl laptop:mt-8 laptop:mr-1 laptop:text-xl tab:mr-12 tab:mt-4 mobile:mr-6 mobile:mt-4 mobile:text-sm text-md text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="3xl:mt-8 3xl:mr-20 3xl:text-4xl laptop:mt-4 laptop:mr-1 laptop:text-xl tab:mr-12 tab:mt-2 mobile:mr-6 mobile:mt-2 mobile:text-sm text-slate-600">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="flex 3xl:-ml-36 3xl:mt-10 mobile:scale-75 tab:mt-4 mt-12">
              <Button text="Learn More" />
            </div>
          </div>
          <div className="flex 3xl:scale-225 3xl:-mt-44 3xl:mr-40 mobile:mt-4 laptop:scale-125">
            {/* right side */}
            <Image src={heroposterimage} alt="Hero image" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
