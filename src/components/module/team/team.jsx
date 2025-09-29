import { useState } from "react";
import Socialmedia from "../../module/social/socialMedia";
import { socialIcon } from "../../../../Data";

export default function Team(props) {
  const [socials] = useState(socialIcon);
  return (
    <>
      <div className="rounded-lg shadow-xl bg-white overflow-hidden flex flex-col relative group  ">
        <div className="w-full">
          <img
            src={props.img}
            alt="team"
            loading="lazy"
            className=" h-full w-full "
          />
        </div>
        <div className="h-[116px] w-full px-4 py-6">
          <h4 className="mb-1 text-black font-Parastoo"> {props.firstName}</h4>
          <p className="text-gray-400 font-Parastoo"> {props.lastName}</p>
        </div>
        <div className="w-full absolute z-40 bottom-32 left-0 right-0  flex items-center gap-2 justify-center opacity-0 group-hover:opacity-100">
          {socials.map((social) => (
            <Socialmedia {...social} key={social.id}></Socialmedia>
          ))}
        </div>
      </div>
    </>
  );
}
