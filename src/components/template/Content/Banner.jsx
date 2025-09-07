import { useState } from "react";
import Boxheader from "../../module/boxheader/Box";
import { bannerItem } from "../../../../Data";

export default function Banner() {
  const [itembox, setItembox] = useState(bannerItem);
  return (
    // <section className="home relative" id="home">
    //   <div className="container  absolute right-0 left-0 top-0 bottom-0 pt-14 md:pt-10 flex ">
    //     <div
    //       className="flex flex-col items-center justify-center text-white "
    //       data-aos="fade-up"
    //     >
    //       <div
    //         className=" text-center font-Parastoo md:mb-11 "
    //         data-aos="fade-up"
    //         data-aos-delay="150"
    //       >
    //         <h1 className="text-2xl md:text-4xl/[75px]  ">
    //           راه حل های قدرتمند دیجیتال با
    //         </h1>
    //         <span className="text-2xl text-[#ffc451] text-center  md:text-4xl ">
    //           Kasuka
    //         </span>
    //         <p className="mt-3 text-xl md:text-2xl ">
    //           ما تیمی از بازاریابان با استعداد دیجیتال هستیم
    //         </p>
    //       </div>
    //       <div
    //         className="flex items-center flex-wrap gap-x-[29px] gap-y-5 md:gap-6 mt-16 md:mt-2 "
    //         data-aos="zoom-in"
    //         data-aos-delay="250"
    //       >
    //         {itembox.map((item) => (
    //           <Boxheader {...item} key={item.id} />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      className="bg-center bg-no-repeat bg-[url('/images/header-bg.jpg')] bg-black/60 bg-blend-multiply  relative"
      id="home"
    >
      <div
        className=" px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 text-white "
        data-aos="fade-up"
      >
        <h1 className="text-2xl md:text-4xl/[75px]  ">
          راه حل های قدرتمند دیجیتال با
        </h1>
        <span className="text-2xl text-[#ffc451] text-center  md:text-4xl ">
          Kasuka
        </span>
        <p className="mt-3 mb-6 text-xl md:text-2xl ">
          ما تیمی از بازاریابان با استعداد دیجیتال هستیم
        </p>  
        <div
          className="flex items-center flex-wrap gap-x-[29px] gap-y-5 md:gap-6 mt-16 md:mt-2"
          data-aos="zoom-in"
          data-aos-delay="250"
        >
          {itembox.map((item) => (
            <Boxheader {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
