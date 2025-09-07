import { RiCheckDoubleLine } from "react-icons/ri";

export default function Abouts({ id, subTitle }) {
  return (
    <>
      <div className="flex ">
        <div className="w-6 h-[30px] inline-block  ">
          <RiCheckDoubleLine className="w-6 h-6 text-[#ffc451]" />
        </div>
        <p className="text-base pb-2 pl-6 font-Parastoo indent-3 ">
          {" "}
          {subTitle}{" "}
        </p>
      </div>
    </>
  );
}
