import panaverse_logo from "/public/panaverse_logo.png";
import Image from "next/image";
import Link from "next/link";

const header = () => {
  return (
    <header className="flex justify-between max-w-screen-xl mx-auto py-6 px-2 bg-white sticky top-0 items-center">
      <div>
        <Image src={panaverse_logo} alt="Panaverse Dao Logo" />
        <h2 className="text-xl font-medium">Panaverse Dao</h2>
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
  );
};

export default header;
