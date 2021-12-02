import SentenceItem from "./Items/SentenceItem";
import styled from "styled-components";

const Sentence = (props) => {
  let cutText = (text) => {
    text = text.split(".", 1);
    return text + ".";
  };
  return (
    <ArtDiv>
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
      <ReqButton id="ReqButton" onClick={props.newRequest}>
        Request
      </ReqButton>
    </ArtDiv>
  );
};

const ArtDiv = styled.div`
  margin-left: 20%;
  margin-right: 20%;
`;
const ReqButton = styled.button`
  margin: 0 auto;
  display: block;
  background-color: #555555; /* Green */
  border: none;
  color: blanchedalmond;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 20px;
  padding: 13px 50px;
  border-radius: 10px;
  opacity: 0.5;
  margin-bottom: 100px;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  &:active {
    opacity: 0.5;
  }
`;

export default Sentence;
