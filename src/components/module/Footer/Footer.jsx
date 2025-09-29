import { useState } from "react";
import Links from "../../template/Footer/Link";
import Services from "../../template/Footer/Services";
import FooterSocial from "../../template/Footer/FooterSocial";
import { socialFooter, footerLinks, servicesFooter } from "../../../../Data";
import { Link } from "react-router-dom";

export default function Footer () {
  const [links] = useState(footerLinks);
  const [service] = useState(servicesFooter);
  const [medsocial] = useState(socialFooter);
  return (
    <>
      <footer className="bg-[#151515] pt-16 pb-8 h-auto">
        <div className="container font-Parastoo ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
            <div className=" mb-7">
              <Link to="/" className="flex items-center  mb-5">
                <img
                  src="./images/logo.png"
                  alt="logo"
                  className="size-20"
                  loading="lazy"
                />
                <h1 className="text-white text-3xl ">Kasuka</h1>
              </Link>
              <div className="text-white text-sm">
                <p className="text-sm/6">تهران خیابان آزادی</p>
                <p className="text-sm/6">تلفن: 01234567895</p>
                <p className="text-sm/6">ایمیل: info@example.com</p>
              </div>
              <div className="mt-4 flex items-center gap-1">
                {medsocial.map((media) => (
                  <FooterSocial key={media.id} {...media}></FooterSocial>
                ))}
              </div>
            </div>
            <div className="text-white h-[228px] mb-5 ">
              <h1 className="text-base mb-2">لینک های مفید</h1>
              {links.map((link) => (
                <Links {...link} key={link.id}></Links>
              ))}
            </div>
            <div className="text-white h-[228px] mb-6 ">
              <h1 className="text-base mb-2">خدمات ما </h1>
              {service.map((serv) => (
                <Services {...serv} key={serv.id}></Services>
              ))}
            </div>
            <form>
              <div className="text-white">
                <h1 className="text-base mb-2 ">خبرنامه ما</h1>
                <p className="text-sm mb-4">
                  با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما
                  نخواهد بود
                </p>
              </div>
              <div className="flex ">
                <div className="relative w-full ">
                  <input
                    type="search"
                    id="location-search"
                    className="block p-2.5 rounded-xl  w-full z-20 text-sm  bg-gray-50  border-s-gray-50 border-s-2 border border-gray-300    h-full focus:outline-0  text-black  "
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 rounded-l-xl h-full p-2.5 text-sm font-medium text-black bg-[#ffc451]  font-Parastoo  "
                  >
                    دنبال کردن
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}
