import Hero from "./components/widgets/Hero";
import CoreTracks from "./components/widgets/CoreTracks";
import Head from "next/head";
import Specialized from "./components/widgets/Specialized";
import ProgramOutcome from "./components/widgets/ProgramOutcome";


export default function Page() {
  return (
    <main>
    <>
      <section><Hero></Hero></section>
      <section><CoreTracks></CoreTracks></section>
      <section><Specialized></Specialized></section>
      <section><ProgramOutcome></ProgramOutcome></section>
    </>
    </main>
  );
}
