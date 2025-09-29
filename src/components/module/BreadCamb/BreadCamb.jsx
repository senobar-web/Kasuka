import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Breadcrumb({ links }) {
  const [completedSteps] = useState({});
  const [isActive] = useState(false);
  return (
    <>
      <nav
        className="flex bg-gray-200 py-5 px-5 mt-[72px]"
        aria-label="Breadcrumb"
      >
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-3 ">
            <h1 className="text-black ">جزییات نمونه کارها</h1>
            <ul className="flex">
              {links.map((link, index) => {
                const isLast = index === links.length - 1;
                const path = `/${links.slice(0, index + 1).join("/")}`;
                const isNextDisabled = !isLast && !completedSteps[links[index]];
                return (
                  <li key={path}>
                    {index > 0 && " / "}
                    {isLast ? (
                      <span
                        className={`text-black text-xl mr-2 ${
                          isActive ? "text-red" : ""
                        }}`}
                      >
                        {link.title}
                      </span>
                    ) : (
                      <NavLink
                        to={link.to}
                        className={`text-black text-xl hover:text-orange-400 mx-2 ${
                          isNextDisabled ? "disabled-link" : ""
                        }`}
                        disabled={isNextDisabled}
                      >
                        {link.title}
                      </NavLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
