import { Link } from "react-router-dom";
import styled from "styled-components";

const Articles = (props) => {
  if (props.index == null) {
    return <LinkS to="/">Select sentence</LinkS>;
  } else
    return (
      <ArtDiv>
        <li>
          {props.index + 1}. {props.data[props.index]}
        </li>
      </ArtDiv>
    );
};

const LinkS = styled(Link)`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration-line: none;
  color: white;
  font-size: xx-large;
  font-weight: bold;
`;

const ArtDiv = styled.div`
  text-align: left;
  text-decoration-line: none;
  color: black;
  font-size: x-large;
  line-height: 250%;
  list-style-type: none;
  margin-left: 15%;
  margin-right: 15%;
  list-style-type: none;
  text-align: left;
  padding: 10px;
  background-color: rgba(245, 245, 245, 0.9);
  border-radius: 5px;
`;

export default Articles;
