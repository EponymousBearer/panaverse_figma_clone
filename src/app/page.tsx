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
      {/* <div className="-z-10 bg-scroll bg-hero-pattern">
        <Image src={bgellipse} alt="bg shade" />
      </div> */}
      <CoreTracks></CoreTracks>
      <Specialized></Specialized>
      <ProgramOutcome></ProgramOutcome>
    </>
    </section>
  );
}
