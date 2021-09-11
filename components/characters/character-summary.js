import classes from "./character-summary.module.css";

function CharacterSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default CharacterSummary;
