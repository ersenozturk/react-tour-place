import "./card.scss";
import { data } from "../../helper/data";
import SingleCard from "./SingleCard";

const Card = () => {
//   console.log(data);

  return (
    <div className="card-container">
      {data.map((item,index) => <SingleCard  {...item} key={index} />)}
    </div>
  );
};

export default Card;
