import classes from "./all-character.module.css";

import CharacterItem from "./character-item";
import Image from "next/image";

export default function AllCharacters(props) {
  return (
    <section className={classes.list}>
      <h1>All Characters</h1>
      <ul>
        {props.characters.map((ch) => (
          <CharacterItem key={ch.id} {...ch} />
        ))}
      </ul>
      <style jsx>{`
          h1 {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
