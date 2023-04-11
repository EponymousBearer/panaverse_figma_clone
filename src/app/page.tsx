import Hero from "./components/widgets/Hero";
import CoreTracks from "./components/widgets/CoreTracks";
import Head from 'next/head';
import Specialized from "./components/widgets/Specialized";
import ProgramOutcome from "./components/widgets/ProgramOutcome";

export default function Page() {
  return (
    <>
      <Hero></Hero>
      <CoreTracks></CoreTracks>
      <Specialized></Specialized>
      <ProgramOutcome></ProgramOutcome>
    </>
  );
}
