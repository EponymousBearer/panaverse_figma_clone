import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Link from "next/link";
import panaverse_logo from "@/app/assets/images/panaverselogo.png";

import dropdownsvg from "@/app/assets/images/dropdownsvg.png";

const header = () => {
  return (
      <header className="sticky top-0 z-10 bg-white">
        <nav>
          <div className="flex justify-between py-2 items-center">
            <div>
              <Image
                src={panaverse_logo}
                alt="Panaverse Dao Logo"
                className="mobile:-m-2 lg:scale-125 mobile:scale-75 laptop:scale-150 lg:m-5 laptop:m-10"
              />
            </div>
            {/* max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl */}
            <ul className="flex mobile:-m-2 laptop:space-x-20 3xl:space-x-24 laptop:text-3xl laptop:m-10 tab:space-x-10 mobile:space-x-4 mobile:text-sm font-semibold">
              <li className="flex items-center gap-x-1">
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
        </nav>
      </header>
  );
};

export default header;
