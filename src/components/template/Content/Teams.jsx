import { useState, useEffect } from "react";
import Team from "../../module/team/team";
import Title from "../../module/title/title";
import AOS from "aos";
import "aos/dist/aos.css";
import { titleHeader, TeamsItem } from "../../../../Data";

export default function Teams() {
  const [teams, setTeams] = useState(TeamsItem);
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="team mt-14" id="team">
      <div className="container" data-aos="fade-up">
        <Title {...titleHeader[0]} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {teams.map((team) => (
            <Team {...team} key={team.id}></Team>
          ))}
        </div>
      </div>
    </section>
  );
}
