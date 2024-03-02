import Link from "next/link";
import {
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  RiTelegramLine,
} from "react-icons/ri";
import { SiUpwork } from "react-icons/si";
const Socials = () => {
  return (
    // <div className="flex items-center gap-x-5 text-lg">
    //   <Link
    //     href={"https://www.linkedin.com/in/eyadertsehayu/"}
    //     className="hover:text-blue-600  transition-all duration-300"
    //   >
    //     <RiLinkedinLine />
    //   </Link>{" "}
    //   <Link
    //     href={"https://github.com/EyaderTsehayu"}
    //     className="hover:text-blue-600  transition-all duration-300"
    //   >
    //     <RiGithubLine />
    //   </Link>{" "}
    //   <Link
    //     href={"https://t.me/EyaderTs"}
    //     className="hover:text-blue-600  transition-all duration-300"
    //   >
    //     <RiTelegramLine />
    //   </Link>{" "}
    //   <Link
    //     href={"https://www.instagram.com/eyader__tsehayu"}
    //     className="hover:text-blue-600  transition-all duration-300"
    //   >
    //     <RiInstagramLine />
    //   </Link>
    //   <Link
    //     href={"https://www.upwork.com/freelancers/~01255b9a0261c21215"}
    //     className="hover:text-blue-600  transition-all duration-300"
    //   >
    //     <SiUpwork />
    //   </Link>{" "}
    // </div>
    <div className="flex items-center gap-x-5 text-lg">
      <a
        href="https://www.linkedin.com/in/eyadertsehayu/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition-all duration-300"
      >
        <RiLinkedinLine />
      </a>{" "}
      <a
        href="https://github.com/EyaderTsehayu"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition-all duration-300"
      >
        <RiGithubLine />
      </a>{" "}
      <a
        href="https://t.me/EyaderTs"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition-all duration-300"
      >
        <RiTelegramLine />
      </a>{" "}
      <a
        href="https://www.instagram.com/eyader__tsehayu"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition-all duration-300"
      >
        <RiInstagramLine />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01255b9a0261c21215"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition-all duration-300"
      >
        <SiUpwork />
      </a>{" "}
    </div>
  );
};

export default Socials;
