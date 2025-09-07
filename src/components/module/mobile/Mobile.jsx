import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function MobileResponsive() {
  const [isOpen, setIsOpen] = useState(false);
  // const [position,setPosition]=useState('')
  const showNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" md:hidden bg-[rgb(0,0,0,0.8)] px-4 z-50 fixed top-0 left-0 right-0 flex items-center w-full justify-around ">
        <nav className="nav-icon flex md:hidden text-white">
          <button className="cursor-pointer w-6 h-6 " onClick={showNav}>
            <RxHamburgerMenu className="w-6 h-6 text-white " />
          </button>
          {isOpen && (
            <>
              <div className="overlay" onClick={() => setIsOpen(!isOpen)}></div>
              <div
                className={`nav fixed bottom-0 top-0 right-0 pt-3 px-4 bg-white w-64 min-h-screen z-50 overflow-auto transition-all`}
              >
                <div className="nav-close mb-2 absolute left-2 top-2 cursor-pointer">
                  <button
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoMdClose className="w-5 h-5 text-red-500" />
                  </button>
                </div>
                <div className="text-black  mt-5  ">
                  <a
                    href="#home"
                    className="hover:bg-[#ffc451]  pr-2.5  block   py-3  "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    خانه
                  </a>
                  <a
                    href="#about"
                    className="hover:bg-[#ffc451]  pr-2.5  block   py-3 "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    درباره ما
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="hover:bg-[#ffc451]  pr-2.5  block   py-3 "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    خدمات
                  </a>
                  <a
                    href="#examplework"
                    className="hover:bg-[#ffc451]  pr-2.5  block   py-3 "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    نمونه کار ها
                  </a>
                  <a
                    href="#team"
                    className="hover:bg-[#ffc451]  pr-2.5  block   py-3 "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    تیم
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="hover:bg-[#ffc451]  pr-2.5  block   py-3 "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    لیست کشویی
                  </a>
                  <a
                    href="#contactUs"
                    className="hover:bg-[#ffc451]  pr-2.5  block  py-3 "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    تماس با ما
                  </a>
                </div>
              </div>
            </>
          )}
        </nav>
        <div>
          <a
            href="#"
            className="flex items-start justify-center text-white hover:text-white text-3xl"
          >
            <img src="./images/logo.png" alt="logo" className="size-10" loading="lazy" />{" "}
            Kasuka
          </a>
        </div>
        <div>
          <a
            href="javascript:void(0)"
            className=" text-sm font-Parastoo text-white block border-2 border-[#ffc451] rounded py-1.5 px-5 hover:bg-[#ffc451] hover:text-black"
          >
            {" "}
            شروع
          </a>
        </div>
      </div>
    </>
  );
}
