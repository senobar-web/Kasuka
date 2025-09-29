import Navigations from "../../module/Navigation/Nav";
import MobileResponsive from "../mobile/Mobile";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="hidden md:flex bg-[rgba(0,0,0,0.8)] z-50 fixed top-0 left-0 right-0 w-full  items-center  justify-evenly">
        <div>
          <Link
            to="/"
            className="flex items-start justify-center text-white hover:text-white text-3xl"
          >
            <img
              src="./images/logo.png"
              alt="logo"
              className="size-10"
              loading="lazy"
            />
            Kasuka
          </Link>
        </div>
        <Navigations></Navigations>
        <div>
          <a
            href="javascript:void(0)"
            className=" text-sm font-Parastoo text-white block border-2 border-[#ffc451] rounded py-1.5 px-5 hover:bg-[#ffc451] hover:text-black"
          >
            شروع
          </a>
        </div>
      </header>
      <div>
        <MobileResponsive />
      </div>
    </>
  );
}
