import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Links(props) {
  return (
    <>
      <ul className="py-2.5">
        <li className="flex items-center w-full  ">
          <MdOutlineKeyboardArrowLeft className="text-[#ffc451] size-5" />
          <a
            href="javascript:void(0)"
            className="text-sm  w-full hover:text-[#ffc451] transition-colors duration-300"
          >
            {props.subject}
          </a>
        </li>
      </ul>
    </>
  );
}
