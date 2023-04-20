import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Link from "next/link";
import panaverse_logo from "@/app/assets/images/panaverselogo.png";

import dropdownsvg from "@/app/assets/images/dropdownsvg.png";

const header = () => {
  return (
    <Wrapper>
      <header className="mt-2 sticky top-0 z-10 bg-white">
        <nav>
          <div className="flex justify-between py-2 items-center">
            <div>
              <Image
                src={panaverse_logo}
                alt="Panaverse Dao Logo"
                className="lg:scale-125 mobile:scale-90 laptop:scale-150 lg:m-5 laptop:m-10"
              />
            </div>
            {/* max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl */}
            <ul className="flex 3xl:space-x-24 3xl:text-3xl 3xk:-mr-0 laptop:space-x-20 laptop:text-2xl laptop:-mr-12 tab:mr-14 tab:space-x-16 tab:text-xl mobile:space-x-3 mobile:text-[13px] font-semibold">
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
      </Wrapper>
  );
};

export default header;
