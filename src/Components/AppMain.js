import React from "react";
import { Routes, Route } from "react-router-dom";
import Sentence from "./Sentence";
import Articles from "./Articles";
import styled from "styled-components";

class AppMain extends React.Component {
  state = {
    index: null,
    data: null,
    api: "https://baconipsum.com/api/?type=meat-andfiller",
  };

  updateData = (value) => {
    this.setState({ index: value });
  };
  componentDidMount() {
    fetch(this.state.api)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ data: result });
      });
  }
  newRequest = () => {
    fetch(this.state.api)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ data: [...this.state.data, ...result] });
      });
  };

  render() {
    if (this.state.data == null) {
      return (
        <LoadDiv>
          <h1>Loading API...</h1>
        </LoadDiv>
      );
    } else
      return (
        <MainDiv>
          <Routes>
            <Route
              path="/"
              element={
                <Sentence
                  data={this.state.data}
                  updateData={this.updateData}
                  newRequest={this.newRequest}
                />
              }
            />
            <Route
              path="Articles.js"
              element={
                <Articles
                  LoadS={this.LoadS}
                  data={this.state.data}
                  index={this.state.index}
                />
              }
            />
          </Routes>
        </MainDiv>
      );
  }
}

const MainDiv = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: large;
  color: white;
`;
const LoadDiv = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default AppMain;
