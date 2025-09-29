import { Link } from "react-router-dom";
export default function ExampleWorks({ img, name, category }) {
  return (
    <>
      <div className="container p-4">
        <div className="relative group overflow-hidden">
          <img
            src={img}
            alt="images"
            className="w-full h-auto rounded-lg transition-transform transform group-hover:scale-105 cursor-pointer"
          />
          <Link
            to="/detail"
            className="absolute cursor-pointer inset-0 bg-black/35 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="absolute bottom-7 right-6 text-white z-30 ">
              <p> {name}</p>
              <p> {category}</p>
              <div className="flex gap-2.5 ">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 hover:text-[#ffc451] cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </a>
                <Link to="/detail">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 hover:text-[#ffc451] cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
