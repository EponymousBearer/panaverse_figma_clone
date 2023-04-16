import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import heroposterimage from "../../assets/images/hero-image2.png";

// components
import Button from "../../components/shared/Button";

const Hero = () => {
  return (
    <Wrapper>
      <div className="flex items-center flex-col md:flex-row mt-14 mb-20">
        <div className="flex-1">
          {/* left side */}
          <h1 className="text-teal-800 font-semibold laptop:mt-10 laptop:text-lg tab:text-sm mobile:text-sm">
            Presidential Initiative For Artificial Intelligance and Computing
            (PIAIC)
          </h1>
          <h4 className=" font-bold laptop:mt-4 laptop:text-5xl laptop:text-left tab:text-left tab:text-3xl tab:mt-2 mobile:text-centre mobile:text-2xl mobile:mt-3 text-center">
            Certified Web 3.0 and Metaverse Developer
          </h4>
          <p className="laptop:mt-8 laptop:mr-12 tab:mr-12 tab:mt-4 mobile:mr-6 mobile:mt-4 mobile:text-sm text-md text-slate-600">
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet
          </p>
          <p className="laptop:mt-3 laptop:mr-12 tab:mr-12 tab:mt-2 mobile:mr-6 mobile:mt-2 mobile:text-sm text-slate-600">
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
            Cloud, Edge, Ambient Computing/IoT, Network Automation, and
            Bioinformatics Technologies
          </p>
          <div className="flex mobile:scale-75 tab:mt-4 mt-6 justify-center md:justify-start">
            <Button text="Learn More" />
          </div>
        </div>
        <div className="flex-1 mobile:mt-4">
          {/* right side */}
          <Image src={heroposterimage} alt="Hero image" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
