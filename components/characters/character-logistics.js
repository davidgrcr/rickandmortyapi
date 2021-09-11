import classes from "./character-logistics.module.css";
import LogisticsItem from "./logistics-item";

import { useEffect, useState } from "react";
import { getEpisodeById } from "../../lib/api-util";

function CharacterLogistics(props) {
  const { name, image, location, episode = [] } = props;
  const [firstSeeIn, setFirstSeenIn] = useState("");

  useEffect(() => {
    if (episode.length) {
      getEpisodeById(episode[0]).then((data) => {
        setFirstSeenIn(data.name);
      });
    }
  }, [episode]);

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`${image}`} alt={name} width={400} height={400} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem title="Last known location:">
          {location?.name}
        </LogisticsItem>
        <LogisticsItem title="First seen in:"> {firstSeeIn}</LogisticsItem>
      </ul>
    </section>
  );
}

export default CharacterLogistics;
