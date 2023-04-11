import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Link from "next/link";
import panaverse_logo from "@/app/assets/images/panaverselogo.png";

const header = () => {
  return (
    <header className="sticky top-0 z-10 bg-blue-100">
      <Wrapper>
        <div className="flex justify-between max-w-screen-xl mx-auto py-2 items-center">
          <div>
            <Image src={panaverse_logo} alt="Panaverse Dao Logo" />
          </div>
          <ul className="flex space-x-8 font-semibold">
            <li>
              <Link href={"/"}></Link>
              Home
            </li>
            <li>
              <Link href={"/about"}></Link>
              About
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default header;
