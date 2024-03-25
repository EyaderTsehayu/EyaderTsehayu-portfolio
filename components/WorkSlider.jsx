// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import workSlides from "@/constants/projectsData";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-auto"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 items-baseline justify-start grid-rows-1 gap-4 cursor-pointer  pb-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex  justify-center group flex-col"
                    key={index}
                  >
                    <Link
                      href={`${image.domainUrl}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex items-center justify-center relative overflow-hidden group"
                    >
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt="images"
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">
                            <div className="delay-100">LIVE</div>
                          </div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            <div className="delay-100">PROJECT</div>
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <div className="delay-100">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={`${image.githubUrl}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex flex-1 items-center justify-between font-bold px-2 py-2 mt-2 bg-white/10 hover:bg-white/20"
                    >
                      {image.title}
                      <BsGithub className="text-2xl" />
                    </Link>

                    <div className=" bg-white/10 px-2 pb-1 text-justify">
                      {image.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
