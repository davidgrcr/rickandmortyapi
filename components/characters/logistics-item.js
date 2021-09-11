import classes from "./logistics-item.module.css";

function LogisticsItem(props) {
  const { title = "" } = props;
  return (
    <li className={classes.item}>
      <span className={classes.icon}>{title}</span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
