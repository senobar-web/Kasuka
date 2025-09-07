import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisiblity = () => {
    if (window.pageYOffset > 25) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisiblity);
    return () => {
      window.removeEventListener("scroll", toggleVisiblity);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="px-2.5 py-2.5 bg-[#ffd584] fixed bottom-6 right-4 z-50 rounded-md flex justify-center items-center group hover:bg-[#151515] "
          onClick={() => scrollToTop()}
        >
          <FaArrowUp className="group-hover:text-[#ffd584] size-4" />
        </button>
      )}
    </div>
  );
}
