export default function FooterSocial(props) {
  return (
    <>
      <a
        href="javascript:void(0)"
        className="px-1.5 group py-1.5 inline-block rounded-md bg-[#292929] hover:bg-[#ffc451] transition ease-in-out duration-300 "
      >
        {" "}
        {props.logo}
      </a>
    </>
  );
}
