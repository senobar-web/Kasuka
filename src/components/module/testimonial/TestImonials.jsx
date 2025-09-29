import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials({ name, img, job, about }) {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className="w-[90%] mx-auto h-full text-white flex items-center justify-center   ">
        <div>
          <div
            className="flex flex-col"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex flex-col justify-center items-center w-ull">
              <img
                src={img}
                alt="testimonials"
                loading="lazy"
                className="w-[100px] h-[100px] rounded-full border-8 border-solid border-[rgba(255,255,255,0.15)]"
              />
              <div className="w-full flex flex-col items-center justify-center font-Parastoo">
                <h1 className="  text-lg md:text-xl text-bold mt-1.5 mb-1 md:mt-2.5 md:mb-2 ">
                  {name}{" "}
                </h1>
                <p className="text-sm mb-2 md:mb-4 block">{job}</p>
              </div>
            </div>
            <p className=" text-justify text-sm md:text-base font-Parastoo">
              {about}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
