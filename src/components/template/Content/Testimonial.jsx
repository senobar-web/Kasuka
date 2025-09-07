import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TestimonialImg } from "../../../../Data";
import { Pagination, Autoplay } from "swiper/modules";
import Testimonials from "../../module/testimonial/TestImonials";

export default function Testimonial() {
  const [testimage, setTestimage] = useState(TestimonialImg);
  return (
    <section className="testimonial testimg  mt-14 relative before:absolute before:bg-[rgba(0,0,0,0.7)] before:top-0 before:bottom-0 before:right-0 before:left-0  ">
      <div
        className="container h-[332px] md:h-[455px] flex items-center justify-center "
        data-aos="zoom-in"
      >
        <Swiper
          className="swiper-transition h-[100%]  md:h-[70%]"
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{ disableOnInteraction: true, delay: 0 }}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet`,
            bulletActiveClass: `swiper-pagination-bullet-active`,
          }}
          spaceBetween={30}
          slidesPerView={1}
          speed={6000}
          direction="horizontal"
        >
          {testimage.map((test) => (
            <>
              <SwiperSlide>
                <Testimonials {...test} key={test.id}></Testimonials>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
