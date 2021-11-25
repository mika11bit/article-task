import s from "../Styles/App.module.css";
import { Link } from "react-router-dom";

const Articles = (props) => {
  if (props.index == null) {
    return (
      <div className={s.App}>
        <h1>
          Select sentence: 
          <Link to="/">  http://localhost:3000/</Link>
        </h1>
      </div>
    );
  } else
    return (
      <div>
        <div className={s.ArticlesFull}>
          <li>
            {props.index + 1}. {props.data[props.index]}
          </li>
        </div>
      </div>
    );
};

export default Articles;
