import Boxes from "../shared/Boxes";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";

const CoreTracksData = [
  {
    header: "Quarter 1",
    description: "Sab mil kr",
    number: "1",
  },
  {
    header: "Quarter 2",
    description: "Sab mil kr",
    number: "2",
  },
  {
    header: "Quarter 3",
    description: "Sab mil kr",
    number: "3",
  },
];

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specialization)";
  return (
    <section className="mt-18 ">
      <Wrapper>
        <div className="max-w-screen-xl bg-green-100">
          <h4 className="text-teal-800 font-semibold text-lg">
            Program of Studies
          </h4>
          <h1 className="text-3xl font-bold sm:text-4xl mt-3 whitespace-pre">
            {header}
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            quisquam temporibus animi rem labore perferendis inventore sapiente
            cum ratione, neque voluptate accusamus earum cumque sed nesciunt sit
            at, tempora reiciendis.
          </p>
          <div className="flex mt-6">
            <Button text="Learn More" />
          </div>
        </div>
        <div className="my-20 flex flex-col md:flex-row item-stretch gap-x-8 gap-y-6 ">
          {CoreTracksData.map((item, i) => (
              <div className="flex flex-col flex-1 justify-center border rounded-md px-8 py-16 relative">
                <h1 className="font-bold text-lg">{item.header}</h1>
                <p className="text-slate-600 mt-2 z-0">{item.description}</p>
                <div className="absolute -top-8 right-10 text-[150px] font-bold opacity-20 -z-10">{i + 1}</div>
              </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
