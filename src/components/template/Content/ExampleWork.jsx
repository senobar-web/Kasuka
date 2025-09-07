import { titleHeader, exWork } from "../../../../Data";
import { useState } from "react";
import ExampleWorks from "../../module/exapleOfWork/ExampleWorks";
import Title from "../../module/title/title";
import CategoryBtn from "../../module/categoryBtn/CategoryBtn";

const allCategories = ["همه", ...new Set(exWork.map((work) => work.category))];

export default function ExampleWork() {
  const [categories, setCategories] = useState(allCategories);
  const [portfolio, setPortfolio] = useState(exWork);
  const filterWork = (category) => {
    if (category === "همه") {
      setPortfolio(exWork);
      return;
    }
    let filteredCategory = exWork.filter((work) => work.category === category);
    setPortfolio(filteredCategory);
  };

  return (
    <section className="pt-5 pb-14" id="examplework">
      <div className="container" data-aos="fade-up">
        <Title {...titleHeader[2]} />
        <div
          className="flex justify-center mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <CategoryBtn categories={categories} filterWork={filterWork} />
        </div>
        <div
          className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {portfolio.map((port) => (
            <ExampleWorks exWork={portfolio} {...port} key={port.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
