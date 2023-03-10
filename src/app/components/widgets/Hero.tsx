import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import HeroPoster from "@/app/assets/images/hero-image.jpeg";

const Hero = () => {
  return (
    <Wrapper>
      <div className="flex items-center bg-pink-100">
        <div className="flex-1">
          {/* left side */}
          <h1 className="text-teal-800 font-semibold text-lg">President Initiative For Artificial Intelligance and Computing (PIAIC)</h1>
          <h4 className="text-6xl font-bold">Certified Web 3.0 and Metaverse Developer</h4>
          <p className="mt-6 text-lg text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            distinctio at magni molestias omnis ex facere voluptates
            voluptatibus nostrum quo unde necessitatibus perspiciatis eum illo
            libero praesentium a ipsa dolores.
          </p>
        <button className="text-lg ring rounded-full px-3 py-1.5 bg-teal-700 text-white ring-teal-700 my-3">Learn More</button>
        </div>
        <div className="flex-1">
          {/* right side */}
          <Image src={HeroPoster} width={500} height={500} alt="Hero image" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
