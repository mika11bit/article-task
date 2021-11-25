import { Link } from "react-router-dom";
import s from "../../Styles/App.module.css";

const SentenceItem = (props) => {
  return (
    <ul className={s.Articles}>
      <Link
        to="/Articles.js"
        onClick={() => {
          props.updateData(props.index);
        }}
      >
        <li>
          {props.index + 1}. {props.data}
        </li>
      </Link>
    </ul>
  );
};

export default SentenceItem;
