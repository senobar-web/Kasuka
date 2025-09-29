import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Feature from "../../module/features/feature";
import { FeatureItem } from "../../../../Data";

export default function Features() {
  const [featurs] = useState(FeatureItem);
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="feature pt-5 pb-14 ">
      <div className="container ">
        <div className=" flex flex-col lg:flex-row items-center md:items-start gap-y-5 md:gap-3">
          <div data-aos="fade-right" data-aos-delay="150">
            <img src="./images/features.jpg" alt="feature" className="w-full shrink-0"  loading="lazy"/>
          </div>
          <div
            className="flex flex-col md:h-full "
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {featurs.map((feature) => (
              <Feature {...feature} key={feature.id}></Feature>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
