import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import HeroPoster from "@/app/assets/images/hero-image.jpeg";
// components
import Button from "@/app/components/shared/Button"


const Hero = () => {
  return (
    <Wrapper>
      <div className="flex items-center flex-col md:flex-row bg-pink-100">
        <div className="flex-1">
          {/* left side */}
          <h1 className="text-teal-800 font-semibold text-lg">
            Presidential Initiative For Artificial Intelligance and Computing
            (PIAIC)
          </h1>
          <h4 className="text-5xl font-bold sm:text-6xl mt-3">
            Certified Web 3.0 and Metaverse Developer
          </h4>
          <p className="mt-6 text-lg text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            distinctio at magni molestias omnis ex facere voluptates
            voluptatibus nostrum quo unde necessitatibus perspiciatis eum illo
            libero praesentium a ipsa dolores.
          </p>
          <div className="flex mt-6">
          <Button text="Learn More"/>
          </div>
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
