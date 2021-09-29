import React from "react";
import Timeline from "@material-ui/lab/Timeline";
export default function TimeLine(props) {
  console.log(props);
  return (
    <Timeline align="alternate">
      {props.children}
    </Timeline>
  );
}
