import panaverse_logo from "/public/panaverse_logo.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";

const header = () => {
  return (
    <Wrapper>
      <header className="flex justify-between max-w-screen-xl mx-auto py-4 bg-blue-100 sticky top-0 items-center">
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
      </header>
    </Wrapper>
  );
};

export default header;
