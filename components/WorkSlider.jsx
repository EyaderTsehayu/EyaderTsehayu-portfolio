export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/xclusivepay.jpg",
          link: "https://web3-paypal-frontend.vercel.app/",
        },
        {
          title: "title",
          path: "/yarn_social_media_app.png",
          link: "https://mern-social-media2-b24jrz91t-honeybadgerng.vercel.app/",
        },

        {
          title: "title",
          path: "/xclusiveproperties.png",
          link: "https://xclusiveproperties.homes/",
        },

        {
          title: "title",
          path: "/resolvedecor.png",
          link: "https://honeybadgerng.github.io/interor_decor_sample_site_1/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/jentro_gadget_sitesample.png",
          link: "https://honeybadgerng.github.io/gadgetsamplesite2/",
        },
        {
          title: "title",
          path: "/regalia_gadget_sample.png",
          link: "https://honeybadgerng.github.io/gadgetsitesample1/",
        },
        {
          title: "title",
          path: "/yarn-decentralized-social-media-app.png",
          link: "https://decentralized-social-media-app-three.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/rjbxclusive.png",
          link: "https://rjbxclusive.com/",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
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
                            <a
                              href={image.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="delay-100"
                            >
                              LIVE
                            </a>
                          </div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            <a
                              href={image.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="delay-100"
                            >
                              PROJECT
                            </a>
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <a
                              href={image.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="delay-100"
                            >
                              <BsArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
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
