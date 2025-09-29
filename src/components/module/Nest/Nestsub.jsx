export default function Subnest() {
  return (
    <>
      <ul className="pick_up bg-white py-2 absolute top-4 right-52 w-52 opacity-0 invisible  transation-all ">
        <li className="hover:bg-[#ffc451] text-black  transation-color">
          <a href="#" className=" py-3 px-4 block ">
            لیست کشویی 1
          </a>
        </li>
        <li className="hover:bg-[#ffc451] text-black  transation-color">
          <a href="#" className="flex items-center  gap-4 py-3 px-4 ">
            لیست کشویی 2{" "}
          </a>
        </li>
        <li className="hover:bg-[#ffc451] text-black  transation-color">
          <a href="#" className=" py-3  px-4 block ">
            لیست کشویی 3
          </a>
        </li>
        <li className="hover:bg-[#ffc451] text-black  transation-color">
          <a href="#" className=" py-3  px-4 block ">
            لیست کشویی 4
          </a>
        </li>
        <li className="hover:bg-[#ffc451] text-black  transation-color">
          <a href="#" className=" py-3  px-4 block ">
            لیست کشویی 5
          </a>
        </li>
      </ul>
    </>
  );
}
