import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Feature(props) {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div
        className="flex items-start  mb-8 w-full"
        data-aos="zoom-in"
        data-aos-delay="150"
      >
        <span className="text-[#ffc451] h-full text-5xl ">{props.iconFea}</span>
        <div className=" h-full mr-4 font-Parastoo ">
          <h1 className="text-xl text-[#444444] mt-1.5  mb-2.5 ">
            {" "}
            {props.header}
          </h1>
          <p className="text-sm text-[#848484]  mb-4  "> {props.descript}</p>
        </div>
      </div>
    </>
  );
}
