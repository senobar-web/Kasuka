export default function Boxheader({ icon, title }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[100%] md:w-[216px]   gap-4 border border-[rgba(255,255,255,0.3)] bg-inherit hover:border-[#ffc451] py-7 px-7 ">
        <span className="text-[#ffc451] text-center"> {icon}</span>
        <a
          href="javascript:void(0)"
          className="text-white hover:text-[#ffc451] text-sm font-Parastoo"
        >
          {title}
        </a>
      </div>
    </>
  );
}
