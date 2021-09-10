import classes from "./all-character.module.css";

import Image from "next/image";

export default function AllCharacters(props) {
  return (
    <section className={classes.list}>
      <h1>All Characters</h1>
      <ul>
        {props.characters.map((ch) => (
          <li key={ch.id}>
            <span>{ch.name}</span>
            <img src={ch.image} alt={ch.name} width={150} />
          </li>
        ))}
      </ul>
    </section>
  );
}
