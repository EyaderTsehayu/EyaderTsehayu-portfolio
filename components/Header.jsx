import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <div className="">
              <span className="font-semibold text-3xl tracking-wide ">
                Eyader
              </span>{" "}
              <span className="font-extralight text-3xl">Tsehayu</span>{" "}
              <span className="text-blue-600 font-bold text-3xl">.</span>
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
