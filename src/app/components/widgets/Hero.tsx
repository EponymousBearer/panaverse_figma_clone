import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import heroposterimage from "@/app/assets/images/hero-image2.png";

// components
import Button from "@/app/components/shared/Button";

const Hero = () => {
  return (
    <Wrapper>
      <div className="flex items-center flex-col md:flex-row mt-20 mb-40">
        <div className="flex-1">
          {/* left side */}
          <h1 className="text-teal-800 font-semibold text-lg">
            Presidential Initiative For Artificial Intelligance and Computing
            (PIAIC)
          </h1>
          <h4 className=" font-bold text-5xl mt-3">
            Certified Web 3.0 and Metaverse Developer
          </h4>
          <p className="mt-6 text-lg text-slate-600">
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet
          </p>
          <p className="mt-6 text-lg text-slate-600">
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
            Cloud, Edge, Ambient Computing/IoT, Network Automation, and
            Bioinformatics Technologies
          </p>
          <div className="flex mt-6">
            <Button text="Learn More" />
          </div>
        </div>
        <div className="flex-1">
          {/* right side */}
          <Image src={heroposterimage} alt="Hero image" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
