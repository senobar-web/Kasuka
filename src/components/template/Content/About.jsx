import { useState } from "react";
import Abouts from "../../module/about/Abouts";
import { textAbout } from "../../../../Data";

export default function About() {
  const [texts] = useState(textAbout);

  return (
    <section className="about py-14 " id="about">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-col-reverse  lg:flex-row items-center md:items-start gap-5 ">
          <div
            className=" md:w-full lg:w-[50%] text-justify text-[#444444]"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h1 className="text-2xl md:text-3xl font-Parastoo mb-2">
              شرکت دیجیتال کاسوکا
            </h1>
            <p className="mb-1.5 text-base font-Parastoo">
              شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت دیجیتال
              مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی روز و ارایه
              راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب و کارهای داخلی
              نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و با تثبیت نام نوآد
              به عنوان تخصصی ترین برند دیجیتال مارکتینگ در ایران و گسترش نام آن
              در بازارهای جهانی به صادرات خدمات مبتنی بر تکنولوژی های نوین گام
              بردارد. نوآد پیشرفت خود در طول یک دهه فعالیت را مرهون شفافیت،
              انسجام و پایبندی به نتایج پیش بینی شده مشتریان خود می داند. سرمایه
              گذاری روی تکنولوژی های نوین، کیفیت و نوآوری، پایبندی به تعهدات،
              رضایتمندی و وفاداری مشتریان، نیروی انسانی متمرکز و پویا از ارزش
              های ذاتی نوآد می باشند.
            </p>
            <div className="mb-1.5">
              {texts.map((text) => (
                <Abouts {...text} key={text.id}></Abouts>
              ))}
            </div>
            <p className="text-base font-Parastoo">
              خدمات نوآد در جهت یکپارچه سازی تمامی فعالیت های یک کسب و کار از
              مرحله ورود به بازار، ساخت، گسترش و ایجاد تصویری یکپاچه از برند،
              دیجیتال مارکتینگ، افزایش مزیت رقابتی و سهم بازار تا مراحل پس از
              فروش و ایجاد وفاداری در مشتریان یک برند ارایه می گردد.
            </p>
          </div>
          <div
            className="md:w-full lg:w-[50%]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img
              src="./images/about.jpg"
              alt="about"
              loading="lazy"
              className="w-full shrink-0 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
