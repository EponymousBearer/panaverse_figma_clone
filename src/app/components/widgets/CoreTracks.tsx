import Boxes from "../shared/Boxes";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specialization)";
  return (
    <section className="mt-18 ">
      <Wrapper>
        <div className="max-w-screen-sm bg-green-100">
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
        <div className="my-20 flex gap-x-4">
          <Boxes
            heading={"Quarter 1"}
            subheading={"Sab mil kr hum ko bana"}
            num={1}
          ></Boxes>
          <Boxes
            heading={"Quarter 2"}
            subheading={"Sab mil kr hum ko bana"}
            num={2}
          ></Boxes>
          <Boxes
            heading={"Quarter 3"}
            subheading={"Sab mil kr hum ko bana"}
            num={3}
          ></Boxes>
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
