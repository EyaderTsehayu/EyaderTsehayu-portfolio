// icons
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { FaDownload } from "react-icons/fa6";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="hidden xl:flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/eyadertsehayu/"}
        className="hover:text-accent transition-all duration-300"
      >
        Home
      </Link>{" "}
      <Link href={""} className="hover:text-accent transition-all duration-300">
        About
      </Link>{" "}
      <Link href={""} className="hover:text-accent transition-all duration-300">
        Portfolio
      </Link>{" "}
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        Services
      </Link>{" "}
      <Link href={""} className="hover:text-accent transition-all duration-300">
        Testimonials
      </Link> */}
      <Link href={""} className="hover:text-accent transition-all duration-300">
        Contact
      </Link>{" "}
      <Link
        href={""}
        className="flex flex-row gap-2 items-center bg-blue-600 rounded-lg hover:bg-blue-500 py-2 px-3  transition-all duration-300"
      >
        Resume <FaDownload />
      </Link>{" "}
    </div>
  );
};

export default Nav;
