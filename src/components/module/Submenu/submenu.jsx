import { RiArrowLeftSLine } from "react-icons/ri";
import Subnest from "../../module/Nest/Nestsub";

export default function Sub() {
  return (
    <>
      <ul className="bg-white py-2 absolute w-52 top-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all ">
        <li className=" hover:transation-color  text-black hover:bg-[#ffc451]">
          <a href="javascript:void(0)" className="py-3 px-4  block ">
            لیست کشویی 1
          </a>
        </li>
        <li className="sub2 relative group  hover:transation-color  text-black  hover:bg-[#ffc451]">
          <a
            href="jaascript:void(0)"
            className="flex items-center gap-4 py-3 px-4 "
          >
            لیست کشویی عمیق <RiArrowLeftSLine />
          </a>
          <Subnest></Subnest>
        </li>
        <li className=" hover:transation-color text-black  hover:bg-[#ffc451]">
          <a href="javascript:void(0)" className=" py-3 px-4  block ">
            لیست کشویی 2
          </a>
        </li>
        <li className=" hover:transation-color  text-black hover:bg-[#ffc451]">
          <a href="javascript:void(0)" className=" py-3 px-4  block ">
            لیست کشویی 3
          </a>
        </li>
        <li className=" hover:transation-color  text-black hover:bg-[#ffc451]">
          <a href="javascript:void(0)" className=" py-3 px-4  block ">
            لیست کشویی 4
          </a>
        </li>
      </ul>
    </>
  );
}
