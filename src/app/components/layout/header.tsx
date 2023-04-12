import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Link from "next/link";
import panaverse_logo from "@/app/assets/images/panaverselogo.png";

import dropdownsvg from "@/app/assets/images/dropdownsvg.png";

const header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <Wrapper>
        <div className="flex justify-between max-w-screen-xl mx-auto py-2 items-center">
          <div>
            <Image src={panaverse_logo} alt="Panaverse Dao Logo" />
          </div>
          <ul className="flex space-x-8 font-semibold">
            <li className="flex items-center gap-x-2">
              <div>
                <Link href={"/"}>Courses</Link>
              </div>
              <div className="h-1">
                <Image src={dropdownsvg} alt="drop down svg" />
              </div>
            </li>
            <li>
              <Link href={"/about"}>Blog</Link>
            </li>
            <li>
              <button>Videos</button>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default header;
