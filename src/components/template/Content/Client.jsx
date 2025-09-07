import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../../module/client/client";
import { clientImg } from "../../../../Data";

export default function Client() {
  const [images, setImages] = useState(clientImg);
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <section className="client pb-14 pt-5 ">
        <div className="container">
          <div className="flex items-center  h-[150px] " data-aos="zoom-in">
            <Swiper
              className="h-[65%] xs:flex xs:justify-end  sm:justify-end"
              breakpoints={{
                470: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 1500, disableOnInteraction: true }}
              loop={true}
              pagination={{
                clickable: true,
                bulletClass: `swiper-pagination-bullet`,
                bulletActiveClass: `swiper-pagination-bullet-active`,
              }}
              spaceBetween={20}
              slidesPerView={2}
              direction="horizontal"
            >
              {images.map((image) => (
                <>
                  <SwiperSlide>
                    <Logo {...image} key={image.id}></Logo>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
