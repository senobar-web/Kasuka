export default function Title({ title, text }) {
  return (
    <>
      <div className="mb-10 ">
        <div className="mb-[5px]">
          <p className="text-sm text-gray-400 tracking-tighter font-Parastoo after:absolute after:inline-block after:w-[120px] after:h-[1px] after:bg-[#ffde9e] after:my-2 after:mx-2.5">
            {title}
          </p>
        </div>
        <div>
          <p className="text-xl md:text-2xl lg:text-4xl tracking-tighter font-Parastoo ">{text}</p>
        </div>
      </div>
    </>
  );
}
