// icons
"use client";
import { useState } from "react";
import { FaBars, FaDownload } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleButtonClick = () => {
    // URL to open in a new tab
    const url =
      "https://drive.google.com/file/d/1rOj6ez5GxC3LasK117JljRbr-lMF50so/view";

    // Open the URL in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };
  https: return (
    <div className="flex items-center justify-between xl:flex xl:items-center xl:gap-x-5 text-lg xl:pb-3">
      <div className="hidden xl:flex items-center gap-x-7">
        <Link
          href={"/"}
          className="hover:text-blue-600  transition-all duration-300"
        >
          Home
        </Link>{" "}
        <Link
          href={"/about"}
          className="hover:text-blue-600  transition-all duration-300"
        >
          About
        </Link>{" "}
        <Link
          href={"/projects"}
          className="hover:text-blue-600  transition-all duration-300"
        >
          Portfolio
        </Link>{" "}
        <Link
          href={"contact"}
          className="hover:text-blue-600  transition-all duration-300"
        >
          Contact
        </Link>{" "}
        <button
          onClick={handleButtonClick}
          className="flex flex-row gap-2 items-center bg-blue-600 rounded-lg hover:bg-blue-500 py-2 px-3  transition-all duration-300"
        >
          Resume <FaDownload />
        </button>{" "}
      </div>

      <div className="xl:hidden absolute xl:right-5 right-8 top-10  flex items-center">
        <FaBars
          className="text-2xl cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden fixed top-0 left-0 w-full h-full bg-primary/95 z-50">
          <div className="  flex justify-end p-4">
            <FaXmark
              className=" text-2xl cursor-pointer  "
              onClick={toggleMobileMenu}
            />
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <Link
              onClick={toggleMobileMenu}
              href={"/"}
              className="hover:text-blue-600  transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              onClick={toggleMobileMenu}
              className="hover:text-blue-600  transition-all duration-300"
            >
              About
            </Link>
            <Link
              onClick={toggleMobileMenu}
              href={"/projects"}
              className="hover:text-blue-600  transition-all duration-300"
            >
              Portfolio
            </Link>
            <Link
              onClick={toggleMobileMenu}
              href={"/contact"}
              className="hover:text-blue-600  transition-all duration-300"
            >
              Contact
            </Link>
            <button
              onClick={() => {
                toggleMobileMenu();
                handleButtonClick();
              }}
              className="flex flex-row gap-2 items-center bg-blue-600 rounded-lg hover:bg-blue-500 py-2 px-3  transition-all duration-300"
            >
              Resume <FaDownload />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
