"use client";
import ProjectsBtn from "@/components/ProjectsBtn";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Avatar from "@/components/Avatar";
import ParticlesContainer from "@/components/ParticlesContainer";
export default function Home() {
  return (
    <div className=" bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/30 via-black/30 to-black/10">
        <div className="text-center flex flex-col  justify-center lg:pt-40 pt-32  xl:text-left h-full container mx-auto">
          {" "}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 font-poppins font-bold"
          >
            Ideas Engineered <br />
            Into <span className="text-blue-600 ">Digital Horizons</span>{" "}
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-justify max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            As an enthusiastic software engineer, I specialize in both web and
            mobile development. With a passion for creating innovative
            solutions, I blend creativity with technical expertise to build
            user-friendly experiences that drive engagement and satisfaction.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>{" "}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none  xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>{" "}
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" w-1/2 h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:-bottom-10 right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
}
