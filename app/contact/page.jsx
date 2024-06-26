"use client";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 font-bold"
          >
            Let us <span className="text-blue-600">connect</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            target="_blank"
            onSubmit={onSubmit}
            //   action="https://formsubmit.co/13e1273f5b7a4c1bb177d4b64550c7f8"
            action="https://formsubmit.co/eyaderts@gmail.com"
            method="POST"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input"
              />
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input"
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              name="subject"
              className="input"
            />
            <textarea
              placeholder="message"
              name="message"
              className="textarea"
            ></textarea>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-blue-600 group"
              type="submit"
            >
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Send
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
