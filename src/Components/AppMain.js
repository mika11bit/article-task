import React from "react";
import { Routes, Route } from "react-router-dom";
import s from "./../Styles/App.module.css";
import Sentence from "./Sentence";
import Articles from "./Articles";

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
        <div className={s.App}>
          <h1>Loading API...</h1>
        </div>
      );
    } else
      return (
        <div className={s.App}>
          <div>
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
                  <Articles data={this.state.data} index={this.state.index} />
                }
              />
            </Routes>
          </div>
        </div>
      );
  }
}

export default AppMain;
