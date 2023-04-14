import Hero from "./components/widgets/Hero";
import CoreTracks from "./components/widgets/CoreTracks";
import Head from "next/head";
import Specialized from "./components/widgets/Specialized";
import ProgramOutcome from "./components/widgets/ProgramOutcome";
import bgellipse from "@/app/assets/images/background-ellipse-left.png";
import Image from "next/image";


export default function Page() {
  return (
    <section>
    <>
      <Hero></Hero>
      {/* <div className="-z-10 bg-scroll mt-52 bg-black ">
        <Image src={bgellipse} alt="bg shade" />
      </div> */}
      {/* <div>
      <Image alt="PIAIC Logo" width="437" height="600" decoding="async" data-nimg="1" 
      className="absolute top-1/2 -z-40 opacity-10 left-0 right-0 mx-auto" src={bgellipse} />
      </div> */}
      <CoreTracks></CoreTracks>
      <Specialized></Specialized>
      <ProgramOutcome></ProgramOutcome>
    </>
    </section>
  );
}
