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
      <CoreTracks></CoreTracks>
      <Specialized></Specialized>
      <ProgramOutcome></ProgramOutcome>
    </>
    </section>
  );
}
