import { Link } from "react-router-dom";
import styled from "styled-components";

const SentenceItem = (props) => {
  return (
    <ULs>
      <LinkS
        to="/Articles.js"
        onClick={() => {
          props.updateData(props.index);
        }}
      >
        <LIs>
          {props.index + 1}. {props.data}
        </LIs>
      </LinkS>
    </ULs>
  );
};

const ULs = styled.ul`
  margin-left: 15%;
  margin-right: 15%;
  text-decoration-line: none;
  &:hover {
    transform: scale(1.1);
  }
`;
const LinkS = styled(Link)`
  text-decoration-line: none;
  color: black
`;

const LIs = styled.li`
  list-style-type: none;
  text-align: left;
  padding: 10px;
  background-color: rgba(245, 245, 245, 0.9);
  border-radius: 5px;
  text-decoration-line: none;
`;

export default SentenceItem;
