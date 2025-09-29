export default function socialMedia(props) {
  return (
    <>
      <a
        href="javascript:void(0)"
        className=" px-1.5 group py-1.5 inline-block rounded-md bg-white/70 hover:bg-[#ffc451] transition ease-in-out duration-300 "
      >
        {" "}
        {props.logo}
      </a>
    </>
  );
}
