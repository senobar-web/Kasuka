import { useState } from "react";
export default function Form() {
  const [sumbit, setSubmit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [allValid, setAllValid] = useState(false);

  const requestHandler = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (
      firstName.length !== 0 &&
      email.length !== 0 &&
      title.length !== 0 &&
      message.length !== 0
    ) {
      setAllValid(true);
      setTimeout(() => {
        setAllValid(false);
      }, 3000);
    }
  };
  
  return (
    <>
      <form
        autoComplete="off"
        className=" w-full font-Parastoo tex-sm "
        onSubmit={(e) => requestHandler(e)}
      >
        {sumbit && allValid && (
          <div className="bg-green-600 text-white p-3 mb-2 rounded-lg">
            .ثبت اطلاعات با موفقیت انجام شد
          </div>
        )}
        <div className="flex flex-col md:flex-row   gap-5  ">
          <input
            type="text"
            placeholder="نام"
            className="focus:outline-[#ffc451]  w-full  bg-white  h-[52px]  rounded  border border-gray-300 pb-2 px-3 "
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="email"
            placeholder="ایمیل"
            className="focus:outline-[#ffc451] w-full  bg-white  h-[52px]  rounded  border border-gray-300 pb-2 px-3 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {sumbit && firstName.length === 0 && (
          <span className="text-red-600 text-base ml-1">
            لطفا نام خود را پر کنید.
          </span>
        )}

        {sumbit && email.length === 0 && (
          <span className="text-red-600 text-base">
            لطفا آدرس ایمیل مورد نظر را پر کنید.
          </span>
        )}
        <input
          type="text"
          placeholder="عنوان"
          className="w-full focus:outline-[#ffc451] bg-white border border-gray-300 h-[52px]  py-1.5 px-3 rounded-md mt-3 focus:border-[#ffc451]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {sumbit && title.length === 0 && (
          <span className="text-red-600 text-base">
            لطفا فیلد عنوان مورد نظر را پر کنید.
          </span>
        )}
        <textarea
          name="message"
          id="message"
          className="border border-gray-300  focus:outline-[#ffc451] h-[127px] w-full py-1.5 px-3 rounded-md mt-3 focus:border-[#ffc451]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="پیام"
        ></textarea>
        {sumbit && message.length === 0 && (
          <span className="text-red-600 text-base">
            لطفا فیلد پیام مورد نظر را پر کنید.
          </span>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2.5 px-6 bg-[#ffc451] rounded-md text-base mt-3 font-Parastoo  "
          >
            ارسال پیام
          </button>
        </div>
      </form>
    </>
  );
}
