import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Sub from "../../module/Submenu/submenu";

export default function Navigations() {
  return (
    <>
      <nav className=" text-white py-4 font-Parastoo text-base hidden md:block">
        <ul className="flex items-center gap-7 py-2 px-4 h-full ">
          <li className="text-white transition-colors duration-300">
            <a href="#home" className="text-[#ffc451]  ">
              خانه
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-[#ffc451] ">
              درباره ما
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-[#ffc451]">
              خدمات
            </a>
          </li>
          <li>
            <a href="#examplework" className="text-white hover:text-[#ffc451]">
              نمونه کارها
            </a>
          </li>
          <li>
            <a href="#team" className="text-white hover:text-[#ffc451]">
              تیم
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="flex items-center text-white hover:text-[#ffc451] "
            >
              لیست کشویی <MdOutlineKeyboardArrowDown />
            </a>
            <Sub></Sub>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-[#ffc451]">
              تماس با ما
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
