import classes from "./Tours.module.css";
import data from "../data/db.json";

const Tours = () => {
  console.log(data);
  let travelDestinations = data.map((ele) => {
    return (
      <li className={classes.card}>
        <h1>{ele.name}</h1>
        <h3>{ele.price}</h3>
        <p>{ele.info}</p>
        <img src={ele.image} />
      </li>
    );
  });
  return <ul>{travelDestinations}</ul>;
};

export default Tours;
