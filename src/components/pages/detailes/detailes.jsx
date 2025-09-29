import Header from "../../module/Header/Header";
import Footer from "../../module/Footer/Footer";
import Breadcrumb from "../../module/BreadCamb/BreadCamb"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Detailes() {
  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "/" },
          { id: 2, title: "جزییات نمونه کارها", to: "/detail" },
        ]}
      />
      <section className=" my-34 ">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-7 ">
            <div className="w-full md:w-[50%] ">
              <Swiper
                // spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{ disableOnInteraction: true, delay: 1500 }}
                slidesPerView={1}
                // speed={3000}
                direction="horizontal"
                className="mySwiper  h-[100%] "
              >
                <SwiperSlide>
                  <img src="/images/portfolio-2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/portfolio-3.jpg"
                    alt=""
                    className=" object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/portfolio-7.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-full md:w-[40%] ">
              <div className="bg-white p-7 shadow-md ">
                <div className=" border-b-[1px] border-gray-100 mb-5 py-5">
                  <h1>اطلاعات پروژه</h1>
                </div>
                <div>
                  <p>
                    <strong>دسته بندی:</strong> طراحی وب سایت
                  </p>
                  <p>
                    <strong> مشتری:</strong> شرکت ASU{" "}
                  </p>
                  <p>
                    <strong>تاریخ پروژه: </strong> 12 شهریور 1370{" "}
                  </p>
                  <p className="text-orange-300">
                    <strong className="text-black"> آدرس پروژه: </strong>{" "}
                    www.example.com
                  </p>
                </div>
              </div>
              <div className="p-7 ">
                <h1 className="text-xl">
                  این نمونه ای از جزئیات نمونه کارها است
                </h1>
                <p className="text-justify text-base">
                  او برای دنیای فیزیکی بازی می کرد. چه کسی باعث می شود آنها
                  احساس درد کنند ، و مخترع آنها نیز چنین هستند ، زیرا این کار
                  انگیزه های خودخواهانه است. آموزش نباید با مسئولیت ها کنار
                  گذاشته شود و نباید به عنوان مسئولیت این نیازها پذیرفته شود.
                  لذت مقام متهمان در این است که نمی دانند در همه زمانها شایسته
                  ترین افتخار است. اما دلیلی برای پیروی از او وجود ندارد ، زیرا
                  وقتی او را رها می کنند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
