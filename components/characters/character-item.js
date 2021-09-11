import classes from "./character-item.module.css";

import Button from "../ui/button";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function CharacterItem(props) {
  const { name, image, status, location, id, species } = props;

  const exploreLink = `/characters/${id}`;

  return (
    <li className={classes.item}>
      <img src={image} alt={name} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.section}>
          <h2>{name}</h2>
          <span
            className={`${classes.status} ${classes[status.toLowerCase()]}`}
          >
            <span className={classes.status__icon}></span>
            {status} - {species}
          </span>
        </div>
        <div className={classes.section}>
          <span className="text-gray">Last known location:</span>
          {location.name}
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>View</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
