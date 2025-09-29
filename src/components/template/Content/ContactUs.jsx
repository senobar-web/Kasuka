import { useState, useEffect } from "react";
import Title from "../../module/title/title";
import Contact from "../../module/contact/contact";
import Form from "../../module/form/Form";
import AOS from "aos";
import "aos/dist/aos.css";
import { titleHeader, contactAddress } from "../../../../Data";

export default function ContactUs() {
  const [contacts] = useState(contactAddress);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="contactUs py-14 " id="contactUs">
      <div className="container " data-aos="fade-up">
        {<Title {...titleHeader[1]}></Title>}
        <div className="flex flex-col md:flex-col lg:flex-row items-start  md:gap-x-5">
          <div className="w-[100%] md:w-[50%] h-[331px] flex flex-col ">
            {contacts.map((contact) => (
              <Contact {...contact} key={contact.id} />
            ))}
          </div>
          <div className="w-[100%] md:w-[100%]">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
