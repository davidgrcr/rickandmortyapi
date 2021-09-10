import Image from "next/image";

import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";

export default function CharacterItem() {
  const { name, image, status, location, id } = props;

  const exploreLink = `/character/${id}`;

  return (
    <li className={classes.item}>
      <img src={image} alt={name} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{name}</h2>
          <div className={classes.address}>
            <address>{status}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}></span>
          </Button>
        </div>
      </div>
    </li>
  );
}
