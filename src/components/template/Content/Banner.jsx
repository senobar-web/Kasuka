import { useState } from "react";
import Boxheader from "../../module/boxheader/Box";
import { bannerItem } from "../../../../Data";

export default function Banner() {
  const [itembox] = useState(bannerItem);
  return (
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
