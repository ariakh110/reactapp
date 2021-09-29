import React from "react";
import ReactDOM from "react-dom";
import TimeLine from "./timeline";
import TimeLineItem from "./TimeLineItem";
const App = () => {
  return (
    <>
      <TimeLine>
        <TimeLineItem time="9.30" act="eat" describe="sdfdsfs dafasdfds fadadsads"/>
        <TimeLineItem time="12.30" act="reading"describe="sdfdsfs dafasdfds fadadsads"/>
        <TimeLineItem time="12.30" act="reading"describe="sdfdsfs dafasdfds fadadsads"/>
        <TimeLineItem time="12.30" act="reading"describe="sdfdsfs dafasdfds fadadsads"/>
        <TimeLineItem time="12.30" act="reading"describe="sdfdsfs dafasdfds fadadsads"/>
        <TimeLineItem time="12.30" act="reading"describe="sdfdsfs dafasdfds fadadsads"/>
        <TimeLineItem time="12.30" act="reading"describe="sdfdsfs dafasdfds fadadsads"/>
      </TimeLine>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
