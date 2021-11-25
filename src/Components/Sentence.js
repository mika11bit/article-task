import SentenceItem from "./Items/SentenceItem";
import s from "../Styles/App.module.css";

const Sentence = (props) => {
  let cutText = (text) => {
    text = text.split(".", 1);
    return text + ".";
  };
  return (
    <div className={s.Articles}>
      {props.data.map((el, index) => {
        return (
          <SentenceItem
            key={index}
            data={cutText(el)}
            updateData={props.updateData}
            index={index}
          />
        );
      })}
      <button className={s.ReqButton} id="ReqButton" onClick={props.newRequest}>
        Request
      </button>
    </div>
  );
};

export default Sentence;
