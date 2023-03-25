import Wrapper from "../shared/Wrapper";
import Boxes from "../shared/Boxes";

export const programData = [
  {
    header: "Web 3.0",
    description: "description of web 3.0",
    quarter : [
      {
        header: "Quarter IV",
        description:"Description",
        number : 4
      },
      {
        header: "Quarter V",
        description:"Description",
        number : 5
      }
    ]
  },
  {
    header: "AI",
    description: "description of Ai",
    quarter : [
      {
        header: "Quarter IV",
        description:"Description",
        number : 4
      },
      {
        header: "Quarter V",
        description:"Description",
        number : 5
      }
    ]
  }
]

const Specialized = () => {
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl mt-3 whitespace-pre">
            Specialized Tracks
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-screen-md">
            After completing
          </p>
        </div>

        <div className="mt-10 flex gap-x-6 gap-y-8">
          {/* Content Left */}
          <div className="basis-8/12 shadow-xl rounded-xl border border-slate-200 py-8 px-8">
            <h4 className="text-primary text-lg font-medium">
              Specialized Program
            </h4>
            <h1 className="text-xl font-bold ">
              Web 3.0 Blockchain and Metaverse Specialization
            </h1>
            <p className="text-lg text-slate-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              est beatae, repellendus excepturi vel repellat ex voluptatem ipsa.
              Sint earum totam necessitatibus eligendi id amet officiis officia
              sed facere nostrum.
            </p>
            <button className="text-teal-700 text-xl mt-4 underline">
              Learn More{" "}
            </button>
            <div className="flex gap-4 mt-8">
              <Boxes
                description="lorem"
                header="Quarter 4"
                number={4}
                haveBorder={false}
              />
              <Boxes
                description="lorem"
                header="Quarter 5"
                number={5}
                haveBorder={false}
              />
            </div>
          </div>
          {/* Content Right */}
          <div className=" px-4 py-6 basis-4/12">
            <div className="item-center flex gap-x-4 cursor-pointer">
              <div>
                <div className="w-20 h-16 rounded bg-red-500">a</div>
              </div>
              <div>
                <h4 className="text-primary text-xl font-semibold">
                  Specialized Task
                </h4>
                <h3>Anything you want</h3>
              </div>
              <div>
                <h4 className="text-primary text-xl font-semibold">
                  Specialized Task
                </h4>
                <h3>Anything you want</h3>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Specialized;
