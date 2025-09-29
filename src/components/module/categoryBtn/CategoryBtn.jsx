import { useState } from "react";

export default function CategoryBtn({ categories, filterWork }) {
  const [mainCategory, setMainCategory] = useState("همه");
  return (
    <>
      {categories.map((category, index) => (
        <button
          type="button"
          className={
            category === mainCategory
              ? "inline p-3 rounded-sm bg-[#ffc451] cursor-pointer"
              : "inline p-3 rounded-sm cursor-pointer "
          }
          key={index}
          onClick={() => {
            setMainCategory(category);
            filterWork(category);
          }}
        >
          {category}
        </button>
      ))}
    </>
  );
}
