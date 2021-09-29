import React from "react";
import ReactDOM from "react-dom";

const getBtnTxt = () => {
  return "click me";
};

const App = () => {
  return <button>{getBtnTxt()}</button>;
};
ReactDOM.render(<App />, document.getElementById("root"));
