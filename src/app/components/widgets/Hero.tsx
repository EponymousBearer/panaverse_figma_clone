import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import heroposterimage from "../../assets/images/hero-image2.png";

// components
import Button from "../../components/shared/Button";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex mt-6 mb-20 laptop:mb-40 items-center mobile:flex-col laptop:flex-row laptop:justify-center tab:flex-col laptop:gap-x-48">
          {/* left side */}
          <div className="flex-auto ">
            <h1 className="text-teal-800 3xl:text-3xl font-semibold laptop:text-xl tab:text-sm mobile:text-[13px]">
              Presidential Initiative For Artificial Intelligance and Computing
              (PIAIC)
            </h1>
            <h4 className="3xl:mt-5 font-bold 3xl:text-8xl laptop:mt-4 laptop:text-6xl laptop:text-left tab:text-left tab:text-3xl tab:mt-2 mobile:text-centre mobile:text-[26px] mobile:mt-3 text-center">
              Certified Web 3.0 and Metaverse Developer
            </h4>
            <p className="3xl:mt-14 3xl:mr-20 3xl:text-4xl laptop:mt-8 laptop:text-2xl tab:mr-12 tab:mt-4 mobile:mr-6 mobile:mt-5 mobile:text-justify mobile:text-lg text-md text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="3xl:mt-8 3xl:mr-20 3xl:text-4xl laptop:mt-4 laptop:text-2xl tab:mr-12 tab:mt-2 mobile:mr-6 mobile:mt-4 mobile:text-justify mobile:text-lg text-slate-600">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="flex 3xl:justify-center 3xl:mt-10 3xl:scale-90 mobile:scale-50 tab:mt-2 mobile:mt-2 justify-center mt-12">
              <Button text="Learn More" />
            </div>
          </div>
          {/* right side */}
          <div className="flex 3xl:scale-225 3xl:-mt-44 3xl:mr-40 laptop:-mt-16 laptop:mr-10 laptop:scale-225 tab:scale-90 tab:-mt-4 mobile:mt-4">
            
            <Image src={heroposterimage} alt="Hero image" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
