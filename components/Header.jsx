import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]  bg-primary/30 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-y-6 gap-y-2 lg:py-8 py-8">
          <Link href={"/"}>
            <div className="cursor-pointer">
              <span className="font-semibold lg:text-3xl text-2xl tracking-wide ">
                Eyader
              </span>{" "}
              &nbsp;
              <span className="font-extralight lg:text-3xl text-2xl">
                Tsehayu
              </span>{" "}
              <span className="text-blue-600 font-bold lg:text-3xl text-2xl">
                .
              </span>
            </div>
          </Link>
          <div className="xl:pt-8 flex flex-col  justify-end place-items-end">
            <Nav />
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
