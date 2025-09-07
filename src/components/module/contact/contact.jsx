
export default function Contact(props) {
  return (
    <>
      <div className="flex items-center mb-10">
        <div className="w-11 h-11 bg-[#ffc451] flex items-center justify-center rounded-md ml-4">
          {props.conIcon}
        </div>
        <div className="w-full font-Parastoo">
          <h1 className="text-xl text-[#151515] mb-1.5 ">{props.name}:</h1>
          <p className="text-sm text-[#484848]">{props.adress} </p>
        </div>
      </div>
    </>
  );
}
