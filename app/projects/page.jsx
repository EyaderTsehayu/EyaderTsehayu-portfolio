"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Circles from "@/components/Circles";
import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";
import ParticlesContainer from "@/components/ParticlesContainer";

const Projects = () => {
  return (
    <div className="h-full bg-primary/30 py-32 md:py-40 overflow-y-auto ">
      <div className="hidden sm:block">
        <ParticlesContainer />
      </div>
      <div className="hidden sm:block">
        <Circles />
      </div>
      <div className="container mx-auto h-full   items-center xl:flex-row gap-x-6 ">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My <span className="text-blue-600"> Projects</span>.
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Delve into my portfolio for an exclusive look at a compilation of
              successfully executed projects. Welcome to a showcase of
              achievements!
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Projects;
